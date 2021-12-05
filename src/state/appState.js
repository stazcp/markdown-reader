import { createContext, useState, useEffect } from 'react'
import { countMarkdownChars } from '../util/charCounter'
import { defaultText } from '../consts/defaultText'

export const AppContext = createContext()

export default function AppContextProvider(props) {
  const [markedText, setMarkedText] = useState(defaultText)
  const [charCount, setCharCount] = useState(0)

  useEffect(() => {
    //console.log(`${markedText.length} - ${countMarkdownChars(markedText)}`)
    setCharCount(markedText.length - countMarkdownChars(markedText))
  }, [markedText])

  return (
    <AppContext.Provider value={{ markedText, setMarkedText, charCount }}>
      {props.children}
    </AppContext.Provider>
  )
}
