import React, {useState} from 'react'
import {connect} from 'react-redux'
import {searchSongs} from '../actions/searchActions'

const Search = (props) => {

    const [song, setSong] = useState('');

    const handleChange = (e) => {
        setSong(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        props.searchSongs(song);
        console.log(song);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name='search' placeholder='search for a song' onChange={handleChange}/>
                <button>search</button>
            </form>
            {props.songs && <div>
                {props.songs.map(song => {
                    return song.name
                })}
            </div>}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        songs: state.songs,
        error: state.error
    }
}

export default connect(mapStateToProps, {searchSongs})(Search)
