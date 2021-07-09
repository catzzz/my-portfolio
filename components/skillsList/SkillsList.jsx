import styles from './skillsList.module.scss'
import SkillItem from '../skillItem/SkillItem'
import uuid from 'react-uuid'
const SkillsList = ({title, skills}) => {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            {skills.forEach(name => {
                <h4>{name}</h4>
                // <SkillItem name={name} showName = {true} key={uuid()}/>
            })}
        </div>
    )
}

export default SkillsList
