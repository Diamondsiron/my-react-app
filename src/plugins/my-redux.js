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
        console.log('action')
        currentState = reducer(currentState,action)
        currentListeners.forEach(v=>v())
        return action
    }
    return {getState, subscribe, dispatch}

}
export function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
      const store = createStore(...args);
      const midAPi = {
        getState: store.getState,
        dispatch: store.dispatch,
      };
      const middlewareChain = middlewares.map(mw => mw(midAPi));
      const dispatch = compose(...middlewareChain)(store.dispatch);
      return {
        ...store,
        dispatch,
      };
    };
  }
  
  function compose(...funcs) {
    const len = funcs.length;
    if (len === 0) {
      return arg => arg;
    } else if (len === 1) {
      return funcs[0];
    } else {
      return funcs.reduce((a, b) => (...args) => b(a(...args)));
    }
  }