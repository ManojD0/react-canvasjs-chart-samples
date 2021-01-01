import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Customer Satisfaction"
			},
		
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
				
					{ name: "Very Unsatisfied", y: 31 },
					{ name: "Very Satisfied", y: 4 },
				
				]
			}]
		}
		
		return (
		<div>
			<h1>React Doughnut Char</h1>
			<CanvasJSChart options = {options} 
			
			/>
			
		</div>
		);
	}
}

export default DoughnutChart;