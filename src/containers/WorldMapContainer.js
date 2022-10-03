import React from 'react'
import useLoadData from '../hooks/useLoadData'
import WorldMap from '../components/charts/WorldMap'

export default function Container() {
  const tWorldUrl = 'https://code.highcharts.com/mapdata/custom/world.topo.json'
  const pWorldUrl = 'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population.json'

  const { loading: loadingWorldTopology, data: worldTopology } = useLoadData({ url: tWorldUrl })
  const { loading: loadingWorldPopulation, data: worldPopulation } = useLoadData({ url: pWorldUrl })

  return (
    <>
      {!(loadingWorldTopology || loadingWorldPopulation) && (
          <WorldMap
            topology={worldTopology}
            data={worldPopulation}
          />
        )}
    </>
  )
}