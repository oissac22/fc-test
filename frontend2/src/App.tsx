import { Login } from './components/login'
import { Home } from './pages'
import './style/global.css'
import './style/components.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Login>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Login>
    </BrowserRouter>
  )
}

export default App
