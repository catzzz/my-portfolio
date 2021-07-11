import styles from './filterBtn.module.scss'
const FilterBtn = ({title, active, setSelected,id}) => {
    return (
        <div className={`${styles.container} ${active ? styles.active: ''}`} onClick={()=>setSelected(id)}>
            {title}
        </div>
    )
}

export default FilterBtn
