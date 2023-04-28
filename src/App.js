import './App.css';
import Navbar  from './Components/Navbar';

import HomePage from './Components/Homepage';
import About from './Components/About';
import Servies from './Components/Services';
import Contact from './Components/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Navbar />

     <div className='container'>
        <div className='col-sm-7 mt-4 text-center'>
          <Routes>
            <Route path='/'           element={ <HomePage /> }></Route>
            <Route path='/about-us/'   element={ <About /> }></Route>
            <Route path='/services'   element={  <Servies />} ></Route>
            <Route path='/contact-us' element={ <Contact /> }></Route>
          </Routes>

        </div>
     </div>

     
     
    </div>
  );
}

export default App;
