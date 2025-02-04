import { useContext } from "react";
import { Link } from "react-router-dom";
import { ecomContext } from "../Home";
function Header() {
  const { cart } = useContext(ecomContext);
  return (
    <header className="flex justify-between items-center bg-rose-400 px-12 h-20 ">
      <h2>Ecommerce</h2>
      <ul className="flex">
        <li>
          <Link  className="px-4 mx-4"to="/">Home</Link>
        </li>
        <li>
          <Link className="px-4 mx-4" to="/about">About</Link>
        </li>
        <li>
          <Link className="px-4 mx-4" to="/blog">Blog</Link>
        </li>
        <li>
          <Link className="px-4 mx-4" to="/cart">
            Cart <span>{cart.length}</span>
          </Link>
        </li>
        <li>
          <Link className="px-4 mx-4" to="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
