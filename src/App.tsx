import Home from './components/Home'
import { createGlobalStyle} from 'styled-components'
import { ProfileContextProvider } from './context/ProfileContext'
import { SnackbarProvider } from 'notistack'

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }
`

function App() {


  return (
    <SnackbarProvider>
      <ProfileContextProvider>
        <div className="App">
          <GlobalStyle />
          <Home />
        </div>
      </ProfileContextProvider>
    </SnackbarProvider>
  )
}

export default App
