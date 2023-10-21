export default function List() {
  return (
    <div>
      <ul className="flex gap-5 font-medium">
        <li className="cursor-pointer hover:underline text-slate-200 uppercase">
          Home
        </li>
        <li className="cursor-pointer hover:underline text-slate-200 uppercase">
          About
        </li>
        <li className="cursor-pointer hover:underline text-slate-200 uppercase">
          Product
        </li>
        <li className="cursor-pointer hover:underline text-slate-200 uppercase">
          Contact
        </li>
      </ul>
    </div>
  );
}
