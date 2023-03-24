import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import OperationsTable from 'components/OperationsTable/OperationsTable';
import InputArea from 'components/InputArea';

export default function Home() {
  return (
    <div>
      Главная страничка
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
      <Paper
        sx={{
          margin: '30px',
          maxWidth: 1100,
          // maxHeight: 580,
          borderRadius: '0px 30px 30px 30px',
          boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2)',
          padding: '32px 32px 61px 32px',
        }}
      >
        <InputArea />
        <OperationsTable />
      </Paper>
    </div>
  );
}
