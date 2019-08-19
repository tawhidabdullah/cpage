import React from 'react'

interface Props {

}

const About: React.FC<Props> = () => {
  return (
    <div id="top">
      <h1>Tawhid is a <span>designer</span>, <span>full-stack developer</span>, and <span>entrepreneur</span>. She is the
      founder of <a href="https://studiosnoon.com" target="_blank">Noon Studios</a> &amp; several other ventures.</h1>
      <h2>She has been recognized as the <span>Best Woman Maker of 2018</span> by Maker Mag, and nominated as <span>Maker
        of The Year</span> by Product Hunt. She has also been featured on <span>YCombinator’s HackerNews</span>,
      <span>Diversity30</span>, <span>Product Hunt</span>, <span>Sidebar</span>, and interviewed by
      <span>IndieHackers</span> for one of her successful products.</h2>
      <div id="socialsmall">
        <a href="https://twitter.com/alyssaxuu" target="_blank"><img src="assets/twitter.svg" /></a>
        <a href="https://dribbble.com/alyssax" target="_blank"><img src="assets/dribbble.svg" /></a>
        <a href="https://github.com/alyssaxuu" target="_blank"><img src="assets/github.svg" /></a>
        <a href="https://medium.com/@alyssax" target="_blank"><img src="assets/medium.svg" /></a>
      </div>
    </div>

  )
}; 

export default About; 