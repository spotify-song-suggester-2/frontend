


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