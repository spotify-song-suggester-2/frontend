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
        
      
          {props.dummySongs.map(item => (
            <Songs addFav={props.addFav} key={item.id} Song={item} />
            
          ))}
     
            
        </div>
    )
}

export default SongList
