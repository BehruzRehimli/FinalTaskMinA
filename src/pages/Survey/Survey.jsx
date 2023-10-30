import React, { useState } from 'react'
import Map from '../../components/Map/Map'
import Chart from "chart.js/auto"
import { CategoryScale } from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import Desc from "../../jsons/top-10-desc.json"
import Asc from "../../jsons/top-10-ascending.json"
import PieChart from "../../jsons/all-pie-chart.json"
import TableData from '../../jsons/list-of-results.json'
import { Space, Table, Tag } from 'antd';


Chart.register(CategoryScale);

const Survey = () => {



    const [chartData, setChartData] = useState({
        labels: Desc.data.map((data) => data.label),
        datasets: [
            {
                label: "Nüfuz",
                data: Desc.data.map((data) => data.vote),
                backgroundColor: [
                    "red"
                ],
                borderColor: "red",
                borderWidth: 2
            }
        ]
    });
    const [chartAsc, setChartAsc] = useState({
        labels: Asc.data.map((data) => data.label),
        datasets: [
            {
                label: "Nüfuz",
                data: Asc.data.map((data) => data.vote),
                backgroundColor: [
                    "green"
                ],
                borderColor: "green",
                borderWidth: 2
            }
        ]
    });
    const [chartPie, setChartPie] = useState({
        labels: PieChart.data.map((data) => data.label),
        datasets: [
            {
                label: "Nüfuz",
                data: PieChart.data.map((data) => data.vote),
                backgroundColor: [
                    "red",
                    "orange",
                    "yellow",
                    "green",
                    "blue",
                    "purple",
                    "grey",
                    "cyan",
                    "maroon",
                    "silver",
                    "violet",
                    "teal",
                    "lime"
                ],
                borderColor: "white",
                borderWidth: 1
            }
        ]
    });

    const columns = TableData.columns.map((elem)=>({
        title: elem.title,
        dataIndex: elem.field,
        key: elem.field
    }))
    console.log(columns);


    return (
        <main>
            <div className='my-container d-flex'>
                <Map />
                <div className='content-box'>
                    <div className='content'>
                        <p className='char-header mt-2'>{Desc.title}</p>
                        <div className="chart-box">
                            <Bar
                                data={chartData}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Ağaclar Qrafik Analizi"
                                        }
                                    }
                                }}
                            />


                        </div>
                        <p className='char-header mt-5'>Top 10 Ascending Results</p>
                        <div className="chart-box">
                            <Bar
                                data={chartAsc}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Ağaclar Qrafik Analizi"
                                        }
                                    }
                                }}
                            />


                        </div>
                        <p className="char-header mt-5">
                            All Result Pie Chart
                        </p>
                        <div className="chart-box">
                            <Pie
                                data={chartPie}
                                options={{
                                    plugins: {
                                        title: {
                                            display: true,
                                            text: "Chart.js Pie Chart"
                                        }
                                    }
                                }}
                            />
                        </div>
                        <p className="char-header mt-5 mb-3">
                            {TableData.title}
                        </p>
                        <Table columns={columns} dataSource={TableData.data} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Survey