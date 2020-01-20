import React, { Component } from "react";
import "./BillListing.css";
import { render } from "react-dom";

class BillListing extends Component {
    
    state = {
        editForm: false,
        bill: {}
    }
    loadEditForm = (id) => {
        this.setState({
            editForm: true
        })
        this.findBillById(id)
    }
    findBillById = (id) => {
        let bill = {}
        bill = this.props.bills.filter((bill, index) => bill.id === id);
        this.setState({
            bill: bill[0]
        })
    }
    render() {
        const { bills, deleteBill, categories, updateBill } = this.props;
        const { billId, editForm, bill } = this.state;
     return (
        <React.Fragment>
            <div className="col-md-12">
                
            <table className="table table-sm table-primary table-bordered bill-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Category</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {bills && (bills.length > 0) ? bills.map((bill) => {
                    return (
                    <tr key={bill.id}>
                        <th scope="row">{bill.id}</th>
                        <td>{bill.description}</td>
                        <td>{bill.category}</td>
                        <td>{bill.amount}</td>
                        <td>{bill.date}</td>
                        <td>
                            <span><a a href="#" rel="nofollower noreferer" onClick={() => this.loadEditForm(bill.id)} ><i className="fa fa-pencil"></i></a></span>    
                            <span><a href="#" rel="nofollower noreferer" onClick={() => deleteBill(bill.id)}><i className="fa fa-trash"></i></a></span>    
                        </td>
                    </tr>
                    )
                    }):""}
                   
                </tbody>
            </table>
            
            </div>
        </React.Fragment>
    );
}
}

export default BillListing;