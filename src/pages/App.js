import './App.css';
import React from 'react'
import MapExample from '../components/WorldMap';
import MapExampleBolivia from '../components/BoliviaMap';
import BarChart from '../components/BarChart';
import useLoadData from '../hooks/useLoadData'

function App() {

  const tWorldUrl = 'https://code.highcharts.com/mapdata/custom/world.topo.json'
  const pWorldUrl = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json'
  const tBoliviaUrl = 'https://code.highcharts.com/mapdata/countries/bo/bo-all.topo.json'

  const { loading: loadingBoliviaTopology, data: boliviaTopology } = useLoadData({ url: tBoliviaUrl })
  const { loading: loadingWorldTopology, data: worldTopology } = useLoadData({ url: tWorldUrl })
  const { loading: loadingWorldPopulation, data: worldPopulation } = useLoadData({ url: pWorldUrl })

  return (
    <div>
      {!(loadingWorldTopology || loadingWorldPopulation) && (
        <MapExample
          topology={worldTopology}
          data={worldPopulation}
        />
      )}

      {!loadingBoliviaTopology && (
        <MapExampleBolivia
          topology={boliviaTopology}
        />
      )}
      <BarChart></BarChart>
    </div>
  );
}

export default App;
