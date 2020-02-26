import React from "react";
// import Navbar from "react-bootstrap/Navbar";

import Router from './router';
import Navbar from "./component/Navbar";

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router
      Header={<Navbar/>}
    />
  );
}


export default App;
