import Head from 'next/head'

import Navbar from '../navbar/Navbar'

import Sidebar from '../sidebar/Sidebar'
import {useRouter} from 'next/router'
import { useState } from 'react'


export default function Layout({title, keywords, description, children, }) {
    const router = useRouter()
    const[sideBarIsClose, setSideBarIsClose] = useState(true)
    


    const toggleMenu = () => {
    //   console.log('toogle menu')
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
     
           
        </div>
    )
}

Layout.defaultProps ={
    title:'JimmyLeu | Web Portfolio',
    description: 'Projects for Jimmy Leu',
    keywords:'fron-end, back-end , web-developer'
}