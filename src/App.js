import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <Router>
      <Layout>
        <Route exact path={'/'} component={Homepage} />
      </Layout>
    </Router>
  )
}

export default App
