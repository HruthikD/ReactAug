import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
{/* we have to write this */}
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* we have to write this */}
    <App />
  </StrictMode>,
)
