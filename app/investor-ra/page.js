"use client";

import React from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";

export default function InvestorRACharterPage() {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Investor Charter (RA)"
        title="Investor Charter – Research Analysts (RA)"
      />

      <div className="mil-blog-list mil-shell">
        <div className="container">
          
          {/* Download Certificate Button */}
          <div className="certificate-download-section">
            <a 
              href="/pdf/ra.pdf" 
              download="RA-Certificate.pdf"
              className="download-certificate-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download RA Certificate (PDF)
            </a>
          </div>

          {/* ======================================================= */}
          {/* SECTION: SEBI CIRCULAR DETAILS                         */}
          {/* ======================================================= */}

          <h4 className="section-header">SEBI Circular Summary</h4>

          <div className="info-block">
            <p><strong>Circular No:</strong> SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/81</p>
            <p><strong>Date:</strong> 02-06-2025</p>
            <p><strong>To:</strong> All Research Analysts, RAASB</p>
            <p><strong>Subject:</strong> Investor Charter for Research Analysts</p>
          </div>

          <div className="content-block">
            <p>
              SEBI issued the Investor Charter for Research Analysts in order to improve 
              investor protection, transparency, and financial literacy. 
            </p>
            <p>
              This circular modifies the previous charter issued in 2021 and updates 
              guidelines relating to:</p>

            <ul className="mil-list">
              <li>Online Dispute Resolution (ODR)</li>
              <li>SCORES 2.0 platform</li>
              <li>Updated investor grievance mechanism</li>
              <li>New complaint reporting format</li>
            </ul>

            <p>
              The circular directs Research Analysts to disclose the updated Investor Charter 
              on their websites and mobile apps, and provide it to all clients during onboarding.
            </p>

            <p>
              This circular comes into immediate effect and replaces the earlier circular  
              SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/0685 dated December 13, 2021.
            </p>
          </div>


          {/* ======================================================= */}
          {/* SECTION: ANNEXURE A – INVESTOR CHARTER                 */}
          {/* ======================================================= */}

          <h3 className="main-title">ANNEXURE A – Investor Charter (Research Analysts)</h3>

          {/* A. VISION & MISSION */}
          <h4 className="section-header">A. Vision and Mission</h4>

          <div className="content-block">
            <h5 className="sub-title">Vision</h5>
            <p>Invest with knowledge & safety.</p>

            <h5 className="sub-title">Mission</h5>
            <p>
              Every investor should be able to invest in the right investment products based 
              on their needs, access reports, and enjoy financial wellness.
            </p>
          </div>


          {/* B. Business Transacted */}
          <h4 className="section-header">B. Details of Business Transacted</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Publish research reports based on research activities.</li>
              <li>Provide independent and unbiased views on securities.</li>
              <li>Offer unbiased recommendations with disclosures.</li>
              <li>Provide research recommendations based on public information.</li>
              <li>Conduct annual audits.</li>
              <li>Ensure advertisements comply with the Advertisement Code.</li>
              <li>Maintain records of interactions with clients and prospects.</li>
            </ul>
          </div>


          {/* C. Services Provided */}
          <h4 className="section-header">C. Details of Services Provided</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Client onboarding & KYC (for fee-paying clients)</li>
              <li>Disclosure of material information and conflicts of interest</li>
              <li>Disclosure of use of Artificial Intelligence tools</li>
              <li>Distribution of research reports fairly and without discrimination</li>
              <li>Ensuring confidentiality until research is made public</li>
              <li>Maintaining client data privacy</li>
              <li>Providing service timelines and adhering to them</li>
              <li>Guidance for complex / high-risk products</li>
              <li>Treating all clients with honesty and integrity</li>
            </ul>
          </div>


          {/* D. Grievance Mechanism */}
          <h4 className="section-header">D. Grievance Redressal Mechanism</h4>

          <div className="content-block">
            <p><strong>1. Complaint to Research Analyst:</strong></p>
            <p>Research Analyst must resolve grievances within <strong>21 days</strong>.</p>

            <p><strong>2. SCORES 2.0:</strong> https://scores.sebi.gov.in</p>

            <ul className="mil-list">
              <li>First Review — RAASB</li>
              <li>Second Review — SEBI</li>
            </ul>

            <p><strong>3. SMART ODR (Conciliation / Arbitration):</strong></p>
            <p>
              If investor is not satisfied with resolution, they may file on SMART-ODR platform.
            </p>

            <p><strong>Physical complaints:</strong></p>

            <p>
              Office of Investor Assistance and Education,<br />
              Securities and Exchange Board of India,<br />
              SEBI Bhavan, Bandra Kurla Complex, Mumbai – 400051
            </p>
          </div>


          {/* E. Rights */}
          <h4 className="section-header">E. Rights of Investors</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Right to privacy and confidentiality</li>
              <li>Right to transparent practices</li>
              <li>Right to fair treatment</li>
              <li>Right to adequate information</li>
              <li>Right to regulatory disclosures</li>
              <li>Right to be heard & grievance redressal</li>
              <li>Right to exit from services as per agreed terms</li>
              <li>Right to caution notice for high-risk products</li>
              <li>Right to fair & true advertisements</li>
              <li>Right to accessibility for differently-abled investors</li>
            </ul>
          </div>


          {/* F. Responsibilities */}
          <h4 className="section-header">F. Responsibilities of Investors</h4>

          <h5 className="sub-title">Do’s</h5>
          <div className="content-block">
            <ul className="mil-list">
              <li>Deal only with SEBI-registered Research Analysts.</li>
              <li>Verify RA registration certificate.</li>
              <li>Read disclosures before investing.</li>
              <li>Pay fees only through banking channels.</li>
              <li>Clarify doubts before following recommendations.</li>
              <li>Understand high-risk / complex products.</li>
              <li>Provide feedback for services received.</li>
            </ul>
          </div>

          <h5 className="sub-title">Don’ts</h5>
          <div className="content-block">
            <ul className="mil-list">
              <li>Do not give money to the Research Analyst for investments.</li>
              <li>Do not fall for misleading advertisements.</li>
              <li>Do not share login credentials.</li>
              <li>Do not expect guaranteed returns.</li>
            </ul>
          </div>


          {/* ======================================================= */}
          {/* ANNEXURE B – Monthly Complaint Format                   */}
          {/* ======================================================= */}

          <h3 className="main-title">ANNEXURE B – Complaint Data Format</h3>

          <div className="content-block">
            <p><strong>Data for the month ending: 31 October 2025</strong></p>
          </div>

          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Received From</th>
                  <th>Pending Last Month</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Total Pending</th>
                  <th>Pending &gt; 3 Months</th>
                  <th>Average Resolution Time</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>Investors</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>2</td><td>SEBI (SCORES)</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>3</td><td>Other Sources</td><td>NA</td><td>NA</td><td>NA</td><td>NA</td><td>NA</td><td>NA</td></tr>
                <tr><td colSpan="8"><strong>Grand Total: 0</strong></td></tr>
              </tbody>
            </table>
          </div>


          {/* Trend – Monthly */}
          <h3 className="main-title">Trend of Monthly Disposal of Complaints</h3>

          <div className="table-wrapper">
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Month</th>
                  <th>Carried Forward</th>
                  <th>Received</th>
                  <th>Resolved</th>
                  <th>Pending</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>September</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td>October</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
                <tr><td colSpan="5"><strong>Grand Total: 0</strong></td></tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {/* === PAGE STYLES === */}
      <style jsx>{`
        .mil-shell {
          padding-left: clamp(16px, 5vw, 160px);
          padding-right: clamp(16px, 5vw, 160px);
        }

        .section-header {
          font-size: 20px;
          font-weight: 700;
          margin-top: 40px;
          margin-bottom: 12px;
          color: #00298e;
        }

        .main-title {
          font-size: 24px;
          font-weight: 800;
          margin-top: 45px;
          color: #00298e;
        }

        .sub-title {
          font-size: 17px;
          font-weight: 600;
          margin-top: 14px;
          margin-bottom: 6px;
        }

        .info-block,
        .content-block {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 18px 20px;
          margin-bottom: 20px;
        }

        .mil-list {
          list-style: disc;
          margin-left: 18px;
          line-height: 1.7;
        }

        .styled-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 30px;
        }

        .styled-table th {
          background: #f1f5f9;
          padding: 12px 14px;
          text-align: left;
          font-weight: 600;
          border-bottom: 1px solid #e2e8f0;
        }

        .styled-table td {
          padding: 12px 14px;
          border-bottom: 1px solid #e2e8f0;
        }

        .styled-table tr:last-child td {
          border-bottom: none;
        }

        .table-wrapper {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 14px;
          background: white;
          margin: 20px 0;
          overflow-x: auto;
        }

        @media (max-width: 768px) {
          .table-wrapper {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .styled-table {
            min-width: 500px;
          }

          .styled-table th,
          .styled-table td {
            padding: 10px 12px;
            font-size: 13px;
          }
        }

        .certificate-download-section {
          display: flex;
          justify-content: center;
          margin: 30px 0 40px;
        }

        .download-certificate-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(90deg, #175ee2 0%, #7d2ae8 100%);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(23, 94, 226, 0.2);
        }

        .download-certificate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(23, 94, 226, 0.3);
          color: white;
        }

        .download-certificate-btn svg {
          flex-shrink: 0;
        }
      `}</style>

    </PlaxLayout>
  );
}
