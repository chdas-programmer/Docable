import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'tippy.js/dist/tippy.css'
import { EditorContentProvider } from './ContextAPI/EditorContentContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EditorContentProvider>
      <App />
    </EditorContentProvider>
  </StrictMode>,
)
