"use client";

import { useState } from "react";
import PlaxLayout from "@/layouts/PlaxLayout";

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const onNext = () => {
    if (!form.name || !form.email) {
      alert("Please enter name and email.");
      return;
    }
    setStep(2);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.message) {
      alert("Please add a short message.");
      return;
    }
    setSubmitted(true);
    // TODO: send to API or email service
  };

  return (
    <PlaxLayout bg={false}>
      <main className="contact-page-root">
        <div className="page-inner container">
          <div className="grid-area">

            {/* LEFT - CONTACT CARD */}
            <aside className="left-card card">
              <h2 className="card-title">Contact Channels</h2>

              <div className="contact-list">
                <div className="contact-row"><span className="icon">📞</span><a href="tel:+918500660421" className="contact-link">+91 85006 60421</a></div>
                <div className="contact-row"><span className="icon">📧</span><a href="mailto:info@growsin.com" className="contact-link">info@growsin.com</a></div>
                <div className="contact-row"><span className="icon">📍</span><span className="contact-link">Visakhapatnam, Andhra Pradesh, India</span></div>
              </div>

              <hr className="hr" />

              <h3 className="subhead">SEBI Registration Details</h3>
              <div className="sebi-details">
                <div className="sebi-item">SEBI (IA): INA000021261</div>
                <div className="sebi-item">SEBI (RA): INH000023667</div>
              </div>

              <hr className="hr" />

              <h3 className="subhead">Compliance & Grievance Redressal</h3>
              <p className="muted">
                As a SEBI-registered entity, transparency and accountability are paramount. For any grievance, please contact the Compliance Officer:
              </p>

              <div className="compliance">
                <div className="name">Murali Sivvala</div>
                <div className="small">Principal Compliance Officer</div>
                <div className="small">SEBI (IA): INA000021261</div>
                <div className="small">SEBI (RA): INH000023667</div>
              </div>

              <a
                href="https://scores.gov.in"
                target="_blank"
                rel="noreferrer"
                className="btn-complaint"
              >
                File complaint on SEBI SCORES
              </a>
            </aside>

            {/* RIGHT - FORM CARD */}
            <section className="right-card card">
              <h1 className="headline">Get a Personalised Consultation</h1>
              <p className="muted mb-6">Complete the steps below, and we will be in touch.</p>

              {/* Progress */}
              {/* <div className="progress-wrap" aria-hidden>
                <div
                  className="progress-bar"
                  style={{ width: submitted ? "100%" : step === 1 ? "35%" : "70%" }}
                />
              </div> */}

              {!submitted ? (
                <form onSubmit={onSubmit} className="form">
                  {step === 1 && (
                    <>
                      <label className="sr-only">Full name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name"
                        className="input"
                      />

                      <label className="sr-only">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Email Address"
                        className="input"
                      />

                      <div className="form-actions">
                        <button type="button" onClick={onNext} className="btn-primary">
                          Next
                        </button>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <label className="sr-only">Message</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Briefly tell us what you'd like help with"
                        className="textarea"
                      />

                      <div className="form-actions two">
                        <button type="button" onClick={() => setStep(1)} className="btn-ghost">
                          Back
                        </button>
                        <button type="submit" className="btn-primary">
                          Submit Request
                        </button>
                      </div>
                    </>
                  )}
                </form>
              ) : (
                <div className="success-box">
                  <h3>Thanks, we received your request</h3>
                  <p>We will review your message and get back to you within one business day.</p>
                  <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(1); setForm({ name: "", email: "", message: "" }); }}>
                    Send another request
                  </button>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>


      <style jsx>{`
        /* ensure top spacing so header doesn't overlap */
        .contact-page-root { padding-top: 110px; padding-bottom: 60px; }
        @media (max-width: 991px) { .contact-page-root { padding-top: 90px; } }
        @media (max-width: 575px) { .contact-page-root { padding-top: 80px; } }

        .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }

        .grid-area {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
          align-items: start;
        }

        @media (max-width: 991px) {
          .grid-area { grid-template-columns: 1fr; gap: 18px; }
        }

        .card {
          background: white;
          border-radius: 14px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(2,41,142,0.06);
          border: 1px solid rgba(2,41,142,0.04);
        }

        .left-card .card-title {
          font-size: 22px;
          color: var(--deep-blue, #00298e);
          margin-bottom: 12px;
          font-weight: 700;
        }

        .contact-list { margin-bottom: 18px; }
        .contact-row { display:flex; gap:10px; align-items:center; margin-bottom:8px; color: #1f2a44; }
        .contact-link { color: #1f2a44; text-decoration: none; }
        .hr { border: 0; border-top: 1px solid rgba(0,0,0,0.06); margin: 18px 0; }

        .sebi-details {
          padding: 12px;
          background: rgba(23, 94, 226, 0.05);
          border-radius: 8px;
          margin-bottom: 18px;
        }

        .sebi-item {
          font-weight: 600;
          color: rgba(0,0,0,0.75);
          margin-bottom: 6px;
        }

        .sebi-item:last-child {
          margin-bottom: 0;
        }

        .subhead { font-weight: 700; color: rgba(0,0,0,0.85); margin-bottom:6px; }
        .muted { color: rgba(0,0,0,0.6); font-size: 14px; line-height:1.6; }
        .compliance .name { font-weight:600; margin-top:8px; color: rgba(0,0,0,0.85); }
        .small { font-size: 13px; color: rgba(0,0,0,0.65); margin-bottom: 4px; }

        .btn-complaint {
          display:inline-block;
          margin-top:14px;
          padding:10px 14px;
          border-radius:8px;
          color:white;
          font-weight:600;
          text-decoration:none;
          background: linear-gradient(90deg,rgb(31, 154, 50),rgb(31, 154, 50));
          box-shadow: 0 8px 20px rgba(23,94,226,0.08);
        }

        .headline { font-size: 32px; color: var(--deep-blue, #00298e); margin: 0 0 6px 0; font-weight:800; }
        @media (max-width: 767px) { .headline { font-size: 26px; } }

        .progress-wrap { width:100%; height:8px; background: #eef2ff; border-radius: 999px; margin-bottom:18px; overflow:hidden; }
        .progress-bar { height:100%; background: linear-gradient(90deg,#175ee2,#7d2ae8); border-radius:999px; transition: width 420ms ease; }

        .form { display:flex; flex-direction:column; gap:12px; }
        .input, .textarea {
          width:100%;
          border:1px solid rgba(2,41,142,0.08);
          padding:12px 14px; border-radius:10px;
          font-size:15px;
          outline: none;
        }
        .input:focus, .textarea:focus { box-shadow: 0 6px 18px rgba(23,94,226,0.06); border-color: rgba(23,94,226,0.3); }

        .textarea { min-height:120px; resize:vertical; }

        .form-actions { margin-top:10px; display:flex; justify-content:flex-start; }
        .form-actions.two { display:flex; gap:12px; justify-content:flex-end; }

        .btn-primary {
          background: linear-gradient(90deg,rgb(31, 154, 50),rgb(31, 154, 50));
          color: white;
          padding: 12px 16px;
          border-radius: 10px;
          border: 0;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(23,94,226,0.08);
        }

        .btn-ghost {
          background: #fff;
          border: 1px solid rgba(2,41,142,0.08);
          color: #1f2a44;
          padding: 12px 14px;
          border-radius: 10px;
          cursor: pointer;
        }

        .success-box { text-align:center; padding: 18px; }
        .success-box h3 { margin-bottom:8px; color: var(--deep-blue,#00298e); }

        /* small accessibility helper */
        .sr-only { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
      `}</style>
    </PlaxLayout>
  );
}
