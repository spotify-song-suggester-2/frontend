import React from 'react'
import Search from './Search'
import {connect} from 'react-redux'
import styled from 'styled-components'

const Dashboard = (props) => {
    return (
        <div>
            <H1>Symphinity</H1>
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

const H1 = styled.h1`
    font-family: 'Kaushan Script', cursive;
    color: rgba(239, 1, 159, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
`;