import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { init } from '../../actions/init'
import apiCalls from '../../requests'

const Homepage = () => {
  const initData = useSelector(state => state.init)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  return (
    <p>Homepage</p>
  )
}

export default Homepage
