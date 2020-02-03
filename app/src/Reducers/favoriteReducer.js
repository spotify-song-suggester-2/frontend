initialState={
    isFavorited:null
}

export default(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_FAVORITE':
            return{...state,isFavorited:true}
            case 'REMOVE_FAVORITE':
            return{...state,isFavorited:false}
            default:
                return state
    }
}