import React, { Component } from 'react';
import logo from '../assets/img/LogoSp.png'
import Footer from '../components/Footer';
import "../assets/css/App.css";



class App extends Component {
  render() {
    return (
      <div>
        <div className="img">
          <img className="logo" src={logo} alt="Logo SpMedGroup" />
        </div>
        <div className="button">
          <button onClick={() => this.props.history.push('/Login')}>Fazer Login</button>
          <button onClick={() => alert("ENTRE EM CONTATO COM O EMAIL:\n admin@admin.com ;-;")}>Pedir cadastro</button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
