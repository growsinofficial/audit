import Link from "next/link";
import Image from "next/image";

const Footer = ({ bg = true, margin = 160 }) => {
  return <Footer1 bg={bg} margin={margin} />;
};
export default Footer;

/* ========== FOOTER 1 (Redesigned - Compact & Modern) ========== */
const Footer1 = ({ bg = true, margin = 160 }) => {
  return (
    <footer className={`${bg ? "mil-footer-with-bg" : ""} mil-p-${margin}-0 `}>
      <div className="container">
        {/* Main Footer Content */}
        <div className="row align-items-start">
          {/* Column 1: Company Info & Regulatory */}
          <div className="col-lg-3 col-md-6 mil-mb-40">
            <div className="mil-mb-20">
              <Image 
                src="/img/logo.png" 
                alt="Growsin Logo" 
                width={200} 
                height={80}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <p className="mil-text-s mil-soft mil-mb-20" style={{ lineHeight: '1.6' }}>
              SEBI Registered Investment Adviser &amp; Research Analyst
            </p>
            
            {/* Compact Regulatory Info */}
            <div className="regulatory-compact mil-mb-25">
              <div className="reg-item">
                <span className="reg-label">SEBI IA:</span>
                <span className="reg-value">INA000021261</span>
              </div>
              <div className="reg-item">
                <span className="reg-label">SEBI RA:</span>
                <span className="reg-value">INH000023667</span>
              </div>
              <div className="reg-item">
                <span className="reg-label">BASL:</span>
                <span className="reg-value">28698</span>
              </div>
            </div>

            {/* Validation Details */}
            <div className="validation-details mil-mb-25">
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '8px', fontWeight: '600' }}>
                <strong>Validity Details:</strong>
              </p>
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '6px' }}>
                <strong>IA:</strong> SEBI (IA) (INA000021261) – Valid till: Nov 03, 2025 (Perpetual)
              </p>
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '12px' }}>
                <strong>RA:</strong> SEBI (RA) (INH000023667) – Validity: Oct 27, 2025 to Oct 26, 2030
              </p>
            </div>

            {/* Principal Officer */}
            <div className="principal-officer mil-mb-20">
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '4px' }}>
                <strong>Principal Officer:</strong> Murali Sivvala
              </p>
            </div>

            {/* Contact Info */}
            <div className="contact-compact mil-mb-20">
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '6px' }}>
                <strong>Email:</strong> compliance@growsin.com
              </p>
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '6px' }}>
                <strong>Phone:</strong> +91 8500660421
              </p>
              <p className="mil-text-xs mil-soft" style={{ marginBottom: '6px' }}>
                <strong>Address:</strong> Visakhapatnam, Andhra Pradesh, India
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 mil-mb-40">
            <h6 className="mil-mb-20" style={{ fontSize: '0.95rem', fontWeight: '700' }}>Quick Links</h6>
            <ul className="footer-links-compact">
              <li><Link href="/about"><strong>About Us</strong></Link></li>
              <li><Link href="/services"><strong>Services</strong></Link></li>
              <li><Link href="/investment-advisory">Investment Advisory</Link></li>
              <li><Link href="/research-analysis">Research Analysis</Link></li>
              <li><Link href="/Philosophy">Our Philosophy</Link></li>
              <li><Link href="/founder">Founder's Profile</Link></li>
            </ul>
          </div>

          {/* Column 3: Tools & Regulatory */}
          <div className="col-lg-2 col-md-6 mil-mb-40">
            <h6 className="mil-mb-20" style={{ fontSize: '0.95rem', fontWeight: '700' }}>Tools & Regulatory</h6>
            <ul className="footer-links-compact">
              <li><Link href="/grow-tools"><strong>Grow Tools</strong></Link></li>
              <li><Link href="/sip-calculator">SIP Calculator</Link></li>
              <li><Link href="/retirement-calculator">Retirement Calculator</Link></li>
              <li><Link href="/regulatory"><strong>Regulatory</strong></Link></li>
              <li><Link href="/investor-ia">Investor Charter (IA)</Link></li>
              <li><Link href="/investor-ra">Investor Charter (RA)</Link></li>
              <li><Link href="/disclosure">Disclosure</Link></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="col-lg-2 col-md-6 mil-mb-40">
            <h6 className="mil-mb-20" style={{ fontSize: '0.95rem', fontWeight: '700' }}>Resources</h6>
            <ul className="footer-links-compact">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions">Terms &amp; Conditions</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/contact"><strong>Contact</strong></Link></li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div className="col-lg-3 col-md-6 mil-mb-40">
            <h6 className="mil-mb-20" style={{ fontSize: '0.95rem', fontWeight: '700' }}>Connect With Us</h6>
            
            {/* WhatsApp Button */}
            <a
              href="https://wa.me/15558788700?text=Hello%21+I+am+interested+in+learning+more+about+your+business."
              target="_blank"
              rel="noopener noreferrer"
              className="mil-whatsapp-button mil-mb-20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .002 5.373 .002 12c0 2.108.548 4.083 1.588 5.84L0 24l6.425-1.65A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.25-6.212-3.48-8.52z" fill="#fff" />
                <path d="M17.49 14.06c-.28-.14-1.64-.81-1.9-.9-.26-.09-.45-.14-.64.14-.18.28-.7.9-.86 1.08-.16.18-.33.2-.61.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.37-1.63-1.53-1.92-.16-.28-.02-.43.12-.56.12-.12.28-.32.42-.48.14-.16.19-.27.28-.45.09-.18.04-.34-.02-.48-.07-.13-.64-1.54-.88-2.12-.23-.56-.47-.49-.64-.5l-.55-.01c-.17 0-.45.06-.69.33-.24.28-.91.88-.91 2.15 0 1.27.93 2.5 1.06 2.67.12.18 1.82 2.9 4.42 3.95 2.6 1.05 2.6.7 3.07.66.47-.05 1.52-.62 1.74-1.22.22-.61.22-1.13.15-1.23-.07-.1-.26-.16-.54-.3z" fill="#25D366" />
              </svg>
              <span>WhatsApp Us</span>
            </a>

            {/* Social Icons */}
            <div className="social-icons-compact">
              <p className="mil-text-xs mil-soft mil-mb-10" style={{ fontWeight: '600' }}>Follow Us</p>
              <div className="d-flex gap-2">
                <a href="https://www.linkedin.com/company/109383356/admin/dashboard/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7C22.6 7.5 24 10 24 14.1V24h-5v-8.2c0-2-1.4-2.8-2.1-2.8-.8 0-1.8.5-1.8 2.8V24H7V8z" />
                  </svg>
                </a>
                <a href="https://x.com/growsin_?s=21" target="_blank" rel="noopener noreferrer" className="social-icon" title="X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCcuptiIbG0KOk1vtgQUIOJw" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/growsin_official/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61582513401346" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Disclaimer - Compact */}
        <div className="row">
          <div className="col-12">
            <div className="disclaimer-compact">
              <p className="mil-text-xs mil-soft">
                <strong>Disclaimer:</strong> Registration granted by SEBI, membership of BASL, and certification from NISM do not guarantee performance or assurance of returns. The information provided is for general purposes only. Investment advisory is fee-based and not linked to market performance. We undergo mandatory Annual Compliance Audit as per SEBI regulations.
              </p>
              <p className="mil-text-xs mil-soft" style={{ marginTop: '10px' }}>
                <strong>Grievance Redressal:</strong> Contact our Compliance Officer, Murali Sivvala, at{" "}
                <a href="mailto:compliance@growsin.com" className="footer-link">compliance@growsin.com</a>. 
                File complaints at <a href="https://smartodr.in/" target="_blank" rel="noopener noreferrer" className="footer-link">smartodr.in</a> or SEBI SCORES platform.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="mil-text-xs mil-soft text-center">© 2025 Growsin. All Rights Reserved.</p>
        </div>
      </div>

      {/* ============ STYLES ============ */}
      <style jsx>{`
        /* Compact Regulatory Info */
        .regulatory-compact .reg-item {
          display: flex;
          justify-content: space-between;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          font-size: 0.85rem;
        }
        .reg-label {
          font-weight: 600;
          color: rgba(0,0,0,0.7);
        }
        .reg-value {
          color: rgba(0,0,0,0.6);
        }

        /* Validation Details */
        .validation-details {
          padding: 10px 0;
          border-top: 1px solid rgba(0,0,0,0.06);
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        /* Principal Officer */
        .principal-officer {
          padding: 8px 0;
          background: rgba(23, 94, 226, 0.05);
          padding: 8px 10px;
          border-radius: 4px;
        }

        /* Footer Links Compact */
        .footer-links-compact {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-links-compact li {
          margin-bottom: 8px;
        }
        .footer-links-compact a {
          color: rgba(0,0,0,0.65);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s ease;
          display: inline-block;
        }
        .footer-links-compact a:hover {
          color: #175ee2;
        }
        .footer-links-compact strong {
          font-weight: 700;
          color: rgba(0,0,0,0.8);
        }

        /* WhatsApp Button - Compact */
        .mil-whatsapp-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #25D366;
          color: white;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 6px rgba(37, 211, 102, 0.25);
        }
        .mil-whatsapp-button:hover {
          background: #20BA5A;
          transform: translateY(-1px);
          box-shadow: 0 4px 10px rgba(37, 211, 102, 0.35);
        }

        /* Social Icons - Compact */
        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.08);
          text-decoration: none;
          transition: all 0.2s ease;
          color: rgba(0,0,0,0.7);
        }
        .social-icon:hover {
          background: #175ee2;
          border-color: #175ee2;
          color: white;
          transform: translateY(-2px);
        }

        /* Divider */
        .footer-divider {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(0,0,0,0.1), transparent);
          margin: 30px 0 25px 0;
        }

        /* Disclaimer Compact */
        .disclaimer-compact {
          padding: 20px;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 3px solid #175ee2;
        }
        .footer-link {
          color: #175ee2;
          text-decoration: none;
          font-weight: 600;
        }
        .footer-link:hover {
          text-decoration: underline;
        }

        /* Footer Bottom */
        .footer-bottom {
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.06);
        }

        /* Utility Classes */
        .mil-mb-40 { margin-bottom: 40px; }
        .mil-mb-25 { margin-bottom: 25px; }
        .mil-mb-20 { margin-bottom: 20px; }
        .mil-mb-10 { margin-bottom: 10px; }

        /* Responsive */
        @media (max-width: 991.98px) {
          .regulatory-compact .reg-item {
            font-size: 0.8rem;
          }
          .footer-links-compact a {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 767.98px) {
          .mil-mb-40 { margin-bottom: 30px; }
          h5 { font-size: 1.25rem !important; }
          .social-icon {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </footer>
  );
};
