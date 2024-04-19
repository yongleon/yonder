import * as TYPES from '../action-types'//避免唯一标识重复
import cloneDeep from 'lodash/cloneDeep'
let initial = {//初始值
    supNum: 0,
    oppNum:0
}

const voteReducer = function reducer (state = initial, action) {
    const newState = cloneDeep(state)    
switch (action.type) {
    case TYPES.VOTE_SUP:
        newState.supNum++ 
        break;
        case TYPES.VOTE_OPP:
        newState.oppNum++
        break;
    default:
        break;
}

    //return的内容会整体替换掉Store容器中的内容
    return newState
    
};

export default voteReducer


//分模块管理各个模块的reducer