import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Carousel1 from '../../img/carousel1.jpg'
import Carousel2 from '../../img/carousel2.png'
import Carousel3 from '../../img/carousel3.jpg'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../img/logo.png'
import logoIcon from '../../img/logo-icon.png'
import facebook from '../../img/facebook-logo.png'
import twitter from '../../img/twitter-logo.png'
import instagram from '../../img/instagram-logo.png'
import useMediaQuery from '../query/useMediaQuery';
import IndexSemCarousel from '../query/IndexSemCarousel';

export default function Index() {
//inicio da responsividade dos botões
//precisavamos de um "media queries pro jsx"
//creating states
const [CarouselCaption, setCarouselCaption] = useState('carousel-caption d-flex justify-content-center bor-bot')

// constructor(props) {
// super(props)
// this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
// }

// componentDidMount(){
// const handler = e => this.setState({matches: e.matches});
// window.matchMedia("(min-width: 768px)").addEventListener('change', handler);
// }
// fim da responsividade dos botões da index

// let removeBtn = useMediaQuery('(max-width: 710px)')

return (

<>
    <div id="container">
        <div id="main">
            

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



            {/* caroussel react inicio */}
            <Carousel fade>
                <Carousel.Item>
                    <img className="d-block w-100" src={Carousel2} alt="First slide" />
                    <div className={CarouselCaption}>
                        {/* {removeBtn && <IndexSemCarousel/>} */}
                        <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter"
                            style={{padding: '2%'}}>Conheça nosso site</Link>
                        <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise"
                            style={{padding: '2%'}}> Estou em crise</Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={Carousel1} alt="Second slide" />
                    <div className={CarouselCaption}>
                    {/* {removeBtn && <IndexSemCarousel/>} */}

                        <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter"
                            style={{padding: '2%'}}>Conheça nosso site</Link>
                        <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise"
                            style={{padding: '2%'}}> Estou em crise</Link>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    
                    <img className="d-block w-100" src={Carousel3} alt="Third slide" />
                    <div className={CarouselCaption}>
                    {/* {removeBtn && <IndexSemCarousel/>} */}

                        <Link to="/cadastro" className="linkreact btn btn-outline-info btn-inicial-enter"
                            style={{padding: '2%'}}>Conheça nosso site</Link>
                        <Link to="/estoutendoumacrise" className="linkreact btn btn-outline-danger btn-inicial-crise"
                            style={{padding: '2%'}}> Estou em crise</Link>
                    </div>
                </Carousel.Item>
            </Carousel>
            {/* caroussel react fim */}

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