import React from 'react'
import { ShimmerTitle, ShimmerText, ShimmerButton } from 'react-shimmer-effects'

export default function LoaderTwo() {
  return (
    <div>
      <h3>react-shimmer-effects</h3>
      <h4>Button</h4>
      <ShimmerButton size="md" />
      <h4>Title</h4>
      <ShimmerTitle line={5} gap={10} variant="primary" />
      <h4>Text</h4>
      <ShimmerText line={5} gap={10} variant="primary" />
    </div>
  )
}

