/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var updateInterval = 500;


  
class Chart extends Component {constructor() {
    super();
    this.updateChart = this.updateChart.bind(this);
    }
    componentDidMount(){
        setInterval(this.updateChart, updateInterval);
    }
    updateChart() {
        var dpsColor, dpsTotal = 0, deltaY, yVal;
        var dps = this.chart.options.data[0].dataPoints;
        var chart = this.chart;
        for (var i = 0; i < dps.length; i++) {
            deltaY = Math.round(2 + Math.random() *(-2-2));
            yVal = deltaY + dps[i].y > 0 ? (deltaY + dps[i].y < 100 ? dps[i].y + deltaY : 100) : 0;
            dpsColor = yVal >= 90 ? "#e40000" : yVal >= 70 ? "#ec7426" : yVal >= 50 ? "#81c2ea" : "#88df86 ";
            dps[i] = {label: "Core "+(i+1) , y: yVal, color: dpsColor};
            dpsTotal += yVal;
        }
        chart.options.data[0].dataPoints = dps;
        chart.options.title.text = "Locations Data " + Math.round(dpsTotal / 6) + "%";
        chart.render();
    }

    render() {
        const options = {
			theme: "light",
			title: {
				text: "Locations Data"
			},
			subtitles: [{
				text: "Active Geolocation Sites."
			}],
			axisY: {
				title: "Locations (%)",
				suffix: "%",
			maximum: 100
			},
			data: [{
				type: "column",
				yValueFormatString: "#,###'%'",
				indexLabel: "{y}",
				dataPoints: [
					{ label: "Core 1", y: 68 },
					{ label: "Core 2", y: 40 },
					{ label: "Core 3", y: 16 },
					{ label: "Core 4", y: 87 },
					{ label: "Core 5", y: 10 },
					{ label: "Core 6", y: 32 }
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
                <CanvasJSChart options = {options}
					 onRef={ref => this.chart = ref} />
                </div>
            </div>
        );
    }
}

export default Chart;


