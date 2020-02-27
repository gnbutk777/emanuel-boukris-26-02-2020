import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addToFavorites, removeFormFavorites} from './../../modules/favorites/actions'; 
// import { Container } from 'react-bootstrap/lib/Tab';
import Container from 'react-bootstrap/Container';
import SearchBar from '../../component/SearchBar';


const HomeScreen = (props) => {
    const [selectedCity, setselectedCity] = useState({});
    return (
        <Container>
            <SearchBar onSelectCity={(city) => {
                console.log('====================================');
                console.log("city = ",city);
                console.log('====================================');
                setselectedCity(city);
            }}/>
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