import React, { useState } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pranayama from '../../../img/pranayama.jpg'
import Medita from '../../../img/meditation.jpg'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function Meditacao() {
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

            {/*<!-- inicio meditação --> */}
            <h1 className="ti-escrita">Exercício de meditação</h1>
            <div className="mrgx-pequena mrgt-pequena mrgb-pequena">
                <div className="row m-0 row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="ho-bor">
                            <Link to="/meditacaoGuiada" className="linkreact">
                                <div className="card h-100" style={{ border: "0px", position: "static" }}>
                                    <img src={Medita} className="card-img-top" alt="Pranayama" />
                                    <div className="d-flex justify-content-center mrgt-media">
                                    </div>
                                    <div className="card-body esp-car">
                                        <h5 className="card-title d-flex justify-content-center titulos">Meditação guiada</h5>
                                        <p className="card-text textos " style={{ textAlign: 'center' }}>Meditação guiada pela fala para ajudar a diminuir a ansiedade</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/*<!-- card 2 --> */}
                    <div className="col">
                        <div className="ho-bor">
                            <Link to="/meditacaoPranayama" className="linkreact">
                                <div className="card h-100" style={{ border: "0px", position: "static" }}>
                                    <img src={Pranayama} class="card-img-top" alt="Pranayama" />
                                    <div className="d-flex justify-content-center mrgt-media">
                                    </div>
                                    <div className="card-body esp-car">
                                        <h5 className="card-title d-flex justify-content-center titulos">Meditação com pranayama
                                        </h5>
                                        <p className="card-text textos " style={{ textAlign: 'center' }}>Meditação guiada pela fala, com princípios do controle da entrada e saida de prana (ar), para ajudar a diminuir a ansiedade e trazer um maior controle sob a respiração</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/*<!-- fim meditação --> */}
            <FooterPosCadas/>
        </>
    )
}