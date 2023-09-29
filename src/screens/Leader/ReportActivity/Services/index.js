import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class ReportActivityService extends Component {
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
            label: "Số lượng dịch vụ",
            backgroundColor: "rgba(255,99,132, 0.4)",
            borderColor: "rgba(255,99,132, 1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132, 0.6)",
            hoverBorderColor: "rgba(255,99,132, 1)",
            data: [65, 35, 39, 10, 23, 45]
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
            onClick={() => this.handleButtonClick([[45, 55, 29, 9, 44, 38]])}
          >
            3 ngày
          </button>
          <button
            onClick={() => this.handleButtonClick([[65, 35, 39, 20, 23, 45]])}
          >
            7 ngày
          </button>
        </div>
        <h4>Báo cáo dịch vụ</h4>
      </div>
    );
  }
}

export default ReportActivityService;
