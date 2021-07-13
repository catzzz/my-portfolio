import styles from "./footer.module.scss";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <p>&copy; Jimmy Leu 2021</p>
      <div className={styles.contact}>
        
          
        <AiOutlineMail className={styles.icon}/>
        <Link href="mailto: jimmyleu76@gmail.com">
          
          <a className={styles.email}>JimmyLeu76@gmail.com</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
