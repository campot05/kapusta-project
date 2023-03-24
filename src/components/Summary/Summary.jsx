import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelector } from 'react-redux';

import { getExpensesMonthStats } from 'redux/transactions/trans-selectors';

const columns = [
  { id: 'month', minWidth: 107 },
  { id: 'total', minWidth: 107 },
];

export default function Summery() {
  const monthsStats = useSelector(getExpensesMonthStats);
  console.log(monthsStats);
  const arrayOfMonthsStats = Object.keys(monthsStats)
    .reverse()
    .map(key => ({
      month: key,
      total: monthsStats[key],
    }))
    .filter(el => el.total !== 'N/A');

  return (
    <Paper
      sx={{ maxWidth: 230, minWidth: 214, maxHeight: 280, marginTop: '60px' }}
    >
      <TableContainer>
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
            {arrayOfMonthsStats.map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.month}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ paddingTop: 8, paddingBottom: 8 }}
                      >
                        {column.id === 'month' && value}
                        {column.id === 'total' && value}
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
