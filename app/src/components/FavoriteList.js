import React from "react";
import styled from "styled-components";

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
      <SongContainer>
        <ImgDiv>
          <Img src={props.Song.album_cover_url} />
        </ImgDiv>
        <InfoDiv>
          <h2>{props.Song.track_name}</h2>
          <p>{props.Song.artist_name}</p>
        </InfoDiv>
        <ButtonDiv>
          <Button onClick={() => props.removeFav(props.Song)}>Remove</Button>
        </ButtonDiv>
      </SongContainer>
    );
  };

  return (
    <div>
      {props.Favorites.map(item => (
        <div>
          <Songs2 removeFav={props.removeFav} key={item.track_id} Song={item} />
        </div>
      ))}
    </div>
  );
};

export default FavoriteList;

const SongContainer = styled.div`
  border-bottom: 3px solid white;
  width: 50%;
  margin: 0 auto;
  padding: 2% 0;
  text-align: left;
  display: flex;
`;

const Img = styled.img`
  width: 100%;
`;

const ImgDiv = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
`;

const InfoDiv = styled.div`
  width: 50%;
  color:  #ef019f;
`;

const Button = styled.button`
  border: 1px solid white;
  width: 100%;
  background: none;
  padding: 3% 1%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background: red;
    color: #0e0b20;
    border: 1px solid #0e0b20;
  }
`;

const ButtonDiv = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
