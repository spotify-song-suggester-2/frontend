const initialState={

    Favorites:{
        isFavorited:null,
        favoriteList:[],
        listName: ''
    },
    dummySongs:[
        {name:"Song1"},
        {name:"Song2"},
        {name:'Song3'},
        {name:"Song4"}
    ]

   
}




export  const favoriteReducer =(state=initialState,action)=>{
    switch(action.type){
        
        case 'ADD_FAVORITE':
            console.log('from the reducer', action.payload);
            return{...state,
                Favorites: { ...state.Favorites, favoriteList: state.Favorites.favoriteList.includes(action.payload) ? [...state.Favorites.favoriteList] :[...state.Favorites.favoriteList,action.payload]}}


            case 'REMOVE_FAVORITE':
                return {
                    ...state,
                    Favorites: {
                      ...state.Favorites,
                      favoriteList: state.Favorites.favoriteList.filter(song => song.track_id !==action.payload.track_id)
                    }
                  }; 
                  
            case 'EDIT_LISTNAME':
                return {
                    ...state,
                    Favorites: {
                        ...state.Favorites,
                        listName: action.payload.playlist
                    }
                }
            case 'FETCHING_PLAYLIST_SUCCESS':
                return{
                    ...state,
                    Favorites: {
                        ...state.Favorites,
                        listName: action.payload[0].playlist
                    }
                }
            case 'FETCHING_PLAYLIST_FAILURE':
                return{
                    ...state,
                    isLoading: false,
                    error: action.payload
                }
            default:
                return state
    }
}