import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
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
  Title,
  Tooltip,
  Legend
);
class ReportService extends Component {
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
        labels: ["Hôm nay (20/08/2023)"],
        datasets: [
          {
            label: "Nâng mũi",
            backgroundColor: "rgba(255, 204, 255, 0.5)",
            borderColor: "rgba(255, 204, 255, 1) ",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255, 0.8)",
            hoverBorderColor: "rgba(255, 204, 255, 1) ",
            data: [65]
          },
          {
            label: "Cắt mí",
            backgroundColor: "rgba(255, 204, 204, 0.5)",
            borderColor: "rgba(255, 204, 204, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 204, 0.8)",
            hoverBorderColor: "rgba(255, 204, 204, 1)",
            data: [35]
          },
          {
            label: "Nâng ngực",
            backgroundColor: "rgba(255, 204, 153, 0.5)",
            borderColor: "rgba(255, 204, 153, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 153, 0.8)",
            hoverBorderColor: "rgba(255, 204, 153, 1)",
            data: [39]
          },
          {
            label: "Hút mỡ",
            backgroundColor: "rgba(255, 204, 102, 0.5)",
            borderColor: "rgba(255, 204, 102, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 102, 0.8)",
            hoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [10]
          },
          {
            label: "Căng chỉ",
            backgroundColor: "rgba(255, 204, 51, 0.5)",
            borderColor: "rgba(255, 204, 51, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 51, 0.8)",
            hoverBorderColor: "rgba(255, 204, 51, 1)",
            data: [23]
          },
          {
            label: "Hàm mặt",
            backgroundColor: "rgba(255, 204, 0, 0.5)",
            borderColor: "rgba(255, 204, 0, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 0, 0.8)",
            hoverBorderColor: "rgba(255, 204, 0, 1)",
            data: [45]
          }
          // Thêm các dataset cho các dịch vụ khác tại đây
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
        labels: ["1 tuần trước (12/08/2023) - (19/08/2023)"],
        datasets: [
          {
            label: "Nâng mũi",
            backgroundColor: "rgba(255, 204, 255, 0.5)",
            borderColor: "rgba(255, 204, 255, 1) ",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255, 0.8)",
            hoverBorderColor: "rgba(255, 204, 255, 1) ",
            data: [15]
          },
          {
            label: "Cắt mí",
            backgroundColor: "rgba(255, 204, 204, 0.5)",
            borderColor: "rgba(255, 204, 204, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 204, 0.8)",
            hoverBorderColor: "rgba(255, 204, 204, 1)",
            data: [55]
          },
          {
            label: "Nâng ngực",
            backgroundColor: "rgba(255, 204, 153, 0.5)",
            borderColor: "rgba(255, 204, 153, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 153, 0.8)",
            hoverBorderColor: "rgba(255, 204, 153, 1)",
            data: [29]
          },
          {
            label: "Hút mỡ",
            backgroundColor: "rgba(255, 204, 102, 0.5)",
            borderColor: "rgba(255, 204, 102, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 102, 0.8)",
            hoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [40]
          },
          {
            label: "Căng chỉ",
            backgroundColor: "rgba(255, 204, 51, 0.5)",
            borderColor: "rgba(255, 204, 51, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 51, 0.8)",
            hoverBorderColor: "rgba(255, 204, 51, 1)",
            data: [2]
          },
          {
            label: "Hàm mặt",
            backgroundColor: "rgba(255, 204, 0, 0.5)",
            borderColor: "rgba(255, 204, 0, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 0, 0.8)",
            hoverBorderColor: "rgba(255, 204, 0, 1)",
            data: [18]
          }
          // Thêm các dataset cho các dịch vụ khác tại đây
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
      barChartData: {
        labels: ["1 tháng trước (19/07/2023) - (19/08/2023)"],
        datasets: [
          {
            label: "Nâng mũi",
            backgroundColor: "rgba(255, 204, 255, 0.5)",
            borderColor: "rgba(255, 204, 255, 1) ",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255, 0.8)",
            hoverBorderColor: "rgba(255, 204, 255, 1) ",
            data: [80]
          },
          {
            label: "Cắt mí",
            backgroundColor: "rgba(255, 204, 204, 0.5)",
            borderColor: "rgba(255, 204, 204, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 204, 0.8)",
            hoverBorderColor: "rgba(255, 204, 204, 1)",
            data: [90]
          },
          {
            label: "Nâng ngực",
            backgroundColor: "rgba(255, 204, 153, 0.5)",
            borderColor: "rgba(255, 204, 153, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 153, 0.8)",
            hoverBorderColor: "rgba(255, 204, 153, 1)",
            data: [40]
          },
          {
            label: "Hút mỡ",
            backgroundColor: "rgba(255, 204, 102, 0.5)",
            borderColor: "rgba(255, 204, 102, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 102, 0.8)",
            hoverBorderColor: "rgba(255, 204, 102, 1)",
            data: [63]
          },
          {
            label: "Căng chỉ",
            backgroundColor: "rgba(255, 204, 51, 0.5)",
            borderColor: "rgba(255, 204, 51, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 51, 0.8)",
            hoverBorderColor: "rgba(255, 204, 51, 1)",
            data: [34]
          },
          {
            label: "Hàm mặt",
            backgroundColor: "rgba(255, 204, 0, 0.5)",
            borderColor: "rgba(255, 204, 0, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 0, 0.8)",
            hoverBorderColor: "rgba(255, 204, 0, 1)",
            data: [28]
          }
          // Thêm các dataset cho các dịch vụ khác tại đây
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
    const { barChartData, options } = this.state;

    if (!barChartData) {
      return null;
    }

    return (
      <div>
        <Bar options={options} data={barChartData} />
        <div className="clickBtn">
          <button onClick={this.change1}>1 tuần trước</button>
          <button onClick={this.change2}>1 tháng trước</button>
        </div>
      </div>
    );
  }
}

export default ReportService;
