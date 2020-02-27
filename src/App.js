import React from "react";
// import Navbar from "react-bootstrap/Navbar";

import Router from './router';
import Navbar from "./component/Navbar";
import { Provider } from 'react-redux';
import store from './redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';



function App() {
  return (
    <Provider store={store}>
      <Router
        Header={<Navbar/>}
      />
      </Provider>
  );
}


export default App;
