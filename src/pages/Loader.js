import LoaderTwo from '../components/loading/LoaderTwo';
import LoaderThree from '../components/loading/LoaderThree';
import LoaderSeven from '../components/loading/LoaderSeven';
import BoxContainer from '../decorator/LoaderContainer';
import { useState } from 'react';

export default function () {
  const [genNumbers, setGenNumbers] = useState([])

  const handleInputChange = (e) => {
    const tValue = e.target.value
    if (tValue) {
      setGenNumbers([...Array(Number(tValue)).keys()])
    }
  }
  
  return (
    <div>
      <input type="number" onChange={handleInputChange}/>
      <h2>Loader Two</h2>
      <BoxContainer component={<LoaderTwo />} genNumbers={genNumbers}/>
      <h2>Loader Three</h2>
      <BoxContainer component={<LoaderThree />} genNumbers={genNumbers}/>
      <h2>Loader Seven</h2>
      <BoxContainer component={<LoaderSeven />} genNumbers={genNumbers}/>
    </div>
  )
}