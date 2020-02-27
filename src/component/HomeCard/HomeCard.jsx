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
                <Row className="flex-column-reverse flex-sm-row align-items-start m-2">
                    <SelectdCityCard selectedCity={selectedCity}/>
                    <FavoritesButton selectedCthityKey={selectedCity.key}/>
                </Row>
                <Row>
                    <WeekSumCard/>
                </Row>
            </Card>
        </Container>
     );
}
 
export default HomeCard;