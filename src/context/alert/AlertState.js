import { useReducer } from 'react'
import { HIDE_ALERT, SHOW_ALERT } from '../types'
import alertContext from './alertContext'
import alertReducer from './alertReducer'

const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, { visible: false })

  const show = (text, type = 'warning') => {
    dispatch({
      type: SHOW_ALERT,
      payload: { text, type },
    })
  }

  const hide = () => dispatch({ type: HIDE_ALERT })

  return (
    <alertContext.Provider value={{ show, hide, alert: state }}>
      {children}
    </alertContext.Provider>
  )
}

export default AlertState
