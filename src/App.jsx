import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/Router'

/* import Layout from './layouts/Layout'
import Home from './pages/Home' */


function App() {
  return (
    <>
      {/* <Layout>
        <Home/>
      </Layout> */}
      <RouterProvider router = {router}/>
    </>
  )
}

export default App