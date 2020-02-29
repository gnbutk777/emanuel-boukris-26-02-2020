import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useEffect } from 'react';

const CustomModal = ({modalData, setModalData}) => {
    const {isShowModal, title, text} = modalData;

    return (
        <Modal
            size="sm"
            show={isShowModal}
            onHide={() => setModalData({isShowModal: false})}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
                {title}
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>{text}</Modal.Body>
        </Modal>
    );
}
 
export default CustomModal;