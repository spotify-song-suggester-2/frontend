import React from 'react'
import {connect} from 'react-redux'
import {Favorite,UnFavorite} from '../actions'
import FavoriteList from './FavoriteList';
import SongList from './SongList';




const FavoriteData= (props) => {

    const removeFav =  Song => {
        props.removeFav(Song);
       
      };
    
      const addFav = Song => {
        props.addFav(Song);
      
      };




    return (
        <div>
        <div>
        <h2>songList</h2>
           <FavoriteList Favorite={props.Favorite}
           UnFavorite={removeFav}
           Favorite={props.Favorites}/>

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
    console.log(state.favoriteReducer.Favorites.favoriteList)
    return {
        Favorites:state.favoriteReducer.Favorites,
        dummySongs:state.favoriteReducer.dummySongs
       
    }
}


export default connect(mapStateToProps,{Favorite,UnFavorite})(FavoriteData)
