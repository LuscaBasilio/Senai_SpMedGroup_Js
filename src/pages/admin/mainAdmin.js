import React, {Component} from 'react';
import '../../assets/css/Default.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/mainAdmin.css';


class mainAdmin extends Component{
    render(){
        return(
        <div>
            <Header />
                <div className="body">
                    <button onClick={() => this.props.history.push('/Admin/Cadastrar')}>Cadastrar usuário</button>
                    <button onClick={() => this.props.history.push('/Admin/Listar')}>Listar usuário</button>
                    <button onClick={() => this.props.history.push('/Admin/Consultas')}>Visualizar Consultas</button>
                </div>
            <Footer />
        </div>
        )
    }
}

export default mainAdmin