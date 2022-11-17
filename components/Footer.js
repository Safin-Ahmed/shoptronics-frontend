import HomeStyled from "../public/Styles/home.module.css";
import PrimaryLogo from "./shared/primary-logo/PrimaryLogo";

function Footer() {
  return (
    <footer className={HomeStyled.footerBackground}>
      <div className={HomeStyled.customContainer}>
        <div className={HomeStyled.mainfooter}>
          <div className={HomeStyled.footerSection}>
            <PrimaryLogo width={180} height={30} alt="footer-logo" />
            <p>
              Elegant pink origami design three dimensional view and decoration
              co-exist. Great for adding a decorative touch to any room’s decor.
            </p>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">Custom Service</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Ordering Tracking</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>My Account</h3>
            <ul>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Discount</a>
              </li>
              <li>
                <a href="#">Custom Service</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Get Newsletter</h3>
            <p>
              Elegant pink origami design three dimensional decorative touch to
              any room’s decor.
            </p>
            <input
              type="email"
              placeholder="Your Email"
              className={HomeStyled.footerStyleInput}
            />
            <input type="submit" className={HomeStyled.footerbtn} />
          </div>
        </div>
        <div className={HomeStyled.copyrightSection}>
          <p>Copyright 2022 ©Ninja. All rights reserved. Powered by Ninja.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
