const ButtonProduct = ({onFilterSelect, selectedCategory }) => {

    const categories = ["All", "strawberry", "berry", "lemon", "apple"];

  return (
    <div className="flex flex-shrink justify-center gap-2 md:gap-4 py-6 font-bold ">
      {categories.map(cat => (
        <button key={cat} onClick={() => onFilterSelect(cat)} className={`rounded-xl py-3 px-4 md:px-6 text-[8px] md:text-[18px] capitalize transition-colors ${
            selectedCategory === cat  ? "bg-orange-400 text-white"  : "bg-slate-200 hover:bg-orange-400" }`}>
          {cat}
        </button>
      ))}
    </div>
     );
}
 
export default ButtonProduct;