"use client";

import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Banner from "@/components/Banner";

export default function Philosophy() {
  return (
    <PlaxLayout bg={false}>
      {/* Hero / Banner */}
      <Banner
        title="Our Philosophy"
        subtitle="Principles that Guide Us"
        img="img/home-1/1.png"
        style={{ maxWidth: "125%", transform: "translateX(10%)" }}
      />

      {/* Intro (centered) */}
      <section className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="intro-center">
                <h2 className="mil-mb-20 mil-up">Principles that Guide Us</h2>
                <p className="mil-text-m mil-soft mil-up intro-lead">
                  Principles that guide every piece of advice and research we
                  deliver. As SEBI-registered Investment Advisers and Research
                  Analysts, we hold ourselves to the highest standards of ethics
                  and transparency so that every decision we take is rooted in
                  your best interest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Grid (cards laid out like your screenshot) */}
      <section className="mil-features mil-p-0-80">
        <div className="container">
          <div className="principles-grid">
            {/* Card 1 */}
            <article className="principle-card">
              <div className="pc-head">
                <div className="pc-dot" aria-hidden />
                <h3 className="pc-title">Client-First, Always</h3>
              </div>
              <p className="pc-lead">
                Your goals define our advice. Acting in a fiduciary capacity
                means our success is tied directly to yours.
              </p>

              <div className="pc-what">
                <strong>What this means for you:</strong>
                <ul>
                  <li>Tailored, not templated advice.</li>
                  <li>Transparent agreements and fees.</li>
                  <li>Regular reviews to keep plans relevant.</li>
                </ul>
              </div>
            </article>

            {/* Card 2 */}
            <article className="principle-card">
              <div className="pc-head">
                <div className="pc-dot" aria-hidden />
                <h3 className="pc-title">Integrity in Research</h3>
              </div>
              <p className="pc-lead">
                Our research stands independent of any distribution or sales
                influence, ensuring our insights are free from commercial bias.
              </p>

              <div className="pc-what">
                <strong>What this means for you:</strong>
                <ul>
                  <li>Unbiased, evidence-based insights.</li>
                  <li>Clear disclosures of risks and interests.</li>
                  <li>Research for informed, long-term decisions.</li>
                </ul>
              </div>
            </article>

            {/* Card 3 */}
            <article className="principle-card">
              <div className="pc-head">
                <div className="pc-dot" aria-hidden />
                <h3 className="pc-title">Evidence Over Speculation</h3>
              </div>
              <p className="pc-lead">
                We believe in disciplined, patient investing — not chasing short-term market noise.
              </p>

              <div className="pc-what">
                <strong>What this means for you:</strong>
                <ul>
                  <li>Portfolios designed to protect and grow.</li>
                  <li>Focus on sustainable wealth creation.</li>
                  <li>No hype, no false promises.</li>
                </ul>
              </div>
            </article>

            {/* Card 4 */}
            <article className="principle-card">
              <div className="pc-head">
                <div className="pc-dot" aria-hidden />
                <h3 className="pc-title">Compliance With Care</h3>
              </div>
              <p className="pc-lead">
                We don't treat compliance as a checkbox — it's how we protect your trust and your assets.
              </p>

              <div className="pc-what">
                <strong>What this means for you:</strong>
                <ul>
                  <li>Straightforward, clear communication.</li>
                  <li>Mandatory risk warnings and disclosures.</li>
                  <li>Assurance your interests come first.</li>
                </ul>
              </div>
            </article>
          </div>

          {/* Small visual separator */}
          <div style={{ height: 36 }} />

          {/* Commitment (cards with icons) */}
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-40">
                <h2 className="mil-up">Our Commitment to You</h2>
              </div>
              <div className="col-xl-4 mil-mb-40 mil-up">
                <Link
                  href="/services"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="row principles-commit-cards">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box simple">
                  <img src="/img/home-1/icons/1.svg" alt="Clarity" className="mil-mb-20" />
                  <h5 className="mil-mb-15">Unwavering Clarity</h5>
                  <p className="mil-text-m mil-soft">
                    Financial advice should be transparent and easy to understand — clear explanations, no jargon, no hidden costs.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box simple">
                  <img src="/img/home-1/icons/2.svg" alt="Discipline" className="mil-mb-20" />
                  <h5 className="mil-mb-15">Unrelenting Discipline</h5>
                  <p className="mil-text-m mil-soft">
                    We stay focused on your long-term goals, filtering out market noise with a steady, research-driven approach.
                  </p>
                </div>
              </div>

              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box simple">
                  <img src="/img/home-1/icons/3.svg" alt="Partnership" className="mil-mb-20" />
                  <h5 className="mil-mb-15">An Enduring Partnership</h5>
                  <p className="mil-text-m mil-soft">
                    Our role is to walk with you through your entire financial journey — not just a single transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-xl-8 mil-mb-20">
                <p className="mil-text-m mil-up">
                  Discover how we can help you build wealth with confidence. If these principles resonate with the way you want your wealth managed, we invite you to begin your journey with us.
                </p>
              </div>
              <div className="col-xl-4 mil-up">
                <a href="https://onboard.growsin.com" target="_blank" rel="noopener noreferrer" className="mil-btn mil-md mil-add-arrow">
                  Start Your Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles (scoped) — uses your brand gradient & colors */}
      <style jsx>{`
        :root {
          --growsin-blue: #175ee2;
          --growsin-purple: #7d2ae8;
          --growsin-deep: #00298e;
          --growsin-bright: #0499fb;
          --muted: rgba(17,24,39,0.6);
        }

        /* Centered intro */
        .intro-center {
          text-align: center;
          padding: 8px 12px;
          margin: 0 auto;
        }
        .intro-center h2 {
          color: var(--growsin-deep);
          font-weight: 800;
        }
        .intro-lead {
          margin-top: 12px;
          color: var(--muted);
          font-size: 1.05rem;
          line-height: 1.6;
        }

        /* Override theme styles for mobile */
        @media screen and (max-width: 992px) {
          /* Banner title - the "Our Philosophy" heading */
          h1.mil-display,
          .h1.mil-display,
          h1.mil-text-gradient-3 {
            font-size: 2rem !important;
          }
          
          /* Intro section */
          .intro-center h2,
          .intro-center h2.mil-mb-20,
          .intro-center h2.mil-up {
            font-size: 1.5rem !important;
          }
          .intro-lead,
          p.mil-text-m.intro-lead {
            font-size: 0.9rem !important;
          }
        }

        /* Principles grid */
        .principles-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 720px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (min-width: 1100px) {
          .principles-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        .principle-card {
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border: 1px solid rgba(8, 15, 36, 0.06);
          border-radius: 12px;
          padding: 22px;
          box-shadow: 0 8px 24px rgba(9, 30, 66, 0.03);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }
        .principle-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 30px rgba(9, 30, 66, 0.06);
        }

        .pc-head {
          display:flex;
          gap:12px;
          align-items:center;
          margin-bottom: 8px;
        }

        .pc-dot {
          width:36px;
          height:36px;
          border-radius:50%;
          background: linear-gradient(135deg, var(--growsin-blue), var(--growsin-purple));
          box-shadow: 0 6px 14px rgba(23, 94, 226, 0.12);
          flex-shrink:0;
        }

        .pc-title {
          margin:0;
          font-size:1.05rem;
          color: var(--growsin-deep);
          font-weight:700;
        }

        .pc-lead {
          color: var(--muted);
          margin:10px 0 12px;
          line-height:1.5;
        }

        .pc-what strong { display:block; margin-bottom:8px; color: var(--growsin-deep); }
        .pc-what ul { margin:0; padding-left:18px; color: var(--muted); }
        .pc-what li { margin-bottom:6px; }

        /* Commitment small cards use existing mil-icon-box but tighten spacing */
        .mil-icon-box.simple { padding:20px; border-radius:10px; border:1px solid rgba(8,15,36,0.04); background:#fff; }
        .mil-icon-box.simple img { width:44px; height:auto; }

        /* Buttons & accent usage */
        .mil-btn.mil-m, .mil-btn.mil-md, .mil-btn.mil-add-arrow {
          background: linear-gradient(90deg, var(--growsin-blue), var(--growsin-purple));
          border: none;
          color: white;
          box-shadow: 0 8px 22px rgba(125,42,232,0.08);
        }

        /* small responsive tweaks */
        @media (max-width: 767px) {
          /* Banner title - smaller on mobile */
          h1.mil-display,
          .h1.mil-display,
          h1.mil-text-gradient-3 {
            font-size: 1.75rem !important;
          }
          
          .intro-center h2,
          .intro-center h2.mil-mb-20,
          .intro-center h2.mil-up { font-size: 1.25rem !important; }
          .intro-lead,
          p.mil-text-m.intro-lead { font-size: 0.85rem !important; }
          .pc-title { font-size: 0.9rem !important; }
          .pc-lead { font-size: 0.8rem !important; }
          .pc-what { font-size: 0.8rem !important; }
          .pc-dot { width:28px; height:28px; }
          .principle-card { padding:14px; }
        }
      `}</style>
    </PlaxLayout>
  );
}
