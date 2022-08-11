import React from 'react'

const Categories = ({ categories, filterItems }) => { 
  return (
    <div className="btn-container">
      {categories.map((element, index) => {
        element.className = element.isActive ? "filter-btn active" : "filter-btn"
        return (
          <button
            type="button"
            className={element.className}
            key={index}
            onClick={() => {
              filterItems(element, index)
            }}
          >
            {element.category}
          </button>
        )
      })}
    </div>
  )
}

export default Categories
