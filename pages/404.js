import Layout from "@/components/layout/Layout"
import styles from '@/styles/notfound.module.scss'
import Link from 'next/link'
const NotFound = () => {
    return (
        <Layout>
            <section className={styles.container}>
            <h1>404</h1>
            <p>Something wrong</p>
            </section>
        </Layout>
    )
}

export default NotFound
