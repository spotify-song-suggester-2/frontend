import {axiosWithAuth} from '../utils/axiosWithAuth'


export const signIn =(userId) =>{
    return {
        type: 'SIGN_IN',
        payload: userId
    }
}

export const signOut =() =>{
    return {
        type:'SIGN_OUT'
    }
}


export const Favorite=(Song)=>{
    console.log('from the favorite action', Song)
    return{
        type:'ADD_FAVORITE',
        payload:Song
    }
}

export const UnFavorite=(Song)=>{
    return{
        type:'REMOVE_FAVORITE',
        payload:Song
    }
}

// export const editList = (listName) => {
//     return {
//         type: 'EDIT_LISTNAME',
//         payload: listName
//     }
// }

export const editList = (list) => dispatch => {

    // axios.get('http://localhost:3333/items')
    axiosWithAuth().put('https://auth-friends-backend.herokuapp.com/api/friends/1', list)
        // .then(res=>console.log(res))
        .then(res=>{
            dispatch({type: 'FETCHING_PLAYLIST_SUCCESS', payload: res.data[0]});
            axiosWithAuth().get('https://auth-friends-backend.herokuapp.com/api/friends')
        .then(res=>dispatch({type: 'FETCHING_PLAYLIST_SUCCESS', payload: res.data}))
        .catch(err=>dispatch({type: 'FETCHING_PLAYLIST_FAILURE', payload: err}))

        })
        .catch(err=>dispatch({type: 'FETCHING_PLAYLIST_FAILURE', payload: err}))
}


export const getListName = () => dispatch => {

    // axios.get('http://localhost:3333/items')
    axiosWithAuth().get('https://auth-friends-backend.herokuapp.com/api/friends')
        .then(res=>dispatch({type: 'FETCHING_PLAYLIST_SUCCESS', payload: res.data}))
        .catch(err=>dispatch({type: 'FETCHING_PLAYLIST_FAILURE', payload: err}))
}