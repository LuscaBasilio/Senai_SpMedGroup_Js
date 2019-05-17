import React, {Component} from 'react';
import Axios from 'axios';



class CadastroUser extends Component{
    constructor(){
        super();
        this.state={
            id: '',
            nome: '',
            email: '',
            senha: '',
            rg: '',
            cpf: '',
            dataNascimento: '',
            listTipos: []
        }
        this.attNome = this.attNome.bind(this);
        this.attEmail = this.attEmail.bind(this);
        this.attSenha = this.attSenha.bind(this);
        this.attTipoUsuario = this.attTipoUsuario.bind(this);
        this.attDataNascimento = this.attDataNascimento.bind(this)
    }

    attNome(event){
        this.setState({nome: event.target.value})
    }

    attEmail(event){
        this.setState({email: event.target.value})
    }

    attSenha(event){
        this.setState({senha: event.target.value})
    }

    attRG(event){
        this.setState({rg: event.target.value})
    }

    attCPF(event){
        this.setState({cpf: event.target.value})
    }

    attTipoUsuario(event){
        this.setState({listTipos: event.target.value})
    }

    attDataNascimento(event){
        this.setState({dataNascimento: event.target.value})
    }

    tiposUser(){
        fetch('http://localhost:5000/api/Usuario/tipos')
        .then(resposta => resposta.json())
        .then(data => this.setState({listTipos : data}))
        .catch(error => console.error(error))
    }

    Cadastrar(event){
        event.preventDefault();
        Axios.post('http://localhost:5000/api/Usuario/cadastrar', ({
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            rg: this.state.rg,
            cpf: this.state.cpf,
            listTipos: this.state.listTipos,
            dataNascimento: this.state.dataNascimento
        }))
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }

    render(){
        return(
            <div>
                <form onSubmit={this.Cadastrar.bind(this)}>
                    <span>Nome</span>
                    <input type="text" value={this.state.nome} 
                    onChange = {this.attNome.bind(this)}
                    placeholder="Nome completo"/>
                    
                    <span>Email</span>
                    <input type="text" value={this.state.email}
                    onChange={this.attEmail.bind(this)}
                    placeholder=""/>

                    <span>Senha</span>
                    <input type="password" value={this.state.senha}
                    onChange={this.attSenha.bind(this)}
                    placeholder=""/>

                    <span>RG</span>
                    <input type="number" value={this.state.rg} 
                    onChange={this.attRG.bind(this)}
                    placeholder="Insira o RG"/>

                    <span>CPF</span>
                    <input type="number" value={this.state.cpf} 
                    onChange={this.attCPF.bind(this)}
                    placeholder="Insira o CPF"/>

                    <select>
                        <option>Tipo de usuário:</option><option>{this.state.listTipos}</option>
                    </select>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default CadastroUser;