import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import CalmamenteContext from '../../context/CalmamenteContext'
import FooterAntesCadas from '../../Footers/FooterAntesCadas'
import HeaderAntesCadas from '../../Headers/HeaderAntesCadas'


function inicialState(){
return {email: '', senha: ''}
}

function login({email, senha}) {
if (email === 'admin@gmail.com' && senha === 'admin'){
return {token: '1234'}
}
return {error: 'Usuário ou senha incorretos'}
}

const UserLogin = () => {


const [values, setValues] = useState(inicialState);
const { setToken } = useContext(CalmamenteContext);
const history = useHistory();

function handleChange(event) {
const {value, name } = event.target;
setValues({
...values,
[name]: value
});
}


const handleSubmit = (event) => {
event.preventDefault()

const { token } = login(values)

if (token) {
setToken(token)
return history.push('/home')
}


}






return (
<>
    <div id="container">
        <div id="main">
            <HeaderAntesCadas />

            {/*
            <!-- inicio formulario --> */}
            <h1 className="d-flex justify-content-center titulos"
                style={{marginTop: '3%', marginBottom: '3%',textAlign: 'center'}}>
                Faça seu login</h1>
            <div className="formul mrgb-grande">
                <div className="for">
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <div className="em-email-login">
                                <label htmlFor="idEmailLogin" className="form-label lbl-em itens">Email: </label>
                                <input type="email" className="form-control" id="idEmailLogin" name="email"
                                    aria-describedby="emailHelp" value={values.email} onChange={handleChange} />
                            </div>
                            <div className="d-flex">
                                <span id="msgEmail" style={{marginLeft: '3%'}}></span>
                            </div>
                            <div className="pas-senha">
                                <label htmlFor="idSenhaLogin" className="form-label lbl-noso itens">Senha: </label>
                                <input type="password" className="form-control" id="idSenhaLogin" name="senha"
                                    value={values.senha} onChange={handleChange} />
                            </div>
                            <div className="d-flex justify-content-between">
                                <span id="msgSenhaPequena" style={{marginLeft: '3%'}}></span>
                            </div>
                            <div className="check-senha form-switch">
                                <input type="checkbox" className="form-check-input" id="idMostrarLogin" />
                                <label className="form-check-label lbl-noso itens" style={{marginLeft: '1%'}}
                                    htmlFor="idMostrarLogin" name="checkMostar">Mostrar senha</label>
                            </div>
                            <div>
                                <button type="submit" className="btn-logs btn btn-primary">Entrar</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
            {/*
            <!-- fim formulario --> */}


        </div>
    </div>
    
    <FooterAntesCadas />


</>
)
}

export default UserLogin