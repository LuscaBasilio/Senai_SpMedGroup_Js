import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListConsul from '../../components/1button';

class ConsultaManejo extends Component{
    constructor(){
        super();
        this.state={
            medico:[],
            paciente:[],
            progresso:[],
            dataConsulta:'',
            descricao:''
        }
        this.attMedico = this.attMedico.bind(this);
        this.attData = this.attData.bind(this);
        this.attDescricao = this.attDescricao.bind(this);
        this.attPaciente = this.attPaciente.bind(this);
        this.attProgresso = this.attProgresso.bind(this);
    }

    ListarProgresso(){
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Consulta/Progresso',{method: 'GET', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'})})
        .then(resposta => resposta.json())
        .then(data => this.setState({progresso:data}))
        .catch(error => console.error(error))
    }

    ListarMedico(){
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Usuario/Medicos',{method: 'GET', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'})})
        .then(resposta => resposta.json())
        .then(data => this.setState({medico:data}))
        .catch(error => console.error(error))
    }

    ListarPacientes(){
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Usuario/Pacientes',{method: 'GET', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'})})
        .then(resposta => resposta.json())
        .then(data => this.setState({paciente:data}))
        .catch(error => console.error(error))
    }

    componentDidMount(){
        this.ListarMedico();
        this.ListarPacientes();
        this.ListarProgresso();
    }

    Cadastrar(event){
        event.preventDefault();
        let token = localStorage.getItem('userOn');
        fetch('http://192.168.56.1:5000/api/Consulta/Cadastro', {method: 'POST', 
        headers: new Headers (
            {'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'}), body:JSON.stringify({
                medico : this.state.medico,
                paciente : this.state.paciente,
                progresso : this.state.progresso,
                dataConsulta : this.state.dataConsulta,
                descricao : this.state.descricao
        })})
        .then(data => console.log(data))
        .catch(error => console.error(error))
    }

    attMedico(event){
        this.setState({medico : event.target.value})
    }

    attPaciente(event){
        this.setState({paciente : event.target.value})
    }

    attData(event){
        this.setState({dataConsulta : event.target.value})
    }

    attProgresso(event){
        this.setState({progresso : event.target.value})
    }

    attDescricao(event){
        this.setState({descricao : event.target.value})
    }

    render(){
        return(
            <div>
                <Header />
                    <ListConsul />
                    <form onSubmit={this.Cadastrar.bind(this)}>
                    <select onChange={this.attMedico.bind(this)}>
                        <option>Médico</option>
                        {this.state.medico.map(medic => {
                            return(<option key={medic.id}>{medic.nome}</option>)})}
                    </select>
                    
                    <select onChange={this.attPaciente.bind(this)}>
                        <option>Paciente</option>
                        {this.state.paciente.map(paciente => {
                            return(<option key={paciente.id}>{paciente.nome}</option>)})}
                    </select>

                    <input type="date" value={this.state.dataConsulta} onChange={this.attData.bind(this)}/>

                    <select onChange={this.attProgresso.bind(this)}>
                        <option>Progresso</option>
                        {this.state.progresso.map(progresso => {
                            return(<option key={progresso.id} value={progresso.id}>{progresso.progresso1}</option>)})}
                    </select>

                    <input placeholder="Descrição" type="textarea" value={this.state.descricao} onChange={this.attDescricao.bind(this)}/>
                    
                    <button>Cadastrar</button>
                    </form>
                <Footer />
            </div>
        )
    }
}

export default ConsultaManejo;