import React from 'react'
import {arrow} from '../assets/icons';
import { Link } from 'react-router-dom';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl sm:leading-snug text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center
    neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Ei</span>
      👋
      <br/>
      A Salted Fish with a busy life and responsibilities.
    </h1>
  ),
  2: (
    <InfoBox 
      text="Hard working, persistent, shy, like to explore. Coffee is everything."
      link="/about"
      btnText="Learn More">
    </InfoBox>
  ),
  3: (
    <InfoBox 
      text="Believe it or not? This is my first React project!"
      link="/project"
      btnText="Visit my portfolio">
    </InfoBox>
  ),
  4: (
    <InfoBox 
      text="Need a project delayed or looking for a lazy dev? I'm right here. Why not"
      link="/contact"
      btnText="Get in touch?">
    </InfoBox>
  ),
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo