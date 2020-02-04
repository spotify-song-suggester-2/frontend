import React from 'react'
import {connect} from 'react-redux'
import {Favorite,UnFavorite} from '../actions'




const FavoriteData= (props) => {

    

    return (
        <div>
        <h2>songList</h2>

        </div>
    )
}

const mapStateToProps= state=>{
    return {
        Favorites:state.Favorites,
        dummySongs:state.dummySongs
    }
}


export default connect(mapStateToProps,{Favorite,UnFavorite})(FavoriteData)
