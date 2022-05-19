import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import 'material-icons/iconfont/material-icons.scss'

import './sass/ext/dark-theme.scss'

import Footer from './footer'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header></header>
    <main>
      <div className="container">
        <div className="row">
          <App />
        </div>
      </div>
    </main>
    <footer>
    <Footer
          author=""
          authorURL=""
          photo={false}
        />
    </footer>
  </React.StrictMode>
)
