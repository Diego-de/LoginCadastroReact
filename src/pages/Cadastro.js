import { Container, TextField, Typography, Button } from '@material-ui/core';
import React, { useState } from "react";
import './LoginCadastro.css'
import validator from 'email-validator';
import axios from "axios";

function Cadastro() {

  const [emailValido, setEmailValido] = useState(true);
  const [passwordValido, setPasswordValido] = useState(true);


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



  const salvarDados = () => {

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

      axios.post("http://localhost:8080/users/create", {
        email: dataUser.email,
        password: dataUser.password
      })
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });

    }

  }




  return (
    <div className='father'>
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
          <Button variant="contained" style={{ width: "220px", marginBottom: "20%" }} color="primary" onClick={salvarDados}>Login</Button>
        </div>

        <div style={{ borderBottom: "solid 1px" }}>
          <Button variant="body1" href="./" style={{ color: "#1C0B2B" }}>Login</Button>
        </div>

      </Container>
    </div>
  );
}

export default Cadastro;