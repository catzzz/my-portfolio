
import uuid from 'react-uuid'
import styles from './skills.module.scss'
import {API_URL} from '@/config/index'

import SkillsList from '../skillsList/SkillsList'

const Skills = ({skills}) => {
  // console.log(skills)
    return (
     
           <div className={styles.container}>
               <h2>Skills</h2>
              
               <div className={styles.content}>  
        
                    {/* {skills.map((item,index)=>{
                        return (
                            <SkillsList title={item.title} technologies = {item.technologies} key={uuid()}/>
                        )
                    })} */}

                </div>
           </div>

    )
}

export default Skills


export async function getStaticProps(){
  const res = await fetch(`${API_URL}/api/skills`)
  const skills = await res.json()
   console.log(`skills : ${skills} ---`)
 
  return {
    props:{skills},
  }
}