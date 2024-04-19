import React, { useState } from "react";

// console.log(React)
//可以看到hooks函数

//注意: 函数组件或[hooks组件]不是类组件,所以没有实例的概念,调用组件不再是创建类的实例,而是把函数执行,产生一个私有的上下文而已,在所以,在函数组件中不涉及this的处理!

//1. useState :React Hook函数之一,目的是在函数组件中使用状态,并且后期基于状态的修改,可以让组件更新
//   异步修改状态&视图更新
//   let [num, setNum] =useState(initialValue);
//    执行useState ,传递 initialValue 是初始的状态值
//    执行这个方法,返回结果是一个数组:[状态值num,修改这个状态的方法setNum]

/*
 函数组件的每一次更新渲染,都是函数重新执行,得到一个全新的结果,
 + 函数内部的代码也需要重新执行一遍
 + 涉及的函数需要重新构建{这些函数的作用域(函数执行的上级上下文),是每一次执行HooksDemo1产生的闭包}
 每一次执行 HooksDemo1函数,也会把useState 函数 重新执行,但是:
 执行useState ,只有第一次, 设置的初始值会生效,其余以后再执行,获取的状态都是最新状态值[而不是初始值]
 返回的修改状态的方法,每一次都是返回一个新的
*/

//2.useEffect:React Hook函数之一 ,目的是在函数组件中使用生命周期函数
// 必须在函数的最外层,不能把它嵌入到条件判断,循环等语句中
//在return 视图渲染之后调用触发callback
//useLayoutEffect,会早与useEffect执行,    useEffect 的任务队列, 看代码可以知道他是按顺序执行,我们进入函数一直到真实Dom的渲染,结束,如果调用了useEffect导致视图重新的渲染,会在第一次真实DOM
// 渲染完毕之后,再触发组件更新,重新渲染真实dom,所以如果频繁切换就会有出现,样式内容闪烁的情况!,
//对于useLayoutEffect 来说,它会在第一次函数调用,真实DOM还未渲染,直接在useEffect 的任务队列callback中修改了状态,视图立即更新,创建出新的虚拟DOM,然后和上一次的虚拟DOM比较,合并在一起渲染为真实DOM
//这样 ,真实Dom只渲染一次,不会出现样式内容闪烁的情况!

/*
视图更新的步骤:
第一步:基于babel把JSX编译为creatElement格式
第二步:运行creatElement,创建虚拟DOM
第三步:基于root.render方法将虚拟DOM编译为真实DOM,[diff算法]
       useLayoutEffect函数会阻塞第四步操作,先去执行Effect链表中的方法[同步操作]
       useEffect第四步操作和Effect链表中的方法执行,是同事进行的[异步操作]
第四步:浏览器渲染和绘制真实DOM

*/

//

const HooksDemo1 = function (props) {
    // console.log(props)
    const { title, children, content, num, x, y } = props

    let [num1, setNum1] = useState(x);
    let [num2, setNum2] = useState(y);
    // // 惰性处理 useState(()=>{
    // // return num
    // // })


    // useEffect(() => {
    //     //等价于  componentDidMount 和 DidUpdate 的组合体
    //     console.log('渲染2')
    // })
    // useEffect(() => {
    //     console.log('渲染3')
    // }, [])// 加一个[]之后只有第一次渲染完毕后,才会执行callback,每一次视图更新,calback 不再执行等价于componentDidMount
    // useEffect(() => {
    //     console.log('渲染4',)
    // }, [num1])//[依赖的状态(可以有多个)],类似于监听,只有当,监听的值发生更新后,才会触发
    // useEffect(() => {//useEffect 如果要设置返回值,则必须是一个函数(它代表着组件销毁时去触发)
    //     return () => {
    //         //返回的小函数,会在组件释放的时候执行
    //         //如果组件更新,会把上一次函数执行,返回的小函数执行[理解为上一次渲染的组件释放了]
    //         console.log('渲染5')
    //     }
    // })


    const handle = (val) => {
        //     for (let i = 0; i < 10; i++) {
        //         setNum1(num1 + 1)
        //这里的参数一定是上级上下文中的num1
        //每次调用handle 方法拿到的num1都是同一个啊 那按照这个逻辑,点击多次,只有一次数据更新
        //所以在hook函数中有一个机制, 任务队列
        //         setNum2(num2 + 1)

        //         // setNum(prev => {
        //         //     return prev + 1
        //         // })
    }
    // }

    return <div className='slotDiv'>
        <div className='dialog'>
            <span className='title'>{title}</span>
            <span className='main'>{content}<div>父传子num:{num}</div><div>默认num1:{num1 + num2}</div></span>
            {children && children.length > 0 ? <span className='span3'>

                <span>
                    {children[0]}
                </span>
                <span>
                    {children[1]}
                </span>
                <span>
                    {children[2]}
                </span>
            </span> : <span className='span3'>

                <span>
                    <button onClick={handle.bind(null, 1)}>默认+</button>
                </span>
                <span>
                    <button onClick={() => {
                        num1--
                        console.log(num1)
                    }}>默认关闭</button>
                </span>
            </span>
            }
        </div>
    </div>
}

export default HooksDemo1