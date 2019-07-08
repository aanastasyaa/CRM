import React, { Component } from 'react';
import { Company, Client } from '../js/classes';

export default class ClientCard extends Component { //function не поддерживает state

    constructor(props) {
        super(props);

        this.onClientDelete = this.onClientDelete.bind(this);
        this.onClientEdit = this.onClientEdit.bind(this);
    }

    onClientDelete(event) {

        this.props.onClientDelete(this.props.id);
        event.stopPropagation();    

    }

    onClientEdit() {
        //вызов модального окна
        this.props.onClientEdit(this.props.id, this.props.client);
         
    }

    render() {
        const client = this.props.client;
        return (
            <a onClick={this.onClientEdit} className="list-group-item list-group-item-action">
                <div className="user-card">
                    <img src={client.avatar} className="mr-3 rounded-circle" alt="user"/>
                        <div className="user-info">
                            <h4 className="mt-2">{client.getFullName()}</h4>
                            {
                                client instanceof Company
                                ? 
                                    <div>
                                    <p className="m-0">Компания: {client.companyName}</p>
                                    <p className="m-0">Должность: {client.personPosition}</p>
                                    </div>
                                : null
                            }
                        </div>
                        <span className="btn btn-sm btn-info btn-user-delete" onClick={this.onClientDelete}>Удалить</span>
                </div>
            </a>
        );
    }
}