import { useContext } from "react";
import { styled } from "styled-components";
import { Contexto } from "../Contexto";

const Principal = styled.main`
    background: ${({ theme }) => theme.oscuro};
`;


export function Home() {
    const datos = useContext(Contexto);
    const { categorias, videos } = datos
    return (
        <Principal>

        </Principal>
    )
}