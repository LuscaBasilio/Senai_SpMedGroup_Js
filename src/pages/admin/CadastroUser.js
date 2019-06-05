import React, {Component} from 'react';

class CadastroUser extends Component{
    constructor(){
        super();
        this.state={
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
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Usuario/tipos',{method: 'GET', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'})})
        .then(resposta => resposta.json())
        .then(data => this.setState({listTipos : data}))
        .catch(error => console.error(error))
    }

    componentDidMount(){
        this.tiposUser();
    }

    Cadastrar(event){
        event.preventDefault();
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Usuario/cadastrar', {method: 'POST', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'}), body:JSON.stringify({
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
            rg: this.state.rg,
            cpf: this.state.cpf,
            listTipos: this.state.listTipos,
            dataNascimento: this.state.dataNascimento
        })})
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

                    <input type="date" value={this.state.dataNascimento}
                    onChange={this.attDataNascimento.bind(this)}></input>

                    <select>
                        <option>Tipo de Usuario:</option>
                        {this.state.listTipos.map(tipos =>{
                            return(<option key={tipos.id}>{tipos.tipo}</option>)
                        })}
                    </select>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}

export default CadastroUser;