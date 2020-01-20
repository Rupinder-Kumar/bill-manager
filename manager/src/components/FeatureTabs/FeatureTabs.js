import React from "react";

const FeatureTabs = props => {
    const { handleTabChange, activeFeature } = props;
    return (
        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-md-4 offset-md-4 ">
                    <ul className="nav nav-pills justify-content-center nav-fill">
                        <li className="nav-item">
                            <a className={activeFeature === "Dashboard" ?  "nav-link active" : "nav-link"} onClick={() => handleTabChange('Dashboard')} href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className={activeFeature === "Budget Filter" ?  "nav-link active" : "nav-link"} onClick={() => handleTabChange('Budget Filter')} href="#">Budget Filter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FeatureTabs;