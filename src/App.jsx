import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from './Body'
import { About } from './About'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import { Team } from './Team'
import { Login } from './Login'
import { Accordion } from './Accordion'
import { NestedComment } from './NestedComment'
import { ImageSlider } from './ImageSlider'
import { Pagination } from './Pagination'
import LiveChat from './LiveChat'
import SearchUI from './SearchUI'
import ProtectedRoute from './ProtectedRoute'


function App() {
  // Auth logic 
  // Put it in protected Route 
  // proteccted Route is empty route 
  // const isAuthenticated = true;

  const [lang, setLang] = useState('en');

  return (
    <>
    <header style={{display: 'flex', gap:'20px', background: 'black', color: 'white', fontSize: '24px', fontWeight:'700', padding: "20px 0"}}>
      <nav style={{display:'flex', gap: '20px'}}>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link>
        <Link to="/team">Team</Link>
        <Link to="/login">Login</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/nestedComment">Nested Comment</Link>
        <Link to="/imageSlider">Image Slider</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/liveChat">Live Chat</Link>
        <Link to="/searchUI">Search UI</Link>
      </nav>
      <div>
        <select name="" value={lang} onChange={(e)=> setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="sp">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="ru">Russsian</option>
        </select>
      </div>
      </header>
   
        <div style={{padding:'20px'}}>
          <Routes>
        <Route path="/" element={<Body />}></Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/about" element={<About lang={lang} />}> </Route>
        </Route>


        {/* Bad Way of doing it URL is not  changing 
        <Route path="/about" element={ isAuthenticated ?  <About /> : <Login />}> </Route>  */}

        <Route path="/team" element={<Team />}></Route>

        <Route path="/login" element={<Login />}></Route>
        <Route path="/accordion" element={<Accordion />}></Route>
        <Route path="/nestedComment" element={<NestedComment />}></Route>
        <Route path="/imageSlider" element={<ImageSlider />}></Route>
        <Route path="/pagination" element={<Pagination />}></Route>
        <Route path="/livechat" element={<LiveChat/>}></Route>
        <Route path="/searchUI" element={<SearchUI/>}></Route>

        </Routes>
        </div>
    
    
   
    </>
  )
}

export default App
