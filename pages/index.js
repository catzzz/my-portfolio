import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/hero/Hero";
import AboutSection from "@/components/about/About";

import { API_URL } from "@/config/index";
import PortfolioSection from "@/components/portfolio/Portfolio";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";



const projectsData = [
  {
    id: "1",
    title: "Bee's Playgrounds",
    tags: ["web", "front-end", "back-end"],
    image: "/images/playgrounds_home.jpg",
    description:
      "A Bee's playgrounds theme for collecting playgrounds that user've been. The playgrounds will show geo location, add and edit pictures, reviews and rating of the playground.",
    skills: ["javascript", "react", "tailwindcss", "node.js", "mongodb"],
    gitUrl: "https://github.com/catzzz/PlaygroundsApp",
    webUrl: "https://young-basin-40954.herokuapp.com/",
  },

  {
    id: "2",
    title: "Babystrollers",
    tags: ["web", "front-end"],
    image: "/images/babystrollers.jpg",
    description:
      "This is a websit template which was created to demostrate how to implement Sass in a web application.",
    skills: ["javascript", "html", "sass"],
    gitUrl: "https://github.com/catzzz/babyStroller",
    webUrl: "https://catzzz.github.io/babyStroller/",
  },
  {
    id: "3",
    title: "Personal Portfolio",
    tags: ["web", "front-end"],
    image: "/images/my-portfolio.jpg",
    description: "This is an e-commerence web-site",
    skills: ["javascript", "react", "next.js","sass"],
    gitUrl: "https://github.com/catzzz/my-portfolio",
    webUrl: "https://my-portfolio-catzzz.vercel.app/",
  },
];

const skillsData = [
  {
    id: "1",
    title: "Langugaes",
    technologies: ["javascript", "html", "python", "swift", "objective-c", "c"],
  },
  {
    id: "2",
    title: "Front-End",
    technologies: ["react", "next.js", "css", "tailwindcss", "sass"],
  },
  {
    id: "3",
    title: "Back-End",
    technologies: ["postgresql", "mongodb", "express", "node.js", "django"],
  },
  {
    id: "4",
    title: "Tools",
    technologies: ["xcode", "armkeil", "juypter", "vscode", "docker"],
  },
];

export default function HomePage() {


  return (
    <Layout>
      <HeroSection />
      <AboutSection skills={skillsData} />
      <PortfolioSection projects={projectsData} />
      <Contact />
      <Footer />
    </Layout>
  );
}

// export async function getStaticProps() {
//   const [skillsRes, projectsRes] = await Promise.all([
//     fetch(`${API_URL}/api/skills`),
//     fetch(`${API_URL}/api/projects`),
//   ]);
//   const [skills, projects] = await Promise.all([
//     skillsRes.json(),
//     projectsRes.json(),
//   ]);

//   return {
//     props: { skills, projects },
//   };
// }
