import React from 'react'

const Box = ({ component }) => {


  const [check, setCheck] = React.useState(true)

  return (
    <div>
      <input value={check} defaultChecked={check} onChange={() => setCheck(!check)} type="checkbox" />
      {check && (
        <>{component}</>
      )}
    </div>
  )

}

export default Box