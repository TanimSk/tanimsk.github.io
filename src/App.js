import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import Certificates from './pages/Certificates/Certificates';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Sidebar from "react-sidebar";
import SideBar from './components/Header/Sidebar';
import { useState } from 'react';

function App() {

  let [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Sidebar
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      sidebar={<SideBar />}
      pullRight={true}
    >
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route path='/skills' element={<>
            <Header sideBarState={setSidebarOpen}></Header>
            <Skills></Skills>
          </>} />

          <Route path='/contact' element={<>
            <Header sideBarState={setSidebarOpen}></Header>
            <Contact />
          </>} />

          <Route path='/projects' element={<>
            <Header sideBarState={setSidebarOpen}></Header>
            <Projects />
          </>} />

          <Route path='/certificates' element={<>
            <Header sideBarState={setSidebarOpen}></Header>
            <Certificates />
          </>} />

        </Routes>
      </HashRouter>

    </Sidebar>
  );
}

export default App;
