import { AppBar } from "./components/AppBar/AppBar"


export const App = ({children}) => {

  return (
    <>
      <AppBar/>
      {children}
    </>
  )
}

  