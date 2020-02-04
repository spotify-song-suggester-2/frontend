import React from 'react'
import styled from 'styled-components'

export default function Song(props) {
    const {song} = props;
    return (
        <SongContainer>
            <ImgDiv>
                <Img src="https://pbs.twimg.com/profile_images/846659478120366082/K-kZVvT8_400x400.jpg"/>
            </ImgDiv>
            <InfoDiv>
                <h2>{song.name}</h2>
                <p>{song.tempo} BPM</p>
            </InfoDiv>
            <ButtonDiv>
                <Button>Favorite</Button>
            </ButtonDiv>
            
            
        </SongContainer>
    )
}

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