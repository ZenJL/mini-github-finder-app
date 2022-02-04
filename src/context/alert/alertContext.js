import { createContext, useContext, useReducer } from "react";

// reducer
import alertReducer from "./alertReducer";

// create context
const AlertContext = createContext();

const AlertProvider = ({children}) => {
  const initialState = null;

  // use reducer
  const [state, dispatch] = useReducer(alertReducer, initialState);

  // set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {msg,type}
    })

    setTimeout(() => {
      dispatch({
        type: 'REMOVE_ALERT',
      })
    }, 3000);
  }

  return (
    <AlertContext.Provider value={{
      alert: state,
      setAlert,

    }}>
      {children}
    </AlertContext.Provider>
  )
}

const useAlertContext = () => useContext(AlertContext);

export {
  AlertProvider,
  useAlertContext,
}
