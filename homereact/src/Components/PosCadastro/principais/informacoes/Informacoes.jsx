import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import TestEbook from '../../../img/teste-ebook.jpg'
import TestPreto from '../../../img/pretoteste.png'
import book1 from '../../../img/1book.PNG'
import book2 from '../../../img/2book.PNG'
import book3 from '../../../img/3book.PNG'
import book4 from '../../../img/4book.PNG'
import vid1 from '../../../img/vid1.PNG'
import vid2 from '../../../img/vid2.PNG'
import vid3 from '../../../img/vid3.PNG'
import vid4 from '../../../img/vid4.PNG'
import vid5 from '../../../img/vid5.PNG'
import vid6 from '../../../img/vid6.PNG'
import HeaderPosCadas from '../../../Headers/HeaderPosCadas';
import FooterPosCadas from '../../../Footers/FooterPosCadas';


export default function Informacoes() {


return (
<div style={{overflowX: 'hidden'}}>
<HeaderPosCadas/>
    <div className="paralax-praia">
        <h1 className=" tieb  titulos t-home d-flex justify-content-center">E-Books</h1>
    </div>
    {/*
    <!-- incio ebooks -->
    <!-- inicio banner ebooks  --> */}
    <div className="card mb-3 ebcard bg-light" style={{border: "none", position: "static"}}>
        <div className="d-flex mrgt-grande row m-0">
            <div className="  col-12 col-sm-12 col-md-9 col-lg-9 " id="home-book">
                <a href="https://www.mppi.mp.br/internet/wp-content/uploads/2020/08/1-Ebook-MPPI_Guia-pratico-para-controlar-a-ansiedade-1.pdf"
                    target="_blank" className="row  linkreact"><img src={book3} alt="Imagem e-book"
                        style={{width: "100%"}} /></a>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-9">
                <p className="titulos mrgx-media" id="home-tbook">20 Estratégias Práticas e Eficientes Para Você
                    Constrolar a Ansiedade</p>
                <p className="textos mrgx-media">A ansiedade é uma sensação comum para a grande maioria das pessoas na
                    atualidade: muitos compromissos, responsabilidades, família, filhos, trabalho.

                    São muitos os motivos que podem levar uma pessoa a desenvolver ansiedade.

                    Por isso, cada vez mais pessoas estão em busca do auxílio de um psicólogo e...</p>
            </div>
        </div>
    </div>
    {/*
    <!-- fim banner ebooks  --> */}
    <div className="paralax-praia-ce " id="idpapra">
        <h1 className=" tieb  titulos t-home d-flex justify-content-center" id="idpraia"></h1>
    </div>
     <div className=""> 
        <div className="minl-ebooks">
            <div className="min-ebooks">
                <a href="https://terapiacognitivaonline.com/ebook-ansiedade/" target="_blank"
                    className="linkreact"><img src={book2} alt="Imagem e-book" style={{ width: '100%'}} />

                    <p className="min-ti-eb">COMO LIDAR MELHOR COM A SUA ANSIEDADE E O ESTRESSE </p>
                </a>
            </div>
            <div className="min-ebooks">
                <a href="https://www.psicologosberrini.com.br/wp-content/uploads/eBook-gratis-20-dicas-praticas-para-voce-controlar-a-ansiedade.pdf"
                    target="_blank" className="linkreact"><img src={book1} alt="Imagem e-book"  style={{ width: '100%'}} />
                    <p className="min-ti-eb">Guia pratico para controlar a ansiedade</p>
                </a>
            </div>
            <div className="min-ebooks">
                <a href="https://www.institutoauler.com.br/ebook-ansiedade-gratuito" target="_blank"
                    className="linkreact"><img src={book4} alt="Imagem e-book" style={{ width: '100%'}} />
                    <p className="min-ti-eb">VENCENDO A ANSIEDADE</p>
                </a>
            </div>
        </div>
    </div>

    <div className="paralax-praia mrgt-media">
        <h1 className=" tieb  titulos t-home d-flex justify-content-center">Pesquisas</h1>
    </div>
    {/*
    <!-- inicio pdf  --> */}
    <div className="mrgt-media">
        <a href="https://www.vittude.com/blog/controlar-a-ansiedade/" target="_blank" className="linkreact">
            <div className="pdfitem">
            10 dicas para controlar a ansiedade
            </div>
        </a>

        <a href="https://saude.abril.com.br/medicina/ansiedade-o-que-e/" target="_blank" className="linkreact">
            <div className="pdfitem">
            Ansiedade: o que é, sintomas físicos e psicológicos e tratamento 
            </div>
        </a>

        <a href="https://www.marceloparazzi.com.br/blog/4-fatos-sobre-a-ansiedade-que-todos-deveriam-saber" target="_blank" className="linkreact">
            <div className="pdfitem">
            4 FATOS SOBRE A ANSIEDADE QUE TODOS DEVERIAM SABER
            </div>
        </a>

        <a href="https://www.megacurioso.com.br/medicina-e-psicologia/99148-9-fatos-sobre-transtornos-de-ansiedade.htm" target="_blank" className="linkreact">
            <div className="pdfitem">
            9 FATOS SOBRE TRANSTORNOS DE ANSIEDADE
            </div>
        </a>

        <a href="https://saude.abril.com.br/mente-saudavel/14-mitos-e-verdades-sobre-a-ansiedade/" target="_blank" className="linkreact">
            <div className="pdfitem">
                14 mitos e verdades sobre a ansiedade 
            </div>
        </a>
    </div>
    {/*
    <!-- fim pdf  --> */}

    <div className="paralax-praia mrgt-media">
        <h1 className=" tieb titulos t-home d-flex justify-content-center">Vídeo</h1>
    </div>
    {/*
    <!-- inicio videos --> */}
    <div className="mrgt-media paine-vide col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
        <div className=" col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <iframe className="video-in" width="560" height="315" src="https://www.youtube.com/embed/8YG8HABY25w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12  overflow-auto sm-overflow-auto vi-vemais">
            <p className="text-center bor-mais">Mais videos para você </p>
            <a href="https://www.youtube.com/watch?v=8YG8HABY25w" target="_blank" className="linkreact">
                <div class="mrgt-pequena box-vid-info ">
                    <div class="box-vid-vid">
                        <img src={vid1} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">Como controlar uma crise de ansiedade</p>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=C-yNCvVS3xs" target="_blank" className="linkreact">
                <div className="mrgt-pequena box-vid-info">
                    <div className="box-vid-vid">
                        <img src={vid2} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">5 DICAS para controlar sua ANSIEDADE</p>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=KsPXLBWCw_8" target="_blank" className="linkreact">
                <div className="mrgt-pequena box-vid-info">
                    <div className="box-vid-vid">
                        <img src={vid3} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">Como Controlar a ANSIEDADE | 6 Técnicas Comprovadas!</p>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=vcxZ0pzok8c" target="_blank" className="linkreact">
                <div className="mrgt-pequena box-vid-info">
                    <div className="box-vid-vid">
                        <img src={vid4} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">7 dicas para controlar a ansiedade • Psicologia • Casule Saúde e Bem-estar</p>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=-2mEmImzNQU" target="_blank" className="linkreact">
                <div className="mrgt-pequena box-vid-info">
                    <div className="box-vid-vid">
                        <img src={vid5} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">Como controlar a ansiedade. Psicóloga Raquel Shimizu explica #01</p>
                    </div>
                </div>
            </a>
            <a href="https://www.youtube.com/watch?v=7q_qVsYjKao" target="_blank" className="linkreact">
                <div className="mrgt-pequena box-vid-info">
                    <div className="box-vid-vid">
                        <img src={vid6} alt="" className="img-di" />
                    </div>
                    <div className="box-vid-t">
                        <p className=" mrgl-grande  itens t-videos">#Ansiedade, como controlar?</p>
                    </div>
                </div>
            </a>

        </div>
    </div>

    <FooterPosCadas/>
</div>
)
}