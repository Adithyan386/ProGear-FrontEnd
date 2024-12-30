import { createContext, useState } from "react";

export const LoginContext = createContext()

  const LoginProvider = ({children}) =>{
    const [LoginRespones, setLoginRespones] = useState()

    return(
        <LoginContext.Provider value={{LoginRespones, setLoginRespones}}>
            {children}
        </LoginContext.Provider>
    )
 }

 export default LoginProvider