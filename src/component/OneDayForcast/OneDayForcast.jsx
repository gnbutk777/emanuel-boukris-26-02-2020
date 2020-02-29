import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';



const OneDayForcast = ({day, temperature, isLoading}) => {
    return (
        <Card style={{width: '11rem'}} className="m-1 m-xl-2">
            {
                isLoading ?
                    <Spinner animation="border" size="xl" className="align-self-center m-4"/>
                :
                    <Card.Body className="text-center">
                        <Card.Title>{day}</Card.Title>
                        <Card.Text>
                            {Math.round(temperature)}˚C
                        </Card.Text>
                    </Card.Body>
            }
        </Card>
    );
}
 
export default OneDayForcast;