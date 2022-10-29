import { combineReducers } from 'redux'

// store
import { splitApi } from 'store/api/v1'
import counter from 'store/slices/counter'

const rootReducer = {
  counter,
  [splitApi.reducerPath]: splitApi.reducer,
}

export default combineReducers(rootReducer)
