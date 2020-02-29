import React, {useState} from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import FavoriteSingleCard from '../../component/FavoriteSingleCard';

const FavoritesScreen = ({favorites}) => {

    return (
        <Row className="flex-column flex-sm-row align-self-center justify-content-center m-4">
            {
                favorites.length  === 0 ? 
                    "You don't have any favorites yet"
                :
                    favorites.map((favorite)=> {
                        const {cityKey, cityName} = favorite;
                        return <FavoriteSingleCard key={cityKey} cityKey={cityKey} cityName={cityName}/>
                    })
            }       
        </Row>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};
 
export default connect(mapStateToProps, null)(FavoritesScreen);