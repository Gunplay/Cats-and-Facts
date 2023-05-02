import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

import cat from '../reducers/cat'
import fact from '../reducers/fact'

const store = createStore(
  combineReducers({ cat, fact }),
  compose(
    applyMiddleware(ReduxThunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store
