import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import axios from "axios";

const apiUrl = "http://localhost:9000/menuModal";

function App() {
  let menuItems = []

  useEffect(() => {
    axios.get(apiUrl, {mode: 'cors'})
    .then(response => {
        menuItems.concat(response.data)
    }).catch((err) => {
        console.log(err)
    })
  },[])

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
            <div className="menuWrapper">
                {console.log(menuItems)}
                {menuItems && menuItems.map((menu) => {
                    return (
                        <div className="menuList">
                        <span>{menu.productName}</span>
                        <span>{menu.productCategory}</span>
                        <span>{menu.productPrice}</span>
                    </div>
                    )
                })}
            </div>
        </div>
      </section>
    </main>
  );
}

export default App;
