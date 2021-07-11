

import {FaGithubSquare} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.scss'
import uuid from 'react-uuid'
import SkillItem from '../skillItem/SkillItem'

const ProjectCard = ({title, image, tags, description,webUrl,gitUrl,skills}) => {
    console.log(tags)
    return (
        <div className={styles.container}>
            <div className={styles.tags}>
                {tags.map((tag)=>(
                    <span key={uuid()} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <Link href={webUrl}> 
                <a><Image src={image} width={500} height={280} alt= "project photo" /></a>
            </Link> 
        
            <div className={styles.body}>
                <h4>
                        {title}
                </h4>
              
                <p>
                    {description}
                </p> 
                <div className={styles.skillsBox}>
                    {skills.map((skill)=>(
                        <SkillItem name={skill} showName={false} key={uuid()}/>

                    ))}
                </div>
                <div className={styles.gitBtn}>
                    <Link href={gitUrl}>
                        <a>Wiew Github <span><FaGithubSquare /></span></a>
                    </Link>
                </div>
            </div>
 

        </div>
    )
}

export default ProjectCard
