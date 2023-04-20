import { Container, TextField, Typography, Button } from '@material-ui/core';
import { Alert, Stack } from '@mui/material/';
import React, { useState } from "react";
import './LoginCadastro.css'
import validator from 'email-validator';
import axios from "axios";
import sun from './assets/earth.mp4'




function Cadastro() {

  const [emailValido, setEmailValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);
  const [alert, setAlert] = useState(null);

  const [dataUser, SetDataUser] = useState({
    email: '',
    password: ''
  });

  const [user, setUser] = useState('');

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  const isEmailValid = (email) => {
    const domainRegex = /(?<=@)[^.]+(?:\.[^.]+)+$/;
    const domain = email.match(domainRegex)?.[0];
    return validator.validate(email) && domain === "gmail.com";
  }



  const salvarDados = (event) => {

    const emailEhValido = isEmailValid(dataUser.email);
    const passwordEhValido = isPasswordValid(dataUser.password);


    if (emailEhValido) {
      setEmailValido(true)
    } else {
      setEmailValido(false)
    }

    if (passwordEhValido) {
      setPasswordValido(true)
    } else {
      setPasswordValido(false)
    }


    if (emailEhValido && passwordEhValido) {
      event.preventDefault();
      axios
        .post("http://localhost:8080/api/cadastrar", {
          email: dataUser.email,
          password: dataUser.password,
        })
        .then((response) => {
          setAlert({ type: "success", message: "Cadastro Bem Sucedido" });
          setUser(response.data);
        })
        .catch((error) => {
          if (error.response && error.response.data === "E-mail já cadastrado") {
            // email já existe, exibe mensagem de erro para o usuário
            setAlert({ type: "error", message: "Email já cadastrado" });
          } else {
            // erro genérico, exibe mensagem de erro genérica
            setAlert({type: "error", message: "Ocorreu um erro ao fazer Cadastro, tente novamente mais tarde" });
          }
        });
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
        <Typography variant="h4" style={{ marginTop: "7%", color: "#53F5EA" }}>Cadastre-se</Typography>
        <div className='inputs'>

          <TextField style={{ marginBottom: "10px" }} InputLabelProps={{ style: { color: "#E8F4FF" } }}
            required
            label="Endereço de e-mail"
            variant="filled"
            type="email"
            error={!emailValido}
            helperText={!emailValido && 'E-mail inválido'}
            onChange={(event) => SetDataUser({ ...dataUser, email: event.target.value })}
          />

          <TextField InputLabelProps={{ style: { color: "#E8F4FF" } }}
            required
            label="Senha"
            variant="filled"
            type="password"
            error={!passwordValido}
            helperText={!passwordValido && 'A senha de conter pelo menos uma letra minúscula, uma letra maiúscula, um número e tenham pelo menos 8 caracteres.'}
            onChange={(event) => SetDataUser({ ...dataUser, password: event.target.value })}
          />

        </div>
        <div>
          <Button variant="contained" style={{ width: "220px", marginBottom: "20%" }} color="primary" onClick={salvarDados}>Confirmar</Button>
        </div>

        <div className='Btn' >
          <Button variant="body1" href="./" className='btn'>Login</Button>
        </div>
        <div style={{ marginBottom: "5%" }}>
          {alert &&
            <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity={alert.type}>{alert.message}</Alert>
            </Stack>
          }
        </div>
      </Container>
    </div>
  );
}

export default Cadastro; 