import StyledContentLoader from 'styled-content-loader'

const ComExample = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>Its me</p>
    </div>
  )
}

export default function Loader() {
  return (
    <StyledContentLoader>
      <ComExample />
    </StyledContentLoader>
  )
}