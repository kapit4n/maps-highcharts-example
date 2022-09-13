import React from 'react'

/**
 * I need a component that I would like to use to display my 
 * data in an grid
 * @param {} param0 
 */
export default function GridContainer({ columns, children }) {

  const generateColumnsStyle = React.useMemo(() => [...Array(columns).keys()].reduce((acc, i) => acc + " auto", ""), [columns])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: generateColumnsStyle, columnGap: '1rem', rowGap: '1rem' }}>
      {children}
    </div>
  )
}

GridContainer.defaultProps = {
  columns: 4
}
