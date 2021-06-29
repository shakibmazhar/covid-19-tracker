import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import "../index.css";
import { capitalize } from "@material-ui/core";

// Line graph options
const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 0,
        },
    },
    maintainAspectRatio: false,
    tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
            label: function (tooltipItem, data) {
                return numeral(tooltipItem.value).format("+0,0");
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll",
                },
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return numeral(value).format("0.0 a");
                    },
                },
            },
        ],
    },
};

// Function for clearing data for graph
const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;

    for (let date in data.cases) {
        if (lastDataPoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date] - lastDataPoint,
            };
            chartData.push(newDataPoint);
        }
        lastDataPoint = data[casesType][date];
    }
    return chartData;
};

// Main function
const Linegraph = ({ casesType = "cases" }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        //Fetching historical data
        const fetchGraphData = async () => {
            await axios.get("/historical/all?lastdays=all").then((response) => {
                // console.log(response);
                let chartData = buildChartData(response.data, casesType);
                setData(chartData);
            });
        };
        fetchGraphData();
    }, [casesType]);

    return (
        <div className="p-4 w-full h-96">
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                label: capitalize(casesType),
                                backgroundColor: "#111",
                                borderColor: "#d70040",
                                data: data,
                            },
                        ],
                    }}
                    options={options}
                />
            )}
        </div>
    );
};

export default Linegraph;
