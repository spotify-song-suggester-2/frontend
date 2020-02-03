import React, {useState} from 'react'

export default function Search() {

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
