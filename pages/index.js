import Head from 'next/head'
import Sidebar from '@/components/sidebar/Sidebar'
import Navbar from '@/components/navbar/Navbar';
import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/hero/Hero';
import AboutSection from '@/components/about/About';
import { useState } from "react";
import { API_URL } from '@/config/index';
import PortfolioSection from '@/components/portfolio/Portfolio';
export default function HomePage({skills, projects}) {
  


  return (

    <Layout>
      <HeroSection />
      <AboutSection skills={skills}/>
      <PortfolioSection projects = {projects}/>
    </Layout>

  
  )
}




export async function getStaticProps(){
  const [skillsRes, projectsRes] = await Promise.all([
    fetch(`${API_URL}/api/skills`),
    fetch(`${API_URL}/api/projects`),
  ])
  const [skills, projects] = await Promise.all([
    skillsRes.json(), 
    projectsRes.json()
  ]);

 
  return {
    props:{skills,projects},
  }
}