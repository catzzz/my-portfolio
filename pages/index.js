import Head from 'next/head'
import Sidebar from '../components/sidebar/Sidebar'
import Navbar from '../components/navbar/Navbar';
import { useState } from "react";

export default function HomePage({title,description,keywords}) {

  const[sideBarIsClose, setSideBarIsClose] = useState(false)

  const toggleMenu = () => {
    console.log('toogle menu')
    setSideBarIsClose(!sideBarIsClose)
  }

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta key='keywords' content={keywords} />
    </Head>
    <div>
      {/* Navbar  */}
      <Sidebar sideBarIsClose = {sideBarIsClose} toggleMenu= {toggleMenu}/>
      <Navbar toggleMenu= {toggleMenu}/>
      {/* Page start */}
    </div>
    </>
  
  )
}


HomePage.defaultProps ={
  title:'JIMMYLEU | Web Portfolio',
  description: 'Personal web portfolio',
  keywords:'front-end, fullstack , web-developer, software-engineer'
}
