import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Dhaya.jsx'
import Dog from './Dog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
