const Alert = ({ alert }) => {
  if (!alert) {
    return null
  }

  return (
    <div
      class={`alert alert-${alert.type || 'warning'} alert-dismissible`}
      role="alert"
    >
      <strong>Warning!</strong>
      {alert.text}
      <button type="button" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert
