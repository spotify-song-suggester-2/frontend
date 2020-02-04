import React from "react";

const FavoriteList = props => {
  console.log("from the favorite list", props.Favorites);

  // const addToFavv = props => {
  //   return (
  //     <div>
  //       <button onClick={() => props.removeFav(props.Song)} className="button">X</button>
  //       <p>testinggggggg</p>
  //       {props.Song.name}
  //     </div>
  //   );
  // };

  const Songs2 = props => {
    return (
      <div>
        <button onClick={() => props.removeFav(props.Song)} className="button">
          Unfavorite
        </button>
        {props.Song.name}
      </div>
    );
  };

  return (
    <div>
      {props.Favorites.map(item => (
        <div>
          <Songs2 removeFav={props.removeFav} key={item.id} Song={item} />
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;
