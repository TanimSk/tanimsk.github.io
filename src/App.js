import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
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

      </Routes>
    </HashRouter>
  );
}

export default App;
