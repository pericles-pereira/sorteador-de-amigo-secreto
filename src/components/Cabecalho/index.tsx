import styled from "styled-components"

const Header = styled.header`
    display: flex;
    justify-content: space-around;
    padding-top: 120px;

    @media screen and (max-width: 800px) {
        padding-top: 60px;
        flex-direction: column;
        align-items: center;
    }
`;

const ImagemLogo = styled.div`
    background-image: url("/imagens/logo.png");
    width: 351px;
    height: 117px;

    @media screen and (max-width: 800px) {
        background-image: url("/imagens/logo-pequeno.png");
        width: 235px;
        height: 199px;
    }
`;

const ParticipanteImagem = styled.img`
    z-index: 1;
`;

const Cabecalho = () => {
    return (
        <Header role="heading">
            <ImagemLogo role="banner" aria-label='Logo do Sorteador'></ImagemLogo>
            <ParticipanteImagem src="/imagens/participante.png" alt="Participante com um presente na mão" />
        </Header>
    )
}

export default Cabecalho
