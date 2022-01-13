import React, { useState } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';


export default function EscritaTerapeutica() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <div id="container">
                <div id="main">

                    <HeaderPosCadas/>
                    {/* <!-- inicio informação --> */}
                    <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
                        <button onClick={handleShow} style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }} data-bs-toggle="modal" data-bs-target="#exampleModal"><FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>
                    </div>
                    {/* Inicio modal informação  */}
                    <Modal show={show} onHide={handleClose} style={{ marginTop: '16%' }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Personalisar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Escrita terapêutica</Modal.Body>
                    </Modal>
                    {/* <!-- fim modal do informação  --> */}
                    {/* <!-- fim informação --> */}

                    {/* <!-- inicio escrita terapêutica  --> */}
                    <h1 className="ti-escrita">Escrita terapêutica</h1>
                    <div className="formul-exercicios">
                        <div className="for-exercicios">
                            <form action="">
                                <fieldset>
                                    <textarea className="form-control caixa-escrita" name="limescr" id="limescr" aria-label="With textarea" style={{ width: '65vw' }}></textarea>
                                    <div class="di-bt-ex">
                                        <input className="bt-exercicios" type="reset" value="Limpar"/>
                                       
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    {/* <!-- fim escrita terapeutica  --> */}
                </div>
            </div>
            <FooterPosCadas/>
        </>
    )
}
