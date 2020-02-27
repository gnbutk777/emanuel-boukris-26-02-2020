import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import api from '../../api';

const SelectdCityCard = ({selectedCity}) => {
    const [celsius, setcelsius] = useState(0);
    const [isLoading, setisLoading] = useState(true);
    const {name, key} = selectedCity;


    const getCurrConditions = async (currentKey,signal ) => {
        try {
            const data = await api.getCurrConditions(currentKey, signal);
            const {Temperature} = data[0];
            const {Metric} = Temperature;

            setcelsius(Metric.Value);
            setisLoading(false);
        }
        catch(error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            }
            else {
                console.error('Uh oh, an error!', error);
            }
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        getCurrConditions(key, signal);
        setisLoading(true);

        return () => {
            controller.abort();
        }
    }, [key]);

    return (
        <Col className="d-flex justify-content-center justify-content-sm-start m-2">
            <Card style={{ width: '10rem' }}>
                <Card.Body className="text-center">
                    <Card.Title>{name}</Card.Title>
                    {
                        isLoading ?
                        <Spinner animation="border" size="sm" />
                        :
                        <Card.Text>
                            {celsius}˚C
                        </Card.Text>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}
 
export default SelectdCityCard;