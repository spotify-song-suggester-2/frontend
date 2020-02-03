import React, {useState} from 'react'
import {connect} from 'react-redux'

const Search = (props) => {

    const [song, setSong] = useState('');

    const handleChange = (e) => {
        setSong(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        //make some call to the api with song
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

export default connect(mapStateToProps, {})(Search)
