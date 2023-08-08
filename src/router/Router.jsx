import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Cities from "../pages/Cities";
import Layout from "../layouts/Layout"

const router = createBrowserRouter([
 {  path: '/', 
    element: <Layout/> , 
    children:[
    {   path: '/', element: <Home />  },
    {  path: '/cities', element: <Cities /> },
    {  path:'*', element: <h1 className="bg-black text-white text-center drop-shadow-lightShadow">Error Page</h1> }
    ]},
])
export default router;