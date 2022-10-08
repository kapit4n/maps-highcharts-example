import ContentLoader from 'react-content-loader'

const Loading = (props) => {
  return (
    <>
      <h3>react-content-loader</h3>
      <div>
        <ContentLoader
          speed={2}
          width={476}
          height={124}
          viewBox="0 0 476 124"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="26" rx="3" ry="3" width="50" height="6" />
          <rect x="110" y="26" rx="3" ry="3" width="50" height="6" />
          <rect x="220" y="26" rx="3" ry="3" width="50" height="6" />

          <rect x="0" y="45" rx="3" ry="3" width="320" height="2" />

          <rect x="0" y="56" rx="3" ry="3" width="100" height="6" />
          <rect x="0" y="76" rx="3" ry="3" width="100" height="6" />
          <rect x="0" y="96" rx="3" ry="3" width="100" height="6" />


          <rect x="110" y="56" rx="3" ry="3" width="100" height="6" />
          <rect x="110" y="76" rx="3" ry="3" width="100" height="6" />
          <rect x="110" y="96" rx="3" ry="3" width="100" height="6" />

          <rect x="220" y="56" rx="3" ry="3" width="100" height="6" />
          <rect x="220" y="76" rx="3" ry="3" width="100" height="6" />
          <rect x="220" y="96" rx="3" ry="3" width="100" height="6" />
        </ContentLoader>

      </div>
      <div>
        <ContentLoader
          speed={2}
          width={476}
          height={124}
          viewBox="0 0 476 124"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          {...props}
        >
          <rect x="0" y="26" rx="3" ry="3" width="100" height="30" />
        </ContentLoader>
      </div>
    </>
  )
}

export default Loading