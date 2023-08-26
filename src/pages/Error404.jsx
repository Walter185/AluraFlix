import error404 from "../assets/img/something-lost.png";
import { styled } from "styled-components";
import { ContenidoCompleto } from "../components/UI/Estilos";

const Header = styled.div`
    padding: 1rem;
    background-color: ${({ theme }) => theme.oscuro};
    border-bottom: solid 1px ${({ theme }) => theme.primero};
    text-align: center;
`;

const HeaderContenido = styled(ContenidoCompleto)`
    display: flex;
    justify-content: center;
`;
const Imagen = styled.img`
    max-width: 75%;
    @media screen and (min-width: 768px) {
        
    }
    @media screen and (min-width: 1024px) {

    }
`;
export function Error404() {
    return (
        <Header>
            <HeaderContenido>
            <Imagen src={error404}/>
            </HeaderContenido>
        </Header>

    );
}