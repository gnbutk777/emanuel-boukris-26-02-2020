import React, {useState} from "react";
// import Navbar from "react-bootstrap/Navbar";

import Router from './router';
import Navbar from "./component/Navbar";
import Modal from "./component/Modal";
import  ModalContext from "./hooks/ModalContext";
import store from './redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';

function App() {
  const [modalData, setModalData] = useState({});


  return (
    <Provider store={store}>
      <ModalContext.Provider value={
        {setModalData: (isShowModal, title, text) => setModalData({isShowModal, title, text})}
        }>
        <Router
          Header={<Navbar/>}
        />
        <Modal setModalData={setModalData} modalData={modalData}/>
      </ModalContext.Provider>
      </Provider>
  );
}


export default App;
