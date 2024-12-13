import styled from 'styled-components';
import logo from './assets/logo.png';
import perfil from './assets/perfil.png';

const CabecalhoEstilizado = styled.header`
    display:flex; //para colocar um elemento do lado do outro
    align-items: center; //alinhar os elementos pelo centro
    justify-content: space-between; //espaçamento igual entre os elementos
    padding: 2em 4em //espaço entre os elementos e a janela
`

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-grow: .1;
`

const LinkEstilizado = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src={logo} alt="logo da empresa Voll" />
            <Container>
                <img src={perfil} alt="imagem de perfil do usuário" />
                <LinkEstilizado href="#">Sair</LinkEstilizado>
            </Container>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;