import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
      <h3>hello react counter</h3>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)


// ---------------------------------
// counter slice -------> createSlice({})
// counter store---------> configureStore()
// counter store