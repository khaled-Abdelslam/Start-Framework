

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './Components/Layout/Layout';
import Info from './Components/Information/Info';
import About from './Components/AboutComponent/About';
import Portfolio from './Components/Portfolio/Portfolio';

import Contact from './Components/Contact/Contact';



const router = createBrowserRouter([

  { path: '', element: <Layout /> },
  
  {
    path: 'Start-Framework', element: <Layout />, children: [
      { path: '', element: <Info /> },
      { path: 'info', element: <Info /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
    ]
  },



  // {
  //   path: '*', element: <div className='vh-100 bg-secondary d-flex justify-content-center align-items-center'>
  //     <h1 className='fs-1 fw-bolder'>ERROR 4     0     4</h1>
  //   </div>
  // },

])




function App() {



  return (
    <>

      <RouterProvider router={router} />

    

    </>
  )
}




export default App
