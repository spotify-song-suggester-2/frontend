import {FETCHING_SEARCH_START, FETCHING_SEARCH_SUCCESS, FETCHING_SEARCH_FAILURE, FETCHING_SONGLIST_START, FETCHING_SONGLIST_SUCCESS, FETCHING_SONGLIST_FAILURE} from '../actions/searchActions'

const initialState = {
    isLoading: false,
    songs: [],
    result: [],
    error: ''
}

export const searchReducer = (state=initialState, action) => {
    switch (action.type){
        case FETCHING_SEARCH_START:
            return{
                ...state,
                isLoading: true
            }
        // case FETCHING_SEARCH_SUCCESS:
        //     // console.log('songs', state.songs);
        //     let filtered = state.songs.filter(song =>{
        //         let name = song.name.toLowerCase();
        //         return name.includes(action.payload.toLowerCase());
        //     });
        case FETCHING_SEARCH_SUCCESS:
            // actual data
            let filtered = state.songs.filter(song =>{
                let name = song.track_name.toLowerCase();
                return name.includes(action.payload.toLowerCase());
            });
            
            return {
                ...state,
                isLoading: false,
                result: [...filtered]
            }
        case FETCHING_SEARCH_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCHING_SONGLIST_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCHING_SONGLIST_SUCCESS:
            return{
                ...state,
                isLoading: false,
                songs: [...action.payload]
            }

        case FETCHING_SONGLIST_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}