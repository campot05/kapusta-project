import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
    format: value => value.toFixed(2),
  },
];

function createData(date, description, category, sum, del) {
  return { date, description, category, sum, del };
}

// function stableSort(array, comparator) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) {
//       return order;
//     }
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map((el) => el[0]);
// }

const rows = [
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Bananas', 'Products', '- 50.00 UAH.', 'del_icon'),
  createData('21.11.2019', 'Potato', 'Products', '- 20.00 UAH.', 'del_icon'),
];

export default function StickyHeadTable() {
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
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          paddingTop: 10,
                          paddingBottom: 10,
                        }}
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
