import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from 'react';
import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { getExpensesTrans } from 'redux/transactions/trans-selectors';
import { getExpenseSummary } from 'redux/transactions/trans-operations';
import { useAuth } from 'hooks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  tableContainer: {
    maxHeight: 400, // высота контейнера скролла
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '0.4em', // ширина скроллбара
      backgroundColor: '#F5F5F5', // цвет фона
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#FF751D', // цвет кнопки
      borderRadius: '2em', // радиус кнопки
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

export default function OperationsTable() {
  const classes = useStyles();
  const allExpensesTrans = useSelector(getExpensesTrans);

  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isRefreshing) {
      return;
    }
    dispatch(getExpenseSummary());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  // Вариант сделать пустые строки
  const [emptyRowCount, setEmptyRowCount] = useState(0);

  useEffect(() => {
    if (!allExpensesTrans) {
      return;
    }
    if (allExpensesTrans.length >= 15) {
      return;
    }
    setEmptyRowCount(15 - allExpensesTrans.length);
  }, [allExpensesTrans]);

  return (
    <Paper
      sx={{
        width: 746,
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: '62px',
        maxHeight: 410,
        overflowY: 'scrool',
      }}
    >
      <div
        style={{
          display: 'flex',
          backgroundColor: '#F5F6FB',
          justifyContent: 'flex-start',
        }}
      >
        {columns.map(column => (
          <div
            key={column.id}
            align={column.align}
            style={{
              padding: '12px 35px',
              fontWeight: 700,
              fontSize: '12px',
              lineHeight: 1.17,
              letterSpacing: '0.02em',
              color: '#000000',
              backgroundColor: '#F5F6FB',
            }}
          >
            {column.label}
          </div>
        ))}
      </div>

      <TableContainer
        sx={{
          maxHeight: 410,
        }}
        className={classes.tableContainer}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableBody>
            {allExpensesTrans !== null ? (
              [...allExpensesTrans, ...Array(emptyRowCount).fill(null)].map(
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
                        const value = row[column.id];
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            className={classes.tableCell}
                            style={{
                              height: 40,
                              paddingTop: 10,
                              paddingBottom: 10,
                              fontWeight: column.id === 'amount' ? 700 : 400,
                              fontSize: '12px',
                              lineHeight: 1.17,
                              letterSpacing: '0.04em',

                              color:
                                column.id === 'amount' ? '#E7192E' : '#52555F',
                            }}
                          >
                            {column.id === 'date' && value.split('-').join('.')}
                            {column.id === 'description' && value}
                            {column.id === 'category' && value}
                            {column.id === 'amount' &&
                              `- ${value.toFixed(2)} UAH.`}
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
