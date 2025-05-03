import { MyProvider } from '../Context/Context'
import Layout from '../Layout/Layout'
import './App.scss'

function App() {

  return (
    <>
      <MyProvider>
        <Layout />
      </MyProvider>
    </>
  )
}

export default App
