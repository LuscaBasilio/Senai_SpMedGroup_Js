import React, {Component} from 'react';
import Footer from '../../components/Footer';


class CadastroUser extends Component{
    constructor(){
        super();
        this.state={
            id: '',
            nome: '',
            email: '',
            senha: '',
            tipoUsuario: '',
            dataNascimento: ''
        }
    }

    
    CadastrarUser(){
        let Usuario={
            id: this.state.id,
            nome: this.state.nome,
            senha: this.state.senha,
            tipoUsuario: this.state.tipoUsuario,
            dataNascimento: this.state.dataNascimento
        }
    }

    render(){
        return(
            <div>
                <form>
                    <span>Nome</span>
                    <input type="text" placeholder="Nome completo"/>
                    
                    <span>Email</span>
                    <input type="text" placeholder=""/>

                    <span>Senha</span>
                    <input type="password" placeholder=""/>

                    <span>RG</span>
                    <input type="number" placeholder="Insira o RG"/>

                    <span>CPF</span>
                    <input type="number" placeholder="Insira o CPF"/>

                    <select>
                        <option>Tipo de usuário:</option>{}
                    </select>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default CadastroUser;