// import styles from './navbar.module.scss'

import { useRouter } from "next/router";

import {FaBars} from 'react-icons/fa'
import Link from 'next/link'
import styles from './navbar.module.scss'

const Navbar = ({toggleMenu}) => {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navContainer}>
                <div className={styles.logoWrapper}>
                    <Link href="/">
                        <a>JIMMY<span>LEU</span></a>
                    </Link>
    
                </div>
                <div>
                    <div onClick={toggleMenu} className={styles.iconBox}>
                        <FaBars />
                    </div>
                    <ul>
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
                        <li className={router.asPath === "/#contact" ? styles.active : ""}>
                        <Link  href="#contact">
                            <a >Contact</a>
                        </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
