import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;

export default {
    getCity: () => {
        return [{LocalizedName: 'tel-aviv', key: '4445'}]
    }
    // getCity: (cityName, {signal}) => {
    //     return fetch(
    //         `${baseUrl}/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}`,
    //         {signal})
    //     .then(response => response.json())
    //     .then(json => json);
    // },
}