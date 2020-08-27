import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getInitData } from '../../actions/init'
import './index.scss'

const Homepage = () => {
  const initData = useSelector(state => state.init)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInitData())
  }, [dispatch])
  console.log(initData)
  return (
    <h3 className="title">Homepage</h3>
  )
}

export default Homepage
