import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Homepage from './components/Homepage'
import References from './components/References'

const components = {
  Homepage,
  References
}

const App = () => {
  return (
    <Router>
      <Layout>
        {route => {
          const { path, component } = route
          const Component = components[component]
          return <Route exact path={path} component={Component} />
        }}
      </Layout>
    </Router>
  )
}

export default App
