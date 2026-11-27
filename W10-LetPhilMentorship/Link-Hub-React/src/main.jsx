import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Newfunction} from './Newfunction.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Newfunction />
    <Newfunction />
    <Newfunction />
  </StrictMode>,
)
