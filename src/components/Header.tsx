import React from 'react'

interface Props {

}

const Header: React.FC<Props> = () => {
  return (
    <div id="head">
      <p id="name">TAWHID ABD</p>
      <div id="right">
        <span id="links">
          <a href="https://twitter.com/alyssaxuu" target="_blank">Twitter</a>
          <a href="https://dribbble.com/alyssax" target="_blank">Dribbble</a>
          <a href="https://github.com/alyssaxuu" target="_blank">GitHub</a>
          <a href="https://medium.com/@alyssax" target="_blank">Medium</a>
        </span>
        <a id="hi" href="mailto:hi@alyssax.com" target="_blank">
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