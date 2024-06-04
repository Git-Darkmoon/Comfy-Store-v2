import Link from "next/link"
import { IconType } from "react-icons"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

type socials = {
  path: string
  icon: IconType
}

const year = new Date().getFullYear()
const footer__socials: socials[] = [
  {
    path: "https://www.facebook.com/",
    icon: FaFacebook,
  },
  {
    path: "https://x.com/",
    icon: FaXTwitter,
  },
  {
    path: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    path: "https://www.instagram.com/",
    icon: FaInstagram,
  },
]

function Footer() {
  return (
    <footer className="footer">
      {/* Info Content */}
      <div>
        <h2 className="footer__title">Comfy Store</h2>

        <ul className="footer__socials">
          {footer__socials.map((social) => {
            return (
              <li key={social.path}>
                <a
                  href={social.path}
                  className="footer__content"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon />
                </a>
              </li>
            )
          })}
        </ul>

        <p className="footer__dev">
          Developed by:{" "}
          <a
            className="footer__author"
            href="https://www.linkedin.com/in/nicol%C3%A1s-mayorga-7z0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Darkmoon
          </a>{" "}
          &copy; {year}
        </p>
      </div>
      {/* Resources Content */}
      <div>
        <h3>Resources</h3>
        <Link className="footer__content" href={"/contact"}>
          Contact
        </Link>
        <br />
        <Link className="footer__content" href={"/help"}>
          Help
        </Link>
      </div>
      {/* Subscribe Content */}
      <div>
        <h3>Subscribe</h3>
        <input
          className="footer__subscribe-input"
          type="text"
          name="subscribe"
          placeholder="example@gmail.com"
        />
        <button className="footer__subscribe-btn">Subscribe</button>
      </div>
    </footer>
  )
}
export default Footer
