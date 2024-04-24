import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'src/App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// improt SidebarProvider
import SidebarProvider from 'src/components/Sidebar/SidebarContext'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
