import React from 'react'
import { ShimmerTitle, ShimmerText, ShimmerButton } from 'react-shimmer-effects'

export default function LoaderTwo() {
  return (
    <div>
      <h3>react-shimmer-effects</h3>
      <h4>Button</h4>
      <ShimmerButton size="md" />
      <h4>Text</h4>

      <div style={{ display: 'flex', gap: 10 }}>
        <div style={{ width: '100px' }}>
          <div style={{ width: 70, height: 10, background: 'linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%)' }}></div>
        </div>
        
        <div style={{ width: '100px' }}>
          <div style={{ width: 70, height: 10, background: 'linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%)' }}></div>
        </div>
        <div style={{ width: '100px' }}>
          <div style={{ width: 70, height: 10, background: 'linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%)' }}></div>
        </div>

      </div>

      <div style={{ width: 320, height: 2, background: 'linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%)', margin: '10px 0' }}></div>

      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ width: '100px' }}>
          <ShimmerText line={5} gap={10} variant="primary" />
        </div>
        <div style={{ width: '100px' }}>
          <ShimmerText line={5} gap={10} variant="primary" />
        </div>
        <div style={{ width: '100px' }}>
          <ShimmerText line={5} gap={10} variant="primary" />
        </div>

      </div>
    </div>
  )
}

