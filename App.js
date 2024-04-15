import Nav from './comp/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './comp/Home'
import About from './comp/About'
import Contact from './comp/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
