"use client";

import Image from "next/image";
import PlaxLayout from "@/layouts/PlaxLayout";

export default function PrivacyPolicyPage() {
  return (
    <PlaxLayout bg={false}>
      <main className="container policy-page mil-p-80-0" role="main">
        <header className="policy-header" aria-labelledby="policy-title">
          <div className="brand-row">
            <div className="brand-logo">
              {/* Using next/image keeps layout stable; fallback to plain img if you prefer */}
              <Image src="/img/logo.png" alt="Growsin" width={164} height={164} />
            </div>

            <div className="brand-text">
              <h1 id="policy-title">Growsin — Privacy Policy &amp; Compliance Framework</h1>
              <p className="tagline">(SEBI, DPDP Act &amp; IT Act Compliant)</p>
              <p className="small-tag">Protecting client confidentiality, privacy and regulatory compliance across the data life-cycle.</p>
            </div>
          </div>
        </header>

        <article className="policy-content" aria-label="Privacy policy content">
          
          <section id="part-1">
            <h2>Part 1: Introduction</h2>
            <p>
              I, operating as Growsin, am committed to protecting the confidentiality and privacy of every client who entrusts me with their personal and financial information. This Privacy Policy explains in detail how I collect, process, use, store, retain, and protect client data while providing investment advisory and research services in compliance with the Securities and Exchange Board of India (SEBI) regulations, the Digital Personal Data Protection Act, 2023 (DPDP Act), and the Information Technology Act, 2000 including the Sensitive Personal Data or Information (SPDI) Rules, 2011.
            </p>
            <p>
              My role as an adviser is not merely transactional; it is fiduciary in nature. This means that I am bound by law and by principle to always place the client's interests above my own. Confidentiality of information is central to this fiduciary duty. The trust that clients place in me extends beyond the quality of investment advice or research; it extends equally to the expectation that their personal and financial information will never be misused, exposed, or shared improperly.
            </p>
            <p>
              Unlike large firms with complex hierarchies, Growsin operates as an individual advisory practice. This means that only I, personally, access and process client data. No one else is involved in data handling. If, at any time in the future, I engage support staff or external service providers, they will be strictly bound by confidentiality and by the same standards of protection described in this Policy. The simplicity of this structure enhances security because access points are minimized, and responsibility rests solely with me.
            </p>
            <p>
              This Policy is intended for all categories of clients - whether retail investors, high-net-worth individuals, ultra-high-net-worth individuals, or non-resident Indians - who engage with me for advisory or research services. It applies across all channels of communication, whether you share information through email, phone calls, video consultations, digital client portals, or in-person interactions. The commitment to confidentiality and lawful use of information is the same regardless of the medium.
            </p>
            <p>
              I am legally required to retain certain records for a minimum of five years as per SEBI regulations. This includes client agreements, KYC documents, risk profiling forms, investment advice, and communications. Once the legally required retention period ends, and unless another law requires longer storage, I delete or securely anonymize the information. This practice ensures that client information is not kept indefinitely and is always aligned with the principle of purpose limitation under the DPDP Act.
            </p>
            <p>
              I may work with vendors such as hosting providers, payment gateways, and cloud storage services to deliver services efficiently. These vendors are permitted to handle client information only for the specific purpose for which they are engaged, and they are required to maintain confidentiality and implement reasonable safeguards. No vendor has the right to use client data for its own purposes, and I remain accountable for ensuring that client information is protected even when handled by third parties.
            </p>
            <p>
              It is important for clients to know that their data may be disclosed to regulators such as SEBI, the Financial Intelligence Unit (FIU-IND), or the Income Tax Department when required by law. Similarly, disclosure may occur if directed by a court of law or other lawful authority. These disclosures are limited to what is strictly required by the regulator or court order. I do not sell, lease, or otherwise disclose client information for marketing or unrelated commercial purposes.
            </p>
            <p>
              This Policy also outlines the rights that clients have under the DPDP Act, such as the right to access their data, request corrections, ask for erasure once retention obligations expire, withdraw consent for optional services, and raise grievances. These rights are recognized and respected in both letter and spirit. I handle all such requests personally and respond within the timelines set out in this Policy.
            </p>
            <p>
              By engaging with Growsin, you consent to the practices described in this Privacy Policy. This Policy forms part of the terms of engagement between me and my clients. It reflects not only legal compliance but also my professional philosophy that trust and confidentiality are inseparable from investment advisory and research services.
            </p>
            <p>
              The sections that follow explain, in greater detail, the scope of this Policy, the legal framework governing data protection, the categories of data I collect, the lawful basis for processing it, the purposes for which it is used, retention rules, disclosures, safeguards, client rights, and how you may reach me with questions or concerns.
            </p>
            <p>
              Each section has been written with clarity and transparency in mind so that clients can feel reassured about how their information is handled from the moment it is collected until the day it is lawfully deleted.
            </p>
          </section>

          <section id="part-2">
            <h2>Part 2: Scope and Applicability</h2>
            <p>
              This Privacy Policy applies to every client who engages with me through Growsin for investment advisory or research services. It is designed to provide complete clarity about how personal and financial data is handled from the moment you first interact with me, whether that is through my website, by email, over the phone, or during an in-person consultation. It does not matter whether you are an individual investor just beginning your journey, a high-net-worth individual with complex portfolios, or a non-resident Indian managing assets across borders. The commitments I make in this Policy apply equally to all clients without exception.
            </p>
            <p>
              The scope of this Policy is intentionally broad because in today's environment, data does not flow through a single channel. A client may send me a scanned KYC document by email, may speak with me on the phone about risk appetite, may share financial details in a digital form through a secure client portal, or may provide information verbally during a consultation. This Policy ensures that all of these interactions - digital or physical, direct or through approved third-party vendors - are covered by a consistent set of rules and obligations.
            </p>
            <p>
              It is also important to clarify what this Policy does not cover. There are certain platforms and channels where data may be exchanged but which are not under my direct control. For example, if a client accesses their demat account through a broker's portal, or if they interact with me casually through a social media platform like WhatsApp, Twitter, or LinkedIn, the privacy of those interactions is primarily governed by the policies of those platforms. While I make every effort to ensure that sensitive matters are discussed only through secure and approved channels, clients should remain mindful of the limitations of third-party applications. That said, if information from such channels is brought into my advisory process, it immediately becomes subject to the protections of this Policy.
            </p>
            <p>
              Since Growsin operates as an individual advisory practice, only I access and process client information. No one else - no employees, no associates, no IT teams - has access to the data you provide. If I ever decide to engage support staff in the future to help with administrative or operational work, those individuals will be strictly bound by confidentiality agreements and will be permitted to handle data only to the minimum extent necessary to perform their duties. Until such a time, the responsibility and control remain entirely with me. This structure keeps data flows simple and enhances accountability because there is never any doubt about who is responsible.
            </p>
            <p>
              I may rely on vendors to facilitate certain services. These include hosting providers who run the servers that support my website or client portal, payment gateways that process service fees or refunds, and cloud storage providers who may hold encrypted copies of records. Such vendors are included within the scope of this Policy because they may handle client data as part of their operations. However, their role is limited: they are permitted to use the data only as required to provide their services, and they must maintain confidentiality and follow reasonable security practices. I ensure that these vendors cannot access or use client data for any purpose beyond what is necessary.
            </p>
            <p>
              The scope of this Policy also extends to the different categories of data that I may collect. Personal data includes basic identifiers like your name, address, and contact details. Financial data includes income, investments, liabilities, and other relevant details needed to provide tailored advice. Sensitive personal data, such as bank account information or authentication details, is also covered. Technical data such as IP addresses or device identifiers, while less personal, is included because it may help protect against fraud. Communication records, such as emails, phone logs, and advisory notes, are likewise included because they form part of the regulated advisory process under SEBI rules.
            </p>
            <p>
              This Policy is not limited to any specific form of record. Whether your data exists as a paper document stored securely in physical form or as a digital record maintained in an encrypted server, the obligations described here apply equally. The format of storage does not change the standard of care. I apply the same diligence to securing a physical copy of your PAN card as I do to encrypting a digital file containing your financial plan.
            </p>
            <p>
              Finally, the scope of this Policy includes the full life cycle of data. It begins at the point of collection, continues through the various stages of processing and use, and extends until lawful deletion or anonymization. The Policy also governs what happens in exceptional situations such as disclosures to regulators or responses to data breaches. By covering every stage of the data life cycle, I aim to provide clients with a holistic and consistent framework for understanding how their information is handled.
            </p>
            <p>
              In summary, the applicability of this Policy is straightforward: if you are a client of Growsin, or if you share personal or financial information with me in the context of seeking advisory or research services, your data is covered by this Policy. The protections apply across all channels, all categories of data, and all stages of the data life cycle. The only exclusions are third-party platforms that I do not control, but once the data from those platforms enters my advisory process, it comes under the same protection. The simplicity of this structure reflects the reality of a solo practice: accountability rests entirely with me, vendors are bound to confidentiality, and clients are assured that their data will never be treated casually.
            </p>
          </section>

          <section id="part-3">
            <h2>Part 3: Legal and Regulatory Framework</h2>
            <p>
              As an investment adviser and research analyst registered with the Securities and Exchange Board of India (SEBI), I am subject to a well-defined legal and regulatory framework that governs how I must collect, process, retain, and protect client data. This framework is not optional; it forms the backbone of my obligations as a fiduciary and is built on the principle that the relationship between adviser and client is one of trust, transparency, and accountability.
            </p>
            <p>
              The first pillar of this framework is the SEBI (Investment Advisers) Regulations, 2013. These regulations define the responsibilities of advisers like me, and they make it very clear that I must act in the best interests of my clients at all times. Confidentiality is not a courtesy in this context; it is a statutory duty. I am required to protect the information you provide to me and to use it only for the purposes of providing advisory services. In addition, SEBI requires that I maintain detailed records of client agreements, KYC documents, risk profiling forms, suitability assessments, investment advice, and communications with clients for a minimum of five years. This retention requirement ensures that there is always an auditable trail, both to protect clients and to enable regulators to verify compliance.
            </p>
            <p>
              The second pillar is the SEBI (Research Analysts) Regulations, 2014. In my role as a research analyst, I must ensure that any research I publish or provide to clients is fair, objective, and free of conflicts of interest. Just like the investment adviser regulations, the research analyst framework also imposes obligations of confidentiality. Any personal or financial data that I handle in the course of preparing or delivering research must be safeguarded, and the records of my research reports, supporting documents, and communications must also be retained for at least five years.
            </p>
            <p>
              The third key law is the Digital Personal Data Protection Act, 2023 (DPDP Act), which modernizes India's privacy framework and establishes specific rights for clients as data principals. Under the DPDP Act, I am recognized as a data fiduciary because I determine the purpose and means of processing your personal data. This comes with responsibilities: I must process data only for lawful purposes, with a valid basis such as consent, contractual necessity, or regulatory obligation. I must collect only as much data as is necessary for the stated purpose, store it securely, and delete it once the lawful retention period expires. I must also respect your rights to access your data, correct inaccuracies, request deletion (once retention rules permit), and withdraw consent for optional services.
            </p>
            <p>
              The DPDP Act also requires that breaches be reported. If there is ever a material data breach that risks client harm, I am obligated to notify both you and the Data Protection Board of India within 72 hours. This level of accountability ensures that you are never left in the dark and that regulators are informed promptly.
            </p>
            <p>
              The fourth element of the framework comes from the Information Technology Act, 2000 and the Sensitive Personal Data or Information (SPDI) Rules, 2011. These rules specifically define what counts as "sensitive personal data." For me, that primarily means bank account details, UPI IDs, passwords, and authentication information used in connection with billing or refunds. The SPDI Rules require that I obtain consent before collecting such information, use it only for the intended purpose, and ensure it is stored securely. These obligations reinforce the principle that sensitive data deserves special care, above and beyond ordinary personal data.
            </p>
            <p>
              Together, these four pillars - SEBI's investment adviser rules, SEBI's research analyst rules, the DPDP Act, and the IT/SPDI framework - create a strong, interconnected system of responsibilities. On one hand, SEBI focuses on fiduciary duty, transparency, and recordkeeping. On the other hand, the DPDP Act and IT/SPDI rules focus on privacy, client rights, and security safeguards. When combined, they ensure that every piece of client information I handle is governed by both sector-specific obligations and general privacy protections.
            </p>
            <p>
              It is worth emphasizing that compliance with these laws is not simply about avoiding penalties. For me, it is about upholding trust. Clients share personal and financial details that are often highly sensitive: income, liabilities, family circumstances, investment preferences. These are not just numbers on a form; they represent real lives, goals, and responsibilities. The legal framework reinforces what should already be an ethical instinct - to protect client information as carefully as I would protect my own.
            </p>
            <p>
              Finally, while my primary obligations are under Indian law, I am mindful that some of my clients may be non-resident Indians or may interact with me from other jurisdictions. In such cases, I continue to apply the same high standards of confidentiality and security, while ensuring that the handling of data always remains compliant with Indian laws. If any cross-border data transfers are ever required, they will only take place with your explicit consent and in accordance with Indian law, as further explained in a later section of this Policy.
            </p>
            <p>
              In summary, the legal and regulatory framework that governs Growsin is clear and comprehensive. I must maintain confidentiality under SEBI's fiduciary rules, retain records for five years, respect client rights under the DPDP Act, handle sensitive personal data responsibly under the SPDI Rules, and notify regulators in case of breaches. By operating strictly within this framework, I ensure not only legal compliance but also the preservation of trust, which is the foundation of any meaningful advisory relationship.
            </p>
          </section>

          <section id="part-4">
            <h2>Part 4: Definitions</h2>
            <p>
              To ensure that this Policy is understood consistently and clearly, I provide the following definitions of key terms. These definitions are aligned with the legal and regulatory requirements under the DPDP Act, IT Act, and SEBI regulations.
            </p>
            <p>
              <strong>Personal Data</strong> refers to any information about an individual that can be used to identify that person, either directly or in combination with other data. In my advisory practice, personal data includes your name, date of birth, gender, email address, phone number, residential address, PAN number, Aadhaar number, and any other identifiers that you provide during onboarding or during the course of our engagement.
            </p>
            <p>
              <strong>Sensitive Personal Data or Information (SPDI)</strong> is a more specific category defined under the IT Act and SPDI Rules. This includes data such as passwords, financial information like bank account numbers and payment details, health information if voluntarily disclosed, biometric information, and any data specifically listed as sensitive under law. In the context of Growsin, SPDI typically includes bank account numbers, UPI details, RTGS/NEFT information, and passwords or security credentials associated with payment or billing systems.
            </p>
            <p>
              <strong>Financial Data</strong> refers broadly to any information about a client's income, assets, liabilities, investment holdings, risk capacity, and financial goals. This includes salary slips, tax returns, mutual fund holdings, demat account statements, insurance policies, real estate assets, and loan details. Financial data is essential to my advisory services because it allows me to assess suitability, prepare financial plans, and recommend appropriate investment strategies.
            </p>
            <p>
              <strong>Data Principal</strong> is the term used in the DPDP Act to refer to the individual whose personal data is being processed. In the context of this Policy, you - the client - are the data principal. You are the person who has provided, or will provide, personal or financial information to me for the purpose of receiving advisory or research services.
            </p>
            <p>
              <strong>Data Fiduciary</strong> means the entity or person who determines the purpose and means of processing personal data. In the context of Growsin, I am the data fiduciary. This means that I decide why and how your data will be collected, processed, stored, and eventually deleted. Being a data fiduciary carries legal obligations: I must act with care, respect your rights, maintain security, and ensure lawful processing.
            </p>
            <p>
              <strong>Processing</strong> refers to any operation performed on personal data, whether manually or digitally. This includes collecting, recording, organizing, structuring, storing, using, analyzing, transmitting, sharing, deleting, and destroying data. Essentially, any interaction with your data that I undertake as part of my service is considered processing.
            </p>
            <p>
              <strong>Consent</strong> means your free, specific, informed, and unambiguous agreement to allow me to process your personal or sensitive data for a stated purpose. Consent must be given voluntarily and may be withdrawn at any time. However, in some cases, I may be legally required to process data regardless of consent (for example, to comply with SEBI recordkeeping requirements), and in such cases, withdrawal of consent does not affect my obligations under law.
            </p>
            <p>
              <strong>Data Breach</strong> refers to an incident in which personal data is accessed, disclosed, or lost in an unauthorized or unlawful manner. This could occur due to a cybersecurity attack, accidental disclosure, system failure, or human error. In the event of a material data breach, I am required to notify you and the relevant authorities within 72 hours.
            </p>
            <p>
              <strong>Third-Party Vendors</strong> are external service providers that I engage to perform certain tasks or functions that involve the handling of client data. These vendors may include hosting providers, payment gateways, backup and disaster recovery services, email service providers, and cloud storage platforms. While these vendors may have access to client data, they are not permitted to use it for any purpose other than providing their services to me, and they must maintain confidentiality.
            </p>
            <p>
              <strong>Retention Period</strong> refers to the length of time for which I am required or permitted to store your personal and financial data. Under SEBI rules, I must retain client records, KYC documents, advice records, and communications for at least five years. After that period, unless there is a continuing legal obligation or a pending dispute, I will securely delete or anonymize your data.
            </p>
            <p>
              <strong>Anonymization</strong> means the process of transforming personal data in such a way that the individual can no longer be identified, either directly or indirectly. Once data is anonymized, it is no longer considered personal data under law and may be retained for research, statistical, or analytical purposes without privacy concerns.
            </p>
            <p>
              <strong>Grievance Officer</strong> is the person responsible for addressing any complaints or concerns you may have about data handling, privacy breaches, or violations of your rights under this Policy. In the case of Growsin, I serve as the grievance officer, and you may contact me directly at privacy@growsin.in.
            </p>
            <p>
              These definitions are intended to provide you with a clear understanding of the terms used throughout this Policy. They are aligned with legal requirements and reflect the practical realities of how data is managed in a solo advisory practice. If you have questions about any of these terms or how they apply to your specific case, please feel free to reach out.
            </p>
          </section>

          <section id="part-5">
            <h2>Part 5: Categories of Data Collected</h2>
            <p>
              As an investment adviser and research analyst, I collect and process various types of personal and financial data from clients. The data I collect is necessary to fulfill my fiduciary duties, comply with regulatory requirements, provide personalized advice, and maintain effective communication. Below is a detailed description of the categories of data I may collect, along with examples of each category.
            </p>
            <p>
              <strong>1. Personal Identifiers:</strong> This includes basic information that identifies you as an individual. Examples include full legal name, date of birth, gender, nationality, and residential address. This data is collected during the initial Know Your Client (KYC) process and is used for identity verification, regulatory reporting, and ongoing communication.
            </p>
            <p>
              <strong>2. Contact Information:</strong> To communicate with you effectively, I collect your email address, phone number, and alternative contact details if provided. This information is used to send you updates, reminders, advisory reports, billing invoices, and responses to queries.
            </p>
            <p>
              <strong>3. Government-Issued Identifiers:</strong> As required under SEBI and PMLA (Prevention of Money Laundering Act) rules, I collect identification documents such as PAN (Permanent Account Number), Aadhaar, passport number, voter ID, or driver's license. These are used strictly for KYC verification and regulatory compliance.
            </p>
            <p>
              <strong>4. Financial Data:</strong> This is the most critical category of data for advisory services. It includes details about your income (salary, business income, rental income), assets (mutual funds, stocks, bonds, fixed deposits, real estate, gold), liabilities (loans, credit card debt), insurance policies, retirement savings, and contingency funds. I also collect information about your investment goals, time horizon, risk appetite, and liquidity needs. This data allows me to assess your financial situation, recommend suitable strategies, and prepare comprehensive financial plans.
            </p>
            <p>
              <strong>5. Payment and Billing Information:</strong> When you engage my services and make payments for advisory fees, I may collect bank account details, UPI IDs, RTGS/NEFT information, credit card or debit card details (if processed through a payment gateway), and transaction records. This data is necessary for invoicing, payment processing, and maintaining financial records. I do not store payment card numbers; such information is handled by PCI-DSS compliant third-party payment gateways.
            </p>
            <p>
              <strong>6. Communication Records:</strong> To maintain transparency and comply with regulatory requirements, I retain records of all significant communications with clients. This includes emails, WhatsApp messages (if used for formal advisory discussions), phone call logs, video call recordings (if conducted), meeting notes, and advisory reports sent to you. These records serve as evidence of advice given, disclosures made, and consent obtained.
            </p>
            <p>
              <strong>7. Technical and Usage Data:</strong> When you interact with my website, client portal, or digital tools, certain technical information is automatically collected. This may include your IP address, browser type, device information, operating system, and usage patterns such as pages visited, time spent, and clicks. This data is used to improve the user experience, detect fraudulent activity, and ensure the security of digital services.
            </p>
            <p>
              <strong>8. Family and Dependent Information:</strong> In some cases, I may collect information about your spouse, children, or dependents if it is relevant to your financial planning. For example, when preparing a financial plan for education or retirement, I may need to know the ages of your children, their educational aspirations, and any existing savings for them. This data is treated with the same level of care as your own personal data.
            </p>
            <p>
              <strong>9. Employment and Professional Information:</strong> To understand your income stability and future prospects, I may collect details about your employer, job title, work experience, and expected career trajectory. This is especially relevant for clients who are salaried professionals planning for long-term goals.
            </p>
            <p>
              <strong>10. Health Information (Optional and Limited):</strong> I do not routinely collect health information. However, if you voluntarily share details about medical conditions, health insurance coverage, or planned medical expenses that affect your financial planning, I will treat such information as sensitive personal data and handle it with heightened confidentiality. Sharing such information is entirely optional and will only be processed with your explicit consent.
            </p>
            <p>
              <strong>11. Tax-Related Information:</strong> To provide comprehensive financial advice, I may review your income tax returns (ITR), Form 16, tax payment challans, capital gains statements, and advance tax records. This helps me analyze your tax liability, optimize your tax planning strategies, and ensure compliance with tax laws.
            </p>
            <p>
              <strong>12. Documents Submitted for Verification:</strong> As part of the KYC process and ongoing advisory relationship, you may submit scanned or photographed copies of official documents such as bank statements, salary slips, mutual fund statements, insurance policies, property documents, or loan agreements. These documents are stored securely and used solely for the purpose of providing advisory services.
            </p>
            <p>
              It is important to note that the data I collect is limited to what is necessary for delivering my services, complying with regulatory obligations, and maintaining accurate records. I do not collect data for unrelated purposes such as marketing, profiling for third-party advertising, or selling to data brokers. Every piece of information you provide serves a specific, lawful purpose, and I ensure that it is handled with the utmost care and confidentiality.
            </p>
            <p>
              If you choose not to provide certain types of information, it may limit my ability to provide complete or accurate advice. For example, without knowing your income and liabilities, I cannot assess your debt capacity or recommend suitable investment strategies. However, any decision to withhold information is entirely yours, and I will work within the boundaries you set while ensuring transparency about any limitations that may result.
            </p>
          </section>

          <section id="part-6">
            <h2>Part 6: Lawful Basis of Processing</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, I am required to have a lawful basis for collecting and processing your personal data. This means that I cannot simply collect data at will; there must be a valid reason recognized by law. In the context of my practice, I rely on four primary lawful bases, each of which corresponds to a specific type of processing activity.
            </p>
            <p>
              <strong>1. Consent:</strong> The first lawful basis is your explicit consent. Consent is appropriate when the processing is optional or when it involves sensitive personal data that goes beyond what is strictly necessary for advisory services. For example, if you choose to share health information, family details beyond immediate dependents, or preferences about communication channels, I will seek your clear and informed consent before processing such information. Consent must be freely given, specific, and may be withdrawn at any time. However, withdrawing consent does not affect the lawfulness of processing that occurred before withdrawal, and it does not override regulatory obligations that require me to retain certain records.
            </p>
            <p>
              <strong>2. Contractual Necessity:</strong> The second lawful basis is the necessity of processing to fulfill a contract between you and me. When you engage me as your investment adviser or research analyst, we enter into a service agreement (whether written or implied). For me to perform my obligations under that agreement - such as preparing a financial plan, providing investment recommendations, or delivering research reports - I must collect and process your personal and financial data. Without this data, it would be impossible to provide the services you have contracted for. Therefore, processing for this purpose is not dependent on consent; it is a fundamental requirement of the advisory relationship.
            </p>
            <p>
              <strong>3. Compliance with Legal Obligations:</strong> The third lawful basis is compliance with legal or regulatory obligations. Under SEBI regulations, I am required to maintain records of client agreements, KYC documents, risk profiles, investment advice, and communications for a minimum of five years. I am also required to verify your identity under PMLA rules and to respond to lawful requests from regulators, tax authorities, or courts. In these cases, I do not need your consent to process data because the law itself mandates it. Even if you were to withdraw consent or request deletion, I would still be obligated to retain certain records until the statutory retention period expires.
            </p>
            <p>
              <strong>4. Legitimate Interests:</strong> The fourth lawful basis is my legitimate interest in processing data for purposes that are reasonable and expected within the context of our relationship. This includes activities such as detecting fraud, preventing security breaches, improving service quality, managing operational risks, and maintaining accurate records for dispute resolution. Legitimate interest is a balanced concept: I can rely on it only if the processing is proportionate, does not override your fundamental rights, and is consistent with your reasonable expectations. For example, if I notice unusual login activity on your client portal, I have a legitimate interest in investigating whether your account has been compromised, even without seeking prior consent.
            </p>
            <p>
              It is important to understand that in many cases, more than one lawful basis may apply to the same processing activity. For instance, collecting your PAN number serves both a contractual necessity (to verify identity for advisory purposes) and a legal obligation (to comply with SEBI and PMLA requirements). Similarly, processing payment information is necessary for contract performance (to bill you for services) and may also serve my legitimate interest in maintaining accurate financial records.
            </p>
            <p>
              I do not process data on the basis of consent alone unless the activity is genuinely optional. This approach provides greater stability for both of us: you can be confident that your essential advisory services will not be interrupted if you change your mind about optional data sharing, and I can be confident that I am fulfilling my regulatory duties without ambiguity.
            </p>
            <p>
              Finally, I ensure that every category of data I collect has a clear and documented lawful basis. This is part of my internal compliance framework and forms the foundation of the transparency I offer to clients. If you ever have questions about why a particular piece of data is being collected or how the lawful basis applies to your specific situation, I encourage you to ask. Transparency about processing is not just a legal requirement; it is also a cornerstone of trust.
            </p>
          </section>

          <section id="part-7">
            <h2>Part 7: Purpose of Processing</h2>
            <p>
              I collect and process personal and financial data only for specific, legitimate, and transparent purposes. Each purpose is directly tied to the services I provide, the obligations I must fulfill, or the legitimate operational needs of my practice. Below is a detailed explanation of why and how I process your data.
            </p>
            <p>
              <strong>1. Providing Investment Advisory Services:</strong> The primary purpose of data processing is to deliver personalized investment advice that is suitable to your financial situation, risk profile, and goals. This involves analyzing your income, assets, liabilities, time horizon, and risk capacity. I use this information to prepare financial plans, recommend asset allocation strategies, suggest specific investment products, and provide ongoing portfolio reviews. Without access to accurate and comprehensive financial data, it would be impossible to provide advice that meets the fiduciary standards required under SEBI regulations.
            </p>
            <p>
              <strong>2. Conducting Research Analysis:</strong> As a registered research analyst, I prepare and publish research reports on companies, sectors, and market trends. While most research does not involve client-specific data, I may use anonymized or aggregated client data to understand broader investment patterns, preferences, and portfolio behaviors. This helps me refine my research and ensure that it remains relevant to the needs of individual investors.
            </p>
            <p>
              <strong>3. Compliance with Regulatory Requirements:</strong> SEBI and other regulatory authorities require me to maintain detailed records of client interactions, advice given, risk disclosures made, and consent obtained. I use your data to generate these records, respond to regulatory audits or inquiries, and demonstrate that I am meeting my obligations under the Investment Advisers Regulations and Research Analysts Regulations. This includes maintaining KYC records, updating client profiles, and ensuring that I have documented evidence of suitability assessments.
            </p>
            <p>
              <strong>4. Billing and Payment Processing:</strong> To charge fees for my services and process payments, I collect and process billing information, bank account details, UPI IDs, and transaction records. This data is used to generate invoices, process payments through secure gateways, issue receipts, and maintain financial records for tax and accounting purposes.
            </p>
            <p>
              <strong>5. Communication and Client Support:</strong> I use your contact information to send you updates, reminders, advisory reports, newsletters, regulatory disclosures, and responses to your queries. Communication may occur via email, phone, WhatsApp (for non-sensitive matters), or through a secure client portal. The purpose of these communications is to keep you informed, ensure transparency, and maintain a professional and responsive relationship.
            </p>
            <p>
              <strong>6. Risk Management and Fraud Prevention:</strong> I process technical data such as IP addresses, login times, and device information to detect and prevent fraudulent activity, unauthorized access, and cybersecurity threats. For example, if I notice login attempts from an unusual location or multiple failed password attempts, I may temporarily block access and contact you to verify your identity. This protects both your data and the integrity of my systems.
            </p>
            <p>
              <strong>7. Improving Service Quality:</strong> I may analyze usage patterns, client feedback, and service outcomes to identify areas for improvement in my advisory process, digital tools, or communication methods. This analysis is conducted in a manner that respects your privacy and typically involves aggregated or anonymized data rather than individual profiles.
            </p>
            <p>
              <strong>8. Legal and Dispute Resolution:</strong> In the event of a dispute, complaint, or legal proceeding, I may use client data to defend my actions, demonstrate compliance, or fulfill obligations to courts, arbitrators, or regulatory bodies. This includes providing evidence of advice given, disclosures made, and agreements reached.
            </p>
            <p>
              <strong>9. Archival and Recordkeeping:</strong> Even after the active advisory relationship has ended, I am required to retain certain records for five years under SEBI rules. The purpose of this archival is to enable regulatory review, support dispute resolution, and maintain institutional memory in case you return for future advisory services.
            </p>
            <p>
              It is important to emphasize that I do not process your data for purposes that are unrelated to the advisory relationship or legal obligations. I do not sell your data to third parties. I do not use your data for targeted advertising or marketing campaigns unrelated to my services. I do not share your data with brokers, product manufacturers, or other financial intermediaries unless you explicitly authorize such sharing for a specific purpose (for example, executing a transaction you have approved).
            </p>
            <p>
              Every processing activity I undertake is documented, proportionate, and aligned with the lawful bases described in Part 6 of this Policy. If a new purpose arises that was not originally contemplated, I will inform you of that purpose and, if required by law, seek your consent before proceeding. This ensures that you always have visibility into how your data is being used and that there are no surprises or unauthorized uses.
            </p>
          </section>

          <section id="part-8">
            <h2>Part 8: Data Retention and Deletion</h2>
            <p>
              The retention of personal and financial data is governed by both legal requirements and practical considerations. My approach to data retention is designed to balance three important objectives: compliance with regulatory obligations, respect for your privacy rights, and operational efficiency. Below is a detailed explanation of how long I retain different categories of data and what happens when the retention period expires.
            </p>
            <p>
              <strong>Regulatory Retention Requirements:</strong> Under the SEBI (Investment Advisers) Regulations, 2013 and the SEBI (Research Analysts) Regulations, 2014, I am required to maintain records of client agreements, KYC documents, risk assessments, suitability analyses, investment advice, research reports, and all significant communications with clients for a minimum period of five years from the date of the last transaction or advice. This five-year period is not optional; it is a statutory obligation, and failure to comply would constitute a regulatory violation. Therefore, even if you request deletion of your data, I am legally bound to retain these records until the mandatory retention period has expired.
            </p>
            <p>
              <strong>Categories of Data and Retention Periods:</strong> Different categories of data may have different retention requirements. For instance, KYC documents such as PAN, Aadhaar, address proof, and identity verification records are retained for five years from the end of the advisory relationship. Financial plans, investment recommendations, and advisory reports are also retained for five years. Communication records, including emails, meeting notes, and recorded calls (if any), are likewise retained for five years. Payment and billing records, including invoices, receipts, and transaction details, are retained for a period that satisfies both SEBI requirements and tax recordkeeping obligations (typically five to seven years). Technical data such as IP addresses and login logs may be retained for shorter periods (typically one to two years) unless they are relevant to a security incident or regulatory inquiry, in which case they may be retained longer.
            </p>
            <p>
              <strong>Data Deletion After Retention Period Expires:</strong> Once the mandatory retention period has expired and there is no ongoing legal obligation or pending dispute, I will take steps to securely delete or anonymize your personal data. Deletion means that the data is permanently removed from all active systems, backups, and archives in a manner that prevents recovery. Anonymization means that the data is transformed in such a way that you can no longer be identified, either directly or indirectly, and the data loses its character as personal data under law. Anonymized data may be retained for research, statistical, or quality improvement purposes without privacy concerns.
            </p>
            <p>
              <strong>Exceptions to Deletion:</strong> There are certain situations in which I may retain data beyond the standard retention period. These include: (a) Ongoing legal proceedings or disputes in which the data is relevant as evidence, (b) Regulatory investigations or audits in which the data has been specifically requested by authorities, (c) Tax or accounting obligations that require retention beyond five years, and (d) Explicit consent from you to retain the data for a longer period (for example, if you wish me to maintain historical records for continuity of service). In all such cases, the data will continue to be protected with the same level of security and confidentiality, and it will be deleted once the extended retention purpose has been fulfilled.
            </p>
            <p>
              <strong>Right to Request Deletion (Subject to Legal Limits):</strong> Under the DPDP Act, you have the right to request deletion of your personal data, and I am obligated to honor such requests to the extent permitted by law. However, this right is not absolute. If the data is subject to a mandatory retention requirement under SEBI rules, or if it is needed for compliance, legal defense, or ongoing obligations, I will inform you that deletion is not immediately possible and will explain the basis for continued retention. Once the legal basis for retention no longer applies, I will proceed with deletion.
            </p>
            <p>
              <strong>Secure Deletion Procedures:</strong> When data is deleted, I follow industry-standard practices to ensure that it cannot be recovered or reconstructed. For digital data, this involves overwriting storage media, using secure deletion software, or physically destroying storage devices that are no longer in use. For physical documents, secure shredding or incineration methods are used. Backups are also addressed: I ensure that deleted data is purged from all backup systems within a reasonable time frame (typically 90 days) after deletion from active systems.
            </p>
            <p>
              <strong>Transparency and Accountability:</strong> I maintain internal records of data retention schedules and deletion activities. This documentation allows me to demonstrate compliance with retention obligations and respond to client inquiries about the status of their data. If you wish to know how long your specific data will be retained or when it is scheduled for deletion, I will provide that information upon request.
            </p>
            <p>
              In summary, I retain your data for as long as required by law, and I delete it securely once the retention period expires and no other legal basis for retention applies. This approach ensures that I meet my regulatory obligations while respecting your privacy rights and minimizing unnecessary data retention. If you have questions or concerns about retention or deletion, please contact me at privacy@growsin.in.
            </p>
          </section>

          <section id="part-9">
            <h2>Part 9: Data Sharing and Disclosure</h2>
            <p>
              I do not sell, rent, trade, or otherwise share your personal or financial data with third parties for marketing, advertising, or commercial purposes. The protection of client confidentiality is a fundamental fiduciary duty, and I take this responsibility seriously. However, there are specific, limited circumstances in which I may share or disclose your data, and it is important that you understand what those circumstances are.
            </p>
            <p>
              <strong>1. Regulators and Government Authorities:</strong> I am required by law to disclose client data to SEBI, income tax authorities, enforcement agencies, and other regulatory or government bodies when they make lawful requests or when disclosure is mandated under law. For example, if SEBI conducts an inspection or audit of my practice, I must provide access to client records. Similarly, if the Income Tax Department issues a summons or notice requiring disclosure of financial information, I am obligated to comply. In such cases, disclosure is not optional, and I do not need your prior consent. However, I will limit the disclosure to what is specifically requested and will take reasonable steps to notify you if legally permissible.
            </p>
            <p>
              <strong>2. Courts and Legal Proceedings:</strong> If your data becomes relevant to a court case, arbitration, or legal dispute - whether initiated by you, by me, or by a third party - I may be required to disclose data as part of legal evidence or in response to a court order or subpoena. In such cases, I will comply with the legal process while taking care to disclose only what is necessary and relevant.
            </p>
            <p>
              <strong>3. Payment Gateways and Banks:</strong> When you make payments for advisory services, your payment information (such as bank account details, UPI ID, or card information) is processed by third-party payment gateways or banks. I do not store sensitive payment credentials like card numbers or CVV codes; these are handled directly by PCI-DSS compliant payment service providers. However, I do receive transaction confirmations, receipts, and settlement reports, which may include your name, transaction amount, and date. This information is used solely for billing, accounting, and reconciliation purposes.
            </p>
            <p>
              <strong>4. Service Providers and Vendors:</strong> I engage certain third-party vendors to provide essential services such as web hosting, cloud storage, email delivery, backup and disaster recovery, and cybersecurity. These vendors may have access to your data to the extent necessary to perform their functions. For example, if I use a cloud storage provider to maintain encrypted backups of client records, that provider will have technical access to the data (though not the ability to decrypt it without my keys). I ensure that all such vendors are bound by confidentiality obligations and are prohibited from using your data for any purpose other than providing their services to me. I select vendors based on their security practices, compliance standards, and reputations, and I monitor their performance regularly.
            </p>
            <p>
              <strong>5. Professional Advisers and Consultants:</strong> In rare cases, I may need to consult external professionals such as legal advisers, auditors, or compliance consultants on matters that involve client data. For example, if I receive a complex legal query or if I am undergoing a regulatory audit, I may share anonymized or pseudonymized data with these advisers to obtain their guidance. Where anonymization is not possible, I will seek your consent before sharing identifiable data, or I will rely on legal privilege and confidentiality obligations that bind these professionals.
            </p>
            <p>
              <strong>6. Successors or Assignees (Business Continuity):</strong> In the event that I retire, transfer my practice to another SEBI-registered adviser, or in the unfortunate event of my incapacity or death, client records may need to be transferred to a successor adviser to ensure continuity of service and compliance with SEBI recordkeeping requirements. In such cases, the transfer will be conducted in a manner that maintains confidentiality, and you will be notified of the transfer and given the opportunity to opt out or request deletion of your data (subject to legal retention requirements).
            </p>
            <p>
              <strong>7. Emergency Situations:</strong> If I believe in good faith that disclosure is necessary to prevent imminent harm to you or others, to protect the security or integrity of my systems, or to respond to a credible threat or emergency, I may disclose data to law enforcement, medical authorities, or other appropriate parties. Such disclosures will be made sparingly and only when there is a clear and urgent need.
            </p>
            <p>
              <strong>8. With Your Consent:</strong> In all other cases, if I wish to share your data with a third party for a purpose not covered above, I will seek your explicit, informed consent before doing so. You will have the right to refuse such consent, and your decision will not affect the quality or availability of core advisory services.
            </p>
            <p>
              <strong>Cross-Border Data Transfers:</strong> As a general rule, I store and process all client data within India, using Indian servers and service providers. However, certain cloud platforms, email services, or payment gateways may have infrastructure located outside India. If cross-border data transfer occurs, I will ensure that: (a) the transfer is necessary for the performance of my services or compliance with law, (b) the data is protected by contractual safeguards such as Standard Contractual Clauses, (c) you are informed of the transfer, and (d) explicit consent is obtained if required under the DPDP Act. I prioritize Indian-based vendors to minimize cross-border transfers and associated risks.
            </p>
            <p>
              <strong>No Sale or Marketing:</strong> To reiterate, I do not sell your data to advertisers, data brokers, marketing agencies, or any other third parties. I do not participate in affiliate marketing programs that involve sharing client information. I do not allow third-party tracking cookies or analytics tools on my website or client portal beyond what is necessary for security and functionality. Your data is used exclusively for the purposes described in this Policy, and it remains under my control and protection at all times.
            </p>
            <p>
              In summary, data sharing is limited to legally mandated disclosures, essential service providers bound by confidentiality, and situations where you have given explicit consent. I do not engage in casual or commercial sharing of client data, and I apply strict controls to ensure that any necessary sharing is proportionate, secure, and transparent.
            </p>
          </section>

          <section id="part-10">
            <h2>Part 10: Data Security Measures</h2>
            <p>
              Protecting client data from unauthorized access, loss, misuse, or breach is one of my highest priorities. I implement a multi-layered approach to data security that combines technical safeguards, administrative controls, and physical protections. While no system can guarantee absolute security, I take all reasonable and industry-standard measures to minimize risks and respond effectively to any incidents.
            </p>
            <p>
              <strong>1. Encryption:</strong> All sensitive personal data and financial information is encrypted both in transit and at rest. When data is transmitted over the internet - for example, when you submit a form on my website or send me an email through a secure client portal - it is protected using TLS (Transport Layer Security) encryption, which ensures that the data cannot be intercepted or read by unauthorized parties. When data is stored on servers or in databases, it is encrypted using industry-standard algorithms such as AES-256. Encryption keys are stored separately from the data and are protected by strong access controls.
            </p>
            <p>
              <strong>2. Access Controls:</strong> Access to client data is strictly limited to me, as the sole practitioner. I use strong, unique passwords for all systems, and I enable multi-factor authentication (MFA) wherever possible to add an extra layer of security. If I engage administrative support or vendors in the future, access will be granted on a need-to-know basis and will be logged and monitored. No one will have unrestricted access to all client records.
            </p>
            <p>
              <strong>3. Secure Servers and Hosting:</strong> Client data is stored on secure servers that are maintained by reputable hosting providers. These providers implement physical security measures (such as controlled access to data centers), network security measures (such as firewalls and intrusion detection systems), and redundancy measures (such as backups and failover systems). I select hosting providers that comply with ISO 27001, SOC 2, or equivalent security standards.
            </p>
            <p>
              <strong>4. Regular Backups:</strong> To protect against data loss due to hardware failure, cyberattacks, or natural disasters, I maintain regular backups of client records. Backups are encrypted, stored in geographically separate locations, and tested periodically to ensure they can be restored if needed. Backup retention policies are aligned with data retention requirements, and old backups are securely deleted once they are no longer needed.
            </p>
            <p>
              <strong>5. Cybersecurity Monitoring:</strong> I use antivirus software, anti-malware tools, and security monitoring systems to detect and prevent cyberattacks such as phishing, ransomware, or unauthorized access attempts. Logs of system activity, login attempts, and data access are reviewed regularly to identify anomalies or suspicious behavior. If a potential security threat is detected, I take immediate action to contain it and assess the impact.
            </p>
            <p>
              <strong>6. Physical Security:</strong> Physical documents containing client data (such as printed KYC forms, signed agreements, or paper-based financial plans) are stored in locked cabinets in a secure location. Access to this storage is restricted, and documents are never left unattended in public or unsecured areas. When physical documents are no longer needed, they are shredded or incinerated to prevent unauthorized recovery.
            </p>
            <p>
              <strong>7. Vendor Security:</strong> Third-party vendors who handle client data (such as hosting providers, payment gateways, or cloud storage services) are selected based on their security practices and compliance with industry standards. I require vendors to maintain confidentiality, implement appropriate security measures, and notify me promptly of any security incidents. Vendor agreements include data protection clauses and audit rights.
            </p>
            <p>
              <strong>8. Employee Training (Future):</strong> If I ever hire employees or contractors, they will receive training on data privacy, security best practices, and confidentiality obligations. They will be required to sign confidentiality agreements and will be subject to disciplinary action for any breaches of security or privacy policies.
            </p>
            <p>
              <strong>9. Incident Response Plan:</strong> In the event of a data breach or security incident, I have an incident response plan in place. This plan includes steps for: (a) identifying and containing the breach, (b) assessing the scope and impact, (c) notifying affected clients and the Data Protection Board of India within 72 hours (if required by law), (d) taking remedial action to prevent recurrence, and (e) documenting the incident for regulatory and audit purposes. I will communicate with affected clients transparently and provide guidance on steps they can take to protect themselves (such as changing passwords or monitoring accounts).
            </p>
            <p>
              <strong>10. Continuous Improvement:</strong> Security is not a one-time effort; it requires ongoing vigilance and adaptation. I stay informed about emerging threats, security vulnerabilities, and best practices in data protection. I update my security measures regularly, apply software patches and updates promptly, and conduct periodic reviews of my security posture. If I identify any weaknesses or areas for improvement, I take corrective action without delay.
            </p>
            <p>
              <strong>Client Responsibilities:</strong> While I take extensive measures to protect your data, security is a shared responsibility. I encourage you to take the following precautions: (a) Use strong, unique passwords for any accounts or portals you access, (b) Enable multi-factor authentication if available, (c) Do not share your login credentials with others, (d) Be cautious of phishing emails or suspicious requests for personal information, (e) Keep your devices and software updated with the latest security patches, and (f) Report any suspicious activity or potential security concerns to me immediately.
            </p>
            <p>
              In summary, I implement comprehensive security measures across technical, administrative, and physical domains to protect client data. I work with trusted vendors, monitor for threats, maintain backups, and have a plan in place to respond to incidents. Security is a continuous commitment, and I remain dedicated to safeguarding the trust you place in me by sharing your personal and financial information.
            </p>
          </section>

          <section id="part-11">
            <h2>Part 11: Your Rights as a Data Principal</h2>
            <p>
              Under the Digital Personal Data Protection Act, 2023, you have specific rights with respect to your personal data. These rights are designed to give you control over your information, ensure transparency, and hold me accountable for how I process your data. Below is a detailed explanation of each of your rights and how you can exercise them.
            </p>
            <p>
              <strong>1. Right to Access:</strong> You have the right to request access to the personal data I hold about you. This includes the right to know what categories of data I have collected, the purposes for which I am processing it, the legal basis for processing, and the recipients or categories of recipients with whom it may be shared. If you make such a request, I will provide you with a copy of your data in a commonly used, structured format (such as PDF or Excel) within a reasonable time frame (typically 15 to 30 days). There is no charge for the first request, but I may charge a reasonable administrative fee for subsequent or excessive requests.
            </p>
            <p>
              <strong>2. Right to Correction:</strong> If you believe that any personal data I hold about you is inaccurate, incomplete, or out of date, you have the right to request correction. For example, if your contact information has changed, if there is an error in your financial records, or if your risk profile needs to be updated, you can ask me to make the necessary corrections. I will verify the accuracy of the correction and update my records promptly. If the correction affects advice I have previously given, I will also reassess that advice and inform you of any changes.
            </p>
            <p>
              <strong>3. Right to Erasure (Right to be Forgotten):</strong> You have the right to request deletion of your personal data under certain circumstances. However, this right is not absolute and is subject to legal limitations. I can delete your data if: (a) the retention period has expired and there is no ongoing legal obligation to retain it, (b) you withdraw consent for optional processing (and there is no other lawful basis), or (c) the data was collected or processed unlawfully. I cannot delete your data if: (a) it is subject to a mandatory retention requirement under SEBI regulations (five years from the last advice or transaction), (b) it is necessary for compliance with legal obligations, (c) it is required for the establishment, exercise, or defense of legal claims, or (d) there is another overriding legal basis. If I cannot delete your data, I will explain the reason and inform you when deletion will become possible.
            </p>
            <p>
              <strong>4. Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to transmit that data to another data fiduciary (such as another investment adviser) without hindrance. This right applies to data that you have provided to me and that is processed based on consent or contract. I will provide the data in formats such as CSV, JSON, or PDF, and I will cooperate with any reasonable requests to facilitate the transfer to another service provider. Data portability does not affect my obligation to retain records for regulatory purposes.
            </p>
            <p>
              <strong>5. Right to Withdraw Consent:</strong> If I am processing your data based on consent, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing that occurred before withdrawal, and it does not override other lawful bases (such as legal obligations or contractual necessity). For example, if you consented to receive newsletters or marketing communications, you can withdraw that consent and I will stop sending such communications. However, if the data processing is necessary for advisory services or regulatory compliance, withdrawal of consent will not stop that processing.
            </p>
            <p>
              <strong>6. Right to Grievance Redressal:</strong> If you have any concerns, complaints, or grievances about how your data is being handled, you have the right to contact me and seek resolution. I serve as the grievance officer for Growsin, and you can reach me at privacy@growsin.in. I will acknowledge your grievance within 48 hours and provide a substantive response within 15 business days. If the matter is complex and requires more time, I will inform you of the reasons for the delay and provide a final response within 30 business days. If you are not satisfied with my response, you have the right to escalate the matter to the Data Protection Board of India.
            </p>
            <p>
              <strong>7. Right to Nominate:</strong> Under the DPDP Act, you have the right to nominate another individual who can exercise your rights on your behalf in the event of your death or incapacity. If you wish to make such a nomination, you can inform me in writing, and I will record the nomination in your client file. The nominee will be able to request access, correction, or deletion of your data, subject to the same legal limitations that apply to you.
            </p>
            <p>
              <strong>How to Exercise Your Rights:</strong> To exercise any of the rights described above, you can contact me by email at privacy@growsin.in or by any other communication method we have established during our advisory relationship. Your request should clearly state which right you wish to exercise and provide sufficient information for me to verify your identity. I may ask for additional identification documents to prevent fraud or unauthorized access. Once I have verified your identity, I will process your request within the time frames specified above. There is no charge for exercising your rights unless the request is manifestly unfounded, excessive, or repetitive, in which case I may charge a reasonable administrative fee or refuse the request.
            </p>
            <p>
              <strong>Limitations and Balancing of Rights:</strong> While I respect and uphold your rights, there may be situations where those rights must be balanced against other legal obligations, the rights of third parties, or overriding public interests. For example, I cannot delete records that are subject to a legal hold or that are needed for ongoing regulatory audits. I cannot provide access to data that is subject to legal privilege or that would reveal confidential information about other clients. In all such cases, I will explain the basis for any limitation and provide as much information as legally permissible.
            </p>
            <p>
              In summary, you have robust rights to access, correct, delete, and control your personal data. I am committed to facilitating the exercise of these rights in a transparent, efficient, and lawful manner. If you have questions about your rights or how to exercise them, please do not hesitate to contact me.
            </p>
          </section>

          <section id="part-12">
            <h2>Part 12: Data Breach Notification and Management</h2>
            <p>
              Despite the comprehensive security measures I have in place, there is always a possibility that a data breach may occur. A data breach refers to any incident in which personal data is accessed, disclosed, lost, altered, or destroyed in an unauthorized or unlawful manner. Breaches can occur due to cyberattacks (such as hacking, phishing, or ransomware), human error (such as accidental disclosure), system failures, or physical theft. I take data breaches extremely seriously, and I have established clear procedures for detecting, responding to, and managing such incidents.
            </p>
            <p>
              <strong>Detection and Identification:</strong> The first step in breach management is detection. I use security monitoring tools, intrusion detection systems, and regular audits to identify potential breaches as quickly as possible. Indicators of a breach may include unusual login activity, unauthorized access attempts, system alerts, reports from clients, or notifications from vendors. If I become aware of a potential breach, I immediately initiate an investigation to determine the scope, cause, and impact of the incident.
            </p>
            <p>
              <strong>Containment and Mitigation:</strong> Once a breach is detected, I take immediate steps to contain it and prevent further harm. This may include isolating affected systems, changing passwords, revoking access credentials, shutting down compromised services, or engaging cybersecurity experts. The goal is to stop the breach from spreading and to minimize the amount of data that may be compromised.
            </p>
            <p>
              <strong>Assessment of Impact:</strong> After containment, I assess the impact of the breach. This involves determining what data was affected, how many clients are impacted, whether the data was accessed or merely exposed, whether it was encrypted or in plaintext, and whether there is a risk of harm to clients (such as identity theft, financial fraud, or reputational damage). The severity of the breach determines the next steps.
            </p>
            <p>
              <strong>Notification to Clients:</strong> If the breach involves personal data and there is a material risk of harm to you, I will notify you within 72 hours of becoming aware of the breach. The notification will include: (a) a description of the breach and how it occurred, (b) the categories and approximate number of data records affected, (c) the likely consequences of the breach, (d) the measures I have taken or will take to address the breach and mitigate harm, and (e) the steps you can take to protect yourself (such as changing passwords, monitoring accounts, or placing fraud alerts). The notification will be sent by email, phone, or any other communication method that ensures you receive it promptly.
            </p>
            <p>
              <strong>Notification to Regulators:</strong> Under the DPDP Act, I am required to notify the Data Protection Board of India of any material data breach within 72 hours. The notification will include details of the breach, the data affected, the potential impact, and the steps taken to address it. I will cooperate fully with any investigation or inquiry conducted by the Board or other regulatory authorities.
            </p>
            <p>
              <strong>Remediation and Prevention:</strong> After the immediate response, I focus on long-term remediation. This includes identifying the root cause of the breach, implementing corrective measures to prevent recurrence, updating security protocols, conducting additional staff training (if applicable), and enhancing monitoring and detection capabilities. I also document the incident, the response, and the lessons learned to improve future preparedness.
            </p>
            <p>
              <strong>Transparency and Accountability:</strong> I believe that transparency is essential in breach management. I will communicate openly with affected clients, provide regular updates on the status of remediation, and answer any questions you may have. I will also take responsibility for any failures or lapses in security that contributed to the breach and will take corrective action to restore trust.
            </p>
            <p>
              <strong>Support for Affected Clients:</strong> If a breach results in harm to clients, I will provide reasonable support to help you address the consequences. This may include assistance with reporting fraudulent activity, guidance on protecting accounts, and cooperation with law enforcement or financial institutions. While I cannot guarantee compensation for all forms of harm, I will act in good faith to minimize the impact and support your recovery.
            </p>
            <p>
              <strong>No Breach is Acceptable:</strong> I want to emphasize that my goal is to prevent breaches from occurring in the first place. The procedures described here are a contingency plan, not an acceptance of breaches as inevitable. I invest in security, monitor for threats, and continuously improve my defenses to ensure that your data is protected to the highest standards. In the unlikely event that a breach does occur, I am prepared to respond swiftly, transparently, and effectively.
            </p>
            <p>
              In summary, I have clear procedures for detecting, containing, assessing, and responding to data breaches. I will notify you and regulators within 72 hours if a material breach occurs, and I will take all necessary steps to mitigate harm and prevent recurrence. Transparency, accountability, and client support are the guiding principles of my breach management approach.
            </p>
          </section>

          <section id="part-13">
            <h2>Part 13: Cross-Border Data Transfers</h2>
            <p>
              As a general principle, I strive to store and process all client data within India. This approach minimizes legal complexity, ensures alignment with Indian data protection laws, and reduces the risks associated with cross-border data transfers. However, there are certain situations in which cross-border transfers may be necessary or unavoidable, and it is important to understand how such transfers are managed.
            </p>
            <p>
              <strong>India-First Approach:</strong> I prioritize the use of Indian-based servers, hosting providers, and service vendors. By keeping data within India's territorial boundaries, I ensure that it remains subject to Indian jurisdiction and is governed by the DPDP Act, IT Act, and SEBI regulations. This approach also simplifies regulatory compliance and reduces exposure to foreign legal regimes that may have conflicting requirements.
            </p>
            <p>
              <strong>When Cross-Border Transfers May Occur:</strong> Despite my preference for Indian infrastructure, there are situations where cross-border transfers may be necessary. For example, if I use a global cloud storage provider or email service that stores data on servers located outside India, your data may be transferred to and processed in countries such as the United States, Singapore, or the European Union. Similarly, if I use international payment gateways to process transactions, payment data may be routed through foreign servers. Additionally, if I engage consultants or advisers located outside India for legal or compliance support, anonymized or aggregated data may be shared with them.
            </p>
            <p>
              <strong>Legal Basis for Cross-Border Transfers:</strong> Any cross-border transfer of personal data must have a lawful basis under the DPDP Act. The lawful bases include: (a) explicit consent from you for the transfer to a specific country or category of countries, (b) necessity for the performance of a contract between you and me, (c) compliance with legal obligations, or (d) protection of vital interests (in emergencies). I will rely on consent as the primary basis for cross-border transfers that are not strictly necessary for service delivery.
            </p>
            <p>
              <strong>Safeguards for Cross-Border Transfers:</strong> When cross-border transfers occur, I implement contractual and technical safeguards to ensure that your data remains protected. These safeguards include: (a) Standard Contractual Clauses (SCCs) or equivalent data transfer agreements with foreign vendors, (b) encryption of data in transit and at rest, (c) access controls that limit who can access the data, (d) vendor agreements that impose confidentiality and security obligations, and (e) regular audits and monitoring to ensure compliance. I also avoid transferring data to countries that do not have adequate data protection laws or that are subject to mass surveillance regimes, unless such transfers are absolutely necessary and you have provided explicit consent.
            </p>
            <p>
              <strong>Transparency and Consent:</strong> If a cross-border transfer of your personal data is planned, I will inform you of: (a) the country or countries to which the data will be transferred, (b) the purpose of the transfer, (c) the safeguards in place, and (d) any risks associated with the transfer. If the transfer requires consent, I will seek your explicit, informed consent before proceeding. You have the right to refuse consent for optional transfers, and your decision will not affect core advisory services. However, if the transfer is necessary for service delivery (for example, processing a payment through an international gateway), refusal may limit my ability to provide certain services.
            </p>
            <p>
              <strong>Data Localization Compliance:</strong> I remain mindful of any data localization requirements that may be introduced under Indian law. If future regulations require that certain categories of data (such as sensitive personal data or financial data) be stored exclusively within India, I will ensure full compliance and will migrate any affected data from foreign servers to Indian infrastructure.
            </p>
            <p>
              <strong>Non-Resident Indian (NRI) Clients:</strong> If you are an NRI or if you access my services from outside India, your data may still be transferred to India for processing and storage. By engaging my services, you consent to the transfer of your data to India and acknowledge that it will be subject to Indian data protection laws. If you have concerns about this transfer, please discuss them with me before proceeding.
            </p>
            <p>
              <strong>No Sale or Sharing for Foreign Marketing:</strong> I do not sell, share, or transfer your data to foreign companies for marketing, advertising, or commercial purposes. Any cross-border transfer that occurs is strictly limited to what is necessary for service delivery, compliance, or operational support, and is always subject to the safeguards described above.
            </p>
            <p>
              In summary, I prioritize storing and processing your data within India, but cross-border transfers may occur in limited circumstances. When they do, I implement robust safeguards, seek your consent where required, and ensure full transparency. My approach is designed to balance operational needs with the protection of your privacy and compliance with Indian law.
            </p>
          </section>

          <section id="part-14">
            <h2>Part 14: Enforcement, Compliance, and Accountability</h2>
            <p>
              This Privacy Policy is not merely a set of aspirations or voluntary commitments; it represents legally binding obligations that I must uphold as a SEBI-registered investment adviser and research analyst and as a data fiduciary under the DPDP Act. Enforcement, compliance, and accountability are central to the integrity of this Policy, and I have established clear mechanisms to ensure that these obligations are met.
            </p>
            <p>
              <strong>Regulatory Oversight:</strong> As a registered investment adviser and research analyst, I am subject to ongoing supervision by SEBI. SEBI has the authority to conduct inspections, audits, and investigations of my practice to verify compliance with the Investment Advisers Regulations, Research Analysts Regulations, and related fiduciary duties. This includes reviewing how I collect, process, retain, and protect client data. If SEBI identifies any deficiencies, it can issue directions, impose penalties, suspend my registration, or take other enforcement actions. I cooperate fully with SEBI's supervisory activities and maintain records in a manner that facilitates regulatory review.
            </p>
            <p>
              <strong>Data Protection Board:</strong> Under the DPDP Act, the Data Protection Board of India is empowered to investigate complaints, enforce data protection rights, and impose penalties for violations of privacy obligations. If a client files a complaint with the Board alleging that I have mishandled personal data, the Board can initiate an inquiry, seek explanations, and direct corrective action. Penalties for non-compliance with the DPDP Act can be substantial, and I take my obligations under this Act very seriously.
            </p>
            <p>
              <strong>Internal Compliance Framework:</strong> I maintain an internal compliance framework that includes policies, procedures, and checklists to ensure that I meet all legal and regulatory requirements. This framework covers KYC verification, risk profiling, suitability assessments, record retention, data security, breach management, and client rights. I conduct periodic self-audits to review my compliance status, identify any gaps, and implement corrective measures. This proactive approach helps me stay ahead of potential issues and ensures continuous improvement.
            </p>
            <p>
              <strong>Documentation and Record-Keeping:</strong> I maintain comprehensive records of all data processing activities, including the categories of data collected, the purposes of processing, the legal bases, the retention periods, the security measures in place, and any disclosures or breaches. This documentation allows me to demonstrate compliance to regulators, respond to client inquiries, and support my decision-making in case of disputes. All records are organized, indexed, and accessible in a manner that facilitates efficient retrieval.
            </p>
            <p>
              <strong>Accountability to Clients:</strong> As a solo practitioner, I am personally accountable for every aspect of data handling. There is no diffusion of responsibility across teams or departments. If there is a lapse, an error, or a breach, the responsibility rests entirely with me. This structure creates a high level of accountability and ensures that clients always know who to hold responsible. It also simplifies grievance redressal because there is no need to navigate complex organizational hierarchies or unclear reporting lines.
            </p>
            <p>
              <strong>Continuous Training and Education:</strong> Privacy laws, cybersecurity threats, and industry best practices are constantly evolving. I stay informed about these developments through ongoing education, training, and participation in professional forums. I read regulatory updates from SEBI and the Data Protection Board, attend webinars and workshops on data protection, and consult with legal and compliance experts when necessary. This commitment to continuous learning ensures that I remain knowledgeable and capable of meeting my obligations.
            </p>
            <p>
              <strong>Transparency and Reporting:</strong> I believe that transparency is a cornerstone of accountability. This Privacy Policy is publicly available, written in clear and accessible language, and updated regularly to reflect changes in law or practice. If there are material changes to how I handle data, I will notify clients promptly and provide an opportunity to review the updated Policy. I also maintain open lines of communication with clients, encouraging them to ask questions, raise concerns, or seek clarification at any time.
            </p>
            <p>
              <strong>Third-Party Accountability:</strong> While I am the data fiduciary, I also rely on third-party vendors for certain services. I ensure that these vendors are held accountable through contractual obligations, service level agreements, and regular performance reviews. Vendor agreements include data protection clauses, breach notification requirements, and audit rights. If a vendor fails to meet its obligations, I take corrective action, which may include switching to a more reliable provider.
            </p>
            <p>
              <strong>Consequences of Non-Compliance:</strong> I recognize that failure to comply with privacy obligations can have serious consequences, including regulatory penalties, legal liability, reputational damage, and loss of client trust. These consequences serve as a strong incentive to maintain high standards of compliance. However, my commitment to privacy is not driven solely by fear of penalties; it is rooted in a genuine respect for client rights and an understanding of the fiduciary duty I owe to those who trust me with their personal and financial information.
            </p>
            <p>
              In summary, enforcement and accountability are built into every aspect of my practice. I am subject to regulatory oversight by SEBI and the Data Protection Board. I maintain an internal compliance framework, document all processing activities, and hold myself personally accountable. I stay informed about legal developments, ensure vendor accountability, and communicate transparently with clients. This comprehensive approach ensures that the commitments made in this Policy are not just words on a page but enforceable obligations that I take seriously.
            </p>
          </section>

          <section id="part-15">
            <h2>Part 15: Grievance Redressal Mechanism</h2>
            <p>
              If you have any concerns, complaints, or grievances related to how your personal data is being handled, I have established a clear and accessible grievance redressal mechanism. This mechanism is designed to ensure that your concerns are heard, addressed promptly, and resolved fairly. I serve as the grievance officer for Growsin, and I am directly responsible for managing all privacy-related complaints.
            </p>
            <p>
              <strong>How to File a Grievance:</strong> You can file a grievance by contacting me through any of the following methods: (a) Email: privacy@growsin.in - This is the primary and recommended method for filing grievances because it allows for written documentation and tracking. (b) Phone: You can call me directly on the contact number provided during our advisory engagement. (c) Written Letter: You can send a written letter to my registered office address (as provided in your client agreement or on my website). When filing a grievance, please include your name, contact information, a clear description of the issue, and any supporting documents or evidence.
            </p>
            <p>
              <strong>Acknowledgment:</strong> Upon receiving your grievance, I will acknowledge receipt within 48 hours (excluding weekends and public holidays). The acknowledgment will include a reference number for tracking purposes, an indication of the expected time frame for resolution, and the name and contact information of the person handling your complaint (which, in most cases, will be me).
            </p>
            <p>
              <strong>Investigation and Resolution:</strong> Once your grievance is acknowledged, I will conduct a thorough investigation to understand the facts, review relevant records, and assess whether there has been any violation of this Policy or applicable laws. This may involve reviewing data processing logs, communication records, vendor agreements, or security protocols. I will approach the investigation with objectivity and will consider your perspective seriously and fairly.
            </p>
            <p>
              <strong>Response Time:</strong> I am committed to providing a substantive response to your grievance within 15 business days from the date of acknowledgment. If the matter is complex and requires more time - for example, if it involves coordination with vendors, legal consultation, or technical analysis - I will inform you of the reasons for the delay and provide a revised time frame. In no case will the final response take longer than 30 business days, unless there are exceptional circumstances (such as ongoing legal proceedings) that prevent immediate resolution.
            </p>
            <p>
              <strong>Content of Response:</strong> My response will include: (a) a summary of the grievance and the investigation conducted, (b) my findings regarding whether there was a violation or lapse, (c) the corrective actions I have taken or will take to address the issue, (d) any compensation, remedy, or support I am offering (if applicable), and (e) information about your right to escalate the matter if you are not satisfied with the resolution.
            </p>
            <p>
              <strong>Escalation to Data Protection Board:</strong> If you are not satisfied with my response or if you believe that your grievance has not been adequately addressed, you have the right to escalate the matter to the Data Protection Board of India. The Board has the authority to investigate complaints, direct corrective action, and impose penalties for violations of the DPDP Act. You can file a complaint with the Board through their official website or grievance portal. I will cooperate fully with any inquiry or investigation conducted by the Board.
            </p>
            <p>
              <strong>No Retaliation:</strong> I assure you that there will be no retaliation, discrimination, or adverse consequences for filing a grievance in good faith. Your decision to raise a concern will not affect the quality or availability of advisory services, and it will not impact our professional relationship. I view grievances as an opportunity to improve my practices and to ensure that client rights are upheld.
            </p>
            <p>
              <strong>Record-Keeping:</strong> I maintain records of all grievances received, the investigations conducted, and the resolutions provided. This documentation allows me to identify patterns, address systemic issues, and demonstrate accountability to regulators. Grievance records are stored securely and are accessible only to me and, if required, to regulatory authorities.
            </p>
            <p>
              <strong>Continuous Improvement:</strong> I take every grievance seriously, even if it does not reveal a clear violation. Complaints often highlight areas where communication can be improved, processes can be streamlined, or policies can be clarified. I use grievances as a source of feedback and as a driver of continuous improvement in my privacy practices.
            </p>
            <p>
              In summary, I have a clear, accessible, and efficient grievance redressal mechanism. You can file a grievance by contacting me at privacy@growsin.in, and I will acknowledge it within 48 hours and provide a substantive response within 15 to 30 business days. If you are not satisfied, you can escalate the matter to the Data Protection Board. There will be no retaliation for filing a grievance, and I am committed to resolving all concerns fairly and transparently.
            </p>
          </section>

          <section id="part-16">
            <h2>Part 16: Policy Updates and Client Communication</h2>
            <p>
              Privacy laws, regulatory requirements, and business practices are not static; they evolve over time. As a result, this Privacy Policy may need to be updated periodically to reflect changes in legal obligations, technological advancements, or the scope of services I provide. This final section explains how I manage updates to the Policy and how I communicate those updates to clients.
            </p>
            <p>
              <strong>When Updates May Occur:</strong> I may update this Privacy Policy in the following circumstances: (a) Changes in Law: If there are amendments to the DPDP Act, SEBI regulations, or other applicable laws that affect how I must handle personal data, I will update the Policy to ensure compliance. (b) Changes in Services: If I introduce new services, tools, or features that involve new types of data processing, I will update the Policy to reflect those changes. (c) Changes in Vendors or Infrastructure: If I change hosting providers, payment gateways, or other third-party vendors in a way that affects data handling, I will update the Policy accordingly. (d) Feedback and Continuous Improvement: If I receive feedback from clients or identify areas where the Policy can be clarified or improved, I may update it to enhance transparency and accessibility.
            </p>
            <p>
              <strong>Notification of Updates:</strong> Whenever a material change is made to this Policy, I will notify all active clients through the primary communication channels we have established. This typically includes email notification to the address you have provided. The notification will include: (a) a summary of the key changes, (b) the effective date of the updated Policy, (c) a link to the full updated Policy, and (d) information about how the changes may affect you and your rights. I will provide this notification at least 30 days in advance of the effective date, giving you time to review the changes and raise any concerns.
            </p>
            <p>
              <strong>Effective Date:</strong> The updated Policy will come into effect on the date specified in the notification. Data processing activities conducted after that date will be governed by the updated Policy. However, any processing that occurred before the effective date will continue to be governed by the version of the Policy that was in effect at the time, unless the updated Policy provides greater protections for clients.
            </p>
            <p>
              <strong>Consent for Material Changes:</strong> If an update involves a material change that requires your consent - for example, if I plan to use your data for a new purpose that was not previously disclosed, or if I plan to transfer data to a new country - I will seek your explicit consent before implementing the change. You will have the right to refuse consent, and your decision will not affect the availability of core advisory services (though it may limit certain optional features or services).
            </p>
            <p>
              <strong>Access to Previous Versions:</strong> I maintain an archive of previous versions of this Privacy Policy. If you wish to review a previous version - for example, to understand what terms were in effect at the time you first engaged my services - you can request access by contacting me at privacy@growsin.in. This ensures transparency and allows you to trace the evolution of my privacy commitments over time.
            </p>
            <p>
              <strong>Ongoing Communication:</strong> Beyond formal updates to this Policy, I am committed to ongoing communication about privacy and data protection. If there are significant developments in privacy law, emerging security threats, or best practices that may affect you, I will share that information through client newsletters, website updates, or direct communication. I believe that informed clients are empowered clients, and I see education as an essential part of my role as a data fiduciary.
            </p>
            <p>
              <strong>Client Questions and Feedback:</strong> If you have questions about any update to this Policy, or if you have suggestions for how it can be improved, I encourage you to reach out. I value your feedback and I view the Policy as a living document that should evolve in response to client needs, legal changes, and practical experience. Your input helps me ensure that the Policy remains clear, relevant, and effective.
            </p>
            <p>
              <strong>No Retroactive Application of Disadvantageous Changes:</strong> I will not apply changes to this Policy retroactively in a manner that diminishes your rights or protections. For example, if the Policy is updated to extend a data retention period, that extension will apply only to data collected or advice provided after the effective date of the update, not to data that was already subject to a shorter retention period under the previous Policy. This principle ensures fairness and protects your reasonable expectations.
            </p>
            <p>
              In summary, this Privacy Policy may be updated periodically to reflect changes in law, services, or best practices. I will notify you of material changes at least 30 days in advance, seek your consent where required, and provide access to previous versions of the Policy. Updates will not be applied retroactively in a disadvantageous manner, and I am always available to answer questions or address concerns about any changes.
            </p>
          </section>

          {/* Footer meta */}
          <footer className="policy-footer" aria-label="policy meta">
            <p className="mil-text-s mil-soft">Effective date: <strong>2025-11-14</strong></p>
            <p className="mil-text-s mil-soft">Contact: <a href="mailto:privacy@growsin.in">privacy@growsin.in</a></p>
          </footer>
        </article>

        <style jsx>{`
          /* Layout guard so hero sits below navbar.
             If your PlaxLayout or global CSS sets --plax-nav-height, that value will be used.
             Otherwise fallback to 92px which matches many header heights.
          */
          .policy-page {
            max-width: 1100px;
            padding-top: calc(var(--plax-nav-height, 92px) + 10px);
            padding-bottom: 48px;
          }

          .policy-header {
            margin-bottom: 6px;
            MARGIN-TOP: 30PX;
          }

          .brand-row {
            display: flex;
            gap: 18px;
            align-items: center;
            flex-wrap: wrap;
          }

          .brand-logo {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .brand-text {
            flex: 1 1 auto;
            min-width: 200px;
          }

          h1 {
            font-size: 28px;
            margin: 0 0 8px 0;
            line-height: 1.05;
            color: #063159; /* keep brand-friendly color */
            font-weight: 700;
          }

          .tagline {
            margin: 0;
            color: rgba(0,0,0,0.6);
            font-weight: 600;
            font-size: 14px;
          }

          .small-tag {
            margin-top: 10px;
            color: #58606b;
            font-size: 15px;
          }

          .policy-content {
            margin-top: 14px;
          }

          .policy-content h2 {
            margin-top: 28px;
            font-size: 20px;
            color: #07406a;
          }

          .policy-content h3 {
            margin-top: 18px;
            font-size: 16px;
            color: #0b516e;
          }

          .policy-content p {
            color: #2d2d2d;
            line-height: 1.7;
            margin: 10px 0;
            font-size: 15px;
          }

          .policy-footer {
            margin-top: 28px;
            border-top: 1px solid rgba(0,0,0,0.06);
            padding-top: 12px;
            display: flex;
            gap: 24px;
            flex-wrap: wrap;
            align-items: center;
          }

          a {
            color: #0766a3;
            text-decoration: underline;
          }

          @media (max-width: 992px) {
            h1 {
              font-size: 24px;
            }
            .small-tag {
              font-size: 14px;
            }
          }

          @media (max-width: 768px) {
            .policy-page {
              padding-top: calc(var(--plax-nav-height, 72px) + 8px);
              padding-left: 16px;
              padding-right: 16px;
            }
            .brand-row {
              gap: 12px;
            }
            h1 {
              font-size: 20px;
            }
            .brand-logo img {
              width: 52px;
              height: 52px;
            }
          }
        `}</style>
      </main>
    </PlaxLayout>
  );
}
