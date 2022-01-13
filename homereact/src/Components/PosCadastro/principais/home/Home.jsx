import React from 'react'
import { faBook, faExclamationTriangle, faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import book3 from '../../../img/3book.PNG'
import {Link} from 'react-router-dom'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';

export default function Home() {

  return (
    <>
      <HeaderPosCadas/>
      {/* <!-- inicio dos cards de 3 funcionalidade --> */}
      {/* <!-- card 1 --> */}
      <div className="mrgx-pequena mrgt-pequena">
        <div className="row m-0 row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="ho-bor">
              <Link to="/estouemcrise" className="linkreact">

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faExclamationTriangle} className="tam-funcprin" style={{ color: "crimson" }} />
                  </div>
                  <div className="card-body esp-car">
                    <h5 className="card-title d-flex justify-content-center titulos">Estou em crise</h5>
                    <p className="card-text textos " style={{ textAlign: 'center' }}>Se estiver em uma crise
                      de ansiedade entre
                      aqui
                      para fazer alguns exercícios recomendados pra você, ou personalize seus exercícios.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* <!-- card 2 --> */}
          <div className="col ">
            <div className="ho-bor">
              <Link to="/queromeacalmar" className="linkreact" >

                <div className="card h-100" style={{ border: "0px", position: "static" }}>

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faMugHot} className="tam-funcprin" style={{ color: "rgb(204, 204, 25)" }} />
                  </div>
                  <div className="card-body esp-card">
                    <h5 className="card-title d-flex justify-content-center titulos" style={{ textAlign: 'center' }}>Quero me
                      acalmar</h5>
                    <p className="card-text textos " style={{ textAlign: 'center' }}>Quando estiver
                      começando
                      a ficar ansioso e
                      precisar se acalmar, entre nessa área para exercícios mais específicos pra esse momento, ou
                      personalize
                      seus exercícios.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/*  card 3  */}
          <div className="col">
            <div className="ho-bor">
              <Link to="/informacoes" className="linkreact" >

                <div className="card h-100 " style={{ border: '0px', position: 'static' }} >

                  {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
                  <div className="d-flex justify-content-center mrgt-media">
                    <FontAwesomeIcon icon={faBook} className="tam-funcprin" style={{ color: "rgb(69, 165, 202)" }} />

                  </div>
                  <div className="card-body">
                    <h5 className="card-title d-flex justify-content-center titulos">Informações</h5>
                    <p className="card-text textos" style={{ textAlign: 'center' }} > A chave para diminuir sua
                      ansiedade é o
                      autoconhecimento e entender como a ansiedade funciona, portanto nessa área você poderá encontrar
                      e-books, pesquisas e vídeos informacionais.</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- fim dos cards de 3 funcionalidade --> */}
      <div className="paralax-montain mrgt-media">
        <h1 className=" tieb  titulos t-home d-flex justify-content-center">Video</h1>
      </div>

      {/* <!-- inicio video --> */}

      <div class="d-flex justify-content-center mrgt-media">
       
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8YG8HABY25w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{ borderRadius: '20px 5px 20px 5px' }}></iframe>
      </div>
      {/* <!-- fim video  --> */}
      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb  titulos t-home d-flex justify-content-center">E-Books</h1>
      </div>

      {/* <!-- inicio e-book --> */}

      <div class=" mrgt-grande">
      </div>
      <div class="d-flex  mrgt-grande row m-0">
        <div class=" mrgl-grande col-12 col-sm-12 col-md-8 col-lg-8 " id="home-book">
        <Link to="/informacoes" class="linkreact">
          <img src={book3} alt="Imagem e-book" style={{ width: '100%' }}></img>
          </Link>
        </div>
        <div class="col-12 col-sm-12 col-md-8 col-lg-8">
          <p class="titulos mrgx-media" id="home-tbook">20 Estratégias Práticas e Eficientes Para Você Constrolar a Ansiedade</p>
          <p class="textos mrgx-media">A ansiedade é uma sensação comum para a grande maioria das pessoas na atualidade: muitos compromissos, responsabilidades, família, filhos, trabalho.

São muitos os motivos que podem levar uma pessoa a desenvolver ansiedade.

Por isso, cada vez mais pessoas estão em busca do auxílio de um psicólogo e de estratégias para melhorar a qualidade de vida.

E não só pensando em si mesmas, mas, também, nas pessoas ao seu redor, já que a ansiedade tende a afetar não somente quem a sente, afinal, comumente afeta todos àqueles que estão à nossa volta.

Isso porque uma pessoa que sofre de ansiedade pode responder de forma ríspida a uma simples pergunta, agir de maneira agressiva em situações comuns do dia a dia, entre tantos outros episódios que podem ser desencadeados em decorrência da ansiedade, que podem vir acompanhados de sintomas de depressão.

Montei este ebook com um único objetivo: ajudar você a saber lidar com a ansiedade mas, mais do que isso, ajudar você a ter uma vida o mais tranquila possível para que você possa desfrutar dos bons momentos com sua família, amigos e até mesmo sozinho ou sozinha, porque você merece isso.</p>
        </div>
        
      </div>
      {/* <!-- fim do e-book --> */}

      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb  titulos t-home d-flex justify-content-center">Institucional</h1>
        <h5 class="d-flex justify-content-center sub-tieb">Quem somos / Missão</h5>
      </div>

      {/* <!-- inicio parte institucional --> */}
      <div class="cards-insti mrgx-grande">
        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} >Somos um grupo de desenvolvedores que entendemos
            que a
            ansiedade no Brasil é um problema real, sério e que aumentou muito durante a pandemia. Por isso
            criamos o
            Calmamente uma plataforma digital que possa ajudar você em momentos de uma crise de ansiedade e em
            momentos
            antes de uma crise, forncecendo exercícios simples com a capacidade retirada de sua mente do
            estado de crise.
            Entendemos também que cada pessoa tem suas individualidades em momentos de crise e que devem ser
            respeitadas,
            recomendando assim exercícios de acordo com suas próprias características individuais.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} >Ajudar pessoas que possuem problemas com
            ansiedade sugerindo
            diversos exercícios de acordo com a personalidade da pessoa, e permitindo que ela personalize suas
            soluções.
            Ultimamente os casos de pessoas com ansiedade vem subindo muito e quanto mais pessoas forem
            ajudadas melhor.
          </p>
        </div>
      </div>
      <div class="paralax-montain mrgt-media">
        <h1 class=" tieb titulos t-home d-flex justify-content-center">Institucional</h1>
        <h5 class="d-flex justify-content-center sub-tieb">Visão / Valores</h5>
      </div>

      <div class="cards-insti mrgx-grande mrgb-media">
        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}>Pretendemos nos tornar o maior canal acessível
            para ajuda
            contra ansiedade do Brasil, sendo bem-visto e recomendado por conselhos de psicologia de todo o
            país. Nosso
            objetivo é ser capaz de ajudar milhares de pessoas todos os dias a lidarem com essa doença e
            contribuir para
            que o Brasil pare de ser, no ranking da OMS, o pais mais ansioso do Mundo.</p>
        </div>


        <div class="insti-textos">
          <p class="textos mrgt-pequena" style={{ clear: 'left' }} ><span style={{ fontWeight: 'bold' }}>Humanização:
          </span>
            Cuidado centrado nas pessoas, respeitando todos os usuários.</p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Compreensão:
          </span>
            Compreendemos que a ansiedade é um problema sério e que deve ser tratada com muita atenção.</p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Gratidão:
          </span> Somos
            gratos pela possibilidade de auxílio às pessoas principalmente por termos passado por momentos tão
            difíceis.
          </p>
          <p class="textos mrgt-pequena" style={{ clear: 'left' }}><span style={{ fontWeight: 'bold' }}>Confiabilidade:
          </span>
            Estabelecer relacionamentos abertos, transparentes e apoiados na confiança mútua.</p>
        </div>
      </div>

      {/* fim parte institucional  */}

      <FooterPosCadas/>
    </>
  )
}