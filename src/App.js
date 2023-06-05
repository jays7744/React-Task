import './App.css';
import Users from './Task/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './Task/Add-User';

import Todos from './Task/Todos';
import Nav from './Task/Nav';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Nav/>
      <Routes>
        <Route path='/' element={<Todos/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
