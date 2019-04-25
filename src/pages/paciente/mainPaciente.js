import React, {Component} from 'react';
import '../../assets/css/Default.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/1button.css';
import OneButton from '../../components/1button';

class mainPaciente extends Component{
    render(){
        return(
        <div>
        <Header />
            <OneButton treatment="Visualizar Consultas"/>
        <Footer />
        </div>
        )
    }
}

export default mainPaciente