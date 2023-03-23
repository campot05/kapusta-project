import { Link } from 'react-router-dom';
import InputArea from 'components/InputArea'

export default function Home() {
  return (
    <div>
      Главная страничка
      <InputArea/>
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
      
    </div>
  );
}
