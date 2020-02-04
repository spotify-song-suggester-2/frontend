import React from 'react'
import {connect} from 'react-redux'
import {Favorite,UnFavorite} from '../actions'
import FavoriteList from './FavoriteList';
import SongList from './SongList';




const FavoriteData= (props) => {
    console.log(props.favoriteLists)

    const removeFav =  Song => {
        props.UnFavorite(Song);
       
      };
    
      const addFav = Song => {
        props.Favorite(Song);
      
      };




    return (
        <div>
        <div>
        <h2>songList</h2>
           <FavoriteList 
           removeFav={removeFav}
           Favorites={props.favoriteLists}/>

        </div>
        <div>
            <SongList
            addFav={addFav}
            dummySongs={props.dummySongs}/>
        </div>
        </div>
    )
}




const mapStateToProps= state=>{
    console.log(state)
    console.log(state.favoriteReducer.Favorites)
    return {
        Favorites:state.favoriteReducer.Favorites,
        dummySongs:state.favoriteReducer.dummySongs,
        favoriteLists: state.favoriteReducer.Favorites.favoriteList
       
    }
}


export default connect(mapStateToProps,{Favorite,UnFavorite})(FavoriteData)
