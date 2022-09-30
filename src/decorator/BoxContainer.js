import React from 'react'

const Box = ({ component }) => {


  const [check, setCheck] = React.useState(true)
  const [print10, setPrint10] = React.useState(false)
  const fileItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      Display: <input value={check} defaultChecked={check} onChange={() => setCheck(!check)} type="checkbox" />
      Print 10: <input value={print10} defaultChecked={print10} onChange={() => setPrint10(!print10)} type="checkbox" />
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
          {component}
        </>
      )}
    </div>
  )

}

export default Box