
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ExercicioCheiro from '../../PosCadastro/exercicios/exerciciocheiro/ExercicioCheiro.jsx'
import Exerciciomao from '../../PosCadastro/exercicios/exerciciomao/Exerciciomao.jsx'
import ExercicioSom from '../../PosCadastro/exercicios/exerciciosom/ExercicioSom.jsx'
import ExercicioVisao from '../../PosCadastro/exercicios/exerciciovisao/ExercicioVisao.jsx'
import ExercicioGosto from '../../PosCadastro/exercicios/exerciciogosto/ExercicioGosto.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../img/carousel1.jpg'
import Carousel2 from '../../img/carousel2.png'
import Carousel3 from '../../img/carousel3.jpg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'

export default function EstouTendoUmacrise() {

    const [show, setShow] = useState(0);
    const [pagi, setPagi] = useState(<ExercicioVisao />);
    const atribuidor = (valor) => {
        setShow(valor)
        switch (show) {      
            case 1:
                setPagi(<ExercicioSom />)
                break;
            case 2:
                setPagi(<ExercicioCheiro/>)
                break;
            case 3:
                setPagi(<ExercicioGosto />)
                break;
            default:
                setPagi(<Exerciciomao />)
                break;
        }
    }

    
    return (
        <>
            {/*
            <!-- inicio menu  --> */}
            <Navbar collapseOnSelect expand="lg" variant="light"
                className="back-menu m-0 p-0 d-flex justify-content-between">
                <div className="m-0 container-fluid ">
                    <Link to="/index"><img src={Logo} alt="cerebro meditando, nome: calmamente"
                        className="logo m-0"></img>
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="">
                            <hr />
                            <Link to="/login" className="menu-di  mx-1 linkreact" aria-current="page">Login</Link>
                            <Link to="/cadastro" className="menu-dir mx-1 linkreact">Cadastre-se</Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            {/*
            <!-- fim menu --> */}

            <div id="container">
                <div id="main">
                    {/* <!-- inicio card do iframe  --> */}
                    <div className="card quadro-ifra">
                        <div>
                            {pagi}
                        </div>
                        <div className="card-body">
                            <div className="position-relative m-4">                            
                                <div style={{ height: '1px' }}>
                                    <div style={{ width: '50%' }}></div>
                                </div>
                                <button onClick={() => atribuidor((show - 1))} type="button" className="position-absolute  translate-middle btn btn-primary"
                                    id="inicio">Voltar</button>

                                <Link to="/index"> <button type="button" className="position-absolute translate-middle btn btn-primary" id="estouCalmo">Estou mais calmo</button>
                                </Link>

                                <button onClick={() => atribuidor((show + 1))} type="button" className="position-absolute  translate-middle btn btn-primary" id="estouCrise">Próximo</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim card do iframe  --> */}
                </div>

            </div>

            {/*
    <!-- inicio rodapé --> */}
            <footer className="bg-dark m-0" id="roda">
                <div className=" rodape">
                    <div className="rodape-icone">
                        <img src={logoIcon} style={{ width: "100%" }} alt="" />
                    </div>

                    <div className="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/estoutendoumacrise"
                                    className="linkreact text-light roda-link font-weight-bold itens">Estou em
                                    crise</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                        </ul>

                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/cadastro" className="linkreact text-light roda-link font-weight-bold itens">Conheça
                                    nosso site</Link>
                            </li>
                            {/* <li className="text-muted roda-link itens">Estou em crise </li> */}
                            <li className="text-muted roda-link itens">Quero me acalmar </li>
                            <li className="text-muted roda-link itens">Informações </li>
                        </ul>
                    </div>

                    <div className="rodape-contatos ">
                        <ul
                            className="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md list-group-horizontal-xl">
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram}
                                alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter}
                                alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook}
                                alt="" /></a></li>
                        </ul>
                        <p className="text-light roda-email itens">contatobejgg@gmail.com</p>
                    </div>
                </div>
            </footer>
            {/*
    <!-- fim rodapé  --> */}
        </>
    )
}