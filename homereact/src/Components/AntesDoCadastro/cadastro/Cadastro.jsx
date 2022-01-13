import React from 'react'
import {useState} from 'react'
import FooterAntesCadas from '../../Footers/FooterAntesCadas'
import HeaderAntesCadas from '../../Headers/HeaderAntesCadas'
import { useForm } from "react-hook-form";

export default function Cadastro() {

    // const {
    //     register,
    //     watch,
    //     formState: { errors }
    //   } = useForm();
    
    
const [novo, setNovo] = useState({
nome: "",
senha: "",
email: "",
nascimento: "",
genero: ""
})

const handleChange = (e) => {
setNovo({ ...novo, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
e.preventDefault()

fetch("/rest/usuario/", {
method: "POST",
headers: {
Accept: 'application/json',
"Content-Type": "application/json"
},
body: JSON.stringify({
nm_usuario: novo.nome,
sn_usuario: novo.senha,
ds_email: novo.email,
dt_nascimento: novo.nascimento,
gr_genero: novo.genero
})
}).then(() => {
console.log(novo)
window.location = "/chatbot"
})
}
// const [status, setStatus] = useState({
//     type: '',
//     mensagem: ''
// });

// function validate(){
//     if(!novo.name) return setStatus({type: 'error', mensagem: ''})
// }



return (
<>

    <div id="container">
        <div id="main">
            <HeaderAntesCadas/>

            {/*
            <!-- inicio formulario --> */}
            <h1 className="d-flex justify-content-center titulos"
                style={{ marginTop: '3%', marginBottom: '3%', textAlign: 'center' }}>
                Antes
                de continuarmos precisamos
                que você se cadastre</h1>
            <div className="formul mrgb-media">
                <div className="for">
                    {/* Link chatbot mudar */}
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div className="nome-sobrenome">
                                <label htmlFor="idNome" className="form-label lbl-noso itens">Nome: </label>
                                <input type="text" className="form-control nm-nome" id="idNome" name="nome"
                                    value={novo.nome} onChange={handleChange}/>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span id="msgNome" style={{ marginLeft: '3%' }}></span>
                                <span id="msgSobrenome" className="mrgr-media"></span>
                            </div>
                            <div className="em-email">
                                <label htmlFor="idEmail" className="form-label lbl-em itens">Email: </label>
                                <input type="email" className="form-control" id="idEmail" name="email"
                                    aria-describedby="emailHelp" value={novo.email} onChange={handleChange} />
                            </div>
                            <div className="d-flex">
                                <span id="msgEmail" style={{ marginLeft: "3%" }}></span>
                            </div>
                            <div className="pas-senha">
                                <label htmlFor="idSenha" className="form-label lbl-noso itens">Senha: </label>
                                <input type="password" className="form-control" id="idSenha" name="senha"
                                    value={novo.senha} onChange={handleChange} />
                                <input type="password" className="form-control mrgl-pequena" id="idComSenha"
                                    name="txtComfirma" placeholder="Confirmar senha" />
                            </div>
                            <div className="d-flex justify-content-between">
                                <span id="msgSenhaPequena" style={{ marginLeft: "3%" }}></span>
                                <span id="msgSenhaDiferente" className="mrgr-media"></span>
                            </div>
                            <div className="check-senha form-switch mt-3">
                                <input type="checkbox" className="form-check-input" id="idMostrar" />
                                <label className="form-check-label lbl-noso itens " style={{ marginLeft: "1%" }}
                                    htmlFor="idMostrar" name="checkMostar">Mostrar senha</label>
                            </div>
                            <div className="genero-data">
                                <label htmlFor="genero" className="form-label lbl-noso itens">Gênero: </label>

                                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check"  id="btnradio1"
                                        autoComplete="off" value="MA" checked={novo.genero} onChange={handleChange}
                                        required />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio1">MA</label>
                                    <input type="radio" className="btn-check"  id="btnradio2"
                                        autoComplete="off" value="FE" checked={novo.genero} onChange={handleChange}
                                        required />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio2">FE</label>
                                    <input type="radio" className="btn-check"  id="btnradio3"
                                        autoComplete="off" value="NB" checked={novo.genero} onChange={handleChange}
                                        required />
                                    <label className="btn btn-outline-primary" htmlFor="btnradio3">NB</label>
                                </div>
                                <label htmlFor="idData" className="form-label mrgl-pequena lbl-noso itens">Nascimento:
                                </label>
                                <input type="date" className="form-control" id="idDate" name="nascimento"
                                    value={novo.nascimento} onChange={handleChange} />
                            </div>
                            <div className="check-infor ">
                                <input type="checkbox" className="form-check-input ck-an" id="checkAnsi" />
                                <label className="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }}
                                    htmlFor="checkAnsi" name="ansiCheck">Tenho um quadro de ansiedade e entendo que a
                                    real ajuda é
                                    feita apenas através de
                                    profissionais</label>
                            </div>
                            <div className="check-infor  ">
                                <input type="checkbox" className="form-check-input ck-an" id="checkAnsi2" />
                                <label className="form-check-label itens mrgl-pequena" style={{ fontSize: "0.8rem" }}
                                    htmlFor="checkAnsi" name="ansiCheck">Li e concordo com os termos de uso</label>
                            </div>
                            <div>
                                <button type="submit" className="btn-cadas btn btn-primary">Cadastrar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            {/*
            <!-- fim formulario --> */}
        </div>
    </div>


    <FooterAntesCadas/>





</>
)


}