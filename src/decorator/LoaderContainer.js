import React from 'react'

const nRenders = 100

const Box = ({ component }) => {

  const [check, setCheck] = React.useState(false)
  const [print10, setPrint10] = React.useState(false)
  const fileItems = [...Array(nRenders).keys()]

  return (
    <div>
      Display: <input value={check} defaultChecked={check} onChange={() => setCheck(!check)} type="checkbox" />
      Print {nRenders}: <input value={print10} defaultChecked={print10} onChange={() => setPrint10(!print10)} type="checkbox" />
      {check && (
        <>
          {print10 ? (
            <div>
              {
                fileItems.map(n => (
                  <div key={n}>
                    {n}: {component}
                  </div>
                ))
              }
            </div>
          ) : (<>{component}</>)}
        </>
      )}
    </div>
  )

}

export default Box