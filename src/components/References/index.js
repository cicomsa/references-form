import React, { useState } from 'react'
import axios from 'axios'
import referencesSections from '../../data/references.json'
import './index.scss'

const References = () => {
  const [values, setValues] = useState([])
  const initSections = [...referencesSections]
  const [formSections, setFormSections] = useState(initSections)
  const handleSubmit = () => {
    const references = referencesSections.reduce((references, el, i) => {
      const { type, sections } = el
      sections.map(section => {
        const { key } = section
        references[type.toLowerCase()] = {
          ...references[type.toLowerCase()],
          [key]: values[key]
        }
      })

      return references
    }, {})

    axios
      .post('https://reference.co/new', references)
      .catch(e => console.log(e))
  }

  const handleChange = e => {
    const { value, name } = e.target

    setValues({ ...values, [name]: value })
  }

  const addEmployerSection = () => {
    const employerSection = referencesSections.find(section => section.type === 'Employer')

    setFormSections([...formSections, employerSection])
  }

  return (
    <form onSubmit={handleSubmit}>
      {formSections.map(form => {
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
      })}
      <div>
        <button type="button" onClick={addEmployerSection}>+</button>
      </div>
      <button type="button">Submit</button>
    </form>
  )
}

export default References
