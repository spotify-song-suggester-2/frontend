import React from 'react'
import Search from './Search'
import {connect} from 'react-redux'

const Dashboard = (props) => {
    return (
        <div>
            I am the dashboard
            <Search search={'searchSongs'} ph={'song name'}/>
            {/* <Search search={'searchMood'} ph={'mood'}/> */}
            {/* Saved songs component which will receive songlist prop*/}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        //add in specific state here
        state
    }
}

export default connect(mapStateToProps, {})(Dashboard)
