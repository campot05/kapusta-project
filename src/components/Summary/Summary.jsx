import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getExpensesMonthStats,
  getExpensesTrans,
} from 'redux/transactions/trans-selectors';
import { getExpenseSummary } from 'redux/transactions/trans-operations';

const columns = [
  { id: 'month', minWidth: 107 },
  { id: 'total', minWidth: 107 },
];

export default function Summery() {
  const monthsStats = useSelector(getExpensesMonthStats);
  const allExpensesTrans = useSelector(getExpensesTrans);

  const test1 = useSelector(getExpensesMonthStats);
  const dispatch = useDispatch();

  const arrayOfMonthsStats = Object.keys(monthsStats)
    .reverse()
    .map(key => ({
      month: key,
      total: monthsStats[key],
    }))
    .filter(el => el.total !== 'N/A');

  const [array, setArray] = useState([]);
  console.log(`🚀 ~ Summery ~ array:`, array);

  useEffect(() => {
    setArray(arrayOfMonthsStats);
  }, [test1]);

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
            {array.map(row => {
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
