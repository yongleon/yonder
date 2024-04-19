import React, { useMemo, useContext } from "react";
import propTypes from 'prop-types';
import ThemeContext from "./ThemeContext";  //上下文组件

const VoteMain = function VoteMain (props) {
    let { supNum, oppNum } = props
    let ratio = useMemo(() => {//相似与VUE中的计算属性
        let total = supNum + oppNum
        if (total > 0) return (supNum / total * 100).toFixed(2) + '%';
        return '初始值'
    }, [supNum, oppNum])

    // console.log('渲染main', props)

    return <div className="voteMain">
        <div className="voteMainCol">
            <div className="voteMainRow">
                <span>-操作-</span>
                <span>-人数-</span>
            </div>
            <div className="voteMainRow">
                <span>支持:</span>
                <span>{supNum}</span>
            </div>
            <div className="voteMainRow">
                <span>反对:</span>
                <span>{oppNum}</span>
            </div>
            <div className="voteMainRow">
                <span>支持比率:</span>
                <span>{ratio}</span>
            </div>
        </div>
    </div>

}


// const VoteMain2 = function VoteMain2 (props) {
//     console.log('main渲染')
//     let { supNum, oppNum } = props

//     let ratio = useMemo(() => {//相似与VUE中的计算属性
//         let total = supNum + oppNum
//         if (total > 0) return (supNum / total * 100).toFixed(2) + '%';
//         return '初始值'
//     }, [supNum, oppNum])

//     return <div className="voteMain">
//         <div className="voteMainCol">
//             <div className="voteMainRow">
//                 <span>-操作-</span>
//                 <span>-人数-</span>
//             </div>
//             <div className="voteMainRow">
//                 <span>支持:</span>
//                 <span>{props.supNum}</span>
//             </div>
//             <div className="voteMainRow">
//                 <span>反对:</span>
//                 <span>{props.oppNum}</span>
//             </div>
//             <div className="voteMainRow">
//                 <span>支持比率:</span>
//                 <span>{ratio}</span>
//             </div>
//         </div>
//     </div>
// }

// export default memo(VoteMain2)


const VoteMain3 = function VoteMain3 () {
    let { supNum, oppNum } = useContext(ThemeContext)
    let ratio = useMemo(() => {//相似与VUE中的计算属性
        let total = supNum + oppNum
        if (total > 0) return (supNum / total * 100).toFixed(2) + '%';
        return '初始值'
    }, [supNum, oppNum])

    return <div className="voteMain">
        <div className="voteMainCol">
            <div className="voteMainRow">
                <span>-操作-</span>
                <span>-人数-</span>
            </div>
            <div className="voteMainRow">
                <span>支持:</span>
                <span>{supNum}</span>
            </div>
            <div className="voteMainRow">
                <span>反对:</span>
                <span>{oppNum}</span>
            </div>
            <div className="voteMainRow">
                <span>支持比率:</span>
                <span>{ratio}</span>
            </div>
        </div>
    </div>
}





const VoteMain4 = function VoteMain4 () {
    let { store } = useContext(ThemeContext)
    const { supNum, oppNum } = store.getState().vote
    let ratio = useMemo(() => {//相似与VUE中的计算属性
        let total = supNum + oppNum
        if (total > 0) return (supNum / total * 100).toFixed(2) + '%';
        return '初始值'
    }, [supNum, oppNum])

    return <div className="voteMain">
        <div className="voteMainCol">
            <div className="voteMainRow">
                <span>-操作-</span>
                <span>-人数-</span>
            </div>
            <div className="voteMainRow">
                <span>支持:</span>
                <span>{supNum}</span>
            </div>
            <div className="voteMainRow">
                <span>反对:</span>
                <span>{oppNum}</span>
            </div>
            <div className="voteMainRow">
                <span>支持比率:</span>
                <span>{ratio}</span>
            </div>
        </div>
    </div>
}


/*属性校验规则*/
// VoteMain.defaultProps = {
//     supNum: 0,
//     oppNum: 0,
// }
// VoteMain.propTypes = {
//     supNum: propTypes.number,
//     oppNum: propTypes.number,
// }


export default VoteMain4

// export default memo(VoteMain3)