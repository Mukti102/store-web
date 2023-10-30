import Loading from "../loading/Loading";
function Card({ products, addToCart }) {
  // Ubah kondisi di bawah
  if (!products || products.length === 0) {
    // Menangani kasus ketika data belum tersedia atau kosong
    return <Loading />;
  } else {
    // Merender komponen dengan data
    return (
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product, index) => {
          return (
            <div
              key={index}
              className="w-64 flex flex-col justify-between gap-2 shadow-lg p-4 flex-wrap"
            >
              <div className="flex flex-col justify-center p-6 w-full h-56 bg-white overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-full  hover:scale-110 transition-all hover:ease-in-out  hover:delay-75"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-center gap-1">
                <h1 className="text-[11px] mt-1 text-center text-slate-800 font-semibold">
                  {product.title}
                </h1>
                <h2 className="text-slate-800 text-center text-[11px]">
                  ${product.price}
                </h2>
                <button
                  onClick={() => addToCart(product.id)}
                  className="bg-text text-slate-800 hover:bg-slate-800 mx-auto text-xs sm:w-max font-medium px-3 py-2 mt-3 cursor-pointer"
                >
                  Add To Cart {/* Fixed typo here, should be "Cart" */}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
