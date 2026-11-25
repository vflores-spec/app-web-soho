import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter activa la navegación por direcciones en toda la aplicación. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)