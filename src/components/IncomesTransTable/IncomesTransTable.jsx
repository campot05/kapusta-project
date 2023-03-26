import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { useEffect, useState } from 'react';
import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getIncomesTrans } from 'redux/transactions/trans-selectors';
import { getIncomeSummary } from 'redux/transactions/trans-operations';
import { useAuth } from 'hooks';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  tableContainer: {
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em',
      backgroundColor: '#F5F5F5',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#FF751D',
    },
  },
  tableCell: {
    height: 20,
  },
}));

const columns = [
  {
    id: 'date',
    label: 'DATE',
    paddingLeft: '20px',
    maxWidth: 120,
  },
  { id: 'description', label: 'DESCRIPTION', minWidth: 220 },
  {
    id: 'category',
    label: 'CATEGORY',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'amount',
    label: 'SUM',
    minWidth: 100,
    align: 'center',
  },
  {
    id: 'del',
    label: '',
    minWidth: 70,
    align: 'center',
  },
];
export default function IncomesTransTable() {
  const classes = useStyles();
  const allIncomesTrans = useSelector(getIncomesTrans);

  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRefreshing) {
      return;
    }
    dispatch(getIncomeSummary());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  // Вариант сделать пустые строки
  const [emptyRowCount, setEmptyRowCount] = useState(0);

  useEffect(() => {
    if (!allIncomesTrans) {
      return;
    }
    if (allIncomesTrans.length >= 14) {
      return;
    }
    setEmptyRowCount(14 - allIncomesTrans.length);
  }, [allIncomesTrans]);

  return (
    <Paper
      sx={{
        width: 746,
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: '62px',
      }}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: '#F5F6FB',
          justifyContent: 'flex-start',
          padding: '12px 25px',
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: 1.17,
          letterSpacing: '0.02em',
          color: '#000000',
        }}
      >
        <p style={{ width: '18%' }}>DATE</p>
        <p style={{ width: '26%' }}>DESCRIPTION</p>
        <p style={{ width: '27%' }}>CATEGORY</p>
        <p style={{ marginRight: '' }}>SUM</p>
        <p style={{ marginRight: '' }}></p>
      </div>
      <TableContainer
        sx={{
          maxHeight: '360px',
        }}
        className={classes.tableContainer}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {allIncomesTrans !== null || undefined ? (
              [...allIncomesTrans, ...Array(emptyRowCount).fill(null)].map(
                row => {
                  if (!row) {
                    return (
                      <TableRow key={Math.random()}>
                        {columns.map(column => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              height: 40,
                              paddingTop: 10,
                              paddingBottom: 10,
                            }}
                          />
                        ))}
                      </TableRow>
                    );
                  }

                  return (
                    <TableRow key={row._id}>
                      {columns.map(column => {
                        let formattedAmount;
                        if (column.id === 'amount') {
                          formattedAmount = row[column.id].toLocaleString(
                            'ru-RU',
                            {
                              style: 'decimal',
                              minimumFractionDigits: 2,
                            }
                          );
                        }
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              height: 40,
                              paddingTop: 3.5,
                              paddingBottom: 3.5,
                              fontWeight: column.id === 'amount' ? 700 : 400,
                              fontSize: '12px',
                              lineHeight: 1.17,
                              letterSpacing: '0.04em',
                              color:
                                column.id === 'amount' ? '#407946' : '#52555F',
                            }}
                          >
                            {column.id === 'date' && value.split('-').join('.')}
                            {column.id === 'description' && value}
                            {column.id === 'category' && value}
                            {column.id === 'amount' &&
                              `${formattedAmount} UAH.`}
                            {column.id === 'del' && <DeleteBtn id={row._id} />}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                }
              )
            ) : (
              <TableRow>
                <TableCell />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
