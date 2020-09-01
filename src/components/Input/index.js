import React from 'react'
import { useReferencesContext } from '../References/Content'
import './index.scss'

const Input = ({ title, key, inputType }) => {
  const { values, setValues } = useReferencesContext()

  const handleChange = e => {
    const { value, name } = e.target

    setValues({ ...values, [name]: value })
  }

  return (
    <div className="input-wrapper">
      <label htmlFor={key}>{title}</label>
      <input
        type={inputType}
        id={title}
        name={key}
        value={values[key] || ''}
        onChange={handleChange}
      />
    </div>
  )
}

export default Input
