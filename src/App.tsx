import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/container/Dashboard/Dashboard'
import Home from './components/container/Home/Home'
import Err404 from './components/single/Err404'
// import TextEditor from './components/TextEditor'
import Login from './components/single/Login';
import Article from './components/single/Article'
import TextEditor from './components/single/TextEditor'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/article" element={<Article/>}/>
          <Route path="*" element={<Err404/>} />
          <Route path="/create/article" element={<TextEditor/>}/>
        </Routes>
      
      </BrowserRouter>
     
    </div>
  )
}

export default App
