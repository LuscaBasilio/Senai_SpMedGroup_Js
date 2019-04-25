import React, {Component} from 'react';

class ListConsul extends Component{
    render(){
        return(
            <div className="table-container">
                    <table>
                        <thead>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Data da consulta</th>
                            <th>Progresso</th>
                            <th>Observação</th>
                        </thead>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                    </table>
                </div>
        )
    }
}

export default ListConsul;