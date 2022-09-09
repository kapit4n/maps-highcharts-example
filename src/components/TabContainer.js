import React from 'react'
import "./TabContainer.css"

export default function Tab({ tabKey, selectedTab, children }) {
  if (tabKey === selectedTab)
    return (
      <div className="tab-container">
        {children}
      </div>
    )

  return null
}
