import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import Layout from "../layouts/Layout.jsx"
import Details from "../pages/Details.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";

const router = createBrowserRouter([
 {  path: '/', 
    element: <Layout/> , 
    children:[
    {   path: '/', element: <Home />  },
    {   path: '/cities', element: <Cities /> },
    {   path: '/cities/:id', element: <Details/> },
    {   path:'/signin', element: <SignIn/> },
    {   path:'/signup', element: <SignUp/> },
    {   path:'*', element: <h1 className="bg-black text-white text-center drop-shadow-lightShadow h-5/6">Error Page</h1> }
    ]},
])
export default router;