import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import { faInfoCircle, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import oriPassaro from '../../../img/origami-passaro.jpg'
import passoPassaro from '../../../img/passo-passaro.png'
import oriBorboleta from '../../../img/origami-borboleta.jpg'
import passoBorboleta from '../../../img/passo-borboleta.jpg'
import oriCachorro from '../../../img/origami-cachorro.png'
import passoCachorro from '../../../img/passo-cachorro.jpg'
import oriSapo from '../../../img/origami-sapo.jpg'
import passoSapo from '../../../img/passo-sapo.png'
import oriPeixe from '../../../img/origami-peixe.jpg'
import passoPeixe from '../../../img/passo-peixe.jpg'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';


export default function ExercicioOrgiami() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const [passaro, setPassaro] = useState(false);
    const handleClosePas = () => setPassaro(false);
    const handleShowPas = () => setPassaro(true);

    const [peixe, setPeixe] = useState(false);
    const handleClosePex = () => setPeixe(false);
    const handleShowPex = () => setPeixe(true);

    const [borboleta, setBorboleta] = useState(false);
    const handleCloseBor = () => setBorboleta(false);
    const handleShowBor = () => setBorboleta(true);

    const [sapo, setSapo] = useState(false);
    const handleCloseSap = () => setSapo(false);
    const handleShowSap = () => setSapo(true);

    const [cachorro, setCachorro] = useState(false);
    const handleCloseCac = () => setCachorro(false);
    const handleShowCac = () => setCachorro(true);
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
            <Modal.Body>Exercício Origami</Modal.Body>
         </Modal>
         {/* <!-- fim modal do informação  --> */}
         {/* <!-- fim informação --> */}

            <div className="ori-tu-tes">

                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />

                <main className="ori-sel">

                    {/* inicio card 1  */}
                    <div className="gami">
                        <Card className="ori-card" >
                            <Card.Img variant="top" src={oriPeixe} />
                            <Card.Body>
                                <Card.Title >Origami Peixe</Card.Title>
                                <Card.Text>
                                    Pegue um papel e crie o seu peixe fora d´água.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant="primary" onClick={handleShowPex}>Passo a Passo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* inicio modal do card 1  */}
                    <Modal show={peixe} onHide={handleClosePex}>
                        <Modal.Header closeButton>
                            <Modal.Title>Origami Peixe</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={passoPeixe} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            1°.Dobre ao meio ambas as diagonais marcando 1x1 e depois desdobre.
                            <hr className="hr-ori" />
                            2°.Dobre ao meio na vertical levando o lado direito até esquerda e depois desdobramos.
                            <hr className="hr-ori" />
                            3°.Agora dobramos os lados até o meio do primeiro direito depois o esquerdo e desdobramos.
                            <hr className="hr-ori" />
                            4°.Viramos do outro lado, dobramos ao meio novamente.
                            <hr className="hr-ori" />
                            5°.Virando a folha na horizontal
                            <hr className="hr-ori" />
                            6°.Dobramos ao meio o segundo quadradinho de cima dividindo na diagonal.
                            <hr className="hr-ori" />
                            7°.Fazemos a mesma coisa com o quadradinho em baixo.
                            <hr className="hr-ori" />
                            8°.Depois baixamos o lado direito achatando o papel.
                            <hr className="hr-ori" />
                            9°.Agora iremos fazer os mesmos processos do outro lado.
                            <hr className="hr-ori" />
                            10°.Traga a ponta de cima para o lado.
                            <hr className="hr-ori" />
                            11°.Agora faça a mesma coisa com a que está em baixo.
                            <hr className="hr-ori" />
                            12°.Dobramos ao meio na diagonal mais uma vez a que está em baixo levando para cima
                            <hr className="hr-ori" />
                            13°.Trazemos a ponta de cima para baixo.
                            <hr className="hr-ori" />
                            14°.depois levamos a ponta para cima
                            <hr className="hr-ori" />
                            15°.Dobramos os quadradinhos da frente mas não exatamente no meio(deixando ela meio inclinada)
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosePex}>
                                Sair
                            </Button>

                        </Modal.Footer>
                    </Modal>
                    {/* fim modal do card 1   */}
                    {/* fim card 1  */}

                    {/* inicio card 2 */}
                    <div className="gami">
                        <Card className="ori-card" >
                            <Card.Img variant="top" src={oriBorboleta} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            <Card.Body>
                                <Card.Title >Origami Borboleta </Card.Title>
                                <Card.Text>
                                    Um incrivel e delicado origami de borboleta
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant="primary" onClick={handleShowBor}>Passo a Passo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* inicio modal do card 2  */}
                    <Modal show={borboleta} onHide={handleCloseBor}>
                        <Modal.Header closeButton>
                            <Modal.Title>Origami Borboleta</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={passoBorboleta} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            1°. Com um papel com quatro lados iguais, dobre-o em quatro partes
                            <hr className="hr-ori" />
                            2°.Em seguida dobre novamente, mas use a marca do meio para fazer vincos em diagonal.
                            <hr className="hr-ori" />
                            3°.Puxe esse vinco horizontal que você fez no meio e crie um triângulo. Puxe e monte seu triângulo.
                            <hr className="hr-ori" />
                            4°.Agora puxe as abas para cima.
                            <hr className="hr-ori" />
                            5°.Veja como fica quando você dobra as duas abinhas para cima.
                            <hr className="hr-ori" />
                            6°.Vire e dobre, puxando a ponta para passar um pouco e fazer a dobra nessa mesma ponta, prendendo mais em cima.
                            <hr className="hr-ori" />
                            7°.Dobre a ponta.
                            <hr className="hr-ori" />
                            8°.Dobre no meio de forma vertical.
                            <hr className="hr-ori" />
                            9°.Vinque bem as dobras da borboleta e seu origami de borboleta vai estar pronto!

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseBor}>
                                Sair
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* fim modal do card 2   */}
                    {/* fim card 2  */}

                    {/* inicio card 3 */}
                    <div className="gami">
                        <Card className="ori-card" >
                            <Card.Img variant="top" src={oriPassaro} />
                            <Card.Body>
                                <Card.Title >Origami Pássaro</Card.Title>
                                <Card.Text style={{ textAlign: 'justify' }}>
                                    Pegue um pedaço de papel e se divirta montando esse origami.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant="primary" onClick={handleShowPas}>Passo a Passo </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* inicio modal do card 3  */}
                    <Modal show={passaro} onHide={handleClosePas}>
                        <Modal.Header closeButton>
                            <Modal.Title>Origami Pássaro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={passoPassaro} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            1°.Primeiro passo é separar uma folha e cortá-la em um formato quadrado de qualquer tamanho;
                            <hr className="hr-ori" />
                            2°.Dobre essa folha pela metade, formando um triângulo;
                            <hr className="hr-ori" />
                            3°.Dobre novamente na metade, formando assim outro triângulo menor;
                            <hr className="hr-ori" />
                            4°.Levante um dos cantos, insira um dedo na abertura e pressione para dobrar;
                            <hr className="hr-ori" />
                            5°.Vire e repita o passo anterior deste novo lado;
                            <hr className="hr-ori" />
                            6°.O lado fechado deve ficar para cima, siga dobrando uma lateral em direção a linha central da folha;
                            <hr className="hr-ori" />
                            7°.Repita o mesmo processo com a outra lateral;
                            <hr className="hr-ori" />
                            8°.Volte a repetir o passo anterior com o outro lado;
                            <hr className="hr-ori" />
                            9°.Após esse passo a dobra deve parecer um “sorvete”, dobre a ponta superior para baixo;
                            <hr className="hr-ori" />
                            10°.Desdobre as laterais e ponta de cima;
                            <hr className="hr-ori" />
                            11°.Levante a aba e dobre as laterais para o lado de dentro, usando as marcas de dobras para que formem um losango;
                            <hr className="hr-ori" />
                            12°.Repita o mesmo processo do outro lado;
                            <hr className="hr-ori" />
                            13°.Abra um pouco a dobra, traga a ponta para cima e pressione a base, fazendo o mesmo com a outra ponta;
                            <hr className="hr-ori" />
                            14°.Afaste um pouco as pontas centrais e pressione a base;
                            <hr className="hr-ori" />
                            15°.Escolha uma das pontas e faça uma pequena dobra, esse será o bico;
                            <hr className="hr-ori" />
                            16°.Puxe as dobras do lado, inflando assim o seu origami fácil pássaro e pronto!

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClosePas}>
                                Sair
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* fim modal do card 3   */}
                    {/* fim card 3 */}

                    {/* inicio card 4  */}
                    <div className="gami">
                        <Card className="ori-card" >
                            <Card.Img variant="top" src={oriSapo} />
                            <Card.Body>
                                <Card.Title >Origami Sapo</Card.Title>
                                <Card.Text>
                                    Um sapo muito divertido que pula de verdade
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant="primary" onClick={handleShowSap}>Passo a Passo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* inicio modal do card 4  */}
                    <Modal show={sapo} onHide={handleCloseSap}>
                        <Modal.Header closeButton>
                            <Modal.Title>Origami Sapo</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={passoSapo} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            OBS: Utilize de preferência um papel quadrado
                            <hr className="hr-ori" />
                            1°.Dobre o papel ao meio
                            <hr className="hr-ori" />
                            2°.Dobre o canto esquerdo para o lado direito, criando uma ponta afiada no canto superior / direito.
                            OBS: Desdobre
                            <hr className="hr-ori" />
                            3°.Dobre o canto direito para o lado esquerdo.
                            OBS: Desdobre
                            <hr className="hr-ori" />
                            4°.dobre para trás no ponto em que os dois vincos diagonais se encontram.
                            OBS: Desdobre
                            <hr className="hr-ori" />
                            5°.Usando os vincos como guias, forme um triângulo como você vê na imagem.
                            <hr className="hr-ori" />
                            6°.Dobre o retângulo inferior ao meio em direção ao triângulo.
                            <hr className="hr-ori" />
                            7°. pegue os dois cantos do triângulo e dobre-os em um ângulo.
                            <hr className="hr-ori" />
                            8°.Dobre os dois lados do retângulo em direção ao centro.
                            <hr className="hr-ori" />
                            9°.Dobre o retângulo ao meio em direção ao triângulo.
                            <hr className="hr-ori" />
                            10°.Vamos fazer as pernas do sapo. Dobre os cantos esquerdo e direito do retângulo para baixo e para encontrar no centro.
                            <hr className="hr-ori" />
                            11°.Abra as pernas e espalhe o interior até que corresponda às pernas externas.
                            <hr className="hr-ori" />
                            12°.Dobre as pernas para cima e amasse.
                            <hr className="hr-ori" />
                            13°.Desdobre um pouco as pernas.
                            <hr className="hr-ori" />
                            14°.Agora é só se divertir fazendo o sapo pular.
                            <hr className="hr-ori" />

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseSap}>
                                Sair
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* fim modal do card 4   */}
                    {/* fim card 4  */}


                    {/* inicio card 5  */}
                    <div className="gami">
                        <Card className="ori-card" >
                            <Card.Img variant="top" src={oriCachorro} />
                            <Card.Body>
                                <Card.Title >Origami Cachorro</Card.Title>
                                <Card.Text>
                                    Um Origami facil e muito divertido de ser feito.
                                </Card.Text>
                                <div style={{ display: 'flex', justifyContent: 'end' }}>
                                    <Button variant="primary" onClick={handleShowCac}>Passo a Passo</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/* inicio modal do card 5  */}
                    <Modal show={cachorro} onHide={handleCloseCac}>
                        <Modal.Header closeButton>
                            <Modal.Title>Origami Cachorro</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card.Img variant="top" src={passoCachorro} style={{ marginBottom: '2%', width: '100%', height: '50%' }} />
                            1°.Com papel de sua preferência, recorte um quadrado no formato de 13 cm x 13 cm.
                            <hr className="hr-ori" />
                            2°.Vire o quadrado deixando-o na forma de um losango.
                            <hr className="hr-ori" />
                            3°.Junte duas pontas do losango para formar um triângulo. Deixe a ponta do triângulo virada para baixo.
                            <hr className="hr-ori" />
                            4°.Dobre a ponta direita para baixo, de maneira a formar a primeira orelha.
                            <hr className="hr-ori" />
                            5°. Dobre a ponta esquerda para baixo, de maneira a formar a segunda orelha.
                            <hr className="hr-ori" />
                            6°.Dobre a ponta inferior para cima, de maneira a formar o focinho, e com a caneta preta, pinte os olhos e o focinho do cachorro. Está pronta sua dobradura!
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseCac}>
                                Sair
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    {/* fim modal do card 5   */}
                    {/* fim card 5  */}

                </main>
            </div>
            <FooterPosCadas/>
        </>
    );
}