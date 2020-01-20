import React from "react";
import BillListing from "./BillinListing/BillListing";
import Header from "./Header/Header";
const Dashboard = (props) => {
    return(
        <React.Fragment>
            <Header  bills={props.bills} totalPayable={props.totalPayable} categories={props.categories}/>
            <BillListing deleteBill={props.deleteBill} updateBill={props.updateBill} categories={props.categories} editBill={props.editBill} deleteBill={props.deleteBill} bills={props.bills} />  
        </React.Fragment>
    )
}

export default Dashboard;