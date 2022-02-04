import { createContext, useContext, useReducer } from "react";

// import reducer
import githubReducer from "./githubReducer";


// 1. create context
const GithubContext = createContext();

// 2. create provider
const GithubProvider = ({children}) => {

  // const [resultText, setResultText] = useState('');

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    resultText: '',
  }
  
  // syntax useReducer
  // const [state, dispatch] = useReducer(reducer, initialState)    // dispatch => transfer, shoot an event
  const [state, dispatch] = useReducer(githubReducer, initialState);

  
  return (
    <GithubContext.Provider value={{
      ...state,
      dispatch,
    }}>
      {children}
    </GithubContext.Provider>
  )
}

// 3. use Context (a function)
const useGithubContext = () => useContext(GithubContext);

// 4. export
export {
  GithubProvider,
  useGithubContext,
}