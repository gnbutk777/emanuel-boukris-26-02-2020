import React, {useState, useEffect, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import OneDayForcast from '../OneDayForcast';
import  ModalContext from "../../hooks/ModalContext";
import api from '../../api';

const WeekSumCard = ({selectedCityKey}) => {
    const [fiveDaysData, setFiveDaysData] = useState(() => {
        return new Array(5).fill({});
    });
    const [isLoading, setisLoading] = useState(true);
    const {setModalData} = useContext(ModalContext);

    const getFiveDaysForecasts = async (locationKey, signal) => {
        try {
            const data = await api.getFiveDaysForecasts(locationKey, signal);
            const newData = data.DailyForecasts.map((oneDayData) => {
                const day = new Date(oneDayData.Date).toString().slice(0,3);
                const minTem = oneDayData.Temperature.Minimum.Value;
                const maxTem = oneDayData.Temperature.Maximum.Value;
                const averageTemp = (minTem + maxTem) / 2;

                return ({day,temperature: averageTemp});
            });

            setFiveDaysData(newData);
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
        getFiveDaysForecasts(selectedCityKey, signal);

        return () => {
            controller.abort();
        }
        
    },[selectedCityKey]);

    return (
        <Row className="flex-column flex-sm-row align-self-center justify-content-center m-4">
            {
                fiveDaysData.map((oneDayData, index)=> {
                    const {day, temperature} = oneDayData;
                    const key = selectedCityKey + index;
                    return <OneDayForcast key={key} isLoading={isLoading} day={day} temperature={temperature}/>
                })
            }       
        </Row>
    )
}
 
export default WeekSumCard;