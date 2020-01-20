import React, { Component } from "react";
import { connect } from 'react-redux';
import { dispatch } from "redux-thunk";
import { getBills, getCategories, addBill, deleteBill } from "../../store/Actions";
import {Categories} from "../../Modals/Categories";
import DashboardComponent from "../../components/DashBoard/Dashboard";

class Dashboard extends Component {
    state = {
      totalPayable: 0
    }
     componentDidMount() {
        this.props.getCategories(Categories);
        this.props.getBills();
      }
      
  
    
    render() {
        const { totalPayable } = this.state;
        const { categories, bills, deleteBill } = this.props;

        return (
            <div className="container">
            <div className="row">
                <DashboardComponent deleteBill={deleteBill} totalPayable={totalPayable} bills={bills} categories={categories}/>
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