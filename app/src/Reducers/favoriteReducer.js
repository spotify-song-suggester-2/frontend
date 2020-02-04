const initialState={

    Favorites:{
        isFavorited:null,
        favoriteList:[]
    },
    dummySongs:[
        {id:1,name:"Song1"},
        {id:2,name:"Song2"},
        {id:3,name:'Song3'},
        {id:4,name:"Song4"}
    ]

   
}




export  const favoriteReducer =(state=initialState,action)=>{
    switch(action.type){
        
        case 'ADD_FAVORITE':
            console.log('from the reducer', action.payload);
            return{...state,
                Favorites: { ...state.Favorites, favoriteList: state.Favorites.favoriteList.includes(action.payload) ? [...state.Favorites.favoriteList] : [...state.Favorites.favoriteList,action.payload]}}


            case 'REMOVE_FAVORITE':
                console.log('from the reducer444', action.payload);
                return {
                    ...state,
                    Favorites: {
                      ...state.Favorites,
                      favoriteList: state.Favorites.favoriteList.filter(song => song.id !== action.payload.id)
                    }
                  };  
            default:
                return state
    }
}