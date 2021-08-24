import styles from './hero.module.scss'

import {BsChevronDown} from 'react-icons/bs'
import {AiOutlineLinkedin,AiFillGithub} from 'react-icons/ai'
import {SiGmail} from 'react-icons/si'
import Image from 'next/image'
import Link from 'next/link'
const HeroSection = () => {
    return (
        <section id='hero' className={styles.hero}>
            <div className={styles.hero__container}>
                <div className={styles.hero__detail}>
                    <h2>Hi There, I&apos;m</h2>
                    <h1>Jimmy <span>Leu</span></h1>
                    <h3>
                        Web-developer. <span>Software-Engineer</span>
                    </h3>
                    <ul>
                        <li>
                            <Link href="https://www.linkedin.com/in/jimmy-leu-3b060786/">
                                <a ><AiOutlineLinkedin /></a>
                            </Link>
                        </li>
                        <li>
                        <Link href="https://github.com/catzzz">
                            <a><AiFillGithub /></a>
                        </Link>
                        </li>
                        <li>
                        <Link href="#contact">
                            <a><SiGmail /></a>
                        </Link>
                        </li>
                    </ul>
                </div>
         

                <div className={styles.hero__imageDetail}>
                    <figure>
                        <Image src='/images/man.png' alt="Jimmy's photo" height={450} width={450} />
                    </figure>
                </div>

                
                <div className={styles.scrolldown}>
                    <a href="#about">
                        <BsChevronDown />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection