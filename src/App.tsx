 

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import KanbanBoard from './pages/KanbanBoard';
import { BrowserRouter } from 'react-router-dom';
import './app.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route element={<Home />} path="/"></Route>
    <Route element={<Login></Login>} path="/login"></Route>
    <Route element={<Signup />} path="/signup"></Route>
    <Route element={<KanbanBoard />} path="/kanban"></Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
