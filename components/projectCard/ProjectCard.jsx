

import {FaGithubSquare} from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'



const ProjectCard = ({title, image, tags, description,webUrl,gitUrl,skills}) => {
    return (
        <div>
            <figure>
                <Link href={webUrl}> 
                    <a><Image src={image} width={500} height={280} alt= "project photo" /></a>
                </Link>
            </figure>
            <div>
                <h4>
                    {title}
                </h4>
                <p>
                    {description}
                </p>
                
            </div>
            <div>

                <div>
                    <Link href={gitUrl}>
                        <a><FaGithubSquare /></a>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default ProjectCard
