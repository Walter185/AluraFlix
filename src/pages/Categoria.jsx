import styled from "styled-components";
import { ContenidoParcial, FormBoton, BotonLink, GrupoBotones, BotonesSeparador } from "../components/UI/Estilos";
import * as yup from 'yup';
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import { Tabla } from "../components/Tabla";
import { useContext } from "react";
import { Contexto } from "../Contexto";
import { crearCategoria, eliminarCategoria } from "../services/categorias.services";

const Principal = styled.main`
    background: ${({ theme }) => theme.oscuro};
`;

const PrincipalContenido = styled(ContenidoParcial)`
    padding: 2rem 0;
`;

const Campo = styled(TextField)`
    input {
        background-color: ${({ theme }) => theme.semioscuro};
        color: ${({ theme }) => theme.texto};

    }
    .MuiFormLabel-root {
        color: ${({ theme }) => theme.texto};
    }
    .MuiFormLabel-root.Mui-focused {
        color: ${({ theme }) => theme.texto};
    }
    .MuiFormLabel-root.Mui-error {
        color: ${({ theme }) => theme.texto};
    }
`;

const PrincipalTitulo = styled.h1`
    color: ${({ theme }) => theme.texto};
    text-align: center;
    font-weight: 700;
    font-size: 1.5rem;
`;

const esquemaDeValidacion = yup.object({
    nombre: yup
        .string()
        .required('El cambo es obligatorio'),
    descripcion: yup
        .string()
        .required('El cambo es obligatorio'),
    color: yup
        .string()
        .required('El cambo es obligatorio'),
    
});

export function Categoria() {
    const datos = useContext(Contexto)
    const { categorias, valor, recargar } = datos;

    const columnas = [
        { field: 'nombre', headerName: 'Nombre', flex: 1 },
        { field: 'descripcion', headerName: 'Descripción', flex: 2 },
    ]

    function actualizar() {
        recargar(valor + 1);
    }

    const formik = useFormik({
        initialValues: {
            nombre: '',
            descripcion: '',
            color: '#dcdcdc',
        },
        enableReinitialize: true,
        validationSchema: esquemaDeValidacion,
        onSubmit: (values) => {
            const { nombre, descripcion, color } = values
            formik.resetForm();
            crearCategoria({
                nombre,
                descripcion,
                color,
            })
                .then(() => {
                    actualizar();
                })
        },
    });

    return (
        <Principal>
            <PrincipalContenido>
                <PrincipalTitulo>Nueva Categoria</PrincipalTitulo>
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Campo
                        fullWidth
                        margin="normal"
                        id="nombre"
                        name="nombre"
                        label="nombre"
                        variant="filled"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                    <Campo
                        fullWidth
                        margin="normal"
                        id="descripcion"
                        name="descripcion"
                        label="Descripción"
                        variant="filled"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}
                    />
                    <Campo
                        fullWidth
                        margin="normal"
                        id="color"
                        name="color"
                        label="Color"
                        type="color"
                        variant="filled"
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        error={formik.touched.color && Boolean(formik.errors.color)}
                        helperText={formik.touched.color && formik.errors.color}
                    />
                    <GrupoBotones >
                        <BotonesSeparador >
                            <FormBoton color="#2A7AE4" type="submit">
                                Guardar
                            </FormBoton>
                            <FormBoton color="#cfcfcf" type="reset" onClick={formik.resetForm}>
                                Limpiar
                            </FormBoton>
                        </BotonesSeparador>
                        <BotonLink tipo='lineas' color="#cfcfcf" to='../video' >
                            Nuevo Video
                        </BotonLink>
                    </GrupoBotones>
                </form>
                <Tabla db={categorias} columnas={columnas} actualizar={actualizar} eliminar={eliminarCategoria} />
            </PrincipalContenido>
        </Principal>
    );
}