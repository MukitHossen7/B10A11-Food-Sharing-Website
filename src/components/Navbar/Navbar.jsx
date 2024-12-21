import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" text-black pt-6">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 z-50 text-base "
            >
              <NavLink to="/">Home</NavLink>
              <NavLink to="/availableFoods">Available Foods</NavLink>
              <NavLink to="/addFood">Add Food</NavLink>

              <div className="flex flex-col gap-3">
                <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
                <NavLink to="/myFoodRequest">My Food Request</NavLink>
              </div>
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 lg:space-x-2">
            <span className="text-base lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400">
              FoodSharing
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/availableFoods">Available Foods</NavLink>
            <NavLink to="/addFood">Add Food</NavLink>

            <div className="flex items-center gap-8">
              <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
              <NavLink to="/myFoodRequest">My Food Request</NavLink>
            </div>
          </ul>
        </div>
        <div className="navbar-end gap-1 lg:gap-2 items-center">
          <div>
            <div className="flex items-center gap-1 lg:gap-4"></div>

            <div className="flex items-center gap-1 lg:gap-4">
              <Link
                to="/login"
                className="py-1 px-4 lg:px-5 text-white text-sm lg:text-lg rounded-lg bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:from-teal-500 hover:via-teal-400 hover:to-teal-600 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="py-1 px-4 lg:px-5 text-white text-sm lg:text-lg  rounded-lg bg-gradient-to-r from-teal-600 via-teal-500 to-teal-400 hover:from-teal-500 hover:via-teal-400 hover:to-teal-600 transition"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
