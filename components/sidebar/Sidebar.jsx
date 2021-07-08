import Link from 'next/link'
import { FaTimes } from "react-icons/fa";
import styles from './sidebar.module.scss'

const Sidebar = ({sideBarIsClose, toggleMenu}) => {
return (
    <nav  className={sideBarIsClose && styles.close} onClick={toggleMenu} >
        <div className={styles.container}>
            <div className={styles.iconWrapper}>
                <FaTimes/> 
            </div>
            <div className={styles.menuWrapper}>
                <ul className={styles.menu}>
                    <li onClick={toggleMenu}>
                        <Link href='#about'><a>About me</a></Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='#portfolio'><a>Portfolio</a></Link>
                    </li>
                    <li onClick={toggleMenu}>
                        <Link href='#contact'><a>Contact</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);
};

export default Sidebar;
