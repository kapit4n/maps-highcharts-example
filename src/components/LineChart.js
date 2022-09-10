import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function LineChart(props) {

  const options = {
    title: {
      text: 'Line chart',
      style: {
        display: 'none'
      }
    },
    legend: {
      align: 'right',
      verticalAlign: 'top',
      symbolWidth: 5,
      symbolHeight: 8
    },
    xAxis: {
      tickColor: '#FFFFFF',
      categories: props.categories
    },
    yAxis: {
      tickColor: '#FFFFFF',
      gridLineColor: '#FFFFFF',
      title: {
        style: {
          display: 'none'
        }
      },
      labels: {
        formatter: function () {
          return `$${this.value}`
        }
      }
    },
    plotOptions: {
      series: {
        marker: {
          symbol: 'circle'
        }
      }
    },
    tooltip: {
      shared: true
    },
    series: [{
      type: 'line',
      name: 'Line',
      color: '#6a6a6a',
      pointPadding: 0,
      groupPadding: 0,
      data: props.data3
    }, {
      type: 'line',
      name: 'Line 1',
      color: '#0071ce',
      data: props.data1
    }, {
      type: 'line',
      name: 'Line 2',
      color: '#ff671b',
      data: props.data2
    }]
  }

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  )
}