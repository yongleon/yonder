import React, { useEffect, useState, useImperativeHandle, useMemo, memo } from "react";
// import { useCallback } from "react";

//自定义hook
/*作用:提取封装一些公共的处理逻辑
玩法:创建一个函数,名字需要是useXxx,后期就可以在组件中调用这个方法
*/

//hook函数的特点 不能放在判断条件内部执行,useXxx这种会自动校验报错,是否符合hook函数.

const useParTialState = function useParTialState (initialValue) {
    let [state, setState] = useState(initialValue)
    //setState:不支持部分状态更改的
    //setPartial:我们期望这个方法可以支持部分状态的更改
    const setPartial = function setPartial (partialState) {
        setState({
            ...state,
            ...partialState,
        })
    }
    return [state, setPartial]
}


export default useParTialState