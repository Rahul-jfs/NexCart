const CategoryCardShimmer = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {arr.map((n) => (
        <div
          key={n}
          className={`text-center bg-gray-300 size-50 rounded-xl border-2 flex justify-center items-center text-2xl font-bold`}
        ></div>
      ))}
    </div>
  );
};

export default CategoryCardShimmer;
