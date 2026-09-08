import Link from "next/link";

/* ================== CTA 1 ================== */
export const CallToAction1 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div className="mil-out-frame mil-visible mil-image mil-illustration-fix mil-p-160-0">
          <div className="row align-items-end">
            <div className="mil-text-center">
              <h2 className="mil-mb-30 mil-light mil-up">
                Invest with Confidence <br />
                SEBI-Registered, Client-First Advice
              </h2>
              <p className="mil-text-m mil-dark-soft mil-mb-60 mil-up">
                Personalised investment guidance with research-backed insights, <br />
                clear risk disclosures, and complete transparency.
              </p>
              <div className="mil-up mil-mb-60">
                <Link
                  href="/contact"
                  className="mil-btn mil-button-transform mil-md mil-add-arrow"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>

          {/* keep current illustration asset */}
          <div className="mil-illustration-absolute mil-type-2 mil-up">
            <img src="img/home-2/6.png" alt="Growsin investment protection illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================== CTA 2 ================== */
export const CallToAction2 = () => {
  return (
    <div className="mil-cta mil-up">
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{ backgroundImage: "url(img/home-1/6.png)" }}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up">
                Take Control of Your Wealth <br />
                Plan, Invest, and Track with Growsin
              </h2>
              <p className="mil-text-m mil-mb-60 mil-dark-soft mil-up">
                From Investment Advisory to Research Reports—make smarter, <br />
                faster decisions with data-driven, unbiased guidance.
              </p>
              <div className="mil-buttons-frame mil-up">
                <Link href="/contact" className="mil-btn mil-md">
                  Book a Consultation
                </Link>
                <Link href="/services" className="mil-btn mil-border mil-md">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
