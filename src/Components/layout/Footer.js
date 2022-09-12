import classes from "./Footer.module.css";
import LogoIcon from "./LogoIcon";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer__logo"]}>
        <LogoIcon />
      </div>

      <div className={classes["footer__wrapper"]}>
        <ul className={classes["footer__list"]}>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <a href="df">Our services</a>
          </li>
          <li>
            <Link to="/contact">contact us</Link>
          </li>
          <li>
            <a href="df">Terms and Conditions</a>
          </li>
          <li>
            <a href="df">FAQs</a>
          </li>
        </ul>
      </div>
      <div className={classes["footer__media-icons"]}>
        <a href="https://www.instagram.com/jenoy_collection/">
          <FaInstagram className={classes.instagram} />
        </a>

        <a href="https://wa.me/message/HCRWZFW72ZZEI1">
          <FaWhatsappSquare className={classes.whatsapp} />
        </a>
        <a href="https://twitter.com/Jenoy_bags?t=XIPewrd3S6z3aQt7h4PKow&s=09">
          <FaTwitterSquare className={classes.twitter} />
        </a>
      </div>
      <div className={classes["footer__copyright"]}>
        Jennoy collections is an online bag store offering shopping and delivery
        services | |
        <br /> &copy; 2022.
        <a href="https://www.triad.netlify.app">Triad tech</a>| | All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
