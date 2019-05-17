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
            idTipoUsuario: '',
            dataNascimento: '',
            listUsuarios: []
        };
    };

    UsuariosLista(){
        fetch('http://localhost:5000/api/Usuario/usuarios')
        .then(resposta => resposta.json())
        .then(data => this.setState({listUsuarios: data}))
        .catch(erro => console.error(erro))
    }

    render(){
        return(
            <div>
                <Header />
                    <div className="table-container">
                        <table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Senha</th>
                                        <th>Tipo de usuário</th>
                                        <th>Data de nascimento</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.listUsuarios.map( listaUsuarios =>{
                                            return(
                                                <tr key={listaUsuarios.id}>
                                                    <td>{listaUsuarios.id}</td>
                                                    <td>{listaUsuarios.nome}</td>
                                                    <td>{listaUsuarios.email}</td>
                                                    <td>{listaUsuarios.senha}</td>
                                                    <td>{listaUsuarios.tipoUsuario}</td>
                                                    <td>{listaUsuarios.dataNascimento}</td>
                                                </tr>
                                            )
                                            })
                                    }

                                </tbody>             
                        </table>
                    </div>
                <Footer />
            </div>
        )
    }
}

export default ListaUsuarios;