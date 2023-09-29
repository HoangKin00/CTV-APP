import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
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
  Title,
  Tooltip,
  Legend
);
class ReportCustomer extends Component {
  constructor() {
    super();
    this.state = {
      barChartData: null
    };
    this.change1 = this.change1.bind(this);
    this.change2 = this.change2.bind(this);
  }

  componentDidMount() {
    this.componentMonth();
  }

  componentMonth() {
    this.setState({
      barChartData: {
        labels: [
          "Tháng 1",
          "Tháng 2",
          "Tháng 3",
          "Tháng 4",
          "Tháng 5",
          "Tháng 6",
          "Tháng 7",
          "Tháng 8",
          "Tháng 9",
          "Tháng 10",
          "Tháng 11",
          "Tháng 12"
        ],
        datasets: [
          {
            label: "Doanh số tổng số khách hàng",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255, 99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255, 99,132,1)",
            data: [65, 59, 80, 81, 56, 55, 48, 10, 20, 54, 33, 13]
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
      barChartData: {
        labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4", "Tuần 5"],
        datasets: [
          {
            label: "Doanh số khách hàng",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255, 99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255, 99,132,1)",
            data: [55, 29, 40, 10, 23]
          }
        ]
      }
    });
  }

  change2() {
    this.setState({
      barChartData: {
        labels: ["Tháng 3", "Tháng 4", "Tháng 5"],
        datasets: [
          {
            label: "Doanh số khách hàng",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255, 99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255, 99,132,1)",
            data: [55, 29, 40, 21, 10]
          }
        ]
      }
    });
  }

  render() {
    const { barChartData, options } = this.state;

    if (!barChartData) {
      return null;
    }

    return (
      <div>
        <Line options={options} data={barChartData} />
        <button onClick={this.change1}>1 tháng trước</button>
        <button onClick={this.change2}>3 tháng trước</button>
      </div>
    );
  }
}

export default ReportCustomer;
