import Head from 'next/head'

import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import Sidebar from '../sidebar/Sidebar'
import {useRouter} from 'next/router'
import { useState } from 'react'
export default function Layout({title, keywords, description, children}) {
    const router = useRouter()
    const[sideBarIsClose, setSideBarIsClose] = useState(true)

    const toggleMenu = () => {
      console.log('toogle menu')
      setSideBarIsClose(!sideBarIsClose)
    }
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta key='keywords' content={keywords} />
            </Head>
            <Sidebar sideBarIsClose = {sideBarIsClose} toggleMenu= {toggleMenu}/>
            <Navbar toggleMenu= {toggleMenu}/>
            <div>
            {children}
            </div>
            {/* <Footer /> */}
           
        </div>
    )
}

Layout.defaultProps ={
    title:'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ event',
    keywords:'music, dj , edm'
}