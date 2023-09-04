import React from "react";
import './ExpenseChart.css';
import ExpenseChartBar from "./ExpenseChartBar";

function ExpenseChart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValues);
    return (
        <div className="chart">
        {props.dataPoints.map((dataPoint) => 
        <ExpenseChartBar 
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
        />
        )}
        </div>
    )

}

export default ExpenseChart;