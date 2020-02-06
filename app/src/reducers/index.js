import {combineReducers} from 'redux'
import {searchReducer} from './searchReducer'
import {favoriteReducer} from './favoriteReducer'
import {suggestedReducer} from './suggestedReducer'

export default combineReducers({
    searchReducer,
    favoriteReducer,
    suggestedReducer
    //add other reducers here, comma separated
});