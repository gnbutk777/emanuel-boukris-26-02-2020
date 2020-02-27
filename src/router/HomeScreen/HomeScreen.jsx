import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addToFavorites, removeFormFavorites} from './../../modules/favorites/actions'; 
import Container from 'react-bootstrap/Container';
import SearchBar from '../../component/SearchBar';
import HomeCard from '../../component/HomeCard';


const mockCity = {name: 'tel-aviv', key: '4443434'}

const HomeScreen = (props) => {
    //FIXME:
    // const [selectedCity, setselectedCity] = useState(null);
    const [selectedCity, setselectedCity] = useState(mockCity);
    return (
        <Container>
            <SearchBar onSelectCity={(city) => {
                if (city.length > 0) {
                    setselectedCity(city[0]);
                }
            }}/>
            {
                selectedCity ?
                <HomeCard selectedCity={selectedCity} />
                :
                null
            }
        </Container>
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