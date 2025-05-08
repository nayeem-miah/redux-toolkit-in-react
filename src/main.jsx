import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <h3>hello redux</h3>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)


// step1: install packages
// step2: constants define
// step3: async actions creator
// step4: reducer create
// step5: store create
// step 6: provider store
// step 7: use store 
// step 8 : adding css
