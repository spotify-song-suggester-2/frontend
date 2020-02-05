import React from 'react'

const SongList = (props) => {

  const Songs = props => {
    return (
      <div>
        <button onClick={() => props.addFav(props.Song)} className="button">Favorite</button>
        {props.Song.name} 
      </div>
    );
  };




    return (
        <div>
        
      
         
            
        </div>
    )
}

export default SongList
