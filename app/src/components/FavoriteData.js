import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Favorite,UnFavorite,editList,getListName} from '../actions'
import FavoriteList from './FavoriteList';
import SongList from './SongList';




const FavoriteData= (props) => {
    console.log('From favoritedata', props.favoriteLists)
    const [isEditing, setIsEditing] = useState(false);
    const [editForm, setEditForm] = useState(props.listName);
    const [refresh, setRefresh] = useState(false);


    useEffect(()=>{
        props.getListName();
        setEditForm(props.listName)
    }, [props.listName, refresh])


    const removeFav =  Song => {
        props.UnFavorite(Song);
       
      };
    
      const addFav = Song => {
        props.Favorite(Song);
      
      };

      const handleChange = (e) => {
          setEditForm(e.target.value);
      }

      const onSubmit = (e) => {
          e.preventDefault();
          props.editList({id: 1, playlist: editForm});
          setRefresh(!refresh);
      }


    return (
        <div>
        <div>
        {/* <h2>songList</h2> */}
        <h2>{props.listName}</h2>
        <button onClick={()=>setIsEditing(true)}>edit playlist name</button>
        {isEditing && <form onSubmit={onSubmit}>
            <input name='playlist' placeholder='playlist' value={editForm} onChange={handleChange}/>
        </form>}
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
        Favorites: state.favoriteReducer.Favorites,
        dummySongs:state.favoriteReducer.dummySongs,
        favoriteLists: state.favoriteReducer.Favorites.favoriteList,
        listName: state.favoriteReducer.Favorites.listName
    }
}


export default connect(mapStateToProps,{Favorite,UnFavorite,editList,getListName})(FavoriteData)
