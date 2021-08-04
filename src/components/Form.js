import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)

  const submitHandler = (event) => {
    event.preventDefault()

    alert.show(value, 'success')
  }

  return (
    <form className="mt-3" onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter note name :)"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </form>
  )
}

export default Form
