import { createContext, useState } from 'react'

export const AppContext = createContext()

export default function AppContextProvider(props) {
  const [markedText, setMarkedText] = useState('')

  return (
    <AppContext.Provider value={{ markedText, setMarkedText }}>
      {props.children}
    </AppContext.Provider>
  )
}
