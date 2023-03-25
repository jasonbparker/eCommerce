import React from 'react'

export const ShopContext = createContext(null)

const getDefaultCart = () => {

}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
  return (
    <ShopContext.Provider>{props.children}</ShopContext.Provider>
  )
}
