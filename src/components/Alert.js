import { useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'

const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert.visible) {
    return null
  }

  return (
    <div
      class={`alert alert-${alert.type || 'warning'} alert-dismissible`}
      role="alert"
    >
      <strong>Warning!</strong>
      {alert.text}
      <button onClick={hide} type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert
