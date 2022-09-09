import Link from 'next/link'
import React from 'react'
import {FaLink, FaCode} from "react-icons/fa"
import { projects } from "../config"
export default function Home({theme}) {
  return (
      <div className='mt-4'>
     <div className='flex items-center space-x-1 text-2xl'>
          <FaCode className='text-purple-500/70'/>
          <p className='font-quicksand font-semibold'>My projects</p>
          </div>
          
   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 h-full gap-2   mt-6'>
{projects.map((project, index) => (
<div key={index+1} className="card card-compact w-52 bg-base-100 shadow-xl">
  <figure><img src={project.thumb} alt={project.name} /></figure>
  <div className="card-body">
    <h2 className="card-title">{project.name}</h2>
    <p>{project.desc}</p>
    <Link href={project.link}>
        <a target='_blank'>
    <div className="card-actions justify-start flex items-center">
      <FaLink className='text-purple-500/70 text-sm'/>
        <p className='font-quicksand font-semibold text-xs'>{project.link}</p>
    </div>
    </a>
    </Link>
  </div>
</div>
))}

</div>
      </div>
  )
}
