import React from 'react'




const FavoriteList = (props) => {

    const addedFav = props => {
        console.log(props.Favorites)
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
                {props.Favorites.map(item=>(
                    <addedFav removeFav={props.removeFav} Song={item}/>
                ))}
            </ol>
            
        </div>
    )
}

export default FavoriteList
