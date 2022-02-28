import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class UpdateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeBuildingNameHandler = this.changeBuildingNameHandler.bind(this);
        this.changeFlatNameHandler = this.changeFlatNameHandler.bind(this);
        this.changeAddressLine1Handler = this.changeAddressLine1Handler.bind(this);
        this.changeAddressLine2Handler = this.changeAddressLine2Handler.bind(this);
        this.changeAddressLine3Handler = this.changeAddressLine3Handler.bind(this);
        this.changeTownHandler = this.changeTownHandler.bind(this);
        this.changePostCodeHandler = this.changePostCodeHandler.bind(this);
        this.changeCountyHandler = this.changeCountyHandler.bind(this);
        this.updateCustomer = this.updateCustomer.bind(this);
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( (res) =>{
            let customer = res.data;
            this.setState({firstName: customer.firstName,
                lastName: customer.lastName,
                emailId : customer.emailId
            });
        });
    }

    updateCustomer = (e) => {
        e.preventDefault();
        let customer = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('customer => ' + JSON.stringify(customer));
        console.log('id => ' + JSON.stringify(this.state.id));
        CustomerService.updateCustomer(customer, this.state.id).then( res => {
            this.props.history.push('/customers');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({emailId: event.target.value});
    }
    changeBuildingNameHandler= (event) => {
        this.setState({buildingName: event.target.value});
    }
    changeAddressLine1Handler= (event) => {
        this.setState({flatNumber: event.target.value});
    }
    changeAddressLine2Handler= (event) => {
        this.setState({addressLine2: event.target.value});
    }
    changeAddressLine3Handler= (event) => {
        this.setState({addressLine3: event.target.value});
    }
    changeTownHandler= (event) => {
        this.setState({town: event.target.value});
    }
    changePostCodeHandler= (event) => {
        this.setState({postCode: event.target.value});
    }
    changeCountyHandler= (event) => {
        this.setState({county: event.target.value});
    }

    cancel(){
        this.props.history.push('/customers');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Customer</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email Id: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCustomer}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateCustomerComponent
