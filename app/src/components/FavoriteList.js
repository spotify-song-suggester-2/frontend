import React from 'react'




const FavoriteList = (props) => {

    const addedFav = props => {
        return (
          <li>
            <button onClick={() => props.removeFav(props.Song)} className="button">X</button>
            {props.Song.name}
          </li>
        );
      };




    return (

        <div>
            <h4>fav songs</h4>
            <ol>
                {props.Favorite.favoriteList.map(Song=>(
                    <addedFav removeFav={props.removeFav} key={Song.id} Song={Song}/>
                ))}
            </ol>
            
        </div>
    )
}

export default FavoriteList
