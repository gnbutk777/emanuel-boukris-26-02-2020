import {createStore} from 'redux';
import favoritesReducer from '../modules/favorites/reducer';


let store = createStore(favoritesReducer);


export default store;