
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react'
import {Form} from './Form';
import TableRowCard from './TableRowCard';


export interface Column {
  id: 'id' | 'title' | 'url' | 'thumbnailUrl';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: Column[] = [
  { 
    id: 'id',
    label: '№', 
    minWidth: 70,
  },
  { id: 'title', label: 'Title', minWidth: 100 },
  {
    id: 'url',
    label: 'UrlPhoto',
    minWidth: 170,
    align: 'right',
  },
  {
    id: 'thumbnailUrl',
    label: 'ThumbnailUrl',
    minWidth: 170,
    align: 'right',
  },
];



const TableBodyCard = () => {
  return (
    <Paper sx={{ width: '900px'}}  >
      <Form/>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))} 
              </TableRow>
            </TableHead>
            <TableRowCard columns={columns}/>
          </Table>
        </TableContainer>
    </Paper>
  )
}

export default TableBodyCard