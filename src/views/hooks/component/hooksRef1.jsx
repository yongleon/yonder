import React, { useEffect, useState, useImperativeHandle, useMemo, memo } from "react";
import useParTialState from "./hooksRef2";  //可以哦,自定义hook,相当于js的引入


//自定义hook
/*作用:提取封装一些公共的处理逻辑
玩法:创建一个函数,名字需要是useXxx,后期就可以在组件中调用这个方法
*/

// const useParTialState = function useParTialState (initialValue) {
//     let [state, setState] = useState(initialValue)
//     //setState:不支持部分状态更改的
//     //setPartial:我们期望这个方法可以支持部分状态的更改
//     const setPartial = function setPartial (partialState) {
//         setState({
//             ...state,
//             ...partialState,
//         })
//     }
//     return [state, setPartial]
// }



const HooksRef1 = function HooksRef1 (props) {//这里需要注意,我们直接给函数组件ref是不行的,外层需要嵌套React.forwardRef
    let [state, setPartial] = useParTialState({
        supNum: 10,
        oppNum: 5
    })
    const handle = type => {
        if (type === 'sup') {
            setPartial({ supNum: state.supNum + 1 })
            return
        }
        setPartial({ oppNum: state.oppNum + 1 })
    }


    return (<div>
        这里是1:<span>{state.supNum}</span>  这里是2:<span>{state.oppNum}</span>

        <button onClick={() => handle('sup')}>按钮1</button>
        <button onClick={() => handle('opp')}>按钮2</button>
    </div>)
}

export default HooksRef1