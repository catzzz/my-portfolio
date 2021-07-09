// import Skills from '../skills'
import Link from 'next/link'
import Image from 'next/image'
import styles from './about.module.scss'

const AboutSection = () => {
    return (
        <section id='about' className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageBox}>
                    <figure>
                        <Image src="/images/man.png" alt="jimmy's second photo" height={250} width={250} />
                    </figure>
                </div>
                <div className={styles.textContainer}>
                    
                    <h2>More about me</h2>
                    <p>Focused and enthusiastic developer with a keen interest in software development and artificial intelligence. By comprehensive exposure to the underlying concepts and applying them vividly to various projects, my love for these domains came into being. I am a passionate individual who thrives to build and apply algorithms to solve real-world industry problems.</p>
                    <div className={styles.linkBtn}>
                        <Link href="#portfolio">
                            <a>see my works</a>
                        </Link>
                        
                    </div>
                </div>
                
            </div>
            {/* <Skills /> */}
            
            
        </section>
    )
}

export default AboutSection