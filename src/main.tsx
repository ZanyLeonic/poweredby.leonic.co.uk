import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import 'material-icons/iconfont/material-icons.scss'

import './sass/ext/dark-theme.scss'

import './sass/index.scss'

import Navbar from './navbar'
import Footer from './footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="container">
        <div className="row">
          <App />
        </div>
      </div>
    </main>
    <Footer
          author=""
          authorURL=""
          photo={false}
        />
  </React.StrictMode>
)
