// import styles from './navbar.module.scss'

import { useRouter } from "next/router";

import {FaBars} from 'react-icons/fa'
import Link from 'next/link'
import styles from './navbar.module.scss'
import { useState ,useContext,useEffect} from "react";
import UserContext from '@/context/UserContext'
import { SiElsevier } from "react-icons/si";


const Navbar = ({toggleMenu}) => {
    const { scrollPos, setScrollPos } = useContext(UserContext)
    const [colorChange, setColorchange] = useState(false);
    const router = useRouter()

    const handleScrollPos = () => {
        setScrollPos(window.scrollY);
    };
    useEffect(() => {
        // window.scrollTo(0, scrollPos);
        if(window.scrollY > 80 ){
            setColorchange(true)

        }else{
            setColorchange(false)

        }
    });

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPos);
        return () => {
            window.removeEventListener('scroll', handleScrollPos);
        };
    }, []);

   
    return (
        <nav className={colorChange? `${styles.navbar} ${styles.backgroundLight}` : `${styles.navbar} ${styles.backgroundDark}`}>
            <div className={styles.navContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="#hero">
                        <a>JIMMY<span>LEU</span></a>
                    </Link>
    
                </div>
                <div>
                    <div onClick={toggleMenu} className={styles.iconBox}>
                        <FaBars />
                    </div>
                    <ul>
                        <li className={(router.asPath === "/") ||(router.asPath ==="/#hero")  ? styles.active : ""}>
                        <Link  href="/#hero">
                            <a >Home</a>
                        </Link>
                        </li>
                        <li className={router.asPath === "/#about" ? styles.active : ""}>
                        <Link  href="#about">
                            <a>About me</a>
                        </Link>
                        </li>
                        <li className={router.asPath === "/#portfolio" ? styles.active : ""}>
                        <Link  href="#portfolio">
                            <a >Portfolio</a>
                        </Link>
                        </li>
              
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
