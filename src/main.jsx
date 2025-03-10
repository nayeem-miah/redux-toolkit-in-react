import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import RouterApp from './route/Routes.jsx'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './AuthProvider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <RouterApp />
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
