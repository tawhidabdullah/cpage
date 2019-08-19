import React from 'react'

interface Props {
  
}

export const Experiments: React.FC<Props> = () => {
  return (
    
  <div className="section">
  <div className="intro">EXPERIMENTS</div>
  <hr />
  <div className="item">
    <a href="https://exposure.cards/randomhunt" target="_blank">Random Hunt</a>
    <h3>Discover random products from Product Hunt, on the press of a button</h3>
   
  </div>
  <div className="item">
    <a href="https://blog.usejournal.com/how-to-use-google-sheets-as-a-cms-or-a-database-f9d8e736fdce"
      target="_blank">Google Sheets CMS</a>
    <h3>Using Google Sheets as a database or a CMS for any purpose</h3>
   
  </div>
  <div className="item">
    <a href="https://medium.com/@alyssax/the-future-of-on-demand-apps-product-delivery-concept-a71ba0a41286"
      target="_blank">Product Delivery App</a>
    <h3>A case study for a product delivery app</h3>
    
  </div>
  <div className="item">
    <a href="https://github.com/alyssaxuu/todo-app" target="_blank">Simple Todo</a>
    <h3>Minimal task manager built with ReactJs</h3>
   
  </div>
</div>
  )
}


export default Experiments; 