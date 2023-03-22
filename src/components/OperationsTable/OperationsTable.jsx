import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import operationsData from 'mocks/operationsData.json';
import { useState } from 'react';
import { ReactComponent as RecycleBin } from '../../images/recycleBin.svg';

const columns = [
  {
    id: 'date',
    label: 'DATE',
    paddingLeft: 10,
    maxWidth: 120,
    format: value => value.split('-'),
  },
  { id: 'description', label: 'DESCRIPTION', minWidth: 220 },
  {
    id: 'category',
    label: 'CATEGORY',
    minWidth: 100,
    align: 'center',
    format: value => value.toLocaleString('en-US'),
  },
  {
    id: 'amount',
    label: 'SUM',
    minWidth: 100,
    align: 'center',
    format: value => value.toFixed(2),
  },
  {
    id: 'del',
    label: '',
    minWidth: 70,
    align: 'center',
  },
];

export default function OperationsTable() {
  const [incomes, setIncomes] = useState(
    operationsData.flatMap(el => el.incomes)
  );

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
            {incomes.map(row => {
              return (
                <TableRow key={row._id}>
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

const rowsCount = 15;

export const TableExample = () => {
  const rows = Array.from(Array(rowsCount)).map((_, i) => (
    <TableRow key={i}>
      <TableCell>{i < 3 ? `Row ${i + 1}` : ''}</TableCell>
      <TableCell>{i < 3 ? `Data ${i + 1}` : ''}</TableCell>
    </TableRow>
  ));

  return (
    <Table>
      <TableBody>{rows}</TableBody>
    </Table>
  );
};
