import React, { useState } from 'react'
import { faInfoCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import ImgParada from '../../../img/paradaBalao.png'
import ImgPensar from '../../../img/balaoPensar.png'
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function ExercicioParadaPensamento() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [secondsX, setSecondsX] = useState(60);
    const [secondsY, setSecondsY] = useState('');
    const [comecar, setComecar] = useState(false);
    const [pensar, setPensar] = useState({ display: 'block ' })
    const [parar, setParar] = useState({ display: 'none' })

    React.useEffect(() => {
        // inicio parte um 
        if (comecar == true) {
            if (secondsX > 0) {
                setTimeout(() => setSecondsX(secondsX - 1), 1000)
            }
            if (secondsX == 9) {
                setSecondsY(0)
            }
            if (secondsX == 0) {
                setPensar({ display: 'none' })
                setParar({ display: 'block' })
            }

        }
    });


    return (
        <>
        <HeaderPosCadas/>
            {/* <!-- inicio informação --> */}
            <div className="d-flex justify-content-end mrgr-media mrgt-pequena">
                <button onClick={handleShow} style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>
            </div>

            {/* <!-- Inicio Modal do informação --> */}
            <Modal show={show} onHide={handleClose} style={{ marginTop: '16%' }}>
                <Modal.Header closeButton>
                    <Modal.Title>Personalisar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Exercício Parada Pensamento</Modal.Body>
            </Modal>
            {/* <!-- fim modal do informação  --> */}
            {/* <!-- fim informação --> */}

            <div>
                <div className=" mrgt-grande">
                    <h4 className="ti-escrita">Foque no pensamento que está te perturba durante 1 minuto, quando o tempo acabar grite PARE!!!</h4>
                </div>
                <div className="responsCardResp  mrgb-media">
                    {/* <p className="mrgl-grande"></p> */}
                    <div style={{ marginTop: '2%' }} >
                        <div className="responsTimer">
                            <div className="timeParada">
                                <p style={{ fontSize: '30px' }}>00:{secondsY}{secondsX}</p>
                            </div>
                            <button onClick={() => setComecar(true)} className="btn btn-primary " style={{ backgroundColor: '#03a3ff', borderRadius: '0 0 5px 5px' }}>Começar</button>
                        </div>
                    </div>
                    <div style={pensar}>
                        <img src={ImgPensar} className="imPensarParar" />
                    </div>
                    <div style={parar}>
                        <img src={ImgParada} className="imPensarParar" />
                    </div>
                </div>
            </div>
            <FooterPosCadas/>
        </>
    )
}



