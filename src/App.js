//import react from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Resume from './Pages/Resume'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Text from './components/Text'
import './App.css';

function App() {
  return (
     <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/About" element={<About/>}/>
       <Route path="/Skills" element={<Skills />}/>
       <Route path="/Projects" element={<Projects/>}/>
       <Route path="/Resume" element={<Resume/>}/>
       <Route path="/Blog" element={<Blog/>}/>
       <Route path="/Contact" element={<Contact/>}/>
     </Routes>
     <Text />
     </BrowserRouter>
  );
}

export default App;
