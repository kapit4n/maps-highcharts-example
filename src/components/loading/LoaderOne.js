import React from 'react'
import Skeleton from 'react-shimmer-skeleton'

// it does not work for now
function UserCard({ name }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        Freelance Developer(React, Golang, Scala, Python, Blockchain, Ethereum, Solidity, Smart Contracts)</p>
    </div>
  )
}


export default function LoaderOne() {
  const [userData, setUserData] = React.useState({ name: "Fake User" })
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setUserData({ name: "Luis Arce" })
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <Skeleton isLoading={isLoading}
      component={UserCard}
      exampleProps={{ name: userData.name }}
    >
      <UserCard name={userData.name} />
    </Skeleton>
  )
}

