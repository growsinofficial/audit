"use client";

import { useEffect } from "react";
import Link from "next/link";
import PlaxLayout from "@/layouts/PlaxLayout";
import Banner from "@/components/Banner";

export default function VisionMission() {
  useEffect(() => {
    // IntersectionObserver to add fade-in animation to sections and process items
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
            // For process items, add staggered animation
            if (entry.target.classList.contains("process-item")) {
              const index = Array.from(document.querySelectorAll(".process-item")).indexOf(entry.target);
              entry.target.style.animationDelay = `${index * 0.15}s`;
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".animated-section, .process-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <PlaxLayout bg={false}>
      {/* Hero / Banner */}
      <Banner
        title="Our Vision & Mission"
        subtitle="Clarity, Integrity, and Long-Term Confidence"
        img="img/home-1/1.png"
        style={{ maxWidth: "125%", transform: "translateX(10%)" }}
      />

      {/* Vision & Mission */}
      <section className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60 animated-section">
              <h2 className="mil-mb-20 mil-up">Our Vision</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                To redefine the future of financial advisory by setting a new benchmark in transparency,
                personalization, and research-backed decision-making for every Indian investor.
              </p>

              <div className="row">
                <div className="col-md-6 mil-mb-40">
                  <div className="mil-icon-box">
                    <img src="/img/home-1/icons/1.svg" alt="Investor Empowerment" className="mil-mb-20 mil-up" />
                    <h5 className="mil-mb-10 mil-up">Investor Empowerment</h5>
                    <p className="mil-text-s mil-soft mil-up">
                      Helping clients take control of their financial life through unbiased education and guidance.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-40">
                  <div className="mil-icon-box">
                    <img src="/img/home-1/icons/3.svg" alt="Ethical Capital Allocation" className="mil-mb-20 mil-up" />
                    <h5 className="mil-mb-10 mil-up">Ethical Capital Allocation</h5>
                    <p className="mil-text-s mil-soft mil-up">
                      Promoting ethical investing that aligns with both profit and purpose.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-40">
                  <div className="mil-icon-box">
                    <img src="/img/inner-pages/icons/5.svg" alt="Digital-First Advisory" className="mil-mb-20 mil-up" />
                    <h5 className="mil-mb-10 mil-up">Digital-First Advisory</h5>
                    <p className="mil-text-s mil-soft mil-up">
                      Leveraging technology and data to deliver advice at scale without compromising personalization.
                    </p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-40">
                  <div className="mil-icon-box">
                    <img src="/img/home-1/icons/4.svg" alt="Bridging the Trust Gap" className="mil-mb-20 mil-up" />
                    <h5 className="mil-mb-10 mil-up">Bridging the Trust Gap</h5>
                    <p className="mil-text-s mil-soft mil-up">
                      Establishing unmatched credibility as an IA + RA who operates independently, ethically, and with full SEBI compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 mil-mb-60 animated-section">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="/img/home-1/2.png" alt="Our Vision" className="mil-up" />
                <div className="mil-img-box mil-right-max mil-soft-box mil-up">
                  <img src="/img/home-1/icons/2.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="row flex-sm-row-reverse justify-content-between align-items-center mil-mt-80">
            <div className="col-xl-6 mil-mb-60 animated-section">
              <h2 className="mil-mb-20 mil-up">Our Mission</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                To deliver fiduciary-grade investment advice and equity research insights, enabling individuals
                and institutions to make confident, long-term financial decisions with absolute integrity and regulatory discipline.
              </p>

              <div className="row">
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/home-1/icons/1.svg" alt="Holistic Planning" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Holistic Planning</h6>
                    <p className="mil-text-s mil-soft mil-up">Offer 360° financial planning, retirement, and risk management strategies.</p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/inner-pages/icons/6.svg" alt="Unbiased Advice, Always" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Unbiased Advice, Always</h6>
                    <p className="mil-text-s mil-soft mil-up">Operate on a 100% fee-only, non-commissioned model as per SEBI IA Regulations.</p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/home-1/icons/4.svg" alt="Evidence-Based Research" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Evidence-Based Research</h6>
                    <p className="mil-text-s mil-soft mil-up">Publish in-depth research under SEBI RA guidelines with complete disclosures.</p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/home-1/icons/2.svg" alt="Compliance-Driven Culture" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Compliance-Driven Culture</h6>
                    <p className="mil-text-s mil-soft mil-up">Maintain audit-ready, documented processes for every recommendation made.</p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/inner-pages/icons/5.svg" alt="Client-Centric Technology" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Client-Centric Technology</h6>
                    <p className="mil-text-s mil-soft mil-up">Provide dashboards, trackers, and robo-advisory tools backed by AI/ML insights.</p>
                  </div>
                </div>
                <div className="col-md-6 mil-mb-30">
                  <div className="mil-mini-icon-box">
                    <img src="/img/home-1/icons/3.svg" alt="Continuous Learning" className="mil-mb-15 mil-up" />
                    <h6 className="mil-up">Continuous Learning</h6>
                    <p className="mil-text-s mil-soft mil-up">Staying ahead of market trends and regulatory changes to provide timely, relevant advice.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-5 mil-mb-60 animated-section">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="/img/home-1/3.png" alt="Our Mission" className="mil-up" />
                <div className="mil-img-box mil-accent-box mil-up">
                  <div>
                    <h4 className="mil-light mil-mb-10">Discipline</h4>
                    <p className="mil-text-s mil-light">Process over noise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Dual Advantage */}
          <div className="row justify-content-between align-items-center mil-mt-80 animated-section">
            <div className="col-xl-12 mil-mb-40">
              <h2 className="mil-mb-10 mil-up">Your Dual Advantage</h2>
              <p className="mil-text-m mil-soft mil-up">
                Being dually registered as an Investment Adviser (IA) and a Research Analyst (RA) provides a seamless,
                powerful benefit for you — integrating the “what” and the “why” in your financial strategy.
              </p>
            </div>

            <div className="col-xl-6 mil-mb-60">
              <div className="mil-feature-card mil-up">
                <div className="mil-d-flex mil-align-center mil-mb-20">
                  <img src="/img/home-1/icons/4.svg" alt="Research Analyst" className="mil-mr-15" />
                  <h3 className="mil-m-0">The Research Analyst Hat</h3>
                </div>
                <p className="mil-text-m mil-soft mil-mb-20">
                  As the Analyst, I perform deep-dive, objective investigation into markets and securities — the intellectual engine for your portfolio.
                </p>
                <ul className="mil-list-1">
                  <li><h5 className="mil-mb-10">Macro-Thematic Research:</h5><p className="mil-text-s mil-soft">Analyzing broad economic trends and policy changes.</p></li>
                  <li><h5 className="mil-mb-10">Micro-Security Analysis:</h5><p className="mil-text-s mil-soft">In-depth modeling and valuation for undervalued opportunities.</p></li>
                  <li><h5 className="mil-mb-10">Quantitative Screening:</h5><p className="mil-text-s mil-soft">Using data models to filter the investment universe.</p></li>
                  <li><h5 className="mil-mb-10">Risk Framework Analysis:</h5><p className="mil-text-s mil-soft">Assessing securities for hidden and concentration risks.</p></li>
                  <li><h5 className="mil-mb-10">Continuous Market Tracking:</h5><p className="mil-text-s mil-soft">Monitoring market events and sector shifts.</p></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-6 mil-mb-60">
              <div className="mil-feature-card mil-up">
                <div className="mil-d-flex mil-align-center mil-mb-20">
                  <img src="/img/home-1/icons/1.svg" alt="Investment Adviser" className="mil-mr-15" />
                  <h3 className="mil-m-0">The Investment Adviser Hat</h3>
                </div>
                <p className="mil-text-m mil-soft mil-mb-20">
                  As the Adviser, I focus entirely on you — your life, goals, and risk tolerance — building a personalized financial blueprint using research effectively.
                </p>
                <ul className="mil-list-1">
                  <li><h5 className="mil-mb-10">Bespoke Financial Blueprinting:</h5><p className="mil-text-s mil-soft">Covering cash flow, liabilities, and life goals.</p></li>
                  <li><h5 className="mil-mb-10">Strategic Asset Allocation:</h5><p className="mil-text-s mil-soft">Tailored diversification by risk and time horizon.</p></li>
                  <li><h5 className="mil-mb-10">Fiduciary Partnership:</h5><p className="mil-text-s mil-soft">Transparent, client-first decision-making.</p></li>
                  <li><h5 className="mil-mb-10">Behavioral Coaching:</h5><p className="mil-text-s mil-soft">Helping navigate market volatility rationally.</p></li>
                  <li><h5 className="mil-mb-10">Coordinated Strategy:</h5><p className="mil-text-s mil-soft">Collaborating with your CA and professionals for a unified plan.</p></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Who I Serve */}
          <div className="row align-items-start mil-mt-80 animated-section">
            <div className="col-xl-12 mil-mb-40">
              <h2 className="mil-up">Who I Serve</h2>
              <p className="mil-text-m mil-soft mil-up">
                My services are tailored for those who seek a long-term, collaborative partnership and value professional diligence.
              </p>
            </div>

            <div className="col-md-6 col-xl-3 mil-mb-40">
              <div className="mil-icon-box">
                <img src="/img/inner-pages/icons/6.svg" alt="Corporate Executives" className="mil-mb-20 mil-up" />
                <h5 className="mil-mb-10 mil-up">Corporate Executives</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Strategic advice on managing concentrated stock positions, ESOPs, and deferred compensation.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 mil-mb-40">
              <div className="mil-icon-box">
                <img src="/img/home-1/icons/2.svg" alt="Business Owners" className="mil-mb-20 mil-up" />
                <h5 className="mil-mb-10 mil-up">Business Owners</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Guidance on diversifying personal wealth and structuring assets for generational transfer.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 mil-mb-40">
              <div className="mil-icon-box">
                <img src="/img/home-1/icons/4.svg" alt="High-Net-Worth Families" className="mil-mb-20 mil-up" />
                <h5 className="mil-mb-10 mil-up">High-Net-Worth Families</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Delivering comprehensive family office-style services and seamless estate planning.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-xl-3 mil-mb-40">
              <div className="mil-icon-box">
                <img src="/img/home-1/icons/1.svg" alt="Motivated Individuals" className="mil-mb-20 mil-up" />
                <h5 className="mil-mb-10 mil-up">Motivated Individuals</h5>
                <p className="mil-text-s mil-soft mil-up">
                  Helping lay a strong foundation for long-term wealth creation with disciplined financial planning.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process (timeline) */}
          <div className="row mil-mt-100 animated-section">
            <div className="col-12">
              <h2 className="mil-mb-20 mil-up">Our Process</h2>
              <p className="mil-text-m mil-soft mil-mb-30 mil-up">
                A global process as prescribed by Financial Planning Standards Board, India.
              </p>
            </div>

            <div className="col-12">
              <div className="process-timeline">
                {/* Step 1 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m9.75 9.75h-4.5a3.375 3.375 0 01-3.375-3.375v-1.5a3.375 3.375 0 013.375-3.375h4.5"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 01</div>
                    <h3 className="process-title">Client Agreement</h3>
                    <p className="process-description">Our partnership begins with a transparent agreement that clearly outlines scope, fiduciary responsibilities, and fees — ensuring clarity from day one.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.375 19.5h17.25"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 02</div>
                    <h3 className="process-title">Data Collection</h3>
                    <p className="process-description">We conduct a comprehensive discovery session to capture income, assets, liabilities, and, importantly, your life goals and values.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10.5 6a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM21 21l-5.197-5.197"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 03</div>
                    <h3 className="process-title">Analysis</h3>
                    <p className="process-description">We analyse your data to assess current standing and identify opportunities — delivered in clear, jargon-free findings.</p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12.75L11.25 15 15 9.75"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 04</div>
                    <h3 className="process-title">Recommendations</h3>
                    <p className="process-description">Tailored recommendations are presented with the 'why' behind each suggestion so you can make informed decisions.</p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 05</div>
                    <h3 className="process-title">Implementation</h3>
                    <p className="process-description">With your approval we guide step-by-step implementation, focusing on cost-effective execution through direct plans and suitable products.</p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="process-item">
                  <div className="process-dot">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16.023 9.348h4.992v-.001"/></svg>
                  </div>
                  <div className="process-card">
                    <div className="process-number">STEP 06</div>
                    <h3 className="process-title">Review & Monitoring</h3>
                    <p className="process-description">We conduct regular reviews to ensure your plan and portfolio remain aligned with changing goals and markets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="row mil-mt-100">
            <div className="col-xl-12">
              <div className="mil-cta mil-up">
                <div className="mil-out-frame mil-p-160-100">
                  <div className="row align-items-end">
                    <div className="col-xl-8 mil-mb-40">
                      <h2 className="mil-up">Begin Your Journey with Clarity</h2>
                    </div>
                    <div className="col-xl-4 mil-mb-40 mil-up">
                      <Link href="/services" className="mil-btn mil-m mil-add-arrow mil-adaptive-right">
                        Explore Our Services
                      </Link>
                    </div>
                  </div>

                  <div className="row align-items-center">
                    <div className="col-xl-8 mil-mb-20">
                      <p className="mil-text-m mil-up">
                        If our vision and mission align with your goals, let’s build a plan that is transparent, research-led, and tailored to you.
                      </p>
                    </div>
                    {/* <div className="col-xl-4 mil-up">
                      <Link href="/register" className="mil-btn mil-md mil-add-arrow">
                        Start Your Journey
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx>{`
        /* Timeline + small animations scoped to this page; keeps your mil-* UI unchanged */
        .process-timeline {
          position: relative;
          padding: 2rem 0;
        }
        .process-timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 28px;
          height: 100%;
          width: 4px;
          background: rgba(0,0,0,0.06);
          border-radius: 2px;
        }
        .process-item {
          position: relative;
          padding-left: 96px;
          margin-bottom: 40px;
          display: flex;
          align-items: flex-start;
        }
        .process-item:last-child { margin-bottom: 0; }
        .process-dot {
          position: absolute;
          left: 0;
          top: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: #fff;
          border: 4px solid rgba(0,0,0,0.06);
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(0,0,0,0.04);
          transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .process-dot svg { 
          width: 22px; 
          height: 22px; 
          color: rgba(0,0,0,0.45);
          transition: all .3s ease;
        }
        .process-card {
          background: linear-gradient(145deg, #fff, #fbfdff);
          border-radius: 12px;
          padding: 1.4rem;
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 6px 18px rgba(10,20,40,0.02);
          transition: all .4s cubic-bezier(0.34, 1.56, 0.64, 1);
          width: 100%;
        }
        
        /* Scroll-triggered animations */
        .process-item.fade-in-up .process-dot {
          border-color: #1F9A32;
          transform: scale(1.1) rotate(360deg);
          box-shadow: 0 8px 24px rgba(31, 154, 50, 0.2);
        }
        .process-item.fade-in-up .process-dot svg {
          color: #1F9A32;
          transform: scale(1.15);
        }
        .process-item.fade-in-up .process-card {
          transform: translateX(12px);
          box-shadow: 0 12px 32px rgba(10,20,40,0.08);
          border-color: rgba(31, 154, 50, 0.1);
        }
        
        /* Hover effects */
        .process-item:hover .process-dot {
          transform: scale(1.15) rotate(360deg);
          box-shadow: 0 10px 28px rgba(31, 154, 50, 0.25);
        }
        .process-item:hover .process-card {
          transform: translateX(16px) translateY(-4px);
          box-shadow: 0 18px 40px rgba(10,20,40,0.1);
        }
        .process-number { font-size: .85rem; font-weight: 700; color: rgba(0,0,0,0.45); margin-bottom: 6px; }
        .process-title { font-size: 1.125rem; font-weight: 700; color: #0b1220; margin-bottom: 8px; }
        .process-description { color: rgba(0,0,0,0.6); line-height: 1.45; }

        /* fade-in-up animation class used by observer */
        @keyframes fadeInUp { 
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          } 
          to { 
            opacity: 1; 
            transform: translateY(0); 
          } 
        }
        .fade-in-up { 
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; 
          opacity: 0; 
        }
        
        /* Process item specific animations */
        .process-item { 
          opacity: 0;
          transform: translateY(20px);
        }
        .process-item.fade-in-up { 
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Ensure timeline appears progressively */
        .process-timeline::before {
          animation: lineGrow 1.5s ease-out forwards;
          transform-origin: top;
        }
        @keyframes lineGrow {
          from { transform: scaleY(0); }
          to { transform: scaleY(1); }
        }

        /* Small responsive adjustments */
        @media (max-width: 991.98px) {
          .process-timeline::before { left: 18px; }
          .process-item { padding-left: 72px; }
          .process-dot { left: 0; top: 6px; width: 48px; height: 48px; }
        }
        @media (max-width: 575.98px) {
          .process-item { padding-left: 62px; }
          .process-card { padding: 1rem; }
        }
      `}</style>
    </PlaxLayout>
  );
}
