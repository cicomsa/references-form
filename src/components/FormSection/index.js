import React from 'react'

const FormSections = ({ formSections, values, setValues }) => {

  const handleChange = e => {
    const { value, name } = e.target

    setValues({ ...values, [name]: value })
  }

  return (
    formSections.map(form => {
      const { type, sections } = form

      return (
        <div key={type}>
          <h3>{type}</h3>
          {sections.map(section => {
            const { title, inputType, key } = section
            return (
              <div className="input-wrapper" key={title}>
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
          })}
        </div>
      )
    })
  )
}

export default FormSections
