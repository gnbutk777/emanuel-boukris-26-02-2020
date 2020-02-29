import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import SelectdCityCard from '../SelectdCityCard';
import Row from 'react-bootstrap/Row';
import FavoritesButton from '../FavoritesButton';
import WeekSumCard from '../WeekSumCard';

const HomeCard = ({selectedCity}) => {
    return ( 
        <Container>
            <Card>
                <Row className="flex-column-reverse flex-sm-row m-2">
                    <SelectdCityCard selectedCity={selectedCity}/>
                    <FavoritesButton selectedCityKey={selectedCity.key}/>
                </Row>
                <WeekSumCard selectedCityKey={selectedCity.key}/>
            </Card>
        </Container>
     );
}
 
export default HomeCard;