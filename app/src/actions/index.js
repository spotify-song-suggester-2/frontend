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


export const Favorite=()=>{
    return{
        type:'ADD_FAVORITE'
    }
}

export const UnFavorite=()=>{
    return{
        type:'REMOVE_FAVORITE'
    }
}