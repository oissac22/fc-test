import { Login } from './components/login'
import { PagesRouter } from './pages'
import './style/global.css'
import './style/components.css'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Login>
        <PagesRouter />
      </Login>
    </BrowserRouter>
  )
}



export default App
