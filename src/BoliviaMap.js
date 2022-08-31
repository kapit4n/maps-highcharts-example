import { useMemo } from 'react'

import Highcharts from "highcharts";
import HighchartsMap from "highcharts/modules/map";
import HighchartsReact from "highcharts-react-official";

import boliviaPopulation from './bolvia-population.json'

HighchartsMap(Highcharts);

function MapExample({ data, topology }) {

  const options = useMemo(() => {
    return {
      chart: { borderWidth: 1, map: topology },

      title: { text: 'Bolivia 2016 by departament' },

      subtitle: { text: 'Demo of Highcharts map with bubbles' },

      accessibility: { description: 'Description goes here' },

      legend: { enabled: false },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      series: [{
        name: 'Countries',
        color: '#E0E0E0',
        enableMouseTracking: false
      }, {
        type: 'mapbubble',
        name: 'Population Bolivia',
        joinBy: ['hc-a2', 'code3'],
        data: boliviaPopulation,
        minSize: 4,
        maxSize: '10%',
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
