import React, { useState } from "react";
import Category1 from "../categories/Category1";
import Category2 from "../categories/Category2";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Category1");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="mt-10 bg-gray-100">
      <div className="flex justify-center pt-8 pb-4">
        <button
          className={`${
            activeCategory === "Category1"
              ? "bg-black text-white"
              : "bg-gray-100 text-black border border-black"
          } rounded-full px-6 py-3 mr-4 mt-4`}
          onClick={() => handleCategoryChange("Category1")}
        >
          Category 1
        </button>
        <button
          className={`${
            activeCategory === "Category2"
              ? "bg-black text-white"
              : "bg-gray-100 text-black border border-black"
          } rounded-full px-6 py-3 mt-4`}
          onClick={() => handleCategoryChange("Category2")}
        >
          Category 2
        </button>
      </div>
      {activeCategory === "Category1" && <Category1 />}
      {activeCategory === "Category2" && <Category2 />}
    </div>
  );
};

export default Home;
