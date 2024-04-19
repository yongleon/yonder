import { createStore } from 'redux'
//合并各个模块的reducer,创建出一个reducer集合
import voteReducer from './reducers/voteReducer'
import combineReducers from './combineReducers';
const reducer = combineReducers({//合并reducer模块,每次调用都会去找模块下的TYPE标识
    vote: voteReducer,
})
//此时容器中的公共状态,会按照我们设置的成园名字,分模块进来管理

/*
 state ={
 vote:{
 supNum,
 oppNum
 },
 }
*/

//事件池中,包含了所有模块的更新方法,每次更新不同模块下的状态,都会调用所有的更新办法,解决这个问题需要改源码

// 创建STORE公共容器
const store = createStore(reducer)
export default store