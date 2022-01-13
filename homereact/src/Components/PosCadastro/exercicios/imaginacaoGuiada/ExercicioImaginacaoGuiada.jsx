import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import IGuiada1 from '../../../img/i-guiada1.jpg';
import IGuiada2 from '../../../img/i-guiada2.jpg';
import IGuiada3 from '../../../img/i-guiada3.jpg';
import IGuiada4 from '../../../img/i-guiada.jpg';
import Modal from 'react-bootstrap/Modal'
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function ExercicioImaGuia() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <HeaderPosCadas/>
         {/* <!-- inicio informação --> */}
         <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
                        <button onClick={handleShow} style={{border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio"/></button>                    
                    </div>

                    {/* <!-- Inicio Modal do informação --> */}
                    <Modal show={show} onHide={handleClose} style={{marginTop: '16%'}}>
                        <Modal.Header closeButton>
                            <Modal.Title>Personalisar</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Imaginação guiada</Modal.Body>
                    </Modal>   
                    {/* <!-- fim modal do informação  --> */}       
                    {/* <!-- fim informação --> */}

            <div className=" mrgt-media">
                <h4 className="ti-escrita">Através dessas imagens ou de outras que vierem em sua mente, crie histórias com muitos detalhes como cheiros, sons e temperatura do ambiente para poder relaxar </h4>

            </div>

            <Carousel className="mrgb-media">
                <Carousel.Item >
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada1}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item >
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada2}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada3}
                        alt=""
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-flex w-100 ima-guiada"
                        src={IGuiada4}
                        alt=""
                    />
                </Carousel.Item>
            </Carousel>
            <FooterPosCadas/>
        </>
    )
}



