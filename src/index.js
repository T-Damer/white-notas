import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import AlertState from './context/alert/AlertState'
import './index.scss'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AlertState></AlertState>
    <HashRouter basename="/white-notas/">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
