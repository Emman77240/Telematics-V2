/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

  
class Dashboard extends React.Component {
    
    
    render() {
        return (
            <div className="dashboard-container">
                <ul className="dashboard__side-navigation">
                    <li className="dashboard__side-navigation-item">
                      <a href="/dashboard" className="dashboard__side-navigation-link">Google map</a>
                    </li>
                    <li className="dashboard__side-navigation-item">
                      <a href="/chart" className="dashboard__side-navigation-link">Chart</a>
                    </li>
                </ul>

                <div className="google-map-view">
                
                </div>
            </div>
        );
    }
}

export default Dashboard;
