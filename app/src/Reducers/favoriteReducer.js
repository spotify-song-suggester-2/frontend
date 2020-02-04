const initialState={

    Favorites:{
        isFavorited:null,
        favoriteList:[]
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
                      features: state.Favorites.favoriteList.filter(song => song.id !==action.payload.id)
                    }
                  };  
            default:
                return state
    }
}