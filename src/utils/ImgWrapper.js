import React, { useState } from 'react'

export const ImgPosition = React.createContext('')

const ImgWrapper = ({ children }) => {
  const [position, setPosition] = useState('')

  return (
    <ImgPosition.Provider value={{ position, setPosition }}>
      {children}
    </ImgPosition.Provider>
  )
}
export default ImgWrapper
