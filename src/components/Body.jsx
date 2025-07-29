import { useEffect, useState } from "react";
import { cardImages, PRODUCTS_URL, THEME_CLASSES } from "../utils/constants";
import CategoryCard from "./CategoryCard";
import CategoryCardShimmer from "./CategoryCardShimmer";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const Body = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await fetch(PRODUCTS_URL + "/categories");
    const result = await data.json();
    const newCategories = result.map((item, index) => ({
      ...item,
      ...cardImages[index],
    }));

    setCategories(newCategories);
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div
      className={`my-6 p-4 shadow-xl  rounded-xl ${THEME_CLASSES[mode]} transition duration-500`}
    >
      <h1 className="text-center text-3xl font-bold p-2 m-3">Categories</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {categories.length === 0 ? <CategoryCardShimmer /> : null}
        {categories.map((category, index) => (
          <Link to={`/products/category/${category.name}`} key={index}>
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
