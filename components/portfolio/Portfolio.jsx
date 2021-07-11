import styles from './portfolio.module.scss'
import ProjectCard from '../projectCard/ProjectCard'
import uuid from 'react-uuid'
import FilterBtn from '../filterBtn/FilterBtn'
import { useState } from 'react'

const PortfolioSection = ({projects}) => {
    const [selected , setSelected] = useState('all')



    const filterList = [
        {
          id: "all",
          title: "All",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
            id: "front-end",
            title: "Front-End",
        },
        {
            id: "back-end",
            title: "Back-End",
          },
        {
          id: "mobile",
          title: "Mobile",
        },
    
      ];
    return (
        <section className = {styles.container}>
            <h2>Portfolio</h2>
            <div className={styles.filterContainer}>
                {filterList.map((item,)=>(
                    <FilterBtn 
                    title={item.title}
                    id={item.id}
                    active={selected === item.id}
                    setSelected={setSelected}
                    key ={ item.id}/>
                ))}
            </div>
            <div className={styles.cardsWrapper}>
           
                {projects.map((project)=>(
                    <ProjectCard 
                        title={project.title} 
                        image={project.image}
                        description = {project.description}
                        tags={project.tags}
                        gitUrl={project.gitUrl}
                        webUrl={project.webUrl}
                        skills= {project.skills}
                        key={project.id}
                    />
                ))}
            </div>
        </section>
    )
}

export default PortfolioSection
