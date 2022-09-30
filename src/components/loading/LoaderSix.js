import StyledContentLoader from 'styled-content-loader'
import withCheckbox from '../../decorator/BoxContainer'

const ComExample = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>Its me</p>
    </div>
  )
}

const Loader = () => {
  return (
    <StyledContentLoader>
      <ComExample />
    </StyledContentLoader>
  )
}

export default Loader