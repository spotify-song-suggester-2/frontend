import axios from 'axios'

export const FETCHING_SONGLIST_START = 'FETCHING_SONGLIST_START';
export const FETCHING_SONGLIST_SUCCESS = 'FETCHING_SONGLIST_SUCCESS';
export const FETCHING_SONGLIST_FAILURE = 'FETCHING_SONGLIST_FAILURE';

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

export const displaySongs = () => dispatch => {
    dispatch({type: FETCHING_SONGLIST_START})
    // axios.get('http://localhost:3333/items')
    axios.get('https://modifiedtrinkets.herokuapp.com/items')
        .then(res=>dispatch({type: FETCHING_SONGLIST_SUCCESS, payload: res.data}))
        .catch(err=>dispatch({type: FETCHING_SONGLIST_FAILURE, payload: err}))
}
