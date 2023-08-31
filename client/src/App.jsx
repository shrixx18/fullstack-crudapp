import './App.css'
import './style.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom"
import Books from './pages/Books'
import Update from './pages/Update'
import Add from './pages/Add'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/update/:id" element={<Update/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
