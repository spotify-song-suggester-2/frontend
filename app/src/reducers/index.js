import {combineReducers} from 'redux'
import {searchReducer} from './searchReducer'
import {favoriteReducer} from './favoriteReducer'

export default combineReducers({
    searchReducer,
    favoriteReducer
    //add other reducers here, comma separated
});