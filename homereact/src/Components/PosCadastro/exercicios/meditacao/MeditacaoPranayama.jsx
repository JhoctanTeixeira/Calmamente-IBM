import React, { useState } from 'react'
import { faInfoCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gifRespira from '../../../img/respiracao.gif'
import instruBarriga from '../../../img/respBarriga.jpg'
import instruEntrelaca from '../../../img/postura.png'
import { Link } from 'react-router-dom';
import VisnhuMudra from '../../../img/vishnu.jpg'
import cicloVish from '../../../img/vishnu.gif'
import Modal from 'react-bootstrap/Modal'
import FooterPosCadas from '../../../Footers/FooterPosCadas';
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';

export default function MeditacaoPranayama() {

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
            <div onClick={handleShow} className="d-flex justify-content-end mrgr-media mrgt-pequena">
                <button onClick={handleShow} style={{ border: 'none', backgroundColor: 'rgba(240, 248, 255, 0)' }} data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <FontAwesomeIcon icon={faInfoCircle} className="tam-exercicio" /></button>
            </div>
            {/* <!-- Inicio Modal do informação --> */}
            <Modal show={show} onHide={handleClose} style={{marginTop: '16%'}}>
                <Modal.Header closeButton>
                    <Modal.Title>Personalisar</Modal.Title>
                </Modal.Header>
                <Modal.Body>Exercício de meditação com pranayama</Modal.Body>
            </Modal>
            {/* <!-- fim modal do informação  --> */}
            {/* <!-- fim informação --> */}

            {/*<!-- inicio respiração --> */}
            <h1 className="ti-escrita">Exercício de respiração</h1>
            <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                {/* inicio da parte um  */}
                <div>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Primeiro entenda como fazer um pranayama, primeiramente deve-se posicionar a mão em vishnu mudra, posteriormente seguir o ritmo de respiração, alternando entre as narinas. Veja o vídeo de explicação</h4>
                    </div>
                    <div className=" responsCardResp  mrgb-media">
                        <div style={{ width: '40%' }}>
                            <img src={VisnhuMudra} alt="gif de respiração" className="ImgResp1" />
                        </div>
                        <div style={{ width: '35%' }}>
                            <img src={cicloVish} alt="gif de respiração" className="ImgResp2" />
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mrgb-media">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SZ8Hrhc4XZc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btnContinuarResp" onClick={() => setAparecer({ display: 'block' })}><FontAwesomeIcon icon={faChevronDown} className={invisiIco}></FontAwesomeIcon></button>
                    </div>
                </div>
                {/* fim da parte um  */}
                {/* inicio da parte dois  */}
                <div style={aparecer}>
                    <div className=" mrgt-grande">
                        <h4 className="ti-escrita">Agora que já sabe fazer um pranayama, inicie a meditação guiada. Obs: Você pode inspirar e expirar no tempo que desejar, desde que seja mais longo do que o normal, e no mesmo tempo.</h4>
                    </div>
                    <div className="responsCardResp  mrgb-media">
                        <div style={{ height: '40%' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/V7ijbyyKEbg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                {/* fim da parte dois  */}
            </div>
            {/* <!-- fim respiração  --> */}
            <FooterPosCadas/>
        </>
    )
}