import React from 'react'
import ReactDOM from 'react-dom/client'
// @ts-expect-error not for prod
import App from './App.jsx'
// @ts-expect-error not for prod
import { ActiveFileProvider } from './activeFileContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ActiveFileProvider>
        <App />
      </ActiveFileProvider>
  </React.StrictMode>,
)
