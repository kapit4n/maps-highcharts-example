import { useMemo } from 'react'

import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

HighchartsMap(Highcharts);

function MapExample({ data, topology }) {

  const options = useMemo(() => {
    return {
      chart: { borderWidth: 1, map: topology },

      title: { text: 'World population 2016 by country' },

      subtitle: { text: 'Demo of Highcharts map with bubbles' },

      accessibility: { description: 'We see how China and India by far are the countries with the largest population.' },

      legend: { enabled: false },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      series: [{
        name: 'Countries',
        color: 'red',
        enableMouseTracking: false
      }, {
        type: 'mapbubble',
        name: 'Population 2016',
        joinBy: ['iso-a3', 'code3'],
        data: data,
        minSize: 4,
        maxSize: '12%',
        tooltip: {
          pointFormat: '{point.properties.hc-a2}: {point.z} thousands'
        }
      }]
    }
  }, [topology, data])

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  );
}

export default MapExample;
