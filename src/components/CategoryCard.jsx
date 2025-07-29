const CategoryCard = ({ category }) => {
  return (
    <div
      className="relative size-60 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
      style={{
        backgroundImage: `url(${category.bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex justify-center items-center text-white text-2xl font-bold h-full">
        {category.name}
      </div>
    </div>
  );
};

export default CategoryCard;
