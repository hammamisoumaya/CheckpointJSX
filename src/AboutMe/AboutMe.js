import React from 'react'
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div id="about-me">
         <h1>
        Hello, my name is
        <span class="name"> Hammami Soumaya</span>,<br />
        and i make horrible websites.
      </h1>
      <img class="avatar" src="./image/so.jpeg" alt="so" />
    </div>
  )
}

export default AboutMe