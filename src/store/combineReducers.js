//combineReducers
//合并各个模块下的reducer,派发任务时调用这个reducers


const combineReducers = function combineReducers (reducers) {
   
    let reducersKeys = Reflect.ownKeys(reducers) 
    // ['vote',]
//    console.log(reducersKeys);
    return function reducer (state = {}, action) {
        let nextState = {};
        console.log('调用合并')
        //reducers中的每一个小的reducer 执行,把对应模块的状态/action行为对象传递进来;返回值替换当前模块下的状态
        reducersKeys.forEach(key => {
            //找到对应?
            let reducer = reducers[key];//相当于import  votereducer,
            console.log(state[key])//这里key的意义,我们可以知道state本身是个空值,调用votereducer会执行方法并先赋予默认值initail,保证执行时调用的是同一个reducer,修改的同一个reducer中的state
            nextState[key] = reducer(state[key], action)
            // console.log(nextState)  这里是为了区别多个reducer调用, 层级嵌套了一层nextState:{vote:{},...}
        })
        return nextState
    }
    
}


export default combineReducers



// dispatchEvent({
//     type:"VOTE_SUP"
// })