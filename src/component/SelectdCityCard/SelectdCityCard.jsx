import React, {useState, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import  ModalContext from "../../hooks/ModalContext";
import api from '../../api';

const SelectdCityCard = ({selectedCity}) => {
    const [celsius, setcelsius] = useState(0);
    const [isLoading, setisLoading] = useState(true);
    const {setModalData} = useContext(ModalContext);
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
                setModalData(true, "error", error.message);
            }
        }
    };

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setisLoading(true);
        getCurrConditions(key, signal);

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
                            {Math.round(celsius)}˚C
                        </Card.Text>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
}
 
export default SelectdCityCard;