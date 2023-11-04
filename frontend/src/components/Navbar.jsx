import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="w-[90%] max-w-5xl mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Roxiler</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Transactions</Link>
            </li>
            <li>
              <Link to="/statistics">Statistics</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
