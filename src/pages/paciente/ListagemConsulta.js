import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListConsul from '../../components/ListConsul';

class ListagemConsultas extends Component{
    render(){
        return(
            <div>
                <Header />
                    <ListConsul />
                <Footer />
            </div>
        )
    }
}

export default ListagemConsultas;