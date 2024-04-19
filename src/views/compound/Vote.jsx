import React, { useEffect, useRef, useState, useCallback } from "react";
import VoteFooter from './VoteFooter'//Hooks组件
import VoteMain from './VoteMain'//Hooks组件
import useParTialState from "./useParTialState";//自定义hook方法



import ThemeContext from "./ThemeContext";  //上下文组件
import store from "../../store";//redux

/*
解题思路1
父组件写参数与修改参数的方法,然后传递给子组件,子组件调用
*/


const Vote = function Vote () {
    const [total, setTotal] = useState(0)
    const [state, setPartial] = useParTialState({
        supNum: 0,
        oppNum: 0,
    })

    const changeHandle = useCallback((type) => {
        if (type === 'sup') {
            setPartial({ supNum: state.supNum + 1 })
            return
        }
        setPartial({ oppNum: state.oppNum + 1 })
    }, [state])
    //useCallback 不能乱用, 不设置任何依赖[],则函数永远是在第一次组件渲染,产生的闭包中创建的,函数中用到的信息,永远是第一次闭包中的信息,supNum 值只能第一次+1,一直拿到第一层闭包中的初始值,
    //加了依赖,依赖变更拿到最新的,依旧会浪费性能,没有意义
    useEffect(() => {
        setTotal(state.supNum + state.oppNum)
    }, [state])
    const voteData = {
        supNum: state.supNum,
        oppNum: state.oppNum,
        changeHandle: changeHandle,
        // total: total,
    }


    return <div className="voteBox">
        <div className="voteMainCol">
            <div className="voteMainRow">
                <span>总数</span>
                <span>{total}</span>
            </div>
        </div>
        <VoteMain {...voteData} />
        <VoteFooter {...voteData} />
    </div>

}


/*
解题思路2
子组件写各模块的参数方法,父组件通过ref获取子组件实例,或者基于useImperativeHandle暴露的数据和方法
//不成立,子组件的改变并不能使得父组件发生重新渲染
*/



// const Vote2 = function Vote2 () {
//     const x = useRef(null)
//     const [state, setPartial] = useParTialState({
//         supNum: 0,
//         oppNum: 0,
//     })
//     const { supNum, oppNum } = x.current || {}
//     useEffect(() => {
//         return () => setPartial({
//             supNum: supNum,
//             oppNum: oppNum,
//         })
//     }, [supNum, oppNum])


//     console.log(supNum, oppNum);

//     const voteData = {
//         oppNum: state.oppNum,
//         supNum: state.supNum,
//     }

//     return <div className="voteBox">
//         <div className="voteMainCol">
//             <div className="voteMainRow">
//                 <span>总数</span>
//                 <span>{state.oppNum + state.supNum}</span>
//             </div>
//         </div>
//         <VoteMain {...voteData} />
//         <VoteFooter ref={x} />
//     </div>

// }
// export default Vote2






//上下文组件

const Vote3 = function Vote3 () {
    const [total, setTotal] = useState(0)
    const [state, setPartial] = useParTialState({
        supNum: 0,
        oppNum: 0,
    })
    const changeHandle = (type) => {
        if (type === 'sup') {
            setPartial({ supNum: state.supNum + 1 })
            return
        }
        setPartial({ oppNum: state.oppNum + 1 })
    }
    useEffect(() => {
        setTotal(state.supNum + state.oppNum)
    }, [state.supNum, state.oppNum])

    const voteData = {
        supNum: state.supNum,
        oppNum: state.oppNum,
        changeHandle: changeHandle,
    }


    return <ThemeContext.Provider
        value={{
            ...voteData
        }}
    >
        <div className="voteBox">
            <div className="voteMainCol">
                <div className="voteMainRow">
                    <span>总数</span>
                    <span>{total}</span>
                </div>
            </div>
            <VoteMain />
            <VoteFooter />
        </div>
    </ThemeContext.Provider>


}


//redux 公共状态管理方案
//拓展 dva mobx

const Vote4 = function Vote4 () {
    console.log(store.getState())//包含了redux中的一些方法,我们可以通过上下文组件的方式,将stroe 存储在Themecontext中
    //涉及到一个全局更新渲染的情况,按钮的方法我们写在了redux中,当state值变化时,我们需药通知父组件渲染获取最新的store的状态
    let { supNum, oppNum } = store.getState().vote
    // 写一个更新state的方法传给store,主要是为了通知父页面更新
    let [, forceUpdate] = useState(0)
    useEffect(() => {
        store.subscribe(() => {
            forceUpdate(+new Date())
        })
    }, [])



    return <ThemeContext.Provider
        value={{ store }}
    >
        <div className="voteBox">
            <div className="voteMainCol">
                <div className="voteMainRow">
                    <span>总数</span>
                    <span>{supNum + oppNum}</span>
                </div>
            </div>
            <VoteMain />
            <VoteFooter />
        </div>
    </ThemeContext.Provider>


}



export default Vote4









