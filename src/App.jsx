import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <p>
        Ganapti Bappa Morya 
      </p>

      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<LandingPage/>} />
          <Route path = '/project' element = {<Projects/>} />
          <Route path = '/about' element = {<About/>} />
          <Route path = '/contact' element = {<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
