import React, {useState, useEffect, useContext} from 'react';
import { Card } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import  ModalContext from "../../hooks/ModalContext";
import api from '../../api';

const FavoriteSingleCard = ({cityKey, cityName}) => {
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const {setModalData} = useContext(ModalContext);

    const getCurrConditions = async (currentKey,signal) => {
        try {
            const data = await api.getCurrConditions(currentKey, signal);
            const temperature = data[0].Temperature.Metric.Value;
            const weatherText = data[0].WeatherText;
            
            setData({temperature, weatherText});
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
    }  
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        setisLoading(true);
        getCurrConditions(cityKey, signal);

        return () => {
            controller.abort();
        }
    },[cityKey]);


    return (
        <Card.Body className="text-center">
            <Card.Title>{cityName}</Card.Title>
            {
                isLoading ? 
                    <Spinner animation="border" size="xl" className="align-self-center m-4"/>
                :
                    <Card>
                        <Card.Text>
                            {Math.round(data.temperature)}˚C
                        </Card.Text>
                        <Card.Text>
                            {data.weatherText}
                        </Card.Text>
                    </Card>
            }
        </Card.Body>
    );
}
 
export default FavoriteSingleCard;