import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;

const locaCityUrl = "/locations/v1/cities/autocomplete";

export default {
    getCities: (cityName, {signal}) => {
        return fetch(
            `${baseUrl}${locaCityUrl}?apikey=${apiKey}&q=${cityName}`,
            {signal})
        .then(response => response.json())
        .then(json => json)
        .catch(error => {
             throw new Error(error);
        })
    },
}