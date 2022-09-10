import React from 'react'
import useLoadData from '../hooks/useLoadData'
import BoliviaMap from '../components/BoliviaMap'

export default function Container() {

  const tBoliviaUrl = 'https://code.highcharts.com/mapdata/countries/bo/bo-all.topo.json'

  const { loading: loadingBoliviaTopology, data: boliviaTopology } = useLoadData({ url: tBoliviaUrl })

  return (
    <>
      {!loadingBoliviaTopology && (
        <BoliviaMap
          topology={boliviaTopology}
        />
      )}
    </>
  )
}
