import cabbage from '../../images/cabbageColored.svg';
import css from './NotFound.module.css';

export const NotFound = ({ handleConfirm }) => {
  return (
    <>
      <div className={css.page}>
        <div className={css.not}>
          <div className={css.four}>4</div>
          <img src={cabbage} alt="cabbage" className={css.cabbage} />
          <div className={css.four}>4</div>
        </div>
        <p className={css.message}>Money not found!</p>
        <button className={css.button} onClick={handleConfirm}>
          Go home
        </button>
      </div>
    </>
  );
};
