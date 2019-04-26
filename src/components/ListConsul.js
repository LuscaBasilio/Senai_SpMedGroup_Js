import React, {Component} from 'react';

class ListConsul extends Component{
    render(){
        return(
            <div className="table-container">
                    <table>
                        <thead>
                        <tr>
                            <td>Paciente</td>
                            <td>Médico</td>
                            <td>Data da consulta</td>
                            <td>Progresso</td>
                            <td>Observação</td>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default ListConsul;