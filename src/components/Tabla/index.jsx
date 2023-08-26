import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const TablaDataGrid = styled(DataGrid)`
    margin-top: 2rem;
    background: ${({ theme }) => theme.texto};
`;

export function Tabla({db, columnas, actualizar, eliminar}) {
    return (
        <TablaDataGrid
            rows={db}
            columns={[
                ...columnas,
                {
                    field: 'acciones',
                    headerName: 'Acciones',
                    maxWidth: 300,
                    sortable: false,
                    renderCell: (params) => {
                        const { id } = params.row
                        const onClick = (e) => {
                            e.stopPropagation();
                            eliminar(id)
                                .then(() => {
                                    actualizar();
                                });
                        };

                        return (
                            <>
                                <DeleteIcon sx={{ color: 'red' }} onClick={onClick} />
                                <Link to={`${id}`} >
                                    <EditIcon sx={{ color: 'orange' }} />
                                </Link>
                            </>
                        );
                    }
                }
            ]}
            initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                },
            }}
            pageSizeOptions={[10, 20]}
        />
    );
}