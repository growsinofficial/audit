"use client";
import { useState } from "react";

const PlaxAccordion = ({ dark }) => {
  const accordionData = [
    {
      id: 1,
      title: "How do I raise a complaint or grievance with Growsin?",
      desc:
        "You can email our Compliance Officer at <strong>info@growsin.com</strong> or use the grievance portal at <a href='https://scores.sebi.gov.in' target='_blank' rel='noreferrer'>SEBI SCORES</a> if the issue remains unresolved. Please include your account details, description of the issue, and any supporting documents when you write to us.",
    },
    {
      id: 2,
      title: "What are the accepted modes of payment for advisory fees?",
      desc:
        "Advisory fees should be paid only through bank transfers, UPI, or other documented banking channels. We do not accept cash or third-party transfers. For recurring services, we can set up a direct debit/standing instruction with your consent.",
    },
    {
      id: 3,
      title: "Which services does Growsin provide?",
      desc:
        "We provide risk profiling, goal-based financial planning, investment advice, portfolio review, research & financial education, and bespoke wealth management for HNW clients. For full details of each service, please refer to our Services section on the website or contact support for a summary tailored to your situation.",
    },
    {
      id: 4,
      title: "Is Growsin SEBI-registered and how does that protect me?",
      desc:
        "Yes  we comply with SEBI regulations and follow SEBI circulars for Investor Charters and grievance redressal. This regulatory oversight helps ensure transparency, fair practices, and an official path for investors to escalate unresolved complaints.",
    },
    {
      id: 5,
      title: "How does Growsin protect my personal data and transaction security?",
      desc:
        "We encrypt sensitive data in transit and at rest, follow industry-standard access controls, and limit data access to authorised personnel only. We never ask for your login credentials, and all fee payments are processed through secure, audited banking channels.",
    },
    {
      id: 6,
      title: "How can I contact customer support or the Compliance Officer?",
      desc:
        "For general support email <strong>support@growsin.com</strong>. For compliance and escalation email <strong>info@growsin.com</strong>. If a complaint remains unresolved you may escalate it to SEBI or use SMART ODR (smartodr.in) as described in our Grievance Redressal section.",
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className={`mil-accordion`}>
      {accordionData.map((item) => (
        <div
          className={`mil-accordion-group mil-up ${
            active == item.id ? " mil-active" : ""
          }`}
          key={item.id}
        >
          <div
            className={`mil-accordion-menu `}
            onClick={() => setActive(active == item.id ? null : item.id)}
          >
            <h5 className={dark ? "mil-light" : ""}>{item.title}</h5>
            <div className="mil-accordion-icon">
              <i className="fas fa-chevron-up" />
            </div>
          </div>
          <div className="mil-accordion-content">
            <p
              className="mil-text-m mil-soft"
              dangerouslySetInnerHTML={{ __html: item.desc }}
            ></p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PlaxAccordion;
