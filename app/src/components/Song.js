import React from 'react'
import styled from 'styled-components'
import {Favorite,Suggested} from '../actions'
import {connect} from 'react-redux'

const Song = (props) => {
    console.log('song props', props);
    const {song} = props;

    const test={

    }

    return (
        <SongContainer>
            <ImgDiv>
                {/* <Img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg"/> */}
                <Img src={song.album_cover_url}/>
            </ImgDiv>
            <InfoDiv>
                {/* <h2>{song.name}</h2>
                <p>{song.tempo} BPM</p> */}
                <h2>{song.track_name}</h2>
                <p>{song.artist_name}</p>

            </InfoDiv>
            <ButtonDiv>
            
                <Button onClick={() => props.Favorite(song)}>Favorite</Button>
                <Button onClick= {() =>props.Suggested(song.track_index_num)}>Suggested </Button>
            </ButtonDiv>
            
            
        </SongContainer>
    )
}

const mapStateToProps = state => {

    return {
        Favorites: state.favoriteReducer.Favorites,
        dummySongs: state.favoriteReducer.dummySongs

    }
}

export default connect(mapStateToProps, {Favorite,Suggested})(Song)

const SongContainer = styled.div`
    border-bottom: 3px solid white;
    width: 50%;
    margin: 0 auto;
    padding: 2% 0;
    text-align: left;
    display: flex;
    @media(max-width: 760px){
        width: 100%;
    }
    @media(max-width: 450px){
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Img = styled.img`
    width: 100%;
`;

const ImgDiv = styled.div`
    // border: 1px solid green;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 2%;
`;

const InfoDiv = styled.div`
    width: 50%;
`;

const Button = styled.button`
    border: 1px solid white;
    width: 100%;
    background: none;
    padding: 3% 1%;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    &:hover{
        background: white;
        color: #0E0B20;
        border: 1px solid #0E0B20;
    }
`;

const ButtonDiv = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;