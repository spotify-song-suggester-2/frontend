import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'


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

//Sample delete action
// The delete request sends a request to the specific endpoint with a dynamic id on the end sent from the unFavorite function when a user clicks unFavorite. That would let the server know which song to remove from the playlist array. I then have a nested get request to get the new playlist and dispatch the FECTCHING_SONGLIST action to get the new list and display it for the user
// export const UnFavorite= (song) => {
//     return{
//         axiosWithAuth().delete(`https://auth-friends-backend.herokuapp.com/api/friends/${song.id}`)
//             .then(res=>{

//                 dispatch({type: FETCHING_SONGLIST_START});
//                 axiosWithAuth().get('https://modifiedtrinkets.herokuapp.com/items')
//                     .then(res=>dispatch({type: FETCHING_SONGLIST_SUCCESS, payload: res.data}))
//                     .catch(err=>dispatch({type: FETCHING_SONGLIST_FAILURE, payload: err}))
//             }
                
                
//                 )
//             .catch(err=>dispatch({type: 'UNFAVORITE_SONG_FAILURE', payload: err}))
// export const Suggested=(id)=> dispatch=>{
//     console.log('suggested ID is :',id)
//   dispatch({type:"SUGG_START"})
//   axios.get(`https://symphinity17.herokuapp.com/id/${id}`)
//   .then(res=>dispatch({type:"SUGG_SUCCESS",payload:res.data}))
//   .catch(err=>dispatch({type:"SUGG_FAILURE",payload:err}))
 
// }

export const Suggested=(id)=> dispatch=>{
    console.log('suggested ID is :',id)
  dispatch({type:"SUGG_START"})
  axios.get(`https://cors-anywhere.herokuapp.com/https://symphinity17.herokuapp.com/id/${id}`)
  .then(res=>dispatch({type:"SUGG_SUCCESS",payload:res.data}))
  .catch(err=>dispatch({type:"SUGG_FAILURE",payload:err}))
 
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
            

        })
        .catch(err=>dispatch({type: 'FETCHING_PLAYLIST_FAILURE', payload: err}))
}








export const getListName = () => dispatch => {

    axiosWithAuth().get('https://auth-friends-backend.herokuapp.com/api/friends')
        .then(res=>dispatch({type: 'FETCHING_PLAYLIST_SUCCESS', payload: res.data}))
        // .then(res=>console.log('from the get request', res))
        .catch(err=>dispatch({type: 'FETCHING_PLAYLIST_FAILURE', payload: err}))
}