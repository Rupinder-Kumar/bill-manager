import React, { Component } from "react";
import "./BillListing.css";

class BillListing extends Component {

    state = {
        editForm: false,
        bill: {},
        category: ""
    }

    loadEditForm = (id) => {
        this.setState({
            editForm: true
        })
        this.findBillById(id)
    }

    // handleInputChange = (e) => {
    //     this.props.bills = this.props.bills.filter((bill, index) => bill.category === e.target.value )
    // }

    findBillById = (id) => {
        let bill = {};
        bill = this.props.bills.filter((bill, index) => bill.id === id);
        this.setState({
            bill: bill[0]
        })
    }

    render() {
        const { deleteBill, categories, updateBill, bills } = this.props;
        const { billId, editForm, bill } = this.state;
        return (
            <React.Fragment>
                <div className="col-md-12">
                    {/* {bills && (bills.length > 0) ?
            <div className="categories offset-md-8 col-md-4 px-0 form-group">
                                    <label htmlFor="categories">Filter by Category</label>
                                    <select className="form-control" name="category" onChange={(e) => this.handleInputChange(e)} required>
                                        {categories && (categories.length > 0) ?
                                            categories.map((category, index) => {
                                                return <option value={category} key={index}>{category}</option>
                                        })
                                            : "No Categories"}
                                    </select>
                                </div>
                                :""} */}

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
                            }) : ""}

                        </tbody>
                    </table>

                </div>
            </React.Fragment>
        );
    }
}

export default BillListing;