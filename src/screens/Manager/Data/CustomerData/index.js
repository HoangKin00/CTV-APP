// import dataStyles from "./Data.module.scss";

import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
class CustomerData extends Component {
  constructor() {
    super();
    this.state = {
      pieChartData: null
    };
    this.change1 = this.change1.bind(this);
    this.change2 = this.change2.bind(this);
  }

  componentDidMount() {
    this.componentMonth();
  }

  componentMonth() {
    this.setState({
      pieChartData: {
        labels: ["Dưới 20 tuổi", "20-35 tuổi", "Trên 35 tuổi"],
        datasets: [
          {
            data: [35, 25, 40],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 204, 51, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 204, 51, 0.8)"
            ]
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: "category"
          }
        }
      }
    });
  }

  change1() {
    this.setState({
      pieChartData: {
        labels: ["Dưới 20 tuổi", "20-35 tuổi", "Trên 35 tuổi"],
        datasets: [
          {
            data: [15, 55, 30],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 204, 51, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 204, 51, 0.8)"
            ]
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: "category"
          }
        }
      }
    });
  }

  change2() {
    this.setState({
      pieChartData: {
        labels: ["Dưới 20 tuổi", "20-35 tuổi", "Trên 35 tuổi"],
        datasets: [
          {
            data: [20, 20, 60],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 204, 51, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 204, 51, 0.8)"
            ]
          }
        ]
      },
      options: {
        scales: {
          x: {
            type: "category"
          }
        }
      }
    });
  }

  render() {
    const { pieChartData, options } = this.state;

    if (!pieChartData) {
      return null;
    }

    return (
      <div>
        <Pie options={options} data={pieChartData} />
        <div className="clickBtn">
          <button onClick={this.change1}>1 tuần trước</button>
          <button onClick={this.change2}>1 tháng trước</button>
        </div>
      </div>
    );
  }
}

export default CustomerData;
