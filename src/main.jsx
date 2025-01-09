import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import './Components/Footer/Footer.css'
import './Components/Navbar/Navbar.css'
import './Components/Information/Info.css'
import './Components/AboutComponent/About.css'
import './Components/Portfolio/Portfolio.css'
import './Components/Contact/Contact.css'

import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
