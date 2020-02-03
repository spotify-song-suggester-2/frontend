import React from 'react'
import {connect} from 'react-redux'




const FavoriteComponent = (props) => {

    

    return (
        <div>
        
        </div>
    )
}

const mapStateToPorps= state=>{
    return {fav: state.FavSystem}
}


export default connect(mapStateToProps)(FavoriteComponent)
