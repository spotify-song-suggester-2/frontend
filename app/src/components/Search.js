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
        <form onSubmit={onSubmit}>
            <input name='search' placeholder='search for a song' onChange={handleChange}/>
            <button>search</button>
        </form>
    )
}


const mapStateToProps = state => {
    return {
        //add in specific state here
        state
    }
}

export default connect(mapStateToProps, {searchSongs})(Search)
