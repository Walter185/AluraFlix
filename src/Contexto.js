import { createContext, useEffect, useState } from "react";
import { listarCategorias} from "./services/categorias.services";
import { listarVideos } from "./services/videos.services";

export const Contexto = createContext();

export function ProveedorContexto({ children }) {
    const [videos, setVideos] = useState();
    const [categorias, setCategorias] = useState();
    const [actualizador, setActualizador] = useState(1);

    useEffect(() => {
        listarVideos("/videos", setVideos);
    }, [actualizador]);

    useEffect(() => {
        listarCategorias("/categorias", setCategorias);
    }, [actualizador]);

    
    if (videos && categorias) {
        return (
            <Contexto.Provider
                value={{
                    videos: videos.data,
                    categorias: categorias.data,
                    valor: actualizador,
                    recargar: setActualizador
                }}
            >
                {children}
            </Contexto.Provider>
        );
    }
}
