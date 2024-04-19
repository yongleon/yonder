//这是一个插槽调用的弹框封装组件
//类组件 来构建 动态组件,第一次渲染完之后,可以通过组件内部某些操作,还能让组件再次更新
import React, { Component } from 'react';//这里react写不写都可以,并不是对react做解构赋值,{}中的内容跟react无关.而是基于ES6Module模块规范导入,把function Component(){} 一个个导出的内容,做节后复制!
//Component
//PureComponent 纯净的 会默认给类组件加一个周期函数  shouldComponentUpdate,对新老属性做一个浅比较,如果发现没有改变,则返回false
import './slotClass.less';
import PropTypes from "prop-types";


class slotClass extends Component {
    // 属性规则校验
    static defaultProps = {
        num: 0
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
        num: PropTypes.number,
    }
    constructor(props) { //需要接受传递进来的实参信息,才需要设置constructor
        // console.log(props)
        super(props);//只要自己设置了constructor,则内部第一句话一定要执行super()//等价于React.Component.call(this)
        //会把传递进来的属性挂载到this实例上

        props.onRef(this);//父组件传来该方法 则调用方法将子组件this指针传过去

        this.state = {
            num1: 0,
            x: 1,
            y: 2,
            z: 3,
        };
        console.log('constructor挂载')
    }

    // state = {//constructor即便不写,在constructor处理完毕后,react内独也会把传递的props挂载到实例上,所以在其他函数中只要保证this是实例,就可以基于this.props获取传递的属性
    //     num1: 0
    // }
    static average () {
        //这里是一个私有方法
    }
    UNSAFE_componentWillMount () {
        console.log('componentWillmount', '第一次渲染之前')
    }
    componentDidMount () {
        console.log('componentDidMount', '第一次渲染完毕')

    }

    shouldComponentUpdate (nextProps, nextState) {
        // nextState:存储要修改的最新状态
        // this.state:存储的还是修改前的状态,此时状态还没改变
        console.log("nextState:", nextState)
        console.log("nextState:", this.state)
        //有点类似于监听watch 变化前后的new old 值

        return true
        //必须返回一个boolean值true 允许更新,会继续执行下一个操作,返回false 不允许更新return 中断操作
        // 对state进行操作才会触发
    }
    UNSAFE_componentWillUpdate () { //UNSAFE取消警告
        //2.周期函数,更新之前
        //不安全,在这个阶段,状态还没有被修改
        console.log('UNSAFE_componentWillUpdate', this)
        //3.修改状态/属性值,让this.state.xxx改为最新值
        //4.接下来触发render周期函数:组件更新
        //按照最新的状态/属性,把返回的jsx 编译为virtualDOM
        //和第一次渲染出来的VirtualDOM 进行对比 diff
        //差异部分进行渲染
        // 5.触发componentDidUpdate:周期函数,组件更新完毕
    }
    componentWillUnmount () {
        console.log('组件销毁');
    }
    // handle = () => {
    onOff = false
    handle = () => {
        console.log(this.onOff)
        //点击调用的时候生成一个定时器
        if (!this.onOff) {
            this.onOff = true
            setTimeout(() => {
                console.log('3S后执行的操作')
                this.onOff = false
            }, 3000);
        } else if (this.onOff) {
            clearTimeout()
        }


    }


    //必须给当前类设置一个render的单法[放在其原型上],在render方法中返回需要渲染的视图
    render () {
        console.log('render渲染')
        const { title, content, num, children } = this.props
        // console.log(children && children > 0)
        const { num1, x, y, z } = this.state
        return (
            <div className='slotDiv'>
                <div className='dialog'>
                    <span className='span1'>{title}</span>
                    <span className='span2'>{content}<div>父传子num:{num}</div><div>默认num1:{num1}</div><div>x:{x},y:{y},z:{z}</div></span>
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
                                this.setState({
                                    num1: num1 + 1
                                })
                                console.log(num1, x, y, z)
                                this.setState({
                                    x: x + 1
                                })
                                console.log(num1, x, y, z)
                                this.setState({
                                    y: y + 1
                                })
                                console.log(num1, x, y, z)
                                this.setState({
                                    z: z + 1
                                })
                                console.log(num1, x, y, z)
                                //我在这里多次调用了setState,但并不会渲染四次,属于"异步操作",类似于事件循环机制,实现批量处理,好处减少视图的更新次数
                            }}>默认加1</button>
                        </span>
                        <span>
                            <button onClick={this.handle}>默认减2</button>
                        </span>
                    </span>}
                </div>
            </div >
        );
    }
}
// const p = new slotClass(10)  //new的时候 执行的构造函数 这里的10就是props
// console.dir(p)
//构造函数基于new执行,也就是创建类的一个实例,每个实例之间是相互独立的,所以可以同时被调用多次,相互之间没有影响

//类组件中有个状态,可以触发视图的更新state

export default slotClass
