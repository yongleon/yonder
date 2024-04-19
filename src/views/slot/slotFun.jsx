//这是一个插槽调用的弹框封装组件
//函数组件
//函数组件是静态组件,
//第一次渲染执行函数得到返回值,我在函数组件中可以变更num1但是不会重新渲染,num1的变更不会再页面上被展示
//我们可以通过调用父组件,重新渲染函数组件,参数和方法要写在父组件上,这样最新的num会被重新传递给子组件,渲染
//函数组件--静态组件


import React from 'react';
import PropTypes from "prop-types";
import './slotClass.less';


const SlotFun = function slotFun (props) {
    console.log('渲染')
    // console.log(props) 普通函数,props传递给函数组件执行,得到一个新的私有的上限文,上下文之间没有影响
    let { title, content, num, children } = props
    // 在函数中执行方法没办法重新渲染页面,num1会被重置
    let state = {
        num1: 1
    }
    return (
        <div className='slotDiv'>
            <div className='dialog'>
                <span className='title'>{title}</span>
                <span className='main'>{content}<div>父传子num:{num}</div><div>默认num1:{state.num1}</div></span>
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
                        <button onClick={() => {
                            state.num1++
                            console.log(state.num1)
                        }}>默认确定</button>
                    </span>
                    <span>
                        <button onClick={() => {
                            state.num1--
                            console.log(state.num1)
                        }}>默认关闭</button>
                    </span>
                </span>
                }
            </div>
        </div>
    );

}

//属性规则校验
SlotFun.defalutProps = {
    title: '温馨提示'
}
SlotFun.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string.isRequired
}

export default SlotFun

