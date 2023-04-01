import { Container, TextField,Typography, Button } from '@material-ui/core';
import './LoginCadastro.css'


function Login() {
  return (
    <div className='father'> 
    <Container maxWidth="xs" className='Child'>
      <Typography variant="h4" style={{marginTop:"7%",color:"#53F5EA"}}>Login</Typography>
        <div className='inputs'>
          <TextField style={{marginBottom:"10px"}} InputLabelProps={{style:{color:"#E8F4FF"}}} label="Endereço de e-mail" variant="filled" type="email" />
          <TextField InputLabelProps={{style:{color:"#E8F4FF"}}}label="Senha" variant="filled" type="password" />
        </div>
        <div>
            <Button variant="contained" style={{width:"220px",marginBottom:"20%"}} href="./Logado" color="primary">Login</Button>
        </div>

        <div style={{borderBottom:"solid 1px"}}>
            <Button variant="body1" href="./Cadastro" style={{color:"#1C0B2B"}}>Cadastrar-se</Button>
        </div>

    </Container>
    </div>
  );
}

export default Login;