import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;
const currentconditionsBaseUrl = `${baseUrl}/currentconditions/v1/`;

export default {
    //FIXME:
    getCurrConditions: () => {
        return [{"LocalObservationDateTime":"2020-02-27T18:40:00+02:00","EpochTime":1582821600,"WeatherText":"Some clouds","WeatherIcon":36,"HasPrecipitation":false,"PrecipitationType":null,"IsDayTime":false,"Temperature":{"Metric":{"Value":19.9,"Unit":"C","UnitType":17},"Imperial":{"Value":68,"Unit":"F","UnitType":18}},"MobileLink":"http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us","Link":"http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"}];
    }
    // getCurrConditions: (locationKey, {signal}) => {
    //     return fetch(
    //         `${currentconditionsBaseUrl}${locationKey}?apikey=${apiKey}`,
    //         {signal})
    //     .then(response => response.json())
    //     .then(json => json);
    // },
}