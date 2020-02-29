import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;

const currentconditionsBaseUrl = `${baseUrl}/currentconditions/v1/`;
const fiveDaysForecastsUrl = `${baseUrl}/forecasts/v1/daily/5day/`;

export default {
    //FIXME:
    getCurrConditions: () => {
        return [{"LocalObservationDateTime":"2020-02-27T18:40:00+02:00","EpochTime":1582821600,"WeatherText":"Some clouds","WeatherIcon":36,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":19.9,"Unit":"C","UnitType":17},"Imperial":{"Value":68,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}];
    },
    getFiveDaysForecasts: (locationKey, {signal}) => {
        return {DailyForecasts: [{"Date": "2020-02-28T07:00:00+02:00","Temperature": {"Minimum": {"Value": 56,"Unit": "F","UnitType": 18},"Maximum": {"Value": 74,"Unit": "F","UnitType": 18}},},{"Date": "2020-02-29T07:00:00+02:00","Temperature": {"Minimum": {"Value": 55,"Unit": "F","UnitType": 18},"Maximum": {"Value": 65,"Unit": "F","UnitType": 18}},},{"Date": "2020-03-01T07:00:00+02:00","Temperature": {"Minimum": {"Value": 54,"Unit": "F","UnitType": 18},"Maximum": {"Value": 64,"Unit": "F","UnitType": 18}},},{"Date": "2020-03-02T07:00:00+02:00","Temperature": {"Minimum": {"Value": 49,"Unit": "F","UnitType": 18},"Maximum": {"Value": 65,"Unit": "F","UnitType": 18}},},{"Date": "2020-03-03T07:00:00+02:00","Temperature": {"Minimum": {"Value": 52,"Unit": "F","UnitType": 18},"Maximum": {"Value": 70,"Unit": "F","UnitType": 18}},}]};
    },
    // getFiveDaysForecasts: (locationKey, {signal}) => {
    //     return fetch(
    //         `${fiveDaysForecastsUrl}${locationKey}?apikey=${apiKey}&metric=true`,
    //         {signal})
    //         .then(response => response.json())
    //         .then(json => json);
    // },
    // getCurrConditions: (locationKey, {signal}) => {
    //     return fetch(
    //         `${currentconditionsBaseUrl}${locationKey}?apikey=${apiKey}`,
    //         {signal})
    //     .then(response => response.json())
    //     .then(json => json);
    // },
}