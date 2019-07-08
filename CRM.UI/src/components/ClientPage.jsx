import React, { Component } from 'react';
import initialClients, {Client, Company} from '../js/classes';
import ClientTabs from './ClientTabs.jsx';
import ClientModalDialog from './ClientModalDialog.jsx';

var baseUrl = "http://localhost:5000/";

if (typeof sessionStorage["clients"] === "undefined")
    sessionStorage.setItem("clients", JSON.stringify(initialClients));

export default class ClientPage extends Component { 

    constructor(props) {
        super(props);
        this.state = {
            clients: [],
            showModal: false,
            selClient: null
        }
        this.onClientDelete = this.onClientDelete.bind(this);
        this.onClientEdit = this.onClientEdit.bind(this);
        this.onClientAdd = this.onClientAdd.bind(this);

        this.onShowModal = this.onShowModal.bind(this);
        this.onHideModal = this.onHideModal.bind(this);
        this.onSubmitModal = this.onSubmitModal.bind(this);
    }

    componentDidMount() {
        this.fetchClients();               
    }

    fetchClients() {
        fetch(baseUrl + "api/clients").then(res => res.json())
            .then(data => {
                let list = data.map((obj) => {
                    if (obj.hasOwnProperty('companyName'))
                        return Object.assign(new Company(), obj);
                    else { return Object.assign(new Client(), obj); }
                });
                return list;
            })
            .then(list => this.setState({ clients: list }));
    }

    // POST
    onClientAdd(client) {
        let add = "addperson";
        if(client instanceof Company)
            add = "addcompany";
        fetch(baseUrl+"api/clients/"+add, {
            method: 'post', 
            body: JSON.stringify(client),
            headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(res => { this.onHideModal(); this.fetchClients(); });
    }

    // DELETE
    onClientDelete(id) {
        let r = window.confirm("Вы уверены, что хотите удалить этого клиента?");
        if (r === true) {
            fetch(baseUrl+"api/clients/"+id, {method: 'DELETE'})
                .then(res => res.json())
                .then(res => {
                    this.fetchClients();
                })
       
        }
    }

    //GET by ID
    onClientEdit(id, client) {        
        if(id !== client.id)
            return;
        fetch(baseUrl+"api/clients/"+id).then(res => res.json())
            .then(data => {              
                if(data.hasOwnProperty('companyName'))
                    return Object.assign(new Company(), data);
                else { return Object.assign(new Client(), data);}
                
            })
            .then(obj => this.setState((prevState, props) => ({selClient: client})));            
        
        this.onShowModal();

    }

    onShowModal() {
        this.setState((prevState, props) => ({ showModal: true }));

    }

    onHideModal() {
        this.setState((prevState, props) => ({ showModal: false, selClient: null }));
    }
       
    // PUT
    onSubmitModal(client) {  
        if(this.state.selClient === null) {
            this.onClientAdd(client);
            return;
        }
        fetch(baseUrl+"api/clients/"+client.id, {
            method: 'put', 
            body: JSON.stringify(client),
            headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(res => this.onHideModal());

    }

    render() {
        
        return (
        <div className="row mt-2 mb-2">
                <div className="col-sm-12 pr-2">
                    <button type="button" className="btn btn-sm btn-info float-right mr-4" id="addClient" onClick={this.onShowModal}>Добавить</button>
                </div>
            <div className="col-sm-12">
                <ClientTabs 
                    clients = {this.state.clients}
                    onClientEdit = {this.onClientEdit}
                    onClientDelete = {this.onClientDelete}
                />
            </div>
            <ClientModalDialog
                show = {this.state.showModal}
                onHideModal = {this.onHideModal}
                client = {this.state.selClient}                
                onSubmitModal = {this.onSubmitModal}
            />
        </div>
        );
    }
}