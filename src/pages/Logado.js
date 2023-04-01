import { Container, Typography, Button, MenuList } from '@material-ui/core';
import './LoginCadastro.css'

function Logado() {
    return (
        <div className='father'>
            <div style={{display:'flex',flexDirection:"column"}}>
            <div>   
                <MenuList>
                    <Button variant='contained'  color='primary' href='/Login'>Sair</Button>
                </MenuList>
                </div>
            <div>
                <Container maxWidth="xs" style={{backgroundColor:'red'}}>
                    <Typography variant="h1">ESTÁ LOGADO</Typography>
                </Container>
            </div>
            </div>
        </div>
    )
}

export default Logado;