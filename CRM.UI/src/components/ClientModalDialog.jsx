import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Company, Client } from '../js/classes';
import 'jquery-validation';
import 'jquery-mask-plugin';

export default class ClientModalDialog extends Component {
    constructor(props) {
        super(props);

        this.onRadioChanged = this.onRadioChanged.bind(this);
        this.onSubmitModal = this.onSubmitModal.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.state = {
            inputForCompany: false,
            title: 'Создание клиента',
            clientAvatar: './img/default.png',
            clientName: '',
            clientSurname: '',
            clientOtch: '',
            clientEmail: '',
            clientPhone: '',
            clientCompanyName: '',
            personPosition: ''
        };
        
    }

    onSubmitModal() {
        const fields = this.state;
        const id = this.props.client? this.props.client.id : 0;
        let client;
        if(!fields.inputForCompany) {
            client = new Client(id, fields.clientSurname, fields.clientName, fields.clientOtch, '+7'+fields.clientPhone,
                                    fields.clientEmail, fields.clientAvatar);
            
        }
        else client = new Company(id, fields.clientSurname, fields.clientName, fields.clientOtch, '+7'+fields.clientPhone,
                                    fields.clientEmail, fields.clientAvatar, fields.clientCompanyName, fields.personPosition);
        this.props.onSubmitModal(client);
    }

    componentDidUpdate(prevProps) {
        const client = this.props.client;
        if(client === null && JSON.stringify(prevProps.client) !== JSON.stringify(client)) {
            this.setState({
                inputForCompany: false,
                title: 'Создание клиента',
                clientAvatar: './img/default.png',
                clientName: '',
                clientSurname: '',
                clientOtch: '',
                clientEmail: '',
                clientPhone: '',
                clientCompanyName: '',
                personPosition: ''
            });
        }
        else if(JSON.stringify(prevProps.client) !== JSON.stringify(client)){
            this.setState({          
                inputForCompany: (client instanceof Company),
                title: 'Редактирование профиля клиента',
                clientAvatar: client.avatar,
                clientName: client.name,
                clientSurname: client.surname,
                clientOtch: client.otch,
                clientEmail: client.email,
                clientPhone: client.phone.substr(2),
                clientCompanyName: (client instanceof Company)? client.companyName : '',
                personPosition: (client instanceof Company)? client.personPosition : ''
            });
        }
    }

    onRadioChanged() {
        this.setState((prevState, probs) => ({
            inputForCompany: !prevState.inputForCompany
        }));
    }

    validateForm() {

    }

    onInputChange(event) {
        event.preventDefault();
        const { name, value } = event.target;
        // let errors = this.state.errors;

        // switch (name) {
        //     case 'clientSurname': 
        //         errors.clientSurname = 
        //             value.length < 3
        //             ? 'Не менее 3 символов'
        //             : '';
        //         break;
        //     case 'email': 
        //     errors.email = 
        //         validEmailRegex.test(value)
        //         ? ''
        //         : 'Email is not valid!';
        //     break;
        //     case 'password': 
        //     errors.password = 
        //         value.length < 8
        //         ? 'Password must be 8 characters long!'
        //         : '';
        //     break;
        //     default:
        //     break;
        // }

        this.setState({[name]: value});
    }

    render() {
        
        return (
        <Modal show={this.props.show} onHide={this.props.onHideModal} dialogClassName="modal-width">
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
                <div className="col-md-3 col-lg-2 p-0 text-center">
                    <div className="user-photo mb-2">
                        <img src={this.state.clientAvatar} className="rounded-circle" alt="user" id="clientAvatar"/>
                    </div>
                    <div className="uploadAvatar">
                            <input type="file" name="file" id="uploadFile" className="input-file" style={{display: 'none'}} accept=".png, .jpg, .jpeg"/>
                            <button type="button" className="btn btn-sm btn-info mb-2">Изменить фото</button>  
                            {/* onClick="document.getElementById('uploadFile').click();" */}
                    </div>
                </div>
                <div className="col-md-9 col-lg-10">
                    <form id="clientInfo" onSubmit={this.onSubmitModal}>
                        <div className="form-group">
                            <label htmlFor="clientSurname">Фамилия</label>
                            <input type="text" className="form-control" id="clientSurname" name="clientSurname" value={this.state.clientSurname} onChange={this.onInputChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientName">Имя</label>
                            <input type="text" className="form-control" id="clientName"  name="clientName" value={this.state.clientName} onChange={this.onInputChange}  required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="clientOtch">Отчество</label>
                            <input type="text" className="form-control" id="clientOtch"  name="clientOtch" value={this.state.clientOtch} onChange={this.onInputChange}  />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label htmlFor="clientEmail">Email</label>
                                <input type="text" className="form-control" id="clientEmail" name="clientEmail" value={this.state.clientEmail} onChange={this.onInputChange} required />
                            </div>
                            <div className="form-group col-sm-6">
                                <label htmlFor="clientPhone">Телефон</label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">+7</span>
                                    </div>
                                    <input type="text" className="form-control" id="clientPhone" name="clientPhone" value={this.state.clientPhone} onChange={this.onInputChange} 
                                                 placeholder="(___)-___-__-__" required data-toggle="tooltip" data-placement="top" title="Введите телефон в формате (XXX)-XXX-XX-XX" />
                                </div>
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="radio" id="isPersonRadio" name="formradio" value="person" onChange={this.onRadioChanged} checked={!this.state.inputForCompany} />
                            <label className="form-check-label" htmlFor="isPersonRadio">Физическое лицо</label>
                        </div>
                        <div className="form-check mx-1">
                            <input className="form-check-input" type="radio" id="isCompanyRadio" value="company" name="formradio" onChange={this.onRadioChanged} 
							checked={this.state.inputForCompany}
							/>
                            <label className="form-check-label" htmlFor="isCompanyRadio">Юридическое лицо</label>
                        </div>
                        </div>
                        { this.state.inputForCompany 
                            ?
                            <div className="form-row mt-2" id="inputForCompany" >
                                <div className="form-group col-sm-6">
                                    <label htmlFor="clientCompanyName">Компания</label>
                                    <input type="text" className="form-control" id="clientCompanyName" name="clientCompanyName" value={this.state.clientCompanyName} onChange={this.onInputChange} />
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="personPosition">Должность</label>
                                    <input type="text" className="form-control" id="personPosition"  name="personPosition" value={this.state.personPosition} onChange={this.onInputChange}  />
                                </div>
                            </div>
                           : null
                        }
                        <div className="form-row justify-content-center">
                            <input className="btn btn-info mt-4 col-sm-4 mr-2" type="button" onClick={this.props.onHideModal} value="Назад" />
                            <input className="btn btn-info mt-4 col-sm-4" type="submit" id="savebtn" value="Сохранить" />                            
                        </div>
                         
                    </form>
                </div>
            </div>
            
          </Modal.Body>
        </Modal>
        );
    }
}

