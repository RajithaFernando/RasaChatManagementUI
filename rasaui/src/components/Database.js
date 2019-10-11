import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Row, Col, InputGroup, InputGroupAddon, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';

export default class Database extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            modal: false,
            unmountOnClose: true,
            temp_action :''
        };
        axios.post("http://localhost:4000/getdatafromdatabase")
            .then((result) => {

                this.setState({
                    data: result.data
                })
                console.log(result)
            }).catch((error) => console.log(error))
        this.actionChange = this.actionChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.changeUnmountOnClose = this.changeUnmountOnClose.bind(this);
    }


    actionChange = (event) => {
        console.log(event.target)
        let data = { ...this.state.data }
        data.event.target.id = event.target.value
        console.log(data)
    }

    toggle = (event) => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            // temp_action:event.target.id
        }));
        console.log(event.target.name)
    }

    changeUnmountOnClose(e) {
        let value = e.target.value;
        this.setState({ unmountOnClose: JSON.parse(value) });
    }


    render() {
        // console.log(this.state.data)
        const dummyData = this.state.data
        return (
            <div className="container">
                <br />
                <br />
                <div>

                    {this.state.data.length &&
                        this.state.data.map(
                            (action) =>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">{action.action_name}</InputGroupAddon>
                                    <Input placeholder="username" id={action.action_name} value={action.action_message}/>
                                    <Button id={action.id} onClick={this.toggle} value={action.id} name ={action.action_message}>Edit</Button>
                                </InputGroup>
                        )
                    }

                    <Modal isOpen={this.state.modal} toggle={this.toggle} unmountOnClose={this.state.unmountOnClose}>
                        <ModalHeader toggle={this.toggle}>{this.state.temp_action}</ModalHeader>
                        <ModalBody>
                            <Input type="textarea" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>



                </div>

            </div>
        )
    }
}
