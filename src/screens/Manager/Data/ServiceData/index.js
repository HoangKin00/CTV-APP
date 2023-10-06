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
class ServiceData extends Component {
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
          "Nâng mũi",
          "Nâng ngực",
          "Cắt mí",
          "Hút mỡ",
          "Da",
          "Sẹo",
          "Hàm mặt",
          "Căng da",
          "Tạo hình môi",
          "Cấy mỡ",
          "Trẻ hóa",
          "Dịch vụ khác"
        ],
        datasets: [
          {
            label: "Dịch vụ",
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
        labels: [
          "Nâng mũi",
          "Nâng ngực",
          "Cắt mí",
          "Hút mỡ",
          "Da",
          "Sẹo",
          "Hàm mặt",
          "Căng da",
          "Tạo hình môi",
          "Cấy mỡ",
          "Trẻ hóa",
          "Dịch vụ khác"
        ],
        datasets: [
          {
            label: "Doanh số dịch vụ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255, 99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255, 99,132,1)",
            data: [55, 29, 40, 10, 23, 81, 56, 55, 48, 10, 20, 77]
          }
        ]
      }
    });
  }

  change2() {
    this.setState({
      barChartData: {
        labels: [
          "Nâng mũi",
          "Nâng ngực",
          "Cắt mí",
          "Hút mỡ",
          "Da",
          "Sẹo",
          "Hàm mặt",
          "Căng da",
          "Tạo hình môi",
          "Cấy mỡ",
          "Trẻ hóa",
          "Dịch vụ khác"
        ],
        datasets: [
          {
            label: "Doanh số dịch vụ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255, 99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255, 99,132,1)",
            data: [55, 4, 29, 40, 21, 10, 29, 40, 10, 23, 81, 56]
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
        <div className="clickBtn">
          <button onClick={this.change1}>1 tuẩn trước</button>
          <button onClick={this.change2}>1 tháng trước</button>
        </div>
      </div>
    );
  }
}

export default ServiceData;
