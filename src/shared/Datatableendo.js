import { DataGrid } from "@mui/x-data-grid";

export const DataTable= ({ rows, columns }) => {
    return (
        <div>
            <h3> Endoscopy Details </h3>
            <div style={{ height: 500, width: '100%', display: "flex" }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={50}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        </div>
    );
}