import React from 'react'
import './TabHeader.css'

export default function TabHeader({ tabNames, selectedTab, onChange }) {
  return (
    <div className="tab-header-container">
      {tabNames.map(tabName => (
        selectedTab === tabName ? <h2 className="selected" onClick={() => onChange(tabName)}>{tabName}</h2> : <h2 onClick={() => onChange(tabName)}>{tabName}</h2>
      ))}
    </div>
  )
}
