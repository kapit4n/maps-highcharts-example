import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'

export default function LoaderThree() {
  return (
    <div>
      <h3>react-placeholder-loading</h3>
      <h4>Cicle</h4>
      <PlaceholderLoading shape='circle' width={100} height={100} />
      <h4>Rect</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <PlaceholderLoading shape='rect' width={150} height={10} />
        <PlaceholderLoading shape='rect' width={200} height={10} />
        <PlaceholderLoading shape='rect' width={200} height={10} />
        <PlaceholderLoading shape='rect' width={200} height={10} />
      </div>
    </div>
  )
}
