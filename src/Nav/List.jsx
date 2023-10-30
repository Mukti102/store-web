export default function List({ onList, onListEvent }) {
  return (
    <div>
      <ul
        className={
          "sm:flex sm:gap-5 sm:font-mediu sm:static sm:bg-transparent absolute z-[49] w-1/3 bg-slate-100 h-full p-3  top-0 transition-all ease-in-out delay-300" +
          (onList ? " right-0" : " -right-96 hidden")
        }
      >
        <button
          className="sm:hidden right-2 font-medium hover:text-red-700 z-50 absolute"
          onClick={() => onListEvent()}
        >
          X
        </button>
        <li className="cursor-pointer hover:text-text font-medium text-slate-600 mt-3">
          Home
        </li>
        <li className="cursor-pointer hover:text-text font-medium text-slate-600 mt-3">
          About
        </li>
        <li className="cursor-pointer hover:text-text font-medium text-slate-600 mt-3">
          Product
        </li>
        <li className="cursor-pointer hover:text-text font-medium text-slate-600 mt-3">
          Contact
        </li>
      </ul>
    </div>
  );
}
