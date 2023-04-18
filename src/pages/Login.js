import { Container, TextField, Typography, Button } from '@material-ui/core';
import './LoginCadastro.css'
import axios from "axios";
import React, { useState, useContext } from "react";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import sun from './assets/earth.mp4'

function Login() {
  const navigate = useNavigate()
  const { setToken } = useContext(AuthContext);

  const [dataUser, SetDataUser] = useState({
    email: '',
    password: ''
  });


  const fazerLogin = async (e) => {

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/logar", {
        email: dataUser.email,
        password: dataUser.password
      });
      const token = response.data.token;
      setToken(token);
      navigate("./Logado")
    } catch (error) {
      console.error(error);
    }

  }




  return (
    <div className='father'>
      <div className="background">
        <video autoPlay loop muted>
          <source src={sun} type="video/mp4" />
        </video>
      </div>
      <Container maxWidth="xs" className='Child'>
        <Typography variant="h4" style={{ marginTop: "7%", color: "#53F5EA" }}>Login</Typography>
        <div className='inputs'>
          <TextField style={{ marginBottom: "10px" }} InputLabelProps={{ style: { color: "#E8F4FF" } }}
            label="Endereço de e-mail"
            variant="filled"
            type="email"
            onChange={(event) => SetDataUser({ ...dataUser, email: event.target.value })}
          />

          <TextField InputLabelProps={{ style: { color: "#E8F4FF" } }}
            label="Senha"
            variant="filled"
            type="password"
            onChange={(event) => SetDataUser({ ...dataUser, password: event.target.value })}
          />
        </div>
        <div>
          <Button variant="contained" id='Lgin' style={{ width: "220px", marginBottom: "20%" }} onClick={fazerLogin} color="primary">Login</Button>
        </div>

        <div className='Btn'>
          <Button variant="body1" href="./Cadastro" className='btn' >Cadastre-se</Button>
        </div>

      </Container>
    </div>
  );
}

export default Login;