import { Paper } from '@mui/material';
import OperationsTable, {
  TableExample,
} from 'components/OperationsTable/OperationsTable';

export default function Home() {
  return (
    <div>
      <Paper
        sx={{
          margin: '30px',
          maxWidth: 1100,
          maxHeight: 580,
          borderRadius: '0px 30px 30px 30px',
          boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
          padding: '32px 32px 61px 32px',
        }}
      >
        <OperationsTable />
      </Paper>
      <TableExample />
    </div>
  );
}
