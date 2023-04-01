import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Logado from './pages/Logado';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/Cadastro' element={<Cadastro/>}/> 
        <Route path='/Logado' element={<Logado/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
