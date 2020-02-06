
const initialState={
    Suggested:[],
    error:''
}


export const suggestedReducer=(state=initialState,action) =>{
    switch(action.type){
        case "SUGG_START":
            return {
                ...state
            }
            case "SUGG_SUCCESS":
                return{
                    ...state,
                    Suggested:[...action.payload]
                }
                case "SUGG_FAILURE":
                    return{
                        ...state,
                        error: action.payload
                    }

                    default:
                        return state
    }
}