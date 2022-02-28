import React, { Component } from 'react'
import CustomerService from '../services/CustomerService'

class ViewCustomerComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            customer: {}
        }
    }

    componentDidMount(){
        CustomerService.getCustomerById(this.state.id).then( res => {
            this.setState({customer: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Customer Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> First Name: </label>
                            <div> { this.state.customer.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> Last Name: </label>
                            <div> { this.state.customer.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> Email ID: </label>
                            <div> { this.state.customer.emailId }</div>
                        </div>
                        <div className = "row">
                            <label> Building Name: </label>
                            <div> {this.state.buildingName} </div>
                        </div>
                        <div className = "row">
                            <label> Flat Number: </label>
                            <div> {this.state.flatNumber} </div>
                        </div>
                        <div className = "row">
                            <label> Address Line 1: </label>
                            <div> {this.state.addressLine1} </div>
                        </div>
                            <div className = "row">
                            <label> Address Line 2: </label>
                            <div> {this.state.addressLine2} </div>
                        </div>
                        <div className = "row">
                            <label> Address Line 3: </label>
                            <div> {this.state.addressLine3} </div>
                        </div>
                            <div className = "row">
                            <label> Town: </label>
                            <div> {this.state.town} </div>
                        </div>
                        <div className = "row">
                            <label> Post Code: </label>
                            <div> {this.state.postCode} </div>
                        </div>
                        <div className = "row">
                            <label> County: </label>
                            <div> {this.state.county} </div>
                        </div>                    
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewCustomerComponent
