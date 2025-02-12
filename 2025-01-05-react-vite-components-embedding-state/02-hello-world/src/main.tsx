import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PetStore from './components/pet-store/PetStore'

createRoot(document.getElementById('root')!).render(
  // <div>
  // <p>hello world</p>
  // <a href="http://google.com">google</a>
  // </div>
  <StrictMode>
    <PetStore />
  </StrictMode>,
)
