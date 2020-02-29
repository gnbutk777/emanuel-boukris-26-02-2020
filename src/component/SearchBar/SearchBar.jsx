import React,{useState, useEffect, useContext} from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typeahead } from 'react-bootstrap-typeahead';
import useDebounce from '../../hooks/useDebounce';
import  ModalContext from "../../hooks/ModalContext";
import api from '../../api';

const SearchBar = ({onSelectCity}) => {
    const [options, setoptions] = useState([]);
    const [value, setvalue] = useState('');
     const debouncedSearchTerm = useDebounce(value, 250);
     const {setModalData} = useContext(ModalContext);

     const getCities = async (oldValue, signal) => {
        try {
            const cities = await api.getCities(oldValue, {signal});
            const mapCities = cities.map((city) => {
                const {LocalizedName, Key} = city;
                return {name: LocalizedName, key: Key};
            })
            setoptions(mapCities);
        }
        catch(error) {
            if (error.name === 'AbortError') {
                console.log('Fetch aborted');
            }
            else {
                setModalData(true, "error", error.message);
            }
        };
    }

     useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

         if (debouncedSearchTerm) {
            getCities(debouncedSearchTerm, signal);
        }
        else {
            setoptions([]);
        }

        return () => {
            controller.abort();
        }
     },[debouncedSearchTerm]);

    return (
        <Row className="justify-content-center">
            <Form.Group as={Col} xs="10" md="5">
                <Typeahead
                    options={options}
                    labelKey={option => `${option.name}`}
                    id="TypeaheadCity"
                    onInputChange={setvalue}
                    onChange={onSelectCity}
                    placeholder="Search city"
                />
            </Form.Group>
        </Row>
    );
}
 
export default SearchBar;