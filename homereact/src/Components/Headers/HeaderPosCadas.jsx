import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { faQuestionCircle, faRobot, faUserEdit, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import logo from '../img/logo.png'
import perfil from '../img/icon-usuario.png'
import Modal from 'react-bootstrap/Modal'

import {Link} from 'react-router-dom'

export default function HeaderPosCadas() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


return(
<>
    {/*
    <!-- inicio menu  --> */}
    <Navbar collapseOnSelect expand="lg" variant="light" className="back-menu m-0 p-0 d-flex justify-content-between">
        <div className="m-0 container-fluid ">
            <Link to="/home"><img src={logo} alt="cerebro meditando, nome: calmamente" className="logo m-0"></img></Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav className="">
                    <Link to="/estouemcrise" className="menu-di  mx-1 linkreact">Estou em crise</Link>
                    <Link to="/queromeacalmar" className="menu-di  mx-1 linkreact">Quero me acalmar</Link>
                    <Link to="/informacoes" className="menu-di  mx-1 linkreact">Informações</Link>
                    {/*
                    <!-- inicio do perfil --> */}
                    <div className="perfi-usu">
                        <button className="menu-dir mx-1" id="bt-perfi" onClick={handleShow}><img src={perfil}
                                className="men-home" alt=""></img></button>
                        <Modal className="modPerfil" show={show} onHide={handleClose}>
                            <Modal.Body>
                                <a href="#">
                                    <FontAwesomeIcon icon={faUserEdit} className=" ic-modal i-per-fil linkreact"
                                        style={{ color: "black" }} /></a>
                                <FontAwesomeIcon icon={faQuestionCircle} style={{ color: 'black', marginLeft: '37%' }}
                                    className="fas i-imusu" />
                                <h4 className="p-nomus ">Calmamente</h4>
                                <div className="hrPer"></div>
                                <h5 className="nomus-p">contatobejgg@gmail.com</h5>

                                <div className="hrPer"></div>
                                <a href="#" className="linkreact">
                                    <div className="per-falabo">
                                        <h6 className="pa-per" style={{ paddingTop: '2%' }}>Falar com o bot</h6>
                                        <FontAwesomeIcon icon={faRobot} className="ic-bot-per ic-fabo" />
                                    </div>
                                </a>
                            </Modal.Body>
                            <Modal.Footer>
                                <button type="button" className="bt-sape" id="idSaiPer" onClick={handleClose}>Sair
                                    <FontAwesomeIcon icon={faSignInAlt} className="fas ic-sape" /></button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    {/*
                    <!-- fim do perfil --> */}
                </Nav>
            </Navbar.Collapse>
        </div>
    </Navbar>
</>
)}