import { combineReducers } from 'redux'

import device from './reducer'
// import blog from './blogReducer'

const rootReducer = combineReducers({
  device,
  // blog
})

export default rootReducer