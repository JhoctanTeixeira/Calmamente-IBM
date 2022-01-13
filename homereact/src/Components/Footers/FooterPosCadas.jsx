import React from 'react'
import logoIcon from '../img/logo-icon.png'
import facebook from '../img/facebook-logo.png'
import twitter from '../img/twitter-logo.png'
import instagram from '../img/instagram-logo.png'
import {Link} from 'react-router-dom'

export default function FooterPosCadas() {

   return(
      <>
      {/*<!-- inicio rodapé --> */}
      <footer className="bg-dark m-0" id="roda">
                <div className=" rodape">
                    <div className="rodape-icone">
                        <img src={logoIcon} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="d-flex justify-content-center align-items-start mrgr-grande" style={{ width: "100%" }}>
                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/estouemcrise" className="linkreact text-light roda-link font-weight-bold itens">Estou em crise</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de crise</li>
                        </ul>
                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/queromeacalmar" className="linkreact text-light roda-link font-weight-bold itens">Quero me acalmar</Link>
                            </li>
                            <li className="text-muted roda-link roda-link-cel itens">Exercícios para momentos de pré-crise </li>
                        </ul>
                        <ul className="rodape-itens mx-1">
                            <li>
                                <Link to="/informacoes" className="linkreact text-light roda-link font-weight-bold itens">Informações</Link>
                            </li>
                            <li className="text-muted roda-link itens">E-books</li>
                            <li className="text-muted roda-link itens">Pesquisas</li>
                            <li className="text-muted roda-link itens">Vídeos</li>
                        </ul>
                    </div>
                    <div className="rodape-contatos ">
                        <ul className="rodape-itens list-group list-group-horizontal list-group-horizontal-sm list-group-horizontal-md list-group-horizontal-xl">
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={instagram} alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={twitter} alt="" /></a></li>
                            <li className="text-light roda-link-redes mx-1"><a href="" target="_blank"><img src={facebook} alt="" /></a></li>
                        </ul>
                        <p className="text-light roda-email itens">contatobejgg@gmail.com</p>
                    </div>
                </div>
            </footer>
            {/*<!-- fim rodapé  --> */}
      </>
)}