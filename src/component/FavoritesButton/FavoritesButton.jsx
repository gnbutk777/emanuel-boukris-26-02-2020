import React from 'react';
import { Button, ButtonGroup,Col } from 'react-bootstrap';
import FavHeartIcon from '../FavHeartIcon';
import { connect,useSelector } from 'react-redux';
import {addToFavorites, removeFormFavorites} from '../../modules/favorites/actions';

const text = {
    add: "Add To Favorites",
    remove: "Remove From Favorites"
}

const FavoritesButton = ({cityKey, cityName, addCityToFavorites, removeCityFormFavorites}) => {
    const isFill = useSelector((state) => {
        const {favorites} = state;
        return favorites.some((favorite) => {
            return favorite.cityKey === cityKey;
        })
    });

    const handlePress = () => {
        if (isFill) {
            removeCityFormFavorites(cityKey);
        }
        else {
            addCityToFavorites({cityKey, cityName});
        }
    }

    return (
        <Col className="d-flex align-items-start justify-content-center justify-content-sm-end">
            <ButtonGroup>
                <FavHeartIcon isFill={isFill}/>
                <Button onClick={handlePress} variant="primary">
                    {isFill ?text.remove : text.add }
                </Button> 
            </ButtonGroup>
        </Col>
    );
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    };
};

const mapDispatchToProps = {
    addCityToFavorites: addToFavorites,
    removeCityFormFavorites: removeFormFavorites,
};
 
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesButton);;