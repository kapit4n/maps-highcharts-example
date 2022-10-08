import React from 'react'

const Box = ({ component, genNumbers }) => {
  const [check, setCheck] = React.useState(false)
  const [print10, setPrint10] = React.useState(false)

  return (
    <div>
      Display: <input value={check} defaultChecked={check} onChange={() => setCheck(!check)} type="checkbox" />
      Print {genNumbers.length}: <input value={print10} defaultChecked={print10} onChange={() => setPrint10(!print10)} type="checkbox" />
      {check && (
        <>
          {print10 ? (
            <div>
              {
                genNumbers.map(n => (
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