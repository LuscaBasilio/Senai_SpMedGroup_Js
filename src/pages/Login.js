import React, {Component} from 'react';
import logo from '../assets/img/LogoSp.png';
import '../assets/css/Login.css';
import Axios from 'axios';
import { jwtParse } from '../services/authentication';


class Login extends Component{
    constructor(){
    super();
    this.state = {
        email: "",
        senha: "",
        error: ""
        };
    }

    stateSenha(event){
        this.setState({senha: event.target.value})
    }

    stateEmail(event){
        this.setState({email: event.target.value})
    }

    Logar(event){
        event.preventDefault();
        Axios.post('http://192.168.56.1:5000/api/Login', ({
            email: this.state.email,
            senha: this.state.senha
        }))
        .then(data => {
            if(data.status === 200){
                localStorage.setItem('userOn', data.data.token);
                switch (jwtParse().Role) {
                    
                    case "Paciente":
                        this.props.history.push('/Paciente');
                        break;
                    
                    case "MÃ©dico":
                        this.props.history.push('/Medico');
                        break;

                    case "Administrador":
                        this.props.history.push('/Admin');
                        break;
                
                    default:
                        this.setState({error: "Email ou senha inválidos"});
                        break;
                }
            }
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <div className="obdy">
                <img src={logo} alt="Logo" />
                <form onSubmit={this.Logar.bind(this)}>
                    <span>Email</span>
                    
                    <input type="email"
                    placeholder="Insira o email..." 
                    value={this.state.email}
                    onChange={this.stateEmail.bind(this)}
                    minLength="5" 
                    maxLength="100" />

                    <span>Senha</span>
                    
                    <input type="password"
                    placeholder="Insira a senha..."
                    value={this.state.senha}
                    onChange={(e) => this.setState({senha : e.target.value})}
                    minLength="3" 
                    maxLength="100" />
                    
                    <button type="submit">Entrar</button>
                </form>
                <p>{this.props.error}</p>
                <a href="https://spiritsandsuch.com/wp-content/uploads/2019/02/ghost-dancer.gif">Não é cadastrado?</a>
            </div>
        )
    }
}

export default Login;