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
class ReportCommission extends Component {
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
        labels: ["Doanh thu hôm nay", "Hoa hồng hôm nay"],
        datasets: [
          {
            data: [75, 25],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)"
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
        labels: ["Đạt được", "Chưa đạt được"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)"
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
        labels: ["Đạt được", "Chưa đạt được"],
        datasets: [
          {
            data: [50, 50],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)"
            ],
            hoverBackgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)"
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
          <button onClick={this.change1}>1 tháng trước</button>
          <button onClick={this.change2}>3 tháng trước</button>
        </div>
      </div>
    );
  }
}

export default ReportCommission;
