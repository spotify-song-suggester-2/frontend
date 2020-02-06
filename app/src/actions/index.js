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