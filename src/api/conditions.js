import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;

const currentconditionsBaseUrl = `${baseUrl}/currentconditions/v1/`;
const fiveDaysForecastsUrl = `${baseUrl}/forecasts/v1/daily/5day/`;

export default {
    getFiveDaysForecasts: (locationKey, {signal}) => {
        return fetch(
            `${fiveDaysForecastsUrl}${locationKey}?apikey=${apiKey}&metric=true`,
            {signal})
            .then(response => response.json())
            .then(json => json)
            .catch(error => {
                throw new Error(error);
           })
    },
    getCurrConditions: (locationKey, {signal}) => {
        return fetch(
            `${currentconditionsBaseUrl}${locationKey}?apikey=${apiKey}`,
            {signal})
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
            throw new Error(error);
       })
    },
}