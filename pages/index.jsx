import React from 'react'
import {FaGithub, FaBookmark} from "react-icons/fa"
import Language from '../components/Home/Language'
import GithubRepos from '../components/Home/Repos'
import { languages } from "../config"
import swr from '../helpers/swr'
export default function Home({theme}) {
  const { data: _repo } = swr("api/repos", 60000);
  const repos = _repo ? _repo : null;
  return (
      <div className='mt-4'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='flex space-x-4'>
            <img src='/logo.png' alt='profile' className='rounded-full w-20 h-20'/>
            <div>
              <h1 className='text-4xl text-left font-quicksand'><span className='text-purple-500'>Hi</span>, I&apos;m nullman👋</h1>
          <p className='font-poppins font-bold'>I am a 3rd year high school student. My favorite activities are playing games, listening to music and sleeping. I can&apos;t think of much to say about my life.</p>
        </div>
        </div>
        <div className='mt-16'>
          <div className='flex items-center space-x-1 text-2xl'>
          <FaGithub className='text-purple-500/70'/>
          <p className='font-quicksand font-semibold'>Repositories</p>
          </div>
          <GithubRepos repos={repos} theme={theme}/>
        </div>
        <div className='mt-16'>
          <div className='flex items-center space-x-1 text-2xl'>
          <FaBookmark className='text-purple-500/70'/>
          <p className='font-quicksand font-semibold'>Technologies I Use</p>
          </div>
          <Language languages={languages} theme={theme}/>
        </div>
        <div className="stats shadow flex mt-12">
  
  <div className="stat place-items-center">
    <div className="stat-title">Costumers</div>
    <div className="stat-value text-secondary"><span className="countdown">
  <span style={{"--value":10}}>0</span>
</span></div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Active Projects</div>
    <div className="stat-value text-secondary"><span className="countdown">
  <span style={{"--value":10}}>0</span>
</span></div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Years of experience</div>
    <div className="stat-value text-secondary"><span className="countdown">
  <span style={{"--value":5}}>0</span>
</span></div>
  </div>
</div>
      </div>
  )
}
