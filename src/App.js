import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Alert from './components/Alert'

// Pages
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <div className="container pt-4">
      <Navbar />
      <Alert />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  )
}

export default App
