import React, { useState } from 'react'
import { faInfoCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gifRespira from '../../../img/respiracao.gif'
import instruBarriga from '../../../img/respBarriga.jpg'
import instruEntrelaca from '../../../img/postura.png'
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function Respiracao() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // primeira parte 
    const [secondsX, setSecondsX] = useState(30);
    const [secondsY, setSecondsY] = useState('');
    const [comecar, setComecar] = useState(false);
    const [continuar, setContinuar] = useState(true);
    const [aparecer, setAparecer] = useState({ display: 'none' })
    const [invisiIco, setInvisiIco] = useState('icoContinuarRespInvi')
    const [invisiBtn, setInvisiBtn] = useState('btnContinuarRespInvi')
    // fim da primeira parte 
    // inicio parte dois 
    const [secondsX2, setSecondsX2] = useState(30);
    const [secondsY2, setSecondsY2] = useState('');
    const [comecar2, setComecar2] = useState(false);
    const [continuar2, setContinuar2] = useState(true);
    const [aparecer2, setAparecer2] = useState({ display: 'none' })
    const [invisiIco2, setInvisiIco2] = useState('icoContinuarRespInvi')
    const [invisiBtn2, setInvisiBtn2] = useState('btnContinuarRespInvi')
    // fim parte dois 
    // inicio parte três 
    const [secondsX3, setSecondsX3] = useState(30);
    const [secondsY3, setSecondsY3] = useState('');
    const [comecar3, setComecar3] = useState(false);
    const [continuar3, setContinuar3] = useState({ pointerEvents: 'none' });
    const [continuar3X, setContinuar3X] = useState(true);
    // fim parte três 

    // ------------------------------------

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
                setContinuar(false)
                setInvisiIco('icoContinuarResp')
                setInvisiBtn('btnContinuarResp')
            }
        }
        // fim parte um 
        // inicio parte dois 
        if (comecar2 == true) {
            if (secondsX2 > 0) {
                setTimeout(() => setSecondsX2(secondsX2 - 1), 1000)
            }
            if (secondsX2 == 9) {
                setSecondsY2(0)
            }
            if (secondsX2 == 0) {
                setContinuar2(false)
                setInvisiIco2('icoContinuarResp')
                setInvisiBtn2('btnContinuarResp')
            }
        }
        // fim parte dois
        // inicio parte três 
        if (comecar3 == true) {
            if (secondsX3 > 0) {
                setTimeout(() => setSecondsX3(secondsX3 - 1), 1000)
            }
            if (secondsX3 == 9) {
                setSecondsY3(0)
            }
            if (secondsX3 == 0) {
                setContinuar3({ pointerEvents: 'auto' })
                setContinuar3X(false)
            }
        }
        // fim parte três  
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
                <Modal.Body>Exercício de respiração</Modal.Body>
            </Modal>
            {/* <!-- fim modal do informação  --> */}
            {/* <!-- fim informação --> */}

            {/*<!-- inicio respiração --> */}
            <h1 className="ti-escrita">Exercício de respiração</h1>

            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                {/* inicio da parte um  */}
                <div>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Respire junto com o gif durante 30 segundos</h4>
                    </div>
                    <div className="responsCardResp  mrgb-media">
                        <div style={{ height: '40%' }}>
                            <img src={gifRespira} alt="gif de respiração" style={{ width: '100%' }} />
                        </div>
                        <p className="mrgl-grande"></p>
                        <div className="responsTimer">
                            <div className="boxTimer">
                                <p style={{ fontSize: '30px' }}>00:{secondsY}{secondsX}</p>
                            </div>
                            <button onClick={() => setComecar(true)} className="btn btn-primary " style={{ backgroundColor: '#03a3ff', borderRadius: '0 0 5px 5px' }}>Começar</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button disabled={continuar} className={invisiBtn} onClick={() => setAparecer({ display: 'block' })}><FontAwesomeIcon icon={faChevronDown} className={invisiIco}></FontAwesomeIcon></button>
                    </div>
                </div>
                {/* fim da parte um  */}


                {/* inicio da parte dois  */}
                <div style={aparecer}>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Entrelace os dedos atrás das costas e estique os braços para baixo e para trás, estufe seu peito e respire</h4>

                    </div>
                    <div className=" responsCardResp  mrgb-media">
                        <div style={{ height: '40%' }}>
                            <img src={gifRespira} alt="gif de respiração" className="ImgResp1" />
                        </div>
                        <div style={{ height: '100%' }}>
                            <img src={instruEntrelaca} alt="gif de respiração" className="ImgResp2" />
                        </div>
                        <p className="mrgl-grande"></p>
                        <div className="responsTimer">
                            <div className="boxTimer">
                                <p style={{ fontSize: '30px' }}>00:{secondsY2}{secondsX2}</p>
                            </div>
                            <button onClick={() => setComecar2(true)} className="btn btn-primary" style={{ backgroundColor: '#03a3ff', borderRadius: '0 0 5px 5px' }}>Começar</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button disabled={continuar2} className={invisiBtn2} onClick={() => setAparecer2({ display: 'block' })}><FontAwesomeIcon icon={faChevronDown} className={invisiIco2}></FontAwesomeIcon></button>
                    </div>
                </div>
                {/* fim da parte dois  */}

                {/* inicio da parte três  */}
                <div style={aparecer2}>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Agora coloque as mãos sobre a barriga, ao inspirar infle a barriga, e ao expirar murche-a</h4>
                    </div>
                    <div className=" responsCardResp  mrgb-media">
                        <div style={{ height: '100%' }}>
                            <img src={gifRespira} alt="gif de respiração" className="ImgResp1" />
                        </div>
                        <div style={{ height: '100%' }}>
                            <img src={instruBarriga} alt="gif de respiração" className="ImgResp2" />
                        </div>
                        <p className="mrgl-grande"></p>
                        <div className="responsTimer">
                            <div className="boxTimer">
                                <p style={{ fontSize: '30px' }}>00:{secondsY3}{secondsX3}</p>
                            </div>
                            <button onClick={() => setComecar3(true)} className="btn btn-primary" style={{ backgroundColor: '#03a3ff', borderRadius: '0 0 5px 5px' }}>Começar</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button disabled={continuar3X} className="btn btn-primary btn-lg mrgb-media" style={{ backgroundColor: '#03a3ff' }}> <Link to="/" style={continuar3} className="linkreact estouMaisCResp"> Estou mais calmo </Link> </button>
                    </div>
                </div>
                {/* fim da parte três  */}
            </div>
            {/* <!-- fim respiração  --> */}
            <FooterPosCadas/>
        </>
    )
}