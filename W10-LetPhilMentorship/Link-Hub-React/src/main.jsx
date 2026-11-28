import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {JavaInsert, NewFunction} from './Newfunction.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <JavaInsert />
    <NewFunction />
    <NewFunction />
    <NewFunction />
  </StrictMode>,
)
