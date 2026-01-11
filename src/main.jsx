import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import './styles/index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ThemeProvider>
)
