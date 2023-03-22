import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ReactComponent as RecycleBin } from '../../images/recycleBin.svg';

const columns = [
  { id: 'date', label: 'DATE', maxWidth: 120 },
  { id: 'description', label: 'DESCRIPTION', minWidth: 220 },
  {
    id: 'category',
    label: 'CATEGORY',
    minWidth: 100,
    align: 'center',
    paddingTop: 100,
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'sum',
    label: 'SUM',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'del',
    label: '',
    minWidth: 70,
    align: 'center',
  },
];

const rows = [];

export default function OperationsTable() {
  return (
    <Paper
      sx={{
        maxWidth: 746,
        margin: 'auto',
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <TableContainer
        sx={{
          maxHeight: 400,
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    paddingTop: 8,
                    paddingBottom: 8,
                    backgroundColor: '#F5F6FB',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          height: 40,
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}
                      >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                        {column.id === 'del' && <RecycleBin key={column.id} />}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
