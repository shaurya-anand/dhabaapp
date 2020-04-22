import { createStore, combineReducers} from 'redux'

import reducer from './reducers/final_reducer'

const store = createStore(reducer)

export default store