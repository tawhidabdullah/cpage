import React from 'react'

interface Props {

}

const Products: React.FC<Props> = () => {
  return (

    <div className="section">
      <div className="intro">PRODUCTS </div>
      <hr />
      <div className="item">
        <a href="https://twiverse.com" target="_blank">Twiverse</a>
        <h3>Discover diverse Twitter users from different backgrounds</h3>

      </div>
      <div className="item">
        <a href="https://exposure.cards" target="_blank">Exposure Cards</a>
        <h3>Get more traffic to your content &amp; find underrated websites</h3>

      </div>
      <div className="item">
        <a href="https://medium.com/women-make/building-a-web-based-motion-graphics-editor-bd070f8db795"
          target="_blank">Web-based video editor</a>
        <h3>A motion graphics editor built with HTML5 Canvas</h3>

      </div>
      <div className="item">
        <a href="https://wonderurl.com" target="_blank">Wonderurl</a>
        <h3>Wrap a unique digital gift and send it to your friends or customers</h3>

      </div>
      <div className="item">
        <a href="https://scaleboot.com" target="_blank">Scaleboot</a>
        <h3>Service to validate minimum viable products &amp; launch them successfully</h3>

      </div>
      <div className="item">
        <a href="https://studiosnoon.com/figmaslides" target="_blank">Figma to Google Slides</a>
        <h3>Convert Figma frames into a Google Slides presentation</h3>

      </div>
      <div className="item">
        <a href="https://alyssax.com/x/platformer/" target="_blank">Figma Game Engine</a>
        <h3>Create a platforming game from Figma, without code</h3>
      </div>
    </div>

  )
}

export default Products; 