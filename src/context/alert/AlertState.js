import AlertContext from './alertContext'

const AlertState = ({ children }) => {
  return <AlertContext.Provider>{children}</AlertContext.Provider>
}

export default AlertState
