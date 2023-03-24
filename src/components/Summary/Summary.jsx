import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useSelect, useEffect } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { getExpensesMonthStats } from 'redux/transactions/trans-selectors';
import { getExpenseSummary } from 'redux/transactions/trans-operations';

const columns = [
  { id: 'month', minWidth: 107 },
  { id: 'sum', minWidth: 107 },
];

function createData(month, sum) {
  return { month, sum };
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
  //   const dispatch = useDispatch();

  const monthsStats = useSelector(getExpensesMonthStats);
  console.log(`🚀 ~ Summery ~ monthsStats:`, monthsStats);

  const arrayOfMonthsStats = Object.keys(monthsStats).map(key => ({
    month: key,
    total: monthsStats[key],
  }));
  console.log(`🚀 ~ result ~ result:`, arrayOfMonthsStats);

  //   useEffect(() => {
  //     dispatch(getExpenseSummary());
  //   });

  return (
    <Paper sx={{ maxWidth: 230, minWidth: 214 }}>
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
