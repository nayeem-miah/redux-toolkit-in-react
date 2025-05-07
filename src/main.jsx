import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Counter from './Components/Counter/Counter'
import { Provider } from 'react-redux'
import store from './store'

createRoot(document.getElementById('root')).render(


  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Counter />
      </Provider>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)
