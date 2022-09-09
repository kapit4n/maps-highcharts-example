import './App.css';
import React, { useState } from 'react'
import MapExample from '../components/WorldMap';
import MapExampleBolivia from '../components/BoliviaMap';
import BarChart from '../components/BarChart';
import useLoadData from '../hooks/useLoadData'
import TabContainer from '../components/TabContainer';
import TabHeader from '../components/TabHeader';

const TAB_INDEX = 'index'
const TAB_BOLIVIA = 'bolivia'
const TAB_CHARTS = 'charts'

function App() {

  const tWorldUrl = 'https://code.highcharts.com/mapdata/custom/world.topo.json'
  const pWorldUrl = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json'
  const tBoliviaUrl = 'https://code.highcharts.com/mapdata/countries/bo/bo-all.topo.json'

  const { loading: loadingBoliviaTopology, data: boliviaTopology } = useLoadData({ url: tBoliviaUrl })
  const { loading: loadingWorldTopology, data: worldTopology } = useLoadData({ url: tWorldUrl })
  const { loading: loadingWorldPopulation, data: worldPopulation } = useLoadData({ url: pWorldUrl })


  const [selectedTab, setSelectedTab] = useState('index')

  return (
    <div>

      <TabHeader tabNames={[TAB_INDEX, TAB_BOLIVIA, TAB_CHARTS]} selectedTab={selectedTab} onChange={setSelectedTab} />

      <TabContainer tabKey={TAB_INDEX} selectedTab={selectedTab}>
        {!(loadingWorldTopology || loadingWorldPopulation) && (
          <MapExample
            topology={worldTopology}
            data={worldPopulation}
          />
        )}
      </TabContainer>

      <TabContainer tabKey={TAB_BOLIVIA} selectedTab={selectedTab}>
        {!loadingBoliviaTopology && (
          <MapExampleBolivia
            topology={boliviaTopology}
          />
        )}
      </TabContainer>

      <TabContainer tabKey={TAB_CHARTS} selectedTab={selectedTab}>
        <BarChart></BarChart>
      </TabContainer>
    </div>
  );
}

export default App;
