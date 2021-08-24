import {FaPython,FaSwift,FaHtml5,FaReact,FaNodeJs} from 'react-icons/fa'
import {SiJavascript,SiCss3,SiNextDotJs,SiPostgresql,SiMongodb,SiDjango,SiXcode,SiVisualstudio, SiSass,SiDocker,SiTailwindcss} from 'react-icons/si'
import {IoMdAnalytics} from 'react-icons/io'


import styles from './skillItem.module.scss'

const SkillItem = ({name='javascript', showName=true}) => {
    return (
        <div className={styles.container}>
            {/* languates */}
    
            {name === 'javascript' && <SiJavascript /> }
            {name === 'html' && <FaHtml5 /> }
            {name === 'swift' && <FaSwift /> }
            {name === 'python' && <FaPython /> }
            {name==='objective-c' && <span>Obj-C</span> }
            {name==='c' && <span>C</span> }
            {/* front end */}
            {name ==='next.js' && <SiNextDotJs /> }
            {name==='react' && <FaReact /> }
            {name==='sass' && <SiSass /> }
            {name==='css' && <SiCss3 /> }
            {name==="tailwindcss" && <SiTailwindcss />}
            {/* back end */}
            {name==='django' && <SiDjango /> }
            {name==='mongodb' && <SiMongodb /> }
            {name==='node.js' && <FaNodeJs /> }
            {name==='postgresql' && <SiPostgresql /> }
            {name==='express' && <span>Express</span> }
            {/* tools */}
            {name==='vscode' && <SiVisualstudio /> }
            {name==='docker' && <SiDocker /> }
            {name==='xcode' && <SiXcode /> }
            {name==='juypter' && <IoMdAnalytics /> }
            {name==='armkeil' && <span>KEIL</span> }
            {showName && <p>{name}</p>}
        </div>
    )
}

export default SkillItem
