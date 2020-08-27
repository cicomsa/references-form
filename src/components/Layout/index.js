import React from 'react'
import { useLocation } from 'react-router-dom'
import routes from '../../data/routes.json'

const Layout = ({ children }) => {
  const location = useLocation()
  const pathName = location.pathname
  const route = routes.find(route => route.path === pathName)

  return (
    <>
      {children(route)}
    </>
  )
}

export default Layout
