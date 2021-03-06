import styles from './skillsList.module.scss'
import SkillItem from '../skillItem/SkillItem'
import uuid from 'react-uuid'
const SkillsList = ({title, technologies}) => {
 
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
           
                <div className={styles.technologiesWrapper}>
                
                {technologies.map((name) => (
                    
                    <SkillItem name={name} showName = {true} key={uuid()}/>
                ))}
                </div>
  
            
        </div>
    )
}

export default SkillsList
