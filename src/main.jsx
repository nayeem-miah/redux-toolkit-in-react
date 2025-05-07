import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Counter from './Components/Counter/Counter'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <div className=''>
        <Counter />
      </div>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)
