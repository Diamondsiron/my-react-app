export function createStore(reducer, enhancer) {
    if(enhancer){
        return enhancer(createStore)(reducer)
    }
    //保存状态
    //回调函数
    let currentState = undefined

    let currentListeners = []

    function getState(){
        return currentState
    }
    
    function subscribe(listeners){
        currentListeners.push(listeners)
    }

    function dispatch(action){
        currentState = reducer(currentState,action)
        currentListeners.forEach(v=>v())
        return action
    }
    return {getState, subscribe, dispatch}

}