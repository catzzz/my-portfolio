import styles from './portfolio.module.scss'
import ProjectCard from '../projectCard/ProjectCard'
import uuid from 'react-uuid'
import FilterBtn from '../filterBtn/FilterBtn'
import { useState, useEffect } from 'react'

const PortfolioSection = ({projects}) => {
    const [selected , setSelected] = useState('all')
    const [data, setData] = useState([]);
    
    useEffect(()=>{
      console.log(selected)
      switch(selected){
        case "all" :
          setData(()=>{
            // console.log(`tags ${projects.tags}`)
            return projects;
          });
          break;
        case "web":
          setData(()=> {
            const res = projects.filter(project =>{
              return project.tags.includes('web');
            })
            console.log(`web ${res}`)
            return res;
          })
          break;
        case "mobile":
          setData(()=> {
            // const res = 
            // console.log(`mobile ${res}`)
            return projects.filter(project =>{
              return project.tags.includes('mobile');
            });
          })
          break;

        case "font-end":
            setData(()=> {
              const res = projects.filter(project =>{
                return project.tags.includes('front-end');
              })
              console.log(`mobile ${res}`)
              return res;
            })
          break;
          case "back-end":
            setData(()=> {
              const res = projects.filter(project =>{
                return project.tags.includes('back-end');
              })
              console.log(`mobile ${res}`)
              return res;
            })
          break;
        default:
          setData(()=>{
            return projects;
          });

      }
   
    },[selected])
    console.log(data)

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
        <section className = {styles.container} id="portfolio">
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
           
                {data.map((project)=>(
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
