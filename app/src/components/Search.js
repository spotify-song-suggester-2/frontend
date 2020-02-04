import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {searchSongs, displaySongs} from '../actions/searchActions'
import axios from 'axios';

const Search = (props) => {
    const [song, setSong] = useState('');

    useEffect(()=>{
        props.displaySongs();
        console.log('result', props.result)
        
    }, [])

    const handleChange = (e) => {
        // setSong(e.target.value)
        props[props.search](e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        // props.searchSongs(song);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input autoComplete='off' name='search' placeholder={`search by ${props.ph}`} onChange={handleChange}/>
                <button>search</button>
            </form>
            {props.result && <div>
                {props.result.map(song => {
                    console.log('in the map', song)
                    return (
                        <h1>{song.name}</h1>
                    )
                })}
            </div>}
        </div>
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
