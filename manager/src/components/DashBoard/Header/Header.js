import React, { Component } from "react";
import { connect } from 'react-redux';
import { dispatch } from "redux-thunk";
import $ from "jquery";
import { addBill } from "../../../store/Actions";

class Header extends Component {

    state = {
        formData: {}
    }
    
    handleInputChange = (e) => {
        this.setState({
            formData: {    
                [e.target.name]: e.target.value,
                ...this.state.formData 
            }
        })
    }

    addBill = (e, payload) => {
        e.preventDefault();
        this.props.addBill(payload);
        this.setState({
            formData: {}
        })
        $('#exampleModal').modal('toggle');
    }

    render() {
    const { categories, totalPayable, bills } = this.props;
    console.log(this.state)
    return (
        <React.Fragment>
            <div className="col-md-6  align-items-start justify-content-start mt-4 mb-4">
                <h4>Total Payable</h4>

                <h2>{ bills && (bills.length > 0)  ?  bills.reduce((count, bill) => parseInt(count + bill.amount) ,0) : 0 }</h2>
            </div>
            <div className="col-md-6 d-flex text-right align-items-center justify-content-end">
                <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add New Bill</button>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add Bill Details</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form method="post" action="#" onSubmit={(e) => this.addBill(e, this.state)}>
                        <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <input className="form-control" onChange={(e) => this.handleInputChange(e)} id="description" name="description" type="text" placeholder="Bill Description" required />
                                </div>
                                <div className="categories form-group">
                                    <label htmlFor="categories">Category</label>
                                    <select className="form-control" name="category" onChange={(e) => this.handleInputChange(e)} required>
                                        {categories && (categories.length > 0) ?
                                            categories.map((category, index) => {
                                                return <option value={category} key={index}>{category}</option>
                                        })
                                            : "No Categories"}
                                    </select>

                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Amount</label>
                                    <input className="form-control" onChange={(e) => this.handleInputChange(e)} id="amount" name="amount" type="text" placeholder="Bill Amount"  pattern = "[0-9]+" required/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="amount">Bill Date</label>
                                    <input className="form-control" onChange={(e) => this.handleInputChange(e)} name="date" type="date" placeholder="Bill Amount"  required/>
                                </div>
                         
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary" >Save Bill</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        addBill: (payload) => dispatch(addBill(payload))
    }
}
export default connect(null, mapDispatchToProps)(Header);