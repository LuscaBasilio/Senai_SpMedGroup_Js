import React, {Component} from 'react';
import "../assets/css/Default.css";
import "../assets/css/Header.css";
import logo from '../assets/img/LogoSp.png';
import userimg from '../assets/img/fraklim.jpg';

class Header extends Component{

    constructor(){
        super();
        this.state={
            nome: '',
            consulta: 0,
        }
    }

    render(){
        return(
            <div className="header">
        <img className="logo" src={logo} draggable="false" alt="Logo" />
        <div className="profile">
            <span>Bem vindo {this.state.nome}<br/>Você possui {this.state.consulta} consulta(s) agendada(s)</span>
            <img src={userimg} alt="profile pic" />
        </div>
    </div>
        )
    }
}

export default Header;