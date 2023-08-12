import { Desktop } from './Desktop/Desktop'
import './index.css'
import { Mobile } from './Mobile/Mobile'

function App() {

  return (
    <>

      <div className='d-block d-md-none App'>
        <Mobile />
      </div>

      <div className='d-none d-md-block App'>
        <Desktop />
      </div>

    </>
  )
}

export default App