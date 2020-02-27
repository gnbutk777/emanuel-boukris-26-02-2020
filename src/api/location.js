import {weatherApi} from './weatherConfig';


const {baseUrl, apiKey } = weatherApi;

const locaCityUrl = "/locations/v1/cities/autocomplete";

export default {
    //FIXME:
    getCities: () => {
        return [
            {LocalizedName: 'tel-aviv', Key: '215854'},
            {LocalizedName: 'Telanaipura', Key: '3431644'},
            {LocalizedName: 'Telford', Key: '325876'},
        ]
    }
    // getCities: (cityName, {signal}) => {
    //     return fetch(
    //         `${baseUrl}${locaCityUrl}?apikey=${apiKey}&q=${cityName}`,
    //         {signal})
    //     .then(response => response.json())
    //     .then(json => json);
    // },
}