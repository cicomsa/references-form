import React from 'react'
import Input from '../Input'

const FormSections = ({ formSections }) => {
  return (
    formSections.map(form => {
      const { type, sections } = form

      return (
        <div key={type}>
          <h3>{type}</h3>
          {sections.map(section => {
            const { title, inputType, key } = section

            return (
              <Input
                title={title}
                key={title}
                inputType={inputType}
              />
            )
          })}
        </div>
      )
    })
  )
}

export default FormSections
