import React, { useState } from 'react'
import axios from 'axios'
import FormSection from '../FormSection'
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

  const addEmployerSection = () => {
    const employerSection = referencesSections.find(section => section.type === 'Employer')

    setFormSections([...formSections, employerSection])
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormSection formSections={formSections} values={values} setValues={setValues} />
      <div>
        <button type="button" onClick={addEmployerSection}>+</button>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default References
