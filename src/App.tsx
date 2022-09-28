import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/container/Dashboard/Dashboard'
import Home from './components/container/Home/Home'
import Err404 from './components/single/Err404'
import Login from './components/single/Login';
import ArticleContainer from './components/container/Dashboard/ArticleContainer'
import CreateArticle from './components/container/Dashboard/CreateArticle'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Err404/>} />
          <Route path="/article/:id" element={<ArticleContainer/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/create/article" element={<CreateArticle/>}/>
          
        </Routes>
      
      </BrowserRouter>
     
    </>
  )
}

export default App
