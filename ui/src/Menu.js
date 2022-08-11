import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return menuItem.dishes.map((e) => {
          return (
            <article key={e.id} className="menu-item">
              {/* <img src={img} alt={title} className="photo" /> */}
              {/* <div className="item-info"> */}
                {/* <header> */}
                  <h4>{e.name}</h4>
                  <h4 className="price">INR {e.price}</h4>
                {/* </header> */}
                {/* <p className="item-text">{desc}</p> */}
              {/* </div> */}
            </article>
          )
        })
        
      })}
    </div>
  )
}

export default Menu
