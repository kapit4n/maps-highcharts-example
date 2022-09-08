import './App.css';
import React, { useEffect, useState } from 'react'
import MapExample from '../components/WorldMap';
import MapExampleBolivia from '../components/BoliviaMap';
import BarChart from '../components/BarChart';

function App() {

  const [topology, setTopology] = useState(null)
  const [topologyBolivia, setTopologyBolivia] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingBoliviaData, setLoadingBoliviaData] = useState(true)

  // move this to custom hook
  useEffect(() => {

    async function loadWorldData() {
      const t = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
      ).then(response => response.json());

      setTopology(t)

      const d = await fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json').then(response => response.json());
      setData(d)

      setLoading(false)
    }

    loadWorldData()
  }, [])

  // move this to custom hook
  useEffect(() => {

    async function loadBoliviaData() {
      const t = await fetch(
        'https://code.highcharts.com/mapdata/countries/bo/bo-all.topo.json'
      ).then(response => response.json());

      setTopologyBolivia(t)

      setLoadingBoliviaData(false)
    }

    loadBoliviaData()
  }, [])

  return (
    <div>
      {!loading && (
        <MapExample
          topology={topology}
          data={data}
        />
      )}

      {!loadingBoliviaData && (
        <MapExampleBolivia
          topology={topologyBolivia}
        />
      )}
      {!loadingBoliviaData && (
        <BarChart></BarChart>
      )}
    </div>
  );
}

export default App;
