import { createStore, combineReducers} from 'redux'
import order_reducer from './reducers/order_reducer'

const store = createStore(order_reducer)

export default store