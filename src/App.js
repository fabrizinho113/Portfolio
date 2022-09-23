import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Objectives from './pages/Objectives';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      
      <Routes>
        <Route path="/" element={ <Home/>} />
        <Route path="/home" element={ <Home />} />
        <Route path="/skills" element={ <Skills />} />
        <Route path="/projects" element={ <Projects />} />
        <Route path="/objectives" element={<Objectives/>} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="*" element={ <Error />} />
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
