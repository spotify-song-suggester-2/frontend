import axios from 'axios'


export const FETCHING_SEARCH_START = 'FETCHING_SEARCH_START';
export const FETCHING_SEARCH_SUCCESS = 'FETCHING_SEARCH_SUCCESS';
export const FETCHING_SEARCH_FAILURE = 'FETCHING_SEARCH_FAILURE';


export const searchSongs = () => dispatch => {
    dispatch({type: FETCHING_SEARCH_START});
    // axios.get('')
    //     .then(res=>dispatch({type: FETCHING_SEARCH_SUCCESS, payload: res.data}))
    //     .catch(err=>dispatch({type: FETCHING_SEARCH_FAILURE, payload: err}))
}