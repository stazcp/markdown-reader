import { createContext, useState } from 'react'
import { defaultText } from '../consts/defaultText'
export const AppContext = createContext()

export default function AppContextProvider(props) {
  const [markedText, setMarkedText] = useState(defaultText)

  return (
    <AppContext.Provider value={{ markedText, setMarkedText }}>
      {props.children}
    </AppContext.Provider>
  )
}
