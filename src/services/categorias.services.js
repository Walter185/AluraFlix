import axios from "axios";

export const api = axios.create({
    baseURL: 'https://64d171dbff953154bb7a512c.mockapi.io/'
});

export const listarCategorias = async (url, setDatos) => {
    const respuesta = await api.get(url);
    setDatos(respuesta)
} 

export const eliminarCategoria = async (id) => {
    const respuesta = await api.delete(`/categorias/${id}`);
    return respuesta;
}

export const obtenerCategoria = async (id) => {
    const respuesta = await api.get(`/categorias/${id}`);
    return respuesta.data;
}

export const crearCategoria = async (datos) => {
    const respuesta = await api.post(`/categorias`, {
        ...datos
    });
    return respuesta;
}

export const actualizarCategoria = async (id, datos) => {
    const respuesta = await api.put(`/categorias/${id}`, {
        ...datos
    });
    return respuesta;
}