import React, { useImperativeHandle, useContext } from "react";
import useParTialState from "./useParTialState";  //自定义hook方法
import ThemeContext from "./ThemeContext";  //上下文组件
import action from "../../store/actions/action";


const VoteFooter = function VoteFooter (props) {
    return <div className="voteFooter">
        <div><span onClick={() => props.changeHandle('sup')}>支持</span></div>
        <div> <span onClick={() => props.changeHandle('opp')}>反对</span></div>
    </div>
}

// const VoteFooter2 = React.forwardRef(function VoteFooter2 (props, ref) {
//     const [state, setPartial] = useParTialState({
//         supNum: 0,
//         oppNum: 0
//     })

//     const changeHandle = (type) => {

//         if (type === 'sup') {
//             setPartial({ supNum: state.supNum + 1 })
//             return
//         }
//         setPartial({ oppNum: state.oppNum + 1 })
//     }
//     console.log(state)
//     useImperativeHandle(ref, () => {
//         //在这里返回的内容,都可以被父组件的ref对象获取到
//         return {
//             ...state,
//         }
//     })

//     return <div className="voteFooter">
//         <div><span onClick={() => changeHandle('sup')}>支持</span></div>
//         <div> <span onClick={() => changeHandle('opp')}>反对</span></div>
//     </div>
// })





const VoteFooter3 = function VoteFooter3 () {
    let { changeHandle } = useContext(ThemeContext)
    return <div className="voteFooter">
        <div><span onClick={() => changeHandle('sup')}>支持</span></div>
        <div> <span onClick={() => changeHandle('opp')}>反对</span></div>
    </div>
}



const VoteFooter4 = function VoteFooter4 () {
    let { store } = useContext(ThemeContext)
    //数据的+-方法已经写在了redux里面

    return <div className="voteFooter">
        <div><span onClick={() => store.dispatch(action.vote.support())}>支持</span></div>
        <div> <span onClick={() => store.dispatch(action.vote.oppose())}>反对</span></div>
    </div >
}

export default VoteFooter4