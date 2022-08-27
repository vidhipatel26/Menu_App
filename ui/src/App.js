import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./apiData";
import axios from "axios";

const foodMenu = items.payload.restaurantDetails.foodMenu;
const apiUrl = "http://localhost:9000/menuModal";

function App() {
  const [menuItems, setMenuItems] = useState(foodMenu);

  useEffect(() => {
    foodMenu.map((element) => {
      element.isActive = false
    })
  },[menuItems])

  useEffect(() => {
    axios.get(apiUrl, {mode: 'cors'})
    .then(data => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
  },[])

  const filterItems = (element) => {
    if (element.category === "all") {
      setMenuItems(foodMenu);
      return;
    }
    element.isActive = true
    const newItems = foodMenu.filter((item) => item.category === element.category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={foodMenu} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
