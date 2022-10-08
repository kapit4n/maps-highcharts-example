import React from 'react'
import PlaceholderLoading from 'react-placeholder-loading'

export default function LoaderThree() {
  return (
    <div>
      <h3>react-placeholder-loading</h3>
      <h4>Cicle</h4>
      <PlaceholderLoading shape='circle' width={40} height={40} />
      <h4>Button</h4>
      <div style={{ width: 100 }}>
        <PlaceholderLoading shape='rect' width={100} height={30} />
      </div>
      <h4>Table</h4>
      <div style={{ display: 'flex', width: 650 }}>
        <div style={{ width: 230 }}>
          <PlaceholderLoading shape='rect' width={150} height={10} />
        </div>
        <div style={{ width: 230 }}>
          <PlaceholderLoading shape='rect' width={150} height={10} />
        </div>
        <div style={{ width: 230 }}>
          <PlaceholderLoading shape='rect' width={150} height={10} />
        </div>
      </div>
      <div style={{ paddingBottom: '1rem' }}>
        <PlaceholderLoading shape='rect' width={630} height={3} />
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
          <PlaceholderLoading shape='rect' width={200} height={10} />
        </div>

      </div>
    </div>
  )
}
