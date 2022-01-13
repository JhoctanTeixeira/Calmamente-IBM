import React, { useState } from 'react'
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from 'react-bootstrap/Modal'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';


export default function MusicaDeUsoTerapeutico() {
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
         <Modal show={show} onHide={handleClose} style={{ marginTop: '16%' }}>
            <Modal.Header closeButton>
               <Modal.Title>Personalisar</Modal.Title>
            </Modal.Header>
            <Modal.Body>Exercício de musica como uso terapeutico</Modal.Body>
         </Modal>
         {/* <!-- fim modal do informação  --> */}
         {/* <!-- fim informação --> */}


         {/*<!-- inicio musica de uso terapeutico --> */}
         <h1 className="ti-escrita">Exercício de musica como uso terapeutico</h1>
         <div className="mrgx-pequena mrgt-pequena mrgb-pequena">
            <div className="row m-0 row-cols-1 row-cols-md-2 g-4">
               <div className="col">
                  <div className="ho-bor">
                     {/*<Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315"
                           src="https://www.youtube.com/embed/cyOnSOPGTrQ" title="YouTube video player" frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> A constância rítmica e sonora
                              emitida pelos mesmos tipos de instrumentos,
                              com pequenas variações melódicas e harmônicas, e a inserção de leves
                              sonoridades como o de um movimento constante de águas e emissões sonoras de
                              animais, podem remeter a ambientes seguros e tendem a fazer com que nos
                              sintamos integrados a um todo maior, o qual respeitamos e confiamos – a natureza
                              com suas energias e forças inexoráveis, inspirando-nos assim confiança e,
                              consequentemente tranquilidade e paz interior.
                           </p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/*<!-- card 2 --> */}
               <div className="col">
                  <div className="ho-bor">
                     {/*Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315"
                           src="https://www.youtube.com/embed/RNS9QHVIoB8" title="YouTube video player" frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> A constância rítmica e sonora
                              emitida pelos mesmos tipos de instrumentos,
                              com pequenas variações melódicas e harmônicas, e a inserção de leves
                              sonoridades dos movimentos constantes das águas em contato com a planta
                              bambu, remetem, de alguma forma, a questões de longevidade e confiança,
                              podendo baixar os níveis de ansiedade, promovendo tranquilidade e paz.</p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/* card 3 */}
               <div className="col">
                  <div className="ho-bor">
                     {/*<Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315"
                           src="https://www.youtube.com/embed/-RH-lM2BMcQ" title="YouTube video player" frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> O ritmo marcado somente pela
                              duração das notas musicais e/ou pelas
                              mudanças no acompanhamento harmônico, ou seja, a execução de notas mais
                              longas e harmonias com menos movimentos, caracterizado principalmente por
                              baixos mais constantes e fixos, auxiliam para a diminuição do ritmo dos
                              pensamentos, caso a pessoa consiga colocar a mente exclusivamente para
                              acompanhar os movimentos musicais.</p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/*<!-- card 4 --> */}
               <div className="col">
                  <div className="ho-bor">
                     {/* <Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315"
                           src="https://www.youtube.com/embed/QJ6j77GjdFQ" title="YouTube video player" frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> Um ritmo definido somente pela
                              longa duração das notas musicais,
                              composto somente pelas fundamentais na composição harmônica, auxiliam para a
                              diminuição do ritmo dos pensamentos, caso a pessoa consiga colocar a mente
                              exclusivamente para acompanhar os movimentos musicais.
                           </p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/*<!-- card 5 --> */}
               <div className="col">
                  <div className="ho-bor">
                     {/*<Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/dNGkWXGFm7Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> Sons de movimento de água no fundo do mar, remetem às sonoridades do
                              ventre materno. Podem acalmar durante um tempo, porém, dependendo do caso e
                              4
                              do tempo de exposição, pode provocar uma espécie de regressão emocional,
                              momentos de angústia e até mesmo provocar um efeito iatrogênico, caso a pessoa
                              exposta a esse tipo de sonoridade tenha experimentado momentos de medo, por
                              exemplo, durante a gestação.

                           </p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/* <!-- card 6 --> */}
               <div className="col">
                  <div className="ho-bor">
                     {/*<Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/thV2k1Ws3x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> Embora sejam sons gravados, os ritmos e sons fluem sem o controle
                              humano, pois que ocorrem naturalmente. Essa rítmica mais livre, porém, de uma
                              constância maior, remete o subconsciente ao fato de que algo maior está no
                              comando, o que pode levar a uma certa confiança e tranquilidade, diminuindo os
                              níveis de ansiedade, caso a pessoa se entregue com esse propósito a esse tipo de
                              escuta. Porém, dependendo da pessoa e das experiências vividas por ela, pode
                              provocar insegurança e até mesmo sensação de impotência.
                           </p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
               {/* <!-- card 7 --> */}
               <div className="col">
                  <div className="ho-bor">
                     {/* <Link to="/" className="linkreact"> */}
                     <div className="card h-100" style={{ border: "0px", position: "static" }}>
                        <iframe className="card-img-top" width="560" height="315" src="https://www.youtube.com/embed/7Lm2skxgM6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div className="d-flex justify-content-center mrgt-media">
                        </div>
                        <div className="card-body esp-car">
                           <h5 className="card-title d-flex justify-content-center titulos">Elementos sonoros que acalmam:
                           </h5>
                           <p className="card-text textos " style={{ textAlign: 'justify' }}> A constância rítmica e sonora emitida pelos mesmos tipos de instrumentos,
                              com pequenas variações melódicas e harmônicas, e a inserção de leves
                              sonoridades como o de um movimento constante de águas e emissões sonoras de
                              animais, podem remeter a ambientes seguros e tendem a fazer com que nos
                              sintamos integrados a um todo maior, o qual respeitamos e confiamos – a natureza
                              com suas energias e forças inexoráveis, inspirando-nos assim confiança e,
                              consequentemente tranquilidade e paz interior.
                           </p>
                        </div>
                     </div>
                     {/* </Link> */}
                  </div>
               </div>
            </div>
         </div>
         {/*<!-- fim Musica de uso terapeutico --> */}
         <FooterPosCadas/>
      </>
   )
}