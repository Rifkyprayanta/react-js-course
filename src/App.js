import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Collections from './components/Albums/collections.layout'
import MainLayouts from './components/Layouts/main.layouts'
import Navigation from './components/Layouts/navigation.layouts'
import Notfound from './components/NotFound/notfound.layouts'
import Posts from './components/Posts/posts.layout'
import Profiles from './components/Profiles/profiles.layout'


const App = () => {
  return (
    <>
    <MainLayouts>
      <Router>
      <Navigation />
        <Routes>
          <Route path="/" element={<Profiles/>}/>
          <Route path="/albums" element={<Collections/>}/>
          <Route path="/posts" element={<Posts/>}/>
          <Route path="*" element={<Notfound/>}/>
        </Routes>
      </Router>
    </MainLayouts>
    </>

  )
}

export default App