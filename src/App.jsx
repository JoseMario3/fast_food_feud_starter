import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import Header from "./components/Header/Header.jsx";
import Instructions from "./components/Instructions/Instructions.jsx";
import CategoriesColumn from "./CategoryColumn";
import RestaurantsRow from "./RestaurantsRows";
import MenuDisplay from "./MenuDisplay";
import DataSource from "./DataSource";
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
  const [currentCategory, setCategory] = useState(null);
  const [currentRestaurant, setRestaurant] = useState(null);
  const [currentMenuItem, setSelectedMenuItem] = useState(null);

  let currentMenuItems = data.filter((d) => {
    return (
      d.food_category === currentCategory && d.restaurant === currentRestaurant
    );
  });

  let currentInstructions = "";

  if (
    currentCategory == null &&
    currentRestaurant == null &&
    currentMenuItem == null
  ) {
    currentInstructions = appInfo.instructions.start;
  } else if (
    currentCategory != null &&
    currentRestaurant == null &&
    currentMenuItem == null
  ) {
    currentInstructions = appInfo.instructions.onlyCategory;
  } else if (
    currentCategory == null &&
    currentRestaurant != null &&
    currentMenuItem == null
  ) {
    currentInstructions = appInfo.instructions.onlyRestaurant;
  } else if (
    currentCategory != null &&
    currentRestaurant != null &&
    currentMenuItem == null
  ) {
    currentInstructions = appInfo.instructions.noSelectedItem;
  } else if (
    currentCategory != null &&
    currentRestaurant != null &&
    currentMenuItem != null
  ) {
    currentInstructions = appInfo.instructions.allSelected;
  }

  return (
    <main className="App">
      <CategoriesColumn
        currentCategory={currentCategory}
        setCategory={setCategory}
        categories={categories}
      />
      <div className="container">
        <Header
          title={appInfo.title}
          tagline={appInfo.tagline}
          description={appInfo.description}
        />
        <RestaurantsRow
          restaurants={restaurants}
          setRestaurant={setRestaurant}
          currentRestaurant={currentRestaurant}
        />
        <Instructions instructions={currentInstructions} />
        <MenuDisplay
          currentMenuItem={currentMenuItem}
          setSelectedMenuItem={setSelectedMenuItem}
          currentMenuItems={currentMenuItems}
        />
        <DataSource appInfo={appInfo} />
      </div>
    </main>
  );
}

export default App;
