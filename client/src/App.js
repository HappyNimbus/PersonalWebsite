import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Write from "./Pages/Write";
import Single from "./Pages/Single";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import './App.css';

const Layout = () => {
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/write",
        element:<Write/>
      },
    ]
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

function App() {
  return (
    <div className ="app">
      <div className ="container"></div>
      <RouterProvider router = {router}/>
    </div>
  );
}
export default App;
