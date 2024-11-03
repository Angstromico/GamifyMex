import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from '@layouts/DefaultLayout'
import App from './App'
import { Home } from './pages'
import './index.css'
import './i18n' // Import i18n configuration

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DefaultLayout>
      {/* Warning: validateDOMNesting(...): <html> cannot appear as a child of <div>. Error Component Stack
    at html (<anonymous>)
    at DefaultLayout (DefaultLayout.tsx:23:3) */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DefaultLayout>
  </React.StrictMode>
)
