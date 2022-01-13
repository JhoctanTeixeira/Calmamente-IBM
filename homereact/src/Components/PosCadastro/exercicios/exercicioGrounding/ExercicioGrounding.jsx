import React, { useState } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function ExercicioGrounding() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

return(
<>
<HeaderPosCadas/>
    {/*
    <!-- inicio informação --> */}
    <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
        <button onClick={handleShow} style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }}
            data-bs-toggle="modal" data-bs-target="#exampleModal">
            <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>
    </div>

    {/*
    <!-- Inicio Modal do informação --> */}
    <Modal show={show} onHide={handleClose} style={{marginTop: '16%'}}>
        <Modal.Header closeButton>
            <Modal.Title>Personalisar</Modal.Title>
        </Modal.Header>
        <Modal.Body>Exercício de meditação</Modal.Body>
    </Modal>
    {/*
    <!-- fim modal do informação  --> */}
    {/*
    <!-- fim informação --> */}
    <FooterPosCadas/>
</>
)}