import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
const logger = createLogger({
    // ...options
  });
const middleware  =[thunk, logger]

export default createStore(
    rootReducer,
    applyMiddleware(...middleware)
)