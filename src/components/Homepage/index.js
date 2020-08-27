import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInitData } from '../../actions/init'

const Homepage = () => {
  const initData = useSelector(state => state.init)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitData())
  }, [dispatch])

  return (
    <h3 className="title">Homepage</h3>
  )
}

export default Homepage
