import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


const WeekSumCard = ({selectedCityKey}) => {
    return (
        <ListGroup horizontal>
            <ListGroup.Item>This</ListGroup.Item>
            <ListGroup.Item>ListGroup</ListGroup.Item>
            <ListGroup.Item>renders</ListGroup.Item>
            <ListGroup.Item>horizontally!</ListGroup.Item>
        </ListGroup>
    );
}
 
export default WeekSumCard;