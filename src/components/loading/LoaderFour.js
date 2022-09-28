import PlaceholderLoading from 'react-placeholder-loading'

export default function Loading() {
  return (
    <div>
      <h3>react-placeholder-loading</h3>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        <div style={{ display: 'flex', flexDirection: "column", gap: '10px', padding: '1rem' }}>
          <PlaceholderLoading shape="rect" width={100} height={10} />
          <PlaceholderLoading shape="rect" width={100} height={10} />
          <PlaceholderLoading shape="rect" width={100} height={10} />
        </div>
        <PlaceholderLoading shape="rect" width={60} height={60} />
        <PlaceholderLoading shape="circle" width={60} height={60} />
      </div>
    </div>
  )
}
