import locationApi from './location';
import conditions from './conditions';

const api = {
    ...locationApi,
    ...conditions
}
export default api;
