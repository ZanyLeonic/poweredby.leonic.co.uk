import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './main-content'

import 'materialize-css'
import 'materialize-css/sass/materialize.scss'
import 'material-icons/iconfont/material-icons.scss'

import './sass/ext/dark-theme.scss'

import './sass/app.scss'

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
          <Main />
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
