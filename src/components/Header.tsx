import React from 'react'

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <div id="head">
      <p id="name">TAWHID</p>
      <div id="right">
        <span id="links">
          <a href="#" target="_blank">Twitter</a>
          <a href="#" target="_blank">Dribbble</a>
          <a href="#" target="_blank">GitHub</a>
          <a href="#" target="_blank">Medium</a>
        </span>
        <a id="hi" href="#" target="_blank">
          hi@Tawhidxyz.com
        </a>
      </div>
      <div id="line">
        <div id="highlight"></div>
      </div>
    </div>
  )
};


export default Header; 