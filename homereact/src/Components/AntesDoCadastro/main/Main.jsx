import React from 'react'
import Index from '../InicioCal/Index'
import Login from '../login/Login'
import Cadastro from '../cadastro/Cadastro'

import { Switch, Route, Redirect } from 'react-router-dom'
import EstouTendoUmacrise from '../estoutendoumacrise/EstouTendoUmacrise'
import Chatbot from '../chatbot/Chatbot'
import Provider from '../../provider/Provider'
import RoutesPrivate from '../../Routes/private/Private'
import Home from '../../PosCadastro/principais/home/Home'
import Estouemcrise from '../../PosCadastro/principais/estouemcrise/Estouemcrise'
import Queromeacalmar from '../../PosCadastro/principais/queromeacalmar/Queromeacalmar'
import Informacoes from '../../PosCadastro/principais/informacoes/Informacoes'
import Respiracao from '../../PosCadastro/exercicios/respiracao/Respiracao'
import MusicaDeUsoTerapeutico from '../../PosCadastro/exercicios/musicaDeUsoTerapeutico/MusicaDeUsoTerapeutico'
import Meditacao from '../../PosCadastro/exercicios/meditacao/Meditacao'
import EscritaTerapeutica from '../../PosCadastro/exercicios/escritaterapeutica/EscritaTerapeutica'
import EstimularCriatividadeHistorias from '../../PosCadastro/exercicios/estimulaciatividade/EstimularCriatividadeHistorias'
import MeditacaoGuiada from '../../PosCadastro/exercicios/meditacao/MeditacaoGuiada'
import MeditacaoPranayama from '../../PosCadastro/exercicios/meditacao/MeditacaoPranayama'
import ImaginacaoGuiada from '../../PosCadastro/exercicios/imaginacaoGuiada/ExercicioImaginacaoGuiada'
import Origami from '../../PosCadastro/exercicios/origami/ExercicioOrgiami'
import ParadaDePensamento from '../../PosCadastro/exercicios/paradaPensamento/ExercicioParadaPensamento'
import ExercicioGrounding from '../../PosCadastro/exercicios/exercicioGrounding/ExercicioGrounding'

export default function Main() {

return(
<>


    {/* Conteudo */}
    <main>
        <Provider>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/index" />
                </Route>
                <Route path="/index" component={Index} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/estoutendoumacrise" component={EstouTendoUmacrise} />
                <RoutesPrivate path="/chatbot" component={Chatbot} />
                <RoutesPrivate path="/home" component={Home} />
                <RoutesPrivate path="/estouemcrise" component={Estouemcrise} />
                <RoutesPrivate path="/queromeacalmar" component={Queromeacalmar} />
                <RoutesPrivate path="/informacoes" component={Informacoes} />
                <RoutesPrivate path="/respiracao" component={Respiracao} />
                <RoutesPrivate path="/musicaTerapia" component={MusicaDeUsoTerapeutico} />
                <RoutesPrivate path="/meditacao" component={Meditacao} />
                <Route path="/meditacaoGuiada" component={MeditacaoGuiada} />
                <Route path="/meditacaoPranayama" component={MeditacaoPranayama} />
                <RoutesPrivate path="/estimularCriatividade" component={EstimularCriatividadeHistorias} />
                <RoutesPrivate path="/escritaTerap" component={EscritaTerapeutica} />
                <RoutesPrivate path="/imaginacaoGuiada" component={ImaginacaoGuiada} />
                <RoutesPrivate path="/origami" component={Origami} />
                <RoutesPrivate path="/pradaDePensa" component={ParadaDePensamento} />
                <RoutesPrivate path="/exercicioGrounding" component={ExercicioGrounding} />              
            </Switch>
        </Provider>
    </main>
    {/* Fim Conteudo */}


</>
)}