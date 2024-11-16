import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Content from './Content.jsx'

import './CSS/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Content />
  </StrictMode>,
)
