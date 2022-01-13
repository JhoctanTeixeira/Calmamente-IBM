import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Savana from '../../../img/savana.jpg'
import Surrrealtwo from '../../../img/surreal2.jpg'
import Surrealtree from '../../../img/surreal3.jpg'
import Surrealfor from '../../../img/surreal4.jpg'
import Surrealfive from '../../../img/surreal5.jpg'
import Surrealsix from '../../../img/surreal6.jpg'
import { faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas'

export default function EstimularCriatividadeHistorias() {

    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Historia, setHistoria] = useState("Selecione sua história ou inicie uma do zero com base nas imagens a baixo.")

    return (
        <>
        <HeaderPosCadas/>
            <div id="container">
                <div id="main" style={{overflowX: 'hidden'}}>
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
                        <Modal.Body>Criação de Histórias</Modal.Body>
                    </Modal>   
                    {/* <!-- fim modal do informação  --> */}       
                    {/* <!-- fim informação --> */}

                    {/* <!-- inicio estimulo de criatividade através da criação de histórias --> */}
                    <h1 className="ti-escrita">Criação de Histórias</h1>
                    <div className="hi">
                        <h4 className="hi-escrita">{Historia}</h4>
                    </div>
                    <div className="formul-exercicios">
                        <div className="for-exercicios">
                            <form action="">
                                <fieldset>
                                    <textarea className="form-control caixa-escrita" name="limescr" id="limescr"
                                        aria-label="With textarea" style={{width: '65vw'}}></textarea>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                    <div className="mrgx-grande mrgt-pequena">
                        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
                            <div className="col">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("O explorador está tomando um café reforçado junto com sua esposa e cachorro, pois hoje é um dia muito importante. Eles terminam de comer e partem na sua aventura, em busca de...")} >
                                    <div className="card h-100  ho-bor" >
                                        {/* <!-- <img src="..." className="card-img-top" alt="..."> --> */}
                                        <img src={Savana} className="card-img-top" alt="savana" />
                                        <div className="d-flex justify-content-center mrgt-media" >
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">Café da manhã na savana</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>O explorador está tomando um café reforçado junto com sua esposa e cachorro, pois hoje é um dia muito importante. Eles terminam de comer e partem na sua aventura, em busca de...</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("Seu avô já contava-lhe essa história desde que nasceu, a história de uma ilha nas nuvens, um lugar onde a maldade não existe e onde estão abrigados os últimos seres místicos do planeta, porém apenas um puro de coração poderia achar este local. E então quando o garoto fez 10 anos, desejou passar alguns dias no sítio de seu avô por uma semana como presente de aniversário. Chegando lá, o garoto se vira para o avô e lhe-faz a seguinte proposta...")} >
                                    <div className="card h-100  ho-bor" >
                                        <img src={Surrrealtwo} className="card-img-top" alt="..." />
                                        <div className="d-flex justify-content-center mrgt-media">

                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">A ilha nas nuvens</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>Seu avô já contava-lhe essa história desde que nasceu, a história de uma ilha nas nuvens, um lugar onde a maldade não existe e onde estão abrigados os últimos seres místicos do planeta, porém apenas um puro de coração poderia achar este local. E então quando o garoto fez 10 anos, desejou passar alguns dias no sítio de seu avô por uma semana como presente de aniversário. Chegando lá, o garoto se vira para o avô e lhe-faz a seguinte proposta... </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("Capitão: 'É dito nas lendas que o ser capaz de encontrar o fim do mundo receberia o tesouro mais precioso dos mares! O poder de controlar a Deusa Calypso! E homens... eu tenho um plano para conseguir chegar lá. Quem está comigo?!'. *Todos riem juntos em alto tom* Marujo: 'Para de ser louco.'")} >
                                    <div className="card h-100  ho-bor" >
                                        <img src={Surrealtree} className="card-img-top" alt="..." />
                                        <div className="d-flex justify-content-center mrgt-media">

                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">O capitão louco</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>Capitão: "É dito nas lendas que o ser capaz de encontrar o fim do mundo receberia o tesouro mais precioso dos mares! O poder de controlar a Deusa Calypso! E homens... eu tenho um plano para conseguir chegar lá. Quem está comigo?!". *Todos riem juntos em alto tom* Marujo: "Para de ser louco."</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col mrgb-pequena">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("Depois de anos da humanidade desmatando a natureza, acabando com as florestas e exterminando a fauna e a flora. Dois seres emergem do chão, utilizando em sua compozição os últimos resquícios de natureza do planeta. 'Vocês são os culpados por toda essa dor e sofrimento!'. E então os seres...")} >
                                    <div className="card h-100  ho-bor" >
                                        <img src={Surrealfor} className="card-img-top" alt="..." />
                                        <div className="d-flex justify-content-center mrgt-media">
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">Julgamento da natureza</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>Depois de anos da humanidade desmatando a natureza, acabando com as florestas e exterminando a fauna e a flora. Dois seres emergem do chão, utilizando em sua compozição os últimos resquícios de natureza do planeta. "Vocês são os culpados por toda essa dor e sofrimento!". E então os seres...</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col mrgb-pequena">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("O zebroceronte é um animal lendário africano que foi avistado por um caçador em sua região, esse caçador espalhou boatos da criatura por todos os lugares e caçadores do mundo todo começaram a disputar para ver quem conseguia primeiro a cabeça do animal. Um dia o zebroceronte foi gravemente ferido fugindo de um caçador e foi encontrado por um menino que conseguiu se aproximar dele e ajudou a cuidar de seus ferimentos, o menino então começa a ajudar o zebroceronte a achar um novo local para viver, onde os caçadores não poderão acha-lo mas o que o menino não imaginava é que...")} >
                                    <div className="card h-100  ho-bor" >
                                        <img src={Surrealfive} className="card-img-top" alt="rinoceronte com pele de zebra" />
                                        <div className="d-flex justify-content-center mrgt-media">

                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">O lendário Zebroceronte</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>O zebroceronte é um animal lendário africano que foi avistado por um caçador em sua região, esse caçador espalhou boatos da criatura por todos os lugares e caçadores do mundo todo começaram a disputar para ver quem conseguia primeiro a cabeça do animal.
                                                Um dia o zebroceronte foi gravemente ferido fugindo de um caçador e foi encontrado por um menino que conseguiu se aproximar dele e ajudou a cuidar de seus ferimentos, o menino então começa a ajudar o zebroceronte a achar um novo local para viver, onde os caçadores não poderão acha-lo mas o que o menino não imaginava é que...</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col mrgb-pequena">
                                <a href="#" className="linkreact" onClick={()=> setHistoria("Zarythos era o mais novo do grupo dos mestres intergaláticos, ele era a representação do amor, e sempre suas decisões eram movidas por esse amor a tudo e a todos. Chegou o momento da reunião de todos os mestres intergaláticos junto com o criador maior, o objetivo da reunião era decidir o destino de uma raça inteira de indivíduos, esta raça estava se desenvolvendo muito rapidamente em tecnologias, chegando a ser capazes de explorar outros lugares da existência pelo espaço, porém tinham o nível de moralidade muito baixo, o que era um risco a outras civilizações e raças. Chegando na reunião tinham aqueles mestres que já demonstravam mais compaixão e compreensão, enquanto outros eram mais racionais e calculistas. E é nesta situação que a reunião se inicia...")} >
                                    <div className="card h-100  ho-bor" >
                                        <img src={Surrealsix} className="card-img-top" alt="..." />
                                        <div className="d-flex justify-content-center mrgt-media">

                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title d-flex justify-content-center titulos">A reunião dos mestres</h5>
                                            <p className="card-text textos" style={{textAlign: 'justify'}}>Zarythos era o mais novo do grupo dos mestres intergaláticos, ele era a representação do amor, e sempre suas decisões eram movidas por esse amor a tudo e a todos. Chegou o momento da reunião de todos os mestres intergaláticos junto com o criador maior, o objetivo da reunião era decidir o destino de uma raça inteira de indivíduos, esta raça estava se desenvolvendo muito rapidamente em tecnologias, chegando a ser capazes de explorar outros lugares da existência pelo espaço, porém tinham o nível de moralidade muito baixo, o que era um risco a outras civilizações e raças. Chegando na reunião tinham aqueles mestres que já demonstravam mais compaixão e compreensão, enquanto outros eram mais racionais e calculistas. E é nesta situação que a reunião se inicia...    </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- fim estimulo da criatividade através da criação de histórias  --> */}

                </div>
            </div>
            <FooterPosCadas/>
        </ >
    )
}
