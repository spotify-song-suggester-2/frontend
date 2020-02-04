import React from 'react'

const SongList = (props) => {

    const Songs = props => {
        return (
          <li>
            <button onClick={() => props.addFav(props.Song)} className="button">Favorite</button>
            {props.Song.name} 
          </li>
        );
      };




    return (
        <div>
            <h4>songs</h4>
        <ol>
          {props.dummySongs.map(item => (
            <Songs addFav={props.addFav} key={item.id} Song={item} />
            
          ))}
        </ol>
            
        </div>
    )
}

export default SongList
