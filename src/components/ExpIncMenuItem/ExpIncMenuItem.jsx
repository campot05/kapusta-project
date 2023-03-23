import css from './ExpIncMenuItem.module.scss';

export const ExpIncMenuItem = ({item}) => {
    const {total,category,SvgIcon} = item;
    return(
        <div className={css.item}>
            <p className={css.total}>{total}</p>
            <button className={css.btn} onClick={()=>{}}></button>
            <SvgIcon className={css.icon}/>
            <p className={css.category}>{category}</p>
        </div>
    )
}