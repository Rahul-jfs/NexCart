import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { PRODUCTS_URL, THEME_CLASSES } from "../utils/constants";
import ProductCard from "./ProductCard";

const CategoryPage = () => {
  const { slug } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const fetchCategoryData = async () => {
    const formattedSlug = slug.trim().replace(" ", "-");

    const fetchURL =
      formattedSlug === "products"
        ? PRODUCTS_URL
        : `${PRODUCTS_URL}/category/${formattedSlug}`;

    const data = await fetch(fetchURL);
    const res = await data.json();
    setProducts(res.products);
  };

  const mode = useSelector((store) => store.theme.mode);

  return (
    <div className={`${THEME_CLASSES[mode]} my-6 p-3 shadow-xl  rounded-xl`}>
      <h1 className="text-center text-3xl font-bold p-2 m-3">{slug}</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
