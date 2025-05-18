import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { Provider } from 'react-redux'
import store from './app/store'


createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </Provider>
)


// ---------------------------------
// counter slice -------> createSlice({})
// counter store---------> configureStore()
// counter store