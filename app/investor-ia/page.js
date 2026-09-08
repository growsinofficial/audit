"use client";

import React from "react";
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";

export default function InvestorIACharterPage() {
  return (
    <PlaxLayout bg={false}>
      <PageBanner
        pageName="Investor Charter (IA)"
        title="Investor Charter – Investment Advisers (IA)"
      />

      <div className="mil-blog-list mil-shell">
        <div className="container">
          
          {/* Download Certificate Button */}
          <div className="certificate-download-section">
            <a 
              href="/pdf/ia.pdf" 
              download="IA-Certificate.pdf"
              className="download-certificate-btn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download IA Certificate (PDF)
            </a>
          </div>

          {/* ======================================================= */}
          {/* SECTION: SEBI CIRCULAR DETAILS                         */}
          {/* ======================================================= */}

          <h4 className="section-header">SEBI Circular Summary</h4>

          <div className="info-block">
            <p><strong>Circular No:</strong> SEBI/HO/MIRSD/MIRSD-PoD/P/CIR/2025/80</p>
            <p><strong>Date:</strong> 02-06-2025</p>
            <p><strong>To:</strong> All Investment Advisers & IAASB</p>
            <p><strong>Subject:</strong> Investor Charter for Investment Advisers</p>
          </div>

          <div className="content-block">
            <p>
              SEBI has issued an updated Investor Charter for Investment Advisers to enhance 
              investor protection, transparency, financial literacy and strengthen grievance 
              redressal mechanisms.
            </p>

            <p>
              The new charter incorporates updates based on:
            </p>

            <ul className="mil-list">
              <li>Online Dispute Resolution (ODR) platform</li>
              <li>SCORES 2.0 grievance portal</li>
              <li>Revamped complaint reporting format</li>
              <li>Industry consultations with IA Industry Standards Forum (ISF)</li>
            </ul>

            <p>
              IAASB is instructed to ensure all Investment Advisers publish and share the 
              updated Investor Charter during onboarding and through their websites.
            </p>

            <p>
              This circular supersedes the earlier SEBI circular 
              SEBI/HO/IMD/IMD-II CIS/P/CIR/2021/0686 dated December 13, 2021.
            </p>
          </div>


          {/* ======================================================= */}
          {/* SECTION: ANNEXURE A – INVESTOR CHARTER                 */}
          {/* ======================================================= */}

          <h3 className="main-title">ANNEXURE A – Investor Charter (Investment Advisers)</h3>

          {/* A. Vision & Mission */}
          <h4 className="section-header">A. Vision and Mission</h4>

          <div className="content-block">
            <h5 className="sub-title">Vision</h5>
            <p>Invest with knowledge & safety.</p>

            <h5 className="sub-title">Mission</h5>
            <p>
              Every investor should be able to invest in the right products based on their 
              needs, monitor performance, access reports, and enjoy long-term financial wellness.
            </p>
          </div>


          {/* B. Business Transacted */}
          <h4 className="section-header">B. Details of Business Transacted</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Enter into an agreement with clients including fees & conflict disclosures</li>
              <li>Conduct unbiased risk profiling and suitability assessment</li>
              <li>Annual audit compliance</li>
              <li>Disclosure of complaint status on website</li>
              <li>Provide registration details & SEBI office contacts</li>
              <li>Employ only qualified and certified personnel</li>
              <li>Communicate only through official numbers</li>
              <li>Maintain interaction records with all clients & prospects</li>
              <li>Adhere to Advertisement Code for Investment Advisers</li>
              <li>No discrimination among clients receiving similar services</li>
            </ul>
          </div>


          {/* C. Services Provided */}
          <h4 className="section-header">C. Details of Services Provided</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Client onboarding and sharing of IA agreement</li>
              <li>KYC completion for clients</li>
              <li>Disclosure of business model, affiliations & compensation</li>
              <li>Disclosure of risk profile and suitability factors</li>
              <li>Conflict of interest disclosures</li>
              <li>Disclosure of usage of Artificial Intelligence tools</li>
              <li>Providing investment advice based on client risk profile</li>
              <li>Maintaining confidentiality of client data</li>
              <li>Providing service timelines and adherence</li>
              <li>Providing caution while advising complex/high-risk products</li>
            </ul>
          </div>


          {/* D. Grievance Mechanism */}
          <h4 className="section-header">D. Grievance Redressal Mechanism</h4>

          <div className="content-block">
            <p><strong>1. Complaint to Investment Adviser:</strong></p>
            <p>IA must resolve grievances within <strong>21 days</strong>.</p>

            <p><strong>2. SCORES 2.0:</strong> https://scores.sebi.gov.in</p>

            <ul className="mil-list">
              <li>First Review — IAASB</li>
              <li>Second Review — SEBI</li>
            </ul>

            <p><strong>3. SMART ODR platform:</strong> For conciliation/arbitration disputes</p>

            <p><strong>Physical complaints to SEBI:</strong></p>
            <p>
              Office of Investor Assistance and Education,<br />
              Securities and Exchange Board of India,<br />
              SEBI Bhavan, Bandra Kurla Complex,<br />
              Mumbai – 400051
            </p>
          </div>


          {/* E. Rights */}
          <h4 className="section-header">E. Rights of Investors</h4>

          <div className="content-block">
            <ul className="mil-list">
              <li>Right to privacy and data confidentiality</li>
              <li>Right to transparent practices</li>
              <li>Right to fair and equitable treatment</li>
              <li>Right to adequate information</li>
              <li>Right to regulatory disclosures</li>
              <li>Right to be heard and receive timely grievance redressal</li>
              <li>Right to exit service as per agreement terms</li>
              <li>Right to caution notices for high-risk/complex advice</li>
              <li>Right to fair and true advertisements</li>
              <li>Right to accessibility for differently-abled clients</li>
            </ul>
          </div>


          {/* F. Responsibilities */}
          <h4 className="section-header">F. Responsibilities of Investors</h4>

          <h5 className="sub-title">Do’s</h5>
          <div className="content-block">
            <ul className="mil-list">
              <li>Deal only with SEBI-registered Investment Advisers</li>
              <li>Verify IA registration certificate</li>
              <li>Pay advisory fees only through banking channels or CeFCoM</li>
              <li>Insist on risk profiling before following advice</li>
              <li>Ask questions and clarify doubts</li>
              <li>Check liquidity, risk and returns before investing</li>
              <li>Read and understand IA agreement</li>
              <li>Remain vigilant about transactions</li>
              <li>Report misconduct or misleading claims to SEBI</li>
            </ul>
          </div>

          <h5 className="sub-title">Don’ts</h5>
          <div className="content-block">
            <ul className="mil-list">
              <li>Do not rely on unregistered entities</li>
              <li>Do not give money to IA for investments</li>
              <li>Do not share login credentials of demat/trading/bank accounts</li>
              <li>Do not expect guaranteed returns</li>
              <li>Do not fall for misleading advertisements</li>
              <li>Do not rush into unsuitable investments</li>
              <li>Do not rely only on calls/messages for investment decisions</li>
            </ul>
          </div>


          {/* ======================================================= */}
          {/* SECTION: ANNEXURE B – COMPLAINT FORMAT                  */}
          {/* ======================================================= */}

          <h3 className="main-title">ANNEXURE B – Complaint Data Format</h3>

          <div className="content-block">
            <p><strong>Data for the month ending: 31 October 2025</strong></p>
          </div>

          {/* Monthly Complaints Table */}
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


          {/* Monthly Trend */}
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
