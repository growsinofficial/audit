"use client";
import Banner from "@/components/Banner";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxAccordion from "@/components/PlaxAccordion";
import PlaxLayout from "@/layouts/PlaxLayout";
import Link from "next/link";

const page = () => {
  return (
    <PlaxLayout bg={false}>
      <Banner
        title="Growing your wealth with trusted advice."
        img="img/home-1/1.png"
        style={{ maxWidth: "105%", transform: "translateX(10%)" }}
      />
      {/* banner end */}

      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">
                Exclusive Benefits of Using Growsin
              </h2>
              <ul className="mil-list-1">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-up">
                      Unbiased, Client-First Advisory
                    </h5>
                    <p className="mil-text-m mil-soft mil-up">
                      Your interests come first—always. Clear, transparent{" "}
                      advice focused on building long-term wealth.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-up">
                      Research-Driven Insights
                    </h5>
                    <p className="mil-text-m mil-soft mil-up">
                      Recommendations rooted in rigorous market research, data{" "}
                      analysis, and disciplined processes—not emotions.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15 mil-up">
                      Transparent & SEBI-Compliant
                    </h5>
                    <p className="mil-text-m mil-soft mil-up">
                      Ethical guidance aligned with SEBI regulations to keep{" "}
                      your journey compliant and accountable.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="img/home-1/2.png" alt="image" className="mil-up" />
                <div className="mil-img-box mil-accent-box mil-up">
                  <div>
                    <h2 className="mil-light mil-mb-15">100%</h2>
                    <p className="mil-text-s mil-light">
                      Commitment to <br />
                      your best interests
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* facts */}
      <div className="mil-facts mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-6 mil-sm-text-center mil-mb-30 mil-up">
                  <p className="h1 mil-display mil-mb-15">
                    <span className="mil-accent mil-counter" data-number={7}>
                      7
                    </span>
                    <span className="mil-pale">m</span>
                  </p>
                  <h5>Investor Interactions</h5>
                </div>
                <div className="col-xl-6 mil-sm-text-center mil-mb-80 mil-up">
                  <p className="h1 mil-display mil-mb-15">
                    <span className="mil-accent mil-counter" data-number={170}>
                      170
                    </span>
                    <span className="mil-pale">+</span>
                  </p>
                  <h5>Markets & Geographies Researched</h5>
                </div>
              </div>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <p className="mil-text-m mil-soft mil-up">
                At Growsin, we don’t just talk about wealth. We help you build
                it—step by step—with discipline, progress, and significance.
                Our approach turns complexity into clarity and aligns every
                decision with your most important life goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* facts end */}

      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-p-160-100">
            <div className="row align-items-end">
              <div className="col-xl-8 mil-mb-80-adaptive-30">
                <h2 className="mil-up">
                  Our Approach: How We Help You Grow Significantly
                </h2>
              </div>
              <div className="col-xl-4 mil-mb-80 mil-up">
                <Link
                  href="/services"
                  className="mil-btn mil-m mil-add-arrow mil-adaptive-right"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/1.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">1) Understand Your Goals</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Personalized consultations, complete financial snapshot, and
                    risk profiling—so every plan is built around you.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/2.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">
                    2) Research-Driven Recommendations
                  </h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Data-backed insights, SEBI-aligned practices, and a
                    long-term lens to avoid short-term noise.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 mil-mb-60">
                <div className="mil-icon-box">
                  <img
                    src="img/home-1/icons/3.svg"
                    alt="icon"
                    className="mil-mb-30 mil-up"
                  />
                  <h5 className="mil-mb-30 mil-up">3) Customized Plans</h5>
                  <p className="mil-text-m mil-soft mil-up">
                    Goal-based portfolios, risk management, and tax-aware design
                    tailored to your life milestones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}

      {/* features */}
      <div className="mil-features mil-p-160-80">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-up">Implementation & Monitoring</h2>
              <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                We help you put the plan into action and keep it on track—so
                your portfolio stays aligned with markets and your evolving
                goals.
              </p>
              <ul className="mil-list-2">
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Regular Reviews</h5>
                    <p className="mil-text-m mil-soft">
                      Scheduled check-ins to assess performance and progress
                      toward your objectives.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5 className="mil-mb-15">Proactive Adjustments</h5>
                    <p className="mil-text-m mil-soft">
                      Timely portfolio changes based on market conditions and
                      shifts in your priorities—backed by clear, transparent
                      reporting.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-visible-overflow">
                <img src="img/home-1/3.png" alt="image" className="mil-up" />
                <div className="mil-img-box mil-right-max mil-soft-box mil-up">
                  <img src="img/home-1/icons/4.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* features end */}

      {/* testimonials */}
      {/* <div className="mil-testimonials mil-p-0-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 mil-relative">
              <Testimonials1 />
            </div>
          </div>
        </div>
      </div> */}
      {/* testimonials end */}

      {/* brands */}
      {/* <div className="mil-brands mil-p-0-160">
        <div className="container">
          <h5 className="mil-text-center mil-soft mil-mb-60 mil-up">
            Join investors who trust Growsin for disciplined, research-led
            guidance.
          </h5>
          <div className="row justify-content-center">
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/1.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/2.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2 mil-text-center">
              <div className="mil-brand">
                <img src="img/brands/3.svg" alt="brand" className="mil-up" />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="mil-brand mil-text-center">
                <img src="img/brands/4.svg" alt="brand" className="mil-up" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* brands end */}

      {/* call to action */}
      <div className="mil-cta mil-up">
        <div className="container">
          <div className="mil-out-frame mil-bg-1">
            <div className="mil-gradient-plus" />
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-7 mil-mt-60">
                <h2 className="mil-mb-30 mil-up">
                  Ready to Build Wealth with Discipline?
                </h2>
                <p className="mil-text-m mil-mb-60 mil-up">
                  Start your journey toward financial independence with{" "}
                  transparent, research-backed, SEBI-compliant guidance.
                </p>
                <div className="mil-up">
                  <Link
                    href="https://onboard.growsin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mil-btn mil-md mil-add-arrow"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 mil-mt-60">
                <img
                  src="img/home-1/5.png"
                  alt="img"
                  style={{ width: "100%" }}
                  className="mil-up"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}

      {/* faq */}
      <div className="mil-faq mil-p-160-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="mil-text-center">
                <h2 className="mil-mb-30 mil-up">
                  Explore Our Frequently Asked Questions
                </h2>
                <p className="mil-text-m mil-soft mil-mb-60 mil-up">
                  Quick, clear answers about Growsin’s advisory and research
                  registration, process, reviews, and risk.
                </p>
              </div>
              <PlaxAccordion />
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}

      {/* call to action */}
      <CallToAction2 />
      {/* call to action end */}
    </PlaxLayout>
  );
};
export default page;
