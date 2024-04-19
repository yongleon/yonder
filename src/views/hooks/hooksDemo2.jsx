import React, { useRef, useState, useImperativeHandle, useEffect, useCallback } from "react";
import HooksRef from "./component/hooksRef1";
// 3.useRef ,获取子组件的方法替代了class中的Ref方法
//我们之前通过ref绑定类组件可以直接获取到class组件实例,拿到他的方法状态调用,函数组件是没有办法直接赋予ref的,配合React.forwardRef方法
//基于forwardRef实现ref转发,目的:获取子组件内部的某个元素
//React.memo...这样会避免重复渲染子组件


//父组件
const HooksDemo2 = () => {
    const [val, setVal] = useState(0)
    // let x = useRef(null);//如果不填入null则缺省值设置为undefined, 避免使用undefined，因为undefined不能序列化([序列化,是将对象的状态信息转换为可以存储或传输的形式的过程]
    const handle = () => {
        console.log('父组件方法handle' + { val })//我们发现父组件set重新渲染,子组件也会重新渲染,但是并没有给子组件传递关联
    }
    const handle1 = () => {
        setVal(val + 1)//每次调用HooksDemo2会重新执行
        console.log('父组件方法handle1')//我们发现父组件set重新渲染,子组件也会重新渲染,但是并没有给子组件传递关联
    }

    // useEffect(() => {
    //     console.log(x.current)//可以获取到子组件的状态和方法
    // })



    return (<div>
        这里是HooksDemo2---{val}
        <button onClick={() => handle1()}>父组件按钮</button>
        <HooksRef handle={handle} />

    </div>)
}


export default HooksDemo2