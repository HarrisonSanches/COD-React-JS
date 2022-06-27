import "./style.css";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/img/COD_LOGO.png";
import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer id="footer">
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Harrison Sanches</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">Designed by HS</div>
      </div>
    </footer>
  );
}

export default Footer;
