"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
        <div className="container">
          <Link href="/" className="mil-logo">
            <img
              src={dark ? "img/logo-light.png" : "img/logo.png"}
              alt="Growsin"
            />
          </Link>

        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            {/* HOME */}
            {/* <li
              className={`mil-has-children ${
                currentPath.includes("home") || currentPath === "/"
                  ? "mil-active"
                  : ""
              }`}
            >
              <a href="#.">Home</a>
              <ul>
                <li>
                  <Link href="/">Type 1</Link>
                </li>
                <li>
                  <Link href="home-2">Type 2</Link>
                </li>
                <li>
                  <Link href="home-3">Type 3</Link>
                </li>
                <li>
                  <Link href="home-4">Type 4</Link>
                </li>
                <li>
                  <Link href="home-5">Type 5</Link>
                </li>
              </ul>
            </li> */}

            {/* ABOUT US */}
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "about",
                "philosophy",
                "founder",
                "vision-mission",
              ])}`}
            >
              <a href="#.">About Us</a>
              <ul>
                {/* <li>
                  <Link href="about">Overview</Link>
                </li> */}
                <li>
                  <Link href="Philosophy">Our Philosophy</Link>
                </li>
                <li>
                  <Link href="founder">Founder's Profile</Link>
                </li>
                <li>
                  <Link href="vision-mission">Vision &amp; Mission</Link>
                </li>
              </ul>
            </li>

            {/* SERVICES */}
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "services",
                "investment-advisory",
                "research-analysis",
              ])}`}
            >
              <a href="#.">Services</a>
              <ul>
                {/* <li>
                  <Link href="services">Overview</Link>
                </li> */}
                <li>
                  <Link href="investment-advisory">
                    Investment Advisory
                  </Link>
                </li>
                <li>
                  <Link href="research-analysis">
                    Research Analysis
                  </Link>
                </li>
              </ul>
            </li>

            {/* GROW TOOLS */}
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "grow-tools",
                "sip-calculator",
                "lump-sum-calculator",
                "retirement-calculator",
              ])}`}
            >
              <a href="#.">Grow Tools</a>
              <ul>
                <li>
                  <Link href="sip-calculator">SIP Calculator</Link>
                </li>
                <li>
                  <Link href="lump-sum-calculator">
                    Lump Sum Calculator
                  </Link> 
                </li>
                <li>
                  <Link href="retirement-calculator">
                    Retirement Calculator
                  </Link>
                </li>
              </ul>
            </li>

            {/* REGULATORY */}
            <li
              className={`mil-has-children ${activeMenuFuntion([
                "regulatory",
                "investor-ia",
                "investor-ra",
                "disclosure",
                "certificate",
              ])}`}
            >
              <a href="#.">Regulatory</a>
              <ul>
                <li>
                  <Link href="investor-ia">Investor – IA</Link>
                </li>
                <li>
                  <Link href="investor-ra">Investor – RA</Link>
                </li>
                <li>
                  <Link href="disclosure">Disclosure</Link>
                </li>
                <li>
                  <Link href="certificate">Certificate</Link>
                </li>
              </ul>
            </li>

            {/* BLOG (kept as-is) */}
            {/* <li
              className={`mil-has-children ${activeMenuFuntion([
                "blog",
                "publication",
              ])}`}
            >
              <a href="#.">Blog</a>
              <ul>
                <li>
                  <Link href="blog">Blog list</Link>
                </li>
                <li>
                  <Link href="publication">Blog details</Link>
                </li>
              </ul>
            </li> */}

            {/* CONTACT */}
            <li className={`${activeMenuFuntion(["contact"])}`}>
              <Link href="contact">Contact</Link>
            </li>

            {/* PAGES (optional, left intact) */}
            {/* <li
              className={`mil-has-children ${activeMenuFuntion([
                "career",
                "price",
                "register",
              ])}`}
            >
              <a href="#.">Pages</a>
              <ul>
                <li>
                  <Link href="career">Career</Link>
                </li>
                <li>
                  <Link href="career-details">Career details</Link>
                </li>
                <li>
                  <Link href="price">Pricing</Link>
                </li>
                <li>
                  <Link href="register">Register</Link>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>

        <div className="mil-menu-buttons">
          <a href="https://onboard.growsin.com" target="_blank" rel="noopener noreferrer" className="mil-btn mil-sm mil-client-login">
            Client Login
          </a>
          <div className="mil-sebi-info">
            <div className="mil-sebi-text">SEBI (IA): INA000021261</div>
            <div className="mil-sebi-text">SEBI (RA): INH000023667</div>
          </div>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>

        {/* Mobile SEBI Info */}
        <div className="mil-sebi-info-mobile">
          <div className="mil-sebi-text">SEBI (IA): INA000021261</div>
          <div className="mil-sebi-text">SEBI (RA): INH000023667</div>
        </div>
      </div>

      {/* Mobile and Button Styling */}
      <style jsx>{`
        /* Smaller button text and styling */
        .mil-btn.mil-sm.mil-client-login {
          font-size: 0.85rem;
          padding: 8px 16px;
        }

        /* Mobile version - hide button, show SEBI */
        .mil-sebi-info-mobile {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding: 0 10px;
        }

        .mil-sebi-text {
          font-size: 0.75rem;
          color: rgba(0, 0, 0, 0.7);
          white-space: nowrap;
        }

        @media (max-width: 768px) {
          /* Hide button on mobile */
          .mil-btn.mil-sm.mil-client-login {
            display: none;
          }

          /* Show SEBI info on mobile */
          .mil-sebi-info-mobile {
            display: flex;
          }

          /* Hide SEBI info in desktop menu on mobile */
          .mil-sebi-info {
            display: none;
          }

          .mil-sebi-text {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
