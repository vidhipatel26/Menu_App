import React from 'react'

const Categories = ({ menu }) => {
  return (
    <div className="btn-container">
      {menu.map((element, index) => {
        element.className = element.isActive ? "filter-btn active" : "filter-btn"
        return (
          <ul>
            <li>{menu.productName}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Categories
