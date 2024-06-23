"use client"

import { logoutUser } from "@/lib/features/user/userSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { ROUTES_NAME, ROUTES_PATH } from "@/utils/routes"
import Link from "next/link"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"
import { CiLogout } from "react-icons/ci"
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
  const { user } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleLogout = () => {
    // dispatch(clearCart()) TO-DO
    dispatch(logoutUser())
    toast.success("Logged Out")
    router.push("/")
  }

  return (
    <nav className="navbar">
      <header className="navbar__wrapper">
        <div className="navbar__logo">Comfy Store</div>

        <ul className="navbar__linksContainer">
          {user &&
            NavbarElements.map(({ name, path }) => (
              <li key={name}>
                <Link className="navbar__link" href={path}>
                  {name}
                </Link>
              </li>
            ))}
        </ul>

        <div className="navbar__iconsContainer">
          {user ? (
            <>
              <p className="navbar__loggedUser">{user?.user?.username}</p>
              <button className="navbar__registerBtn" onClick={handleLogout}>
                Logout
                <CiLogout className="navbar__logoutIcon" />
              </button>
            </>
          ) : (
            <>
              <Link
                className="navbar__loginBtn"
                href={ROUTES_PATH.LOGIN}
                about={ROUTES_NAME.LOGIN}
              >
                {ROUTES_NAME.LOGIN}
                <CiLogout className="navbar__logoutIcon" />
              </Link>
              <Link
                className="navbar__registerBtn"
                href={ROUTES_PATH.REGISTER}
                about={ROUTES_NAME.REGISTER}
              >
                {ROUTES_NAME.REGISTER}
                <CiLogout className="navbar__logoutIcon" />
              </Link>
            </>
          )}
        </div>
      </header>
    </nav>
  )
}
export default Navbar
