import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ReportActivityCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartData: {
        labels: [
          "Nâng mũi",
          "Cắt mí",
          "Nâng ngực",
          "Hút mỡ",
          "Căng chỉ",
          "Hàm mặt"
        ],
        datasets: [
          {
            label: "Số lượng khách hàng",
            backgroundColor: "rgba(192,75,192, 0.6)",
            borderColor: "rgba(192,75,192, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(192,75,192, 0.8)",
            hoverBorderColor: "rgba(192,75,192, 1)",
            data: [65, 35, 39, 10, 23, 45]
          },
          {
            label: "Số lượng khách hàng thực hiện dịch vụ",
            backgroundColor: "rgba(255, 204, 255,0.7)",
            borderColor: "rgba(255, 204, 255,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255, 204, 255,0.9)",
            hoverBorderColor: "rgba(255, 204, 255,1)",
            data: [30, 20, 25, 5, 10, 15]
          }
        ]
      },
      selectedData: null
    };
  }

  handleButtonClick = (data) => {
    const { barChartData } = this.state;
    const newData = {
      ...barChartData,
      datasets: barChartData.datasets.map((dataset, index) => {
        return {
          ...dataset,
          data: data[index]
        };
      })
    };
    this.setState({ selectedData: newData });
  };

  render() {
    const { barChartData, selectedData } = this.state;

    return (
      <div>
        <Bar
          data={selectedData || barChartData}
          options={{
            scales: {
              y: {
                beginAtZero: true
              }
            }
          }}
        />
        <div>
          <button
            onClick={() =>
              this.handleButtonClick([
                [45, 55, 29, 9, 44, 38],
                [10, 40, 16, 4, 30, 25]
              ])
            }
          >
            3 ngày
          </button>
          <button
            onClick={() =>
              this.handleButtonClick([
                [65, 35, 39, 20, 23, 45],
                [50, 10, 30, 10, 10, 5]
              ])
            }
          >
            7 ngày
          </button>
        </div>
        <h4>Báo cáo khách hàng</h4>
      </div>
    );
  }
}

export default ReportActivityCustomer;
