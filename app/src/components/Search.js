import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {searchSongs, displaySongs} from '../actions/searchActions'
import styled from 'styled-components'
import Song from './Song'
import axios from 'axios'
import FadeIn from 'react-fade-in';

const Search = (props) => {


    useEffect(()=>{
        props.displaySongs();
        console.log('result', props.result)

    }, [])

    const handleChange = (e) => {
        if (e.target.value !== ''){
            props[props.search](e.target.value)
            props.setIsTyping(true)
        }
        else{
            props.setIsTyping(false);
        }

    }

    const onSubmit = e => {
        e.preventDefault();

    }

    return (
        <Container>
            <form onSubmit={onSubmit}>
                <Input autoComplete='off' name='search' placeholder={`search by ${props.ph}`} onChange={handleChange}/>
                {/* <button>search</button> */}
            </form>
            {props.result && props.isTyping && 
            <FadeIn>
                <Songs>
                    {props.result.map(song => {
                        console.log('in the map', song)
                        return (
                            <Song song={song}/>
                        )
                    })}
                </Songs>
            </FadeIn>}
        </Container>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.searchReducer.isLoading,
        songs: state.searchReducer.songs,
        result: state.searchReducer.result,
        error: state.searchReducer.error
    }
}

export default connect(mapStateToProps, {searchSongs, displaySongs})(Search)

const Container = styled.div`
    background: #0E0B20;
    color: white;
`;

const Input = styled.input`
    background: none;
    color: white;
    border: 3px solid white;
    padding: 2%;
    border-radius: 35px;
    width: 40%;
    font-size: 1.2rem;
    outline: none;
    @media(max-width: 500px){
        width: 60%;
        font-size: 1rem;
    }
`;

const Songs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
    margin: 0 auto;

`;


