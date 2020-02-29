import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import SearchBar from '../../component/SearchBar';
import HomeCard from '../../component/HomeCard';


const defaultCity = {name: 'tel-aviv', key: '215854'}

const HomeScreen = (props) => {
    //FIXME:
    // const [selectedCity, setselectedCity] = useState(null);
    const [selectedCity, setselectedCity] = useState(defaultCity);
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
 

export default HomeScreen;