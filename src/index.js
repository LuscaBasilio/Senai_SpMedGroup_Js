import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import './index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import Login from "./pages/Login";
import CadastroUser from "./pages/admin/CadastroUser";
import ConsultaManejo from "./pages/admin/ConsultaManejo";
import ListaUsuarios from "./pages/admin/ListaUsuarios";
import mainAdmin from "./pages/admin/mainAdmin";
import mainMedic from "./pages/medico/mainMedic";
import ManejoConsulta from "./pages/medico/ManejoConsulta";
import ListagemConsulta from "./pages/paciente/ListagemConsulta";
import mainPaciente from "./pages/paciente/mainPaciente";
import autenticado from './services/authentication';

const Permit = ({component : Component}, {...rest}) => (
    <Route {...rest} render = {props => autenticado() ? 
    (<Component {...props} />) :
    (<Redirect to={{pathname :'/Login'}} />)
        }   
    />
)

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/Paciente' component={mainPaciente} />
                <Route path='/Paciente/Consultas' component={ListagemConsulta} />
                <Route exact path='/Medico' component={mainMedic} />
                <Route path='/Medico/Consultas' component={ManejoConsulta} />
                <Route exact path='/Admin' component={mainAdmin} />
                <Route path='/Admin/Cadastrar' component={CadastroUser} />
                <Route path='/Admin/Listar' component={ListaUsuarios} />
                <Route path='/Admin/Consultas' component={ConsultaManejo} />
                <Permit component={Login} />
            </Switch>
        </div>
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
