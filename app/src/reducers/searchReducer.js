import {FETCHING_SEARCH_START, FETCHING_SEARCH_SUCCESS, FETCHING_SEARCH_FAILURE} from '../actions/searchActions'

const initialState = {
    isLoading: false,
    songs: [],
    error: ''
}

export const searchReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCHING_SEARCH_START:
            return{
                ...state,
                isLoading: true
            }
        case FETCHING_SEARCH_SUCCESS:
            return{
                ...state,
                isLoading: false,
                // songs: [...action.payload]
                songs: action.payload
            }
        case FETCHING_SEARCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}