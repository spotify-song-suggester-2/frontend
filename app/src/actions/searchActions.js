import axios from 'axios'


export const FETCHING_SEARCH_START = 'FETCHING_SEARCH_START';
export const FETCHING_SEARCH_SUCCESS = 'FETCHING_SEARCH_SUCCESS';
export const FETCHING_SEARCH_FAILURE = 'FETCHING_SEARCH_FAILURE';


export const searchSongs = (song) => dispatch => {
    // dispatch({type: FETCHING_SEARCH_START});
    dispatch({type: FETCHING_SEARCH_SUCCESS, payload: song});

    // axios.get('')
    //     .then(res=>dispatch({type: FETCHING_SEARCH_SUCCESS, payload: song}))
    //     .catch(err=>dispatch({type: FETCHING_SEARCH_FAILURE, payload: err}))
}
