import cabbage from '../../images/cabbageColored.svg';
import css from './NotFound.module.css';
import { Link } from 'react-router-dom';
export const NotFound = () => {
  return (
    <>
      <div className={css.page}>
        <div className={css.not}>
          <div className={css.four}>4</div>
          <img src={cabbage} alt="cabbage" className={css.cabbage} />
          <div className={css.four}>4</div>
        </div>
        <p className={css.message}>Money not found!</p>
        <Link className={css.button} to="/">
          Go home
        </Link>
      </div>
    </>
  );
};
