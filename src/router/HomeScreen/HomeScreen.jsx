import React from 'react';
import { connect } from 'react-redux';
import {addToFavorites, removeFormFavorites} from './../../modules/favorites/actions'; 


const HomeScreen = (props) => {
    return (
        <h2 onClick={() => {props.addToFavorites("test")}}>Home</h2>
    )
}
 
const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    addToFavorites,
    removeFormFavorites,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);