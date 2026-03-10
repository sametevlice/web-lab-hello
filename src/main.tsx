import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { UIKit } from './pages/UIKit.tsx'

// Simple client-side routing based on pathname
const path = window.location.pathname;

let ComponentToRender = <App />;
if (path === '/uikit') {
  ComponentToRender = <UIKit />;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {ComponentToRender}
  </StrictMode>,
)
