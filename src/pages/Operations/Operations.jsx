import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div>
      Главная страничка
      <Link to="/report" style={{ display: 'block' }}>
        REPORT
      </Link>
    </div>
  );
}
