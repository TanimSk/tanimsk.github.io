import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Certificates from './pages/Certificates/Certificates';
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/skills' element={<>
          <Header></Header>
          <Skills></Skills>
        </>} />

        <Route path='/contact' element={<>
          <Header></Header>
          <Contact/>
        </>} />

        <Route path='/projects' element={<>
          <Header></Header>
          <Projects/>
        </>} />

        <Route path='/certificates' element={<>
          <Header></Header>
          <Certificates/>
        </>} />

      </Routes>
    </HashRouter>
  );
}

export default App;
