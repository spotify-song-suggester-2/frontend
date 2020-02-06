import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import FadeIn from 'react-fade-in';



const SuggestedList =props =>{
  const [isDifferent, setIsDifferent] = useState(false);

  // useEffect(()=>{
  //   setIsDifferent(true);
  //   console.log('from the useEffect')
  //   console.log('H', props.Song);
  // }, [props.Song])


    const SuggestedLayout = props => {
        console.log('isDifferent', isDifferent)
        return (
          <div>
            {props.isTyping && <FadeIn><SongContainer>
          
          <ImgDiv>
            <Img src={props.Song.album_cover_url} />
          </ImgDiv>
          
          <InfoDiv>
          <h3> Our Suggestion:</h3>
        
          </InfoDiv>
              <h4>{props.Song.track_name}</h4>
           
          <ButtonDiv>
            <Button onClick={() => {
              props.addFav(props.Song);
              setIsDifferent(false);
            } }>Favorite</Button>
          </ButtonDiv>
        </SongContainer></FadeIn>}
          </div>
        );
      };
    

return (
    <Container> 
        {props.suggested.map(Song=>(
            <div>
                <SuggestedLayout Song={Song} addFav={props.addFav} isTyping={props.isTyping}/>
                </div>
        ))}


    </Container>
)


}

export default SuggestedList

const Container = styled.div`

`;

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
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2%;
`;

const InfoDiv = styled.div`
  width: 50%;
  color:   #959AB1;
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
