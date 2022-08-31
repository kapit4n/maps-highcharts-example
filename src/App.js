import './App.css';
import React, { useEffect, useState } from 'react'
import MapExample from './MapExample';
import MapExampleBolivia from './BoliviaMap';

function App() {

  const [topology, setTopology] = useState(null)
  const [topologyBolivia, setTopologyBolivia] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingBoliviaData, setLoadingBoliviaData] = useState(true)

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
      {!loading && (
        <MapExampleBolivia
          topology={topologyBolivia}
        />
      )}
    </div>
  );
}

export default App;
