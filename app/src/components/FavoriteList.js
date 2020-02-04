import React from 'react'




const FavoriteList = (props) => {
    console.log('from the favorite list', props.Favorites);

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
            
            <ol>
                {props.Favorites.map(item=>(
                    <addedFav removeFav={props.removeFav} Song={item}/>
                ))}
            </ol>
            
        </div>
    )
}



export default FavoriteList
