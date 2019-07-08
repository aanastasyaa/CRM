import React, { Component } from 'react';
import ClientList from './ClientList.jsx';
import { Client, Company } from '../js/classes';

export default class ClientTabs extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const persons = this.props.clients.filter(c => !(c instanceof Company));
        const companies = this.props.clients.filter(c => c instanceof Company);
        
        return (
            <div id="client_tabs">
                <ul className="nav nav-tabs" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#list-fiz" role="tab" aria-selected="true">Физлица</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#list-companies" role="tab" aria-selected="false">Юрлица</a>
                    </li>
                </ul>
                <div className="tab-content pt-2">
                    <div className="list-group list-clients tab-pane fade show active" id="list-fiz" role="tabpanel">
                         <ClientList
                            clients = {persons}
                            onClientEdit = {this.props.onClientEdit}
                            onClientDelete = {this.props.onClientDelete}
                         />
                    </div>

                    <div className="list-group list-clients tab-pane fade" id="list-companies" role="tabpanel">
                         <ClientList
                            clients = {companies}
                            onClientEdit = {this.props.onClientEdit}
                            onClientDelete = {this.props.onClientDelete}
                         />
                    </div>
                </div>
            </div>
        );
    }
}