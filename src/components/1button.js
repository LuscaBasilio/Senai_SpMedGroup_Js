import React, {Component} from 'react';
import '../assets/css/1button.css';
import "../assets/css/Default.css";
import { jwtParse } from '../services/authentication';

    function switchUser()
    {
        switch (jwtParse().Role) {
            case "Paciente":
                this.props.history.push('/Paciente/Consultas');
                break;
        
            case "MÃ©dico":
                this.props.history.push('/Medico/Consultas');
                break;
            
            default:
                console.log(jwtParse().Role);
                break;
        }
       
    }

class OneButton extends Component{
    render(){
        return(
        <div className="body">
            <button onClick={() => switchUser()}>{this.props.treatment}</button>
        </div>
        )
    }
}

export default OneButton;