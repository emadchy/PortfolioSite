import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume_pdf from '../../assets/Emad_Chowdhury_Resume.pdf' // Make sure the path is correct

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
      <h1><span>I'm Emad Chowdhury,</span> Web Developer based in Canada.</h1>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
          <a href={resume_pdf} download="Emad_Chowdhury_Resume.pdf">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
