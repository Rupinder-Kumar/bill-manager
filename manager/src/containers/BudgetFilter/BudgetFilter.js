import React, { Component } from "react";
import { connect } from 'react-redux';
import { dispatch } from "redux-thunk";
import { getBills, getCategories, addBill, deleteBill } from "../../store/Actions";

class Dashboard extends Component {

    state = {
        filteredBills: []
    }

    handleInputChange = e => {
       let result = []; 
       this.props.bills.map((bill, index) => {
            let amount = 0;
            amount += bill.amount;
            if(amount <= e.target.value) {
                result.push(bill)
            }     
       })
       console.log(result)
    }

    componentDidMount() {
        this.props.getBills();
    }
      
     
    render() {
        const { categories, bills, deleteBill } = this.props;

        return (
            <div className="container">
                <div className="row">
                        <div className="col-md-4 offset-md-8">
                            <div className="form-group">
                                    <label htmlFor="amount">Enter Your Budget</label>
                                    <input className="form-control"  onChange={(e) => this.handleInputChange(e)} id="amount" name="amount" type="text" placeholder="Budget Amount" pattern="[0-9]+" required />
                            </div>
                            
                        </div>
                        <div className="col-md-12">
                    <table className="table table-sm table-primary table-bordered bill-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Description</th>
                                <th scope="col">Category</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Date</th>
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
                                    </tr>
                                )
                            }) : ""}

                        </tbody>
                    </table>

                </div>
                </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      bills: state.bills,
      categories: state.categories
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getCategories: (payload) => dispatch(getCategories(payload)),
      addBill: (payload) => dispatch(addBill(payload)),
      getBills: () => dispatch(getBills()),
      deleteBill: (id) => dispatch(deleteBill(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)