import React, { useEffect, useState, useImperativeHandle, useMemo, memo } from "react";
import { useCallback } from "react";
//每次渲染其实就是重新执行函数HooksRef,所以在函数外相当于初始值
//useImperativeHandle,用来获取函数组件内部的状态或者方法,

//抛出问题--- 我们知道每次调用set函数,都会重新执行一遍函数组件达到重新渲染页面的操作,我有多个set 每一个调用都会触发视图的更新,如果,我单拎出2个state做运算得出值
//useMomo ,第一次渲染组件的时候,callback会执行,后期只有依赖的状态值发生改变,callback才会再执行
//每一次会吧callback执行的返回结果赋值给ratio
//useMemo具备缓存的效果,在依赖的状态值没发生改变,callback没有触发执行的时候,ratio获取的是上一次计算出来的结果
//优化Hook函数,如果组件中,有小号性能.时间的计算操作,则尽可能用useMemo缓存起来,设置对应的依赖,类似于vue,computed计算属性
//这样可以保证,当非依赖的状态发生改变时,不会重新处理没必要的操作(如判断语句),提高组件的更新速度

//useCallback((),[]) 调用函数组件,第一次创建一个函数callback,赋值给 handle
//就是为了保证,函数组件的每一次更新,不再把内部的小函数再重新的创建,每次组件的再渲染,其实都是重新执行了一次函数运行,所以就会存在重新创建等问题
//那是不是每个函数都要用useCallback包起来???
//useCallback 并不能乱用, 他的每一次创建虽然减少了堆内存的开辟
//它本身也有自己的处理逻辑和缓存机制,也耗时间
//--运用场景
//父组件嵌套子组件,父组件要把一个内部函数,基于属性传递给子组件,此时传递的这个方法,我们基于useCallback处理会更好!

//子组件

let prve
const HooksRef = function HooksRef (props) {//这里需要注意,我们直接给函数组件ref是不行的,外层需要嵌套React.forwardRef
    console.log('子组件重复渲染')
    let [text, setText] = useState('我是子组件的值'),
        [num1, setNum1] = useState(0),
        [num2, setNum2] = useState(0),
        [num3, setNum3] = useState(0)
    // useImperativeHandle(ref, () => {
    //     //在这里返回的内容,都可以被父组件的ref对象获取到
    //     return {
    //         text,
    //         setText
    //     }
    // })

    // if (total > 0) {
    //     console.log('调用')
    //     ratio = (num1 / total * 100).toFixed(2) + '%';
    //     //这个判断无论依赖是否 更改, 调用num3 视图渲染,函数重新调用,这个判断还是会执行
    //     //函数内不建议些条件语句,会多次重复调用
    // }
    let ratio = useMemo(() => {//相似与VUE中的计算属性
        let total = num1 + num2
        console.log('调用')
        if (total > 0) return (num1 / total * 100).toFixed(2) + '%';
        return '初始值'
    }, [num1, num2])

    // const handle = function (params) { } //false 每次渲染都会重新的创建一个handle方法
    // const handle = useCallback(() => {//类似于memo有缓存作用,可以始终获取第一次创建 函数的对了内存地址//true 

    // }, [])

    if (!prve) { //每次组件的渲染都会调用这个判断,但是 prve 是不会重复创建的
        prve = props.handle;//只会在第一次赋值第一次的handle
    } else {//后面每次重复的渲染 handle 并不会被重新创建,指向永远是第一次创建的函数堆内存地址
        console.log(props.handle === prve)
    }

    // useEffect(() => {
    //     // console.log('渲染3', num)
    //     // return () => {
    //     if (num < 3) {
    //         setNum(num + 1)
    //         // console.log("渲染4", num)
    //         // }
    //     }

    // }, [num])

    return (<div>
        {/* <div>父组件值{props.val}</div> */}
        <div> {ratio}------  </div>

        <div>{num1}</div>
        <button onClick={() => setNum1(num1 + 1)}>按钮1</button>
        <div>{num2}</div>
        <button onClick={() => setNum2(num2 + 1)}>按钮2</button>
        <div>{num3}</div>
        <button onClick={() => setNum3(num3 + 1)}>按钮3</button>
    </div>)
}

export default HooksRef