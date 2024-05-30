import { ROUTES_NAME, ROUTES_PATH } from "@/utils/routes"
import Link from "next/link"
import { FaShoppingBag, FaUserAlt } from "react-icons/fa"

const NavbarElements = [
  {
    name: ROUTES_NAME.HOME,
    path: ROUTES_PATH.HOME,
  },
  {
    name: ROUTES_NAME.ABOUT,
    path: ROUTES_PATH.ABOUT,
  },
  {
    name: ROUTES_NAME.PRODUCTS,
    path: ROUTES_PATH.PRODUCTS,
  },
  {
    name: ROUTES_NAME.CART,
    path: ROUTES_PATH.CART,
  },
]

function Navbar() {
  return (
    <nav className="navbar">
      <header className="navbar__wrapper">
        <div className="navbar__logo">Comfy Store</div>
        <ul className="navbar__linksContainer">
          {NavbarElements.map(({ name, path }) => (
            <li key={name}>
              <Link className="navbar__link" href={path}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="navbar__iconsContainer">
          <Link
            className="navbar__link navbar__icon"
            href={ROUTES_PATH.USER}
            about={ROUTES_NAME.USER}
          >
            <FaUserAlt />
          </Link>
          <Link
            className="navbar__link navbar__icon"
            href={ROUTES_PATH.CART}
            about={ROUTES_NAME.CART}
          >
            <FaShoppingBag />
          </Link>
        </div>
      </header>
    </nav>
  )
}
export default Navbar
