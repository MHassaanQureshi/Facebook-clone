import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bar from './components/bottomBar/Bar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <div className="bar">
    <Bar />
    </div> */}
  </StrictMode>,
)
