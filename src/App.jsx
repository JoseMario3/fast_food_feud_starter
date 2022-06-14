import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header.jsx";
import Instructions from "./components/Instructions/Instructions.jsx";
import Chip from "./components/Chip/Chip.jsx";
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel";
import { createDataSet } from "./data/dataset";
import { useState } from "react";
import "./App.css";

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
};
// or this!
const { data, categories, restaurants } = createDataSet();

export function App() {
  const [currentCategory, setCategory] = useState("");
  const [currentRestaurant, setRestaurant] = useState("");
  const [currentMenuItem, setSelectedMenuItem] = useState(null);

  let currentMenuItems = data.filter((d) => {
    return (
      d.food_category === currentCategory && d.restaurant === currentRestaurant
    );
  });

  console.log(currentMenuItems);
  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {categories.map((category) => (
            <Chip
              label={category}
              key={category}
              isActive={category == currentCategory}
              onClick={() => setCategory(category)}
            />
          ))}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />

        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">
            {restaurants.map((restaurant) => (
              <Chip
                label={restaurant}
                key={restaurant}
                isActive={restaurant == currentRestaurant}
                onClick={() => setRestaurant(restaurant)}
              />
            ))}
          </div>
        </div>

        <Instructions instructions={appInfo.instructions.start} />
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {currentMenuItems.map((menuItem, idx) => (
              <Chip
                label={menuItem.item_name}
                key={idx}
                isActive={menuItem === currentMenuItem}
                onClick={() => {
                  setSelectedMenuItem(menuItem);
                }}
              />
            ))}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {currentMenuItem != null && <NutritionalLabel item={currentMenuItem}/>}
          </div>
        </div>
        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  );
}

export default App;
