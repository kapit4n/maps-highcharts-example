import { Bones } from 'react-bones/lib'

export default function Loader() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 5}}>
      <Bones width={600} height={10} />
      <Bones width={600} height={10} />
    </div>
  )
}