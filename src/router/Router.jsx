/* import { createBrowserRouter } from "react-router-dom"; */
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import Layout from "../layouts/Layout.jsx"
import Details from "../pages/Details.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import NotFound from "../components/NotFound.jsx";
import { createHashRouter } from "react-router-dom/dist/index.js";

const router = createHashRouter([
{  path: '/', 
    element: <Layout/> , 
    children:[
    {   path: '/', element: <Home />  },
    {   path: '/cities', element: <Cities/> },
    {   path: '/cities/:id', element: <Details/> },
    {   path:'/signin', element: (<ProtectedRoute path='/'><SignIn/></ProtectedRoute>) },
    {   path:'/signup', element: <SignUp/> },
    {   path:'*', element: <NotFound/> },
    {   path:'/404', element: <NotFound/> }
    ]},
])
export default router;