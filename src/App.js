import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Logado from './pages/Logado';
import { PrivatePage  } from './PrivateRoute/PrivatePage';
import { AuthProvider } from './context/AuthContext';


function App() {


  return (
    <div className="App">
       <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/> 
          <Route path='/Login' element={<Login/>}/> 
          <Route path='/Cadastro' element={<Cadastro/>}/> 
          <Route path="/Logado" element={<Logado />} />
        </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
