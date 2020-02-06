import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {Favorite,UnFavorite,editList,getListName} from '../actions'
import FavoriteList from './FavoriteList';
import SongList from './SongList';
import styled from "styled-components";
import SuggestedList from "./SuggestedList"




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
          setIsEditing(false);
      }


    return (
        <FavoriteDiv>
        <div>
        <SuggestedList suggested={props.suggested}/>
        {/* <h2>songList</h2> */}
        <H2>{props.listName}</H2>
        <Button onClick={()=>setIsEditing(true)}>edit playlist name</Button>
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
        </FavoriteDiv>
    )
}




const mapStateToProps= state=>{
    console.log(state)
    console.log(state.favoriteReducer.Favorites)
    console.log(state.suggestedReducer.Suggested)
    return {
        Favorites: state.favoriteReducer.Favorites,
        dummySongs:state.favoriteReducer.dummySongs,
        favoriteLists: state.favoriteReducer.Favorites.favoriteList,
        listName: state.favoriteReducer.Favorites.listName,
        suggested: state.suggestedReducer.Suggested
    }
}


export default connect(mapStateToProps,{Favorite,UnFavorite,editList,getListName})(FavoriteData)



const H2 = styled.h2`
color: #ef019f;
  text-decoration:underline 
  margin: 10 0 0 0;
`;

const Button = styled.button`
    border: 2px solid white;
    background: none;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        background: #ef019f;
        color: #0E0B20;
        border: 1px solid #0E0B20;
    }
`;

const FavoriteDiv = styled.div`
  margin-top:10%;
`;