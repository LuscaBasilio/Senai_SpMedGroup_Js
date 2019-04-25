import React, {Component} from 'react';
import '../../assets/css/Default.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OneButton from '../../components/1button';

class mainMedico extends Component{
    render(){
        return(
        <div>
        <Header />
            <OneButton treatment="Manejar consultas"/>
        <Footer />
        </div>
        )
    }
}

export default mainMedico