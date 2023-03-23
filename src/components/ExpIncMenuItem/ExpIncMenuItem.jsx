import css from './ExpIncMenuItem.module.scss';
import capitalize from 'lodash.capitalize';

export const ExpIncMenuItem = ({item,onCategoryClick=()=>null}) => {
    const {total,category,SvgIcon} = item;
    return(
        <div className={css.item}>
            <p className={css.total}>{total}</p>
            <button className={css.btn} onClick={()=>onCategoryClick(category)}></button>
            <SvgIcon className={css.icon}/>
            <p className={css.category}>{category}</p>
        </div>
    )
}