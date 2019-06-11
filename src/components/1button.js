import React, {Component} from 'react';
import '../assets/css/1button.css';
import "../assets/css/Default.css";
import { jwtParse } from '../services/authentication';
import {Link} from 'react-router-dom';

class OneButton extends Component{
    render(){
        let tipoUsuario = jwtParse().Role;
        console.log(jwtParse().Role)
            switch (tipoUsuario) {
                case "MÃ©dico":
                    tipoUsuario = "Medico";
                    break;
            
                default:
                    break;
            }
        return(
        <div className="body">
            <button ><Link to={`/${tipoUsuario}/Consultas`}>{this.props.treatment}</Link></button>
        </div>
        )
    }
}

export default OneButton;