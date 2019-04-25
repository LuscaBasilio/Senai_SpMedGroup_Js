import React, {Component} from 'react';
import '../../assets/css/Default.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

class ListaUsuarios extends Component{
    render(){
        return(
            <div>
                <Header />
                    <div className="table-container">
                        <table>
                            <thead>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Email</th>
                                <th>Senha</th>
                                <th>Tipo de usuário</th>
                                <th>Data de nascimento</th>
                            </thead>
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