import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 max-sm:px-5 flex justify-center items-center ">
      <nav className="w-full flex screen-max-width  ">
        <img src={appleImg} alt="Apple" width={14} height={18} />
        <ul className="flex flex-1 max-sm:hidden justify-center ">
          {navLists.map((nav) => (
            <li
              key={nav}
              className="px-3 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </li> // Removed the semicolon here
          ))}
        </ul>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 ">
          <img src={searchImg} alt="Search" width={14} height={18} />
          <img src={bagImg} alt="bag" width={14} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
