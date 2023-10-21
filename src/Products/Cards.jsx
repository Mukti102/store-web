function Card({ products, addToCart }) {
  console.log(products);
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product, index) => {
        return (
          <div
            key={index}
            className="w-56  flex flex-col justify-between gap-2 "
          >
            <div className="flex flex-col shadow-sm justify-center p-6 w-full h-64 bg-white overflow-hidden">
              <img
                src={product.image}
                className="w-full h-full  hover:scale-110 transition-all hover:ease-in-out  hover:delay-75"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-xs mt-1 text-center text-slate-800 font-semibold">
                {product.title}
              </h1>
              <h2 className="text-slate-800 text-center text-sm">
                ${product.price}
              </h2>
              <button
                onClick={() => addToCart(product.id)}
                className="bg-primary hover:bg-slate-800 mx-auto text-xs w-max font-medium text-slate-200 px-3 py-2 mt-3 cursor-pointer"
              >
                Add To Card
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
