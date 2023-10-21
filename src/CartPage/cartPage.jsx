export default function cartPage({ onChartPage }) {
  return (
    <div
      className={`${
        onChartPage ? "inline-block" : "hidden"
      } p-12  absolute w-full top-0 h-full bg-slate-50 z-50`}
    >
      <div className="flex justify-between mb-5">
        <h1 className="font-medium text-3xl">Shoping Cart</h1>
        <span>3 Items</span>
      </div>
      <div className="flex justify-between  text-slate-500 text-sm mb-2">
        <span>Items</span>
        <div className="flex w-1/2 justify-between">
          <span>Size</span>
          <span>Quantity</span>
          <span>Price</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-4">
        <div className="flex gap-2  w-1/2">
          <div>
            <img
              src="https://picsum.photos/id/237/200"
              className="w-20"
              alt=""
            />
          </div>
          <div className="flex justify-evenly flex-col">
            <h1 className="text-lg">Title Brand</h1>
            <span className="text-sm text-slate-500">Category</span>
          </div>
        </div>
        <div className="flex justify-between  w-1/2 items-center">
          <div>
            <h1>100 Ml</h1>
          </div>
          <div className="flex gap-2 items-center">
            <button className="w-5 h-5 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600">
              -
            </button>
            <span>0</span>
            <button className="w-5 h-5 items-center font-medium flex justify-center border-2 border-slate-300 text-slate-300 rounded-full hover:text-slate-600 hover:border-slate-600">
              +
            </button>
          </div>
          <div className="">
            <h1>$700</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
