import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Structure from './assets/components/structure/structure'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Structure />
  </StrictMode>,
)
