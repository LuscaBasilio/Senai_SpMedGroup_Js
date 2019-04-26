import React, {Component} from 'react';
import '../../assets/css/Default.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class ListaUsuarios extends Component{
    constructor(){
        super();
        this.state={
            id: '',
            nome: '',
            email: '',
            senha: '',
            tipoUsuario: '',
            dataNascimento: '',
            listaUsuarios: []
        };
    }

    UsuariosLista(){
        fetch('http://localhost:5000/api/Usuario/usuarios')
        .then(resposta => resposta.json())
        .then(data => this.setState({listaUsuarios: data}))
        .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.UsuariosLista();
    }

    attNome(){
        this.setState({nome: this.target.value})
    }

    attEmail(){
        this.setState({email: this.target.value})
    }

    attSenha(){
        this.setState({senha: this.target.value})
    }

    attTipoUsuario(){
        this.setState({tipoUsuario: this.target.value})
    }

    attDataNascimento(){
        this.setState({dataNascimento: this.target.value})
    }
    
    render(){
        return(
            <div>
                <Header />
                    <div className="table-container">
                        <table>
                                <tr>
                                    <th>Id</th>
                                    <th>Nome</th>
                                    <th>Email</th>
                                    <th>Senha</th>
                                    <th>Tipo de usuário</th>
                                    <th>Data de nascimento</th>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                        </table>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default ListaUsuarios;