import './Datatable.scss';

import { DataGrid } from "@mui/x-data-grid";

export const DataTable = ({title, rows, columns }) => {
    return (
        <div>
            <h3> {title} </h3>
            <div style={{ height: 500, minWidth: "100%", display: "flex" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={50}
                    rowsPerPageOptions={[5]}
                />
            </div>
        </div>
    );
}
