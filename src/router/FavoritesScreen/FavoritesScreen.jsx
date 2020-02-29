import React, {useState} from 'react';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import FavoriteSingleCard from '../../component/FavoriteSingleCard';

const FavoritesScreen = ({favorites}) => {
    const [isLoading, setisLoading] = useState(true);

    console.log("favorites = ",favorites);
    
    return (
        <Row className="flex-column flex-sm-row align-self-center justify-content-center m-4">
            {
                favorites.map((oneDayData, index)=> {
                    const {day, temperature} = oneDayData;
                    // const key = selectedCityKey + index;
                    return <FavoriteSingleCard key={index} isLoading={isLoading} day={day} temperature={temperature}/>
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