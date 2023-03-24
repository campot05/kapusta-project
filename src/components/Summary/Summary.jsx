import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 107 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 107 },
];

function createData(name, code) {
  return { name, code };
}

const rows = [
  createData('India', 'IN'),
  createData('China', 'CN'),
  createData('Italy', 'IT'),
  createData('United States', 'USA'),
  createData('Canada', 'CA'),
  createData('Australia', 'AU'),
];

export default function Summery() {
  return (
    <Paper sx={{ maxWidth: 214 }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                align="center"
                colSpan={2}
                style={{ paddingTop: 6, paddingBottom: 6 }}
              >
                SUMMERY
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ paddingTop: 8, paddingBottom: 8 }}
                      >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
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
