import React, { Component } from "react";

class ListConsul extends Component {
  constructor() {
    super();
    this.state = {
      listConsul: []
    };
  }

  listarConsultas() {
    let token = localStorage.getItem("userOn");

    fetch("http://192.168.56.1:5000/api/Usuario/ver", {
      method: "GET",
      headers: new Headers({
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      })
    })
      .then(resposta => resposta.json())
      .then(data => this.setState({listConsul:data}))
      .catch(error => console.log(error));
  }

  componentDidMount(){
      this.listarConsultas();
  }

  render() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <td>Paciente</td>
              <td>Médico</td>
              <td>Data da consulta</td>
              <td>Observação</td>
              <td>Progresso</td>
            </tr>
          </thead>
          <tbody>
            {this.state.listConsul.map(listConsul => {
              return (
                <tr key={listConsul.id}>
                  <td>{listConsul.idPaciente}</td>
                  <td>{listConsul.idMedico}</td>
                  <td>{listConsul.dataConsulta}</td>
                  <td>{listConsul.observacao}</td>
                  <td>{listConsul.progresso}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListConsul;
