import React, { useState } from 'react'
import gifRespira from '../../../img/respiracao.gif'
import Modal from 'react-bootstrap/Modal'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function MeditacaoGuiada() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <HeaderPosCadas/>
            {/* <!-- inicio informação --> */}
            <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
                <button onClick={handleShow} style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>
            </div>
            {/* <!-- Inicio Modal do informação --> */}
            <Modal show={show} onHide={handleClose} style={{marginTop: '16%'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Personalisar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Exercício de meditação</Modal.Body>
            </Modal>
            {/* <!-- fim modal do informação  --> */}
            {/* <!-- fim informação --> */}
            {/*<!-- inicio respiração --> */}
            <h1 className="ti-escrita">Exercício de meditação guiada</h1>

            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                {/* inicio da parte um */}
                <div>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Nesta meditação você irá se acalmar através da respiração e da percepção
                            corporal</h4>
                    </div>
                    <div className="responsCardResp  mrgb-media">
                        <div style={{ height: '40%' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/aryuZGoOgTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- fim respiração  --> */}
            <FooterPosCadas/>
        </>
    )
}