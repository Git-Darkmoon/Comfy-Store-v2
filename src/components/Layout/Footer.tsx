import { FaFacebook } from "react-icons/fa"
import { FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6"

const year = new Date().getFullYear()

function Footer() {
  return (
    <footer className="footer">
      {/* Info Content */}
      <div>
        <h1>Comfy Store</h1>

        <ul className="footer__socials">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </li>
        </ul>

        <p>
          Developed by:{" "}
          <a
            href="http://www.linkedin.com/in/"
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
        <h2>Resources</h2>
      </div>
      {/* Subscribe Content */}
      <div>
        <h2>Subscribe</h2>
        <input type="text" name="" id="" />
        <button>Subscribe</button>
      </div>
    </footer>
  )
}
export default Footer
