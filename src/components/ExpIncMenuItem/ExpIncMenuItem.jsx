import css from './ExpIncMenuItem.module.scss';
import {motion} from 'framer-motion';

export const ExpIncMenuItem = ({ idx,item, onCategoryClick = () => null }) => {
  const { total, category, SvgIcon } = item;
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={css.item}>
      <p className={css.total}>{total}</p>
      <button
        className={css.btn}
        onClick={() => onCategoryClick(category)}
      ></button>
      <SvgIcon className={css.icon} />
      <p className={css.category}>{category}</p>
    </motion.div>
  );
};
