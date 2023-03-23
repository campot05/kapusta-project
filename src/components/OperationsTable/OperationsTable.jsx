import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useEffect } from 'react';
import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { useDispatch, useSelector } from 'react-redux';
import { transactionsFilteredByDate } from 'redux/transactions/trans-selectors';
import { getExpenseSummary } from 'redux/transactions/trans-operations';
import { useAuth } from 'hooks';

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
  const date = useSelector(transactionsFilteredByDate);
  // console.log(`🚀 ~ OperationsTable ~ date:`, date);
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
  // const [emptyRowCount, setEmptyRowCount] = useState(15 - transactions.length);

  // useEffect(() => {
  //   setEmptyRowCount(15 - transactions.length);
  // }, [transactions]);

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
                    padding: '8px 25px',
                    backgroundColor: '#F5F6FB',
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {date !== undefined ? (
              date.map(row => {
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
              })
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

// Вариант от чатаГПТ для пустых строк

// return (
//     <Paper
//       sx={{
//         maxWidth: 746,
//         margin: 'auto',
//         overflow: 'hidden',
//         borderTopLeftRadius: 20,
//         borderTopRightRadius: 20,
//       }}
//     >
//       <TableContainer
//         sx={{
//           maxHeight: 400,
//         }}
//       >
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map(column => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{
//                     minWidth: column.minWidth,
//                     padding: '8px 25px',
//                     backgroundColor: '#F5F6FB',
//                   }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {[...transactions, ...Array(emptyRowCount).fill(null)].map(row => {
//               if (!row) {
//                 return (
//                   <TableRow key={Math.random()}>
//                     {columns.map(column => (
//                       <TableCell
//                         key={column.id}
//                         align={column.align}
//                         style={{
//                           height: 40,
//                           paddingTop: 10,
//                           paddingBottom: 10,
//                         }}
//                       />
//                     ))}
//                   </TableRow>
//                 );
//               }

//               return (
//                 <TableRow key={row._id}>
//                   {columns.map(column => {
//                     const value = row[column.id];

//                     return (
//                       <TableCell
//                         key={column.id}
//                         align={column.align}
//                         style={{
//                           height: 40,
//                           paddingTop: 10,
//                           paddingBottom: 10,
//                         }}
//                       >
//                         {column.id === 'date' && value.split('-').join('.')}
//                         {column.id === 'description' && value}
//                         {column.id === 'category' && value}
//                         {column.id === 'amount' && `- ${value.toFixed(2)} UAH.`}
//                         {column.id === 'del' && <DeleteBtn id={row._id} />}
//                         {/* {column.format && typeof value === 'number'
//                           ? column.format(value)
//                           : value} */}
//                       </TableCell>
//                     );
//                   })}
//                 </TableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// }
