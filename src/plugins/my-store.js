import { createStore, applyMiddleware } from './my-redux';
import rootReducer from './my-reducer'

function logger() {
    return dispatch => action => {
      action.type && console.log(action.type + "执行啦！");
      return dispatch(action);
    };
}
  
function thunk({ getState }) {
    
    return dispatch => action => {
        if (typeof action === "function") {
            console.log(action,'异步thunk')
            return action(dispatch, getState);
        } else {
            console.log(action,'thunk')
            return dispatch(action);
        }
    
};
}
export default createStore(
    rootReducer,
    applyMiddleware(logger,thunk)
)