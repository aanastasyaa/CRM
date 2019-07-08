import React, { Component } from 'react';
import ClientCard from './ClientCard.jsx';
import { Company, Client } from '../js/classes';

export default class ClientList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            this.props.clients.map(x => { 
                return (             
                    <ClientCard
                    id={x.id}
                    client = {x}
                    onClientEdit = {this.props.onClientEdit}
                    onClientDelete = {this.props.onClientDelete}
                    />
                )
            })
        );
    }
}