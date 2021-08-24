import Layout from "@/components/layout/Layout"
import styles from '@/styles/notfound.module.scss'
import Footer from "@/components/footer/Footer"
import Link from 'next/link'
import {FaExclamationTriangle} from 'react-icons/fa'
const NotFound = () => {
    return (
        <Layout>
            <section className={styles.container}>
            <h1>404</h1>
            <p>Sorry, there is nothing here</p>
            <Link href="/"><a>Go Back Home</a></Link>
            </section>
            <Footer />
        </Layout>
    )
}

export default NotFound
