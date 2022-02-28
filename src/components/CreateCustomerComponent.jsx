import React, { Component } from 'react'
import CustomerService from '../services/CustomerService';

class CreateCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            emailId: '',
            buildingName: '',
            flatNumber: '',
            addressLine1: '',
            addressLine2: '',
            addressLine3: '',
            town: '',
            postCode: '',
            county: ''
        }
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeBuildingNameHandler = this.changeBuildingNameHandler.bind(this);
        this.changeFlatNumberHandler = this.changeFlatNumberHandler.bind(this);
        this.changeAddressLine1Handler = this.changeAddressLine1Handler.bind(this);
        this.changeAddressLine2Handler = this.changeAddressLine2Handler.bind(this);
        this.changeAddressLine3Handler = this.changeAddressLine3Handler.bind(this);
        this.changeTownHandler = this.changeTownHandler.bind(this);
        this.changePostCodeHandler = this.changePostCodeHandler.bind(this);
        this.changeCountyHandler = this.changeCountyHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            CustomerService.getCustomerById(this.state.id).then( (res) =>{
                let customer = res.data;
                this.setState({firstName: customer.firstName,
                    lastName:       customer.lastName,
                    emailId :       customer.emailId,
                    buildingName :  customer.buildingName,
                    flatNumber :    customer.flatNumber, 
                    addressLine1 :  customer.addressLine1,
                    addressLine2 :  customer.addressLine2, 
                    addressLine3 :  customer.addressLine3,
                    town :          customer.town,
                    postCode :      customer.postCode, 
                    county :        customer.county
                });
            });
        }        
    }
    saveOrUpdateCustomer = (e) => {
        e.preventDefault();
        let customer = {
            firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId,
            buildingName: this.state.buildingName, flatNumber: this.state.flatNumber, addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2, addressLine3: this.state.addressLine3, town: this.state.town,
            postCode: this.state.postCode,  county: this.state.county       
        };
        console.log('customer => ' + JSON.stringify(customer));

        // step 5
        if(this.state.id === '_add'){
            CustomerService.createCustomer(customer).then(res =>{
                this.props.history.push('/customers');
            });
        }else{
            CustomerService.updateCustomer(customer, this.state.id).then( res => {
                this.props.history.push('/customers');
            });
        }
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
    changeFlatNumberHandler= (event) => {
        this.setState({flatNumber: event.target.value});
    }
    changeAddressLine1Handler= (event) => {
        this.setState({addressLine1: event.target.value});
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Customer</h3>
        }else{
            return <h3 className="text-center">Update Customer</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
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
                                        <div className = "form-group">
                                            <label> Building Name: </label>
                                            <input placeholder="Building Name" name="buildingName" className="form-control" 
                                                value={this.state.buildingName} onChange={this.changeBuildingNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Flat Number: </label>
                                            <input placeholder="Flat Number" name="flatNumber" className="form-control" 
                                                value={this.state.flatNumber} onChange={this.changeFlatNumberHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address Line1: </label>
                                            <input placeholder="Address Line1" name="addressLine1" className="form-control" 
                                                value={this.state.addressLine1} onChange={this.changeAddressLine1Handler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Address Line2: </label>
                                            <input placeholder="Address Line2" name="addressLine1" className="form-control" 
                                                value={this.state.addressLine2} onChange={this.changeAddressLine2Handler}/>
                                        </div>        
                                        <div className = "form-group">
                                            <label> Address Line3: </label>
                                            <input placeholder="Address Line3" name="addressLine3" className="form-control" 
                                                value={this.state.addressLine3} onChange={this.changeAddressLine3Handler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Town: </label>
                                            <input placeholder="Town" name="town" className="form-control" 
                                            value={this.state.town} onChange={this.changeTownHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Post Code: </label>
                                            <input placeholder="Post Code" name="postCode" className="form-control" 
                                            value={this.state.postCode} onChange={this.changePostCodeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> County: </label>
                                            <input placeholder="County" name="county" className="form-control" 
                                            value={this.state.county} onChange={this.changeCountyHandler}/>
                                        </div>                                    
                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Save</button>
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

export default CreateCustomerComponent
