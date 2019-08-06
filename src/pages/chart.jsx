/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

  
class Chart extends Component {
    addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
    render() {
        const options = {
            title: {
              text: "Basic Column Chart in React"
            },
            data: [{				
                      type: "column",
                      dataPoints: [
                          { label: "Apple",  y: 10  },
                          { label: "Orange", y: 15  },
                          { label: "Banana", y: 25  },
                          { label: "Mango",  y: 30  },
                          { label: "Grape",  y: 28  }
                      ]
             }]
         }
        
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
                <div className="chart-view">
                <CanvasJSChart options = {options} />
                </div>
            </div>
        );
    }
}

export default Chart;


