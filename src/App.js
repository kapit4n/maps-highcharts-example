import './App.css';
import React, { useEffect, useState } from 'react'
import MapExample from './MapExample';

function App() {

  const [topology, setTopology] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function example() {
      const t = await fetch(
        'https://code.highcharts.com/mapdata/custom/world.topo.json'
      ).then(response => response.json());
  
      setTopology(t)
      console.log(t)
  
      const d = await fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json').then(response => response.json());
      console.log(d)
      setData(d)
  
      setLoading(false)
    }

    example()
  }, [])

  return (
    <div className="App">
      {!loading && (
        <MapExample
          topology={topology}
          data={data}
        />
      )}
    </div>
  );
}

export default App;
