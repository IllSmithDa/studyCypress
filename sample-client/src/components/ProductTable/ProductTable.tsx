import { 
  Box, 
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  TableBody,
  TableContainer,
  Paper,
  TablePagination,
  Pagination
} from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Product } from '../../interfaces/index';
import React from 'react';

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

export default function ProductTable(props :{
  products: Product[],
  columns: string[],
}) {
  const { products, columns } = props;
  /// console.log(`products: ${columns}`)
  const [rowsPerPage, setRowsPerPage] = React.useState(3);
  const [page, setPage] = React.useState(0);

  const headCells: HeadCell[] = columns.map((title) => {
    return {
      id: title,
      label: `${title[0].toUpperCase()}${title.slice(1)}`,
      disablePadding: false,
      numeric: title === 'price' ? true : false,
    }
  })
  return (
    <TableContainer 
      component={Paper} 
      style={{ padding: '20px', width: '90%', marginTop: '40px', marginLeft: 'auto', marginRight: 'auto'}}
    >
      <Box component="h1">Products Table</Box>
      <Box component="table" aria-label="product-table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align="left"
                padding={headCell.disablePadding ? 'none' : 'normal'}
                // sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel>
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.rating}</TableCell>
              <TableCell align="left">{row.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Box>
      <Pagination
        // rowsPerPageOptions={[5, 10, 25]}
        // component="div"
        count={products.length / rowsPerPage - 1}
        // rowsPerPage={rowsPerPage}
        page={page}
        onChange={(event: unknown, newPage: number) => {
          setPage(newPage);
        }}
        // onPageChange={(event: unknown, newPage: number) => {
        //   setPage(newPage);
        // }}
        // onRowsPerPageChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        //   setRowsPerPage(Number(event.target.value));
        //   setPage(0);
        // }}
      />
    </TableContainer>
  )
}