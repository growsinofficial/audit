"use client";

import { useEffect } from "react";
import { CallToAction2 } from "@/components/CallToAction";
import PlaxLayout from "@/layouts/PlaxLayout";
import Image from "next/image";

const Founder = () => {
  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add('visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', () => {
      handleScrollAnimation();
    });

    // Initial check
    handleScrollAnimation();

    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <PlaxLayout>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f8f9fa;
          color: #1f2937;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(60px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1), transform 1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .image-container {
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .image-container img {
          transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }
        
        .image-container:hover {
          transform: translateY(-8px);
        }
        
        .image-container:hover img {
          transform: scale(1.05);
        }
        
        .accent-line {
          width: 80px;
          height: 3px;
          background-color: #3b82f6;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s;
        }
        
        .scroll-reveal.visible .accent-line {
          transform: scaleX(1);
        }
        
        .accent-line.right {
          margin-left: auto;
          transform-origin: right;
        }
        
        .pull-quote {
          margin: 2rem 0;
          padding: 1.5rem;
          border-left-width: 4px;
          border-color: #3b82f6;
          background-color: #eff6ff;
          border-radius: 0 0.5rem 0.5rem 0;
          font-style: normal;
          font-weight: 500;
          color: #1d4ed8;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .pull-quote:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(60, 130, 246, 0.15);
        }
        
        .glass-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }

        .founder-image-col {
          float: right;
          width: 50%;
          padding-left: 4rem;
          margin-bottom: 2rem;
        }

        .founder-image-col-left {
          float: left;
          width: 50%;
          padding-right: 4rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 1024px) {
          .glass-card {
            padding: 2rem;
          }
          
          .founder-image-col,
          .founder-image-col-left {
            width: 100%;
            float: none;
            padding-left: 0;
            padding-right: 0;
            margin-bottom: 2rem;
          }
        }

        @media (max-width: 768px) {
          .glass-card {
            padding: 1.5rem;
          }
          
          .image-container {
            max-width: 100%;
          }
        }

        @media (max-width: 640px) {
          .glass-card {
            padding: 1.25rem;
          }
          
          .hero-headline {
            font-size: 1.5rem !important;
            margin-bottom: 1rem !important;
          }
          
          .hero-content p {
            font-size: 0.875rem !important;
            margin-bottom: 0.75rem !important;
            line-height: 1.5 !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: "linear-gradient(135deg, #ffffff, #f0f4f8, #e0e7ff)",
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "120px 1.5rem 3rem",
          marginTop: '10px'
        }}
      >
        <div style={{ maxWidth: "1200px", width: "100%", padding: "0 1.5rem" }}>
          <h1
            id="headline"
            className="hero-headline"
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '1.5rem',
              lineHeight: '1.2',
              textAlign: 'center'
            }}
          >
            "Research with Purpose, Advice with Integrity"
          </h1>
          
          <div className="hero-content" style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
            <p style={{ fontSize: "1rem", color: "#6b7280", marginBottom: "1rem", lineHeight: "1.6" }}>
              "I believe wealth management should be unbiased, transparent, and deeply personal. With SEBI-regulated expertise and global perspectives, I simplify complexity and guide you with clarity. From research-backed strategies to personalized execution, every step is crafted with integrity. Together, we build not just wealth, but long-term financial confidence."
            </p>
            <p style={{ fontSize: "1rem", color: "#1f2937", marginBottom: "1rem", lineHeight: "1.6", fontWeight: "500" }}>
              The future of wealth management is not shaped by finance alone, nor by technology in isolation — it is defined by their convergence. As the Founder of Growsin and SEBI-registered RIA & RA, my mission is to deliver advice that is transparent, unbiased, and deeply rooted in research, guided always by fiduciary responsibility.
            </p>
            <p style={{ fontSize: "1rem", color: "#1f2937", marginBottom: "1rem", lineHeight: "1.6", fontWeight: "500" }}>
              In today's digital-first world, the delivery of advice matters as much as the advice itself. Clients deserve clarity, speed, and seamless execution. Here, the perspective of my close friend — an experienced Chief Technology Officer from another industry — is both inspiring and forward-looking. His world of AI, automation, and digital intelligence shows how technology can transform complexity into simplicity and insights into action.
            </p>
            <p style={{ fontSize: "1rem", color: "#1f2937", marginBottom: "0", lineHeight: "1.6", fontWeight: "500" }}>
              AI does not replace judgment — it enhances it. Paired with regulated financial expertise, it sharpens research, personalizes strategies, and anticipates client needs with precision. This is the future we see: finance as the foundation, technology as the accelerator, and AI as the amplifier — creating wealth management that is transparent, personalized, and truly future-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Founder 1: The Strategist */}
      <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="scroll-reveal" style={{ display: "flow-root" }}>
            <div className="founder-image-col">
              <div className="image-container" style={{ maxWidth: "600px", marginLeft: "auto" }}>
                <Image
                  src="/img/inner-pages/team/Murali Krishna Sivvala.jpeg"
                  alt="Murali Krishna Sivvala"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className="glass-card">
                <div className="accent-line" style={{ marginBottom: "1.5rem" }}></div>
                <p style={{ color: "#3b82f6", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.875rem" }}>THE STRATEGIST</p>
                <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#000000", marginTop: "0.5rem" }}>MURALI KRISHNA SIVVALA</h2>
                <h3 style={{ fontSize: "1.125rem", color: "#6b7280", marginTop: "0.5rem" }}>SEBI Registered Investment Adviser & Research Analyst</h3>
                <div style={{ marginTop: "1.5rem", fontSize: "1rem", color: "#1f2937", lineHeight: "1.6" }}>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "As the Founder of Growsin and SEBI-registered Investment Advisor (RIA) and Research Analyst (RA), my mission is to deliver financial advice that is transparent, unbiased, and deeply rooted in research. Every recommendation I provide is guided by fiduciary responsibility, ensuring that the client's best interest is always the only interest."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "Wealth management, for me, is not about selling products or chasing trends—it is about building a disciplined, long-term framework where clarity replaces confusion and confidence replaces uncertainty. My approach is designed to simplify complexity, align strategies with personal goals, and create a clear path toward financial independence."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "In an industry where trust is the most valuable currency, I believe integrity must be the cornerstone of every decision. That is why I operate on a fee-only, SEBI-regulated model—eliminating conflicts of interest and placing transparency at the heart of the advisory relationship. My role is not to predict the future, but to prepare you for it with research-driven insights and unbiased guidance."
                  </p>

                  <blockquote className="pull-quote" style={{ fontSize: "1.125rem" }}>
                    My ultimate goal is to deliver more than just returns—I aim to provide you with clarity, confidence, and continuity.
                  </blockquote>

                  <p style={{ marginBottom: "1.25rem" }}>
                    "Every client's journey is unique, and so are the strategies I design. Financial planning cannot be a one-size-fits-all solution; it must reflect individual goals, circumstances, and aspirations. That is why I take a highly personalized approach, crafting roadmaps that evolve as life changes—ensuring that your plan remains as dynamic as your ambitions."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "I view wealth management not as a series of transactions, but as a long-term partnership. My role extends far beyond numbers on a page; it is about guiding you through each stage of your financial journey with clarity, consistency, and confidence. From wealth creation to preservation, my focus remains on supporting you with advice that stands the test of time."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "At the same time, I recognize that we are living in a digital-first world where technology is reshaping every aspect of finance. By integrating research with advanced tools, I ensure that clients gain access to real-time insights, transparent reporting, and seamless execution. This combination of regulated expertise and digital clarity transforms financial complexity into simplicity."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "Another cornerstone of my philosophy is education. I believe informed clients make better decisions, and better decisions create lasting confidence. That is why I place equal emphasis on explaining strategies as I do on designing them—helping clients understand not just what they are doing, but why they are doing it."
                  </p>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "Ultimately, my purpose as a SEBI-registered RIA and RA is to stand as a trusted guide—combining fiduciary integrity, research-driven strategies, and technology-enabled clarity. By aligning advice with your best interest, simplifying complexity, and empowering you with knowledge, I strive to create a wealth management experience that is transparent, personalized, and truly built around you."
                  </p>

                  <blockquote className="pull-quote" style={{ fontSize: "1.125rem" }}>
                    In the end, my practice is about more than numbers. It is about relationships, trust, and stewardship. It is about building financial frameworks that provide not just profitability, but peace of mind.
                  </blockquote>

                  <p style={{ marginBottom: "1.25rem" }}>

                    "I believe the future of financial advice lies at the intersection of human judgment and technological innovation. While my role as a fiduciary ensures that every recommendation is rooted in integrity and research, the use of modern tools and AI-driven insights allows those recommendations to be delivered with greater precision, speed, and clarity. This harmony between trust and technology ensures that clients benefit from the best of both worlds."
                  </p>
                  <p style={{ marginBottom: "0" }}>
                    "Ultimately, my commitment is simple yet profound—to protect, guide, and empower clients on their financial journey. By combining the discipline of regulated financial expertise with the possibilities of digital innovation, I aim to redefine what wealth management can be: transparent, personalized, and future-ready. This is not just about managing wealth—it is about building confidence and creating a foundation for lasting financial freedom."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder 2: The Architect */}
      <section style={{ padding: "5rem 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div className="scroll-reveal" style={{ display: "flow-root" }}>
            <div className="founder-image-col-left">
              <div className="image-container" style={{ maxWidth: "600px" }}>
                <Image
                  src="/img/inner-pages/team/Kartik Mahajan.jpeg"
                  alt="Kartik Mahajan"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
              </div>
            </div>

            <div>
              <div className="glass-card">
                <div className="accent-line right" style={{ marginBottom: "1.5rem" }}></div>
                <p style={{ color: "#3b82f6", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.875rem" }}>THE ARCHITECT</p>
                <h2 style={{ fontSize: "2rem", fontWeight: "700", color: "#000000", marginTop: "0.5rem" }}>KARTIK MAHAJAN</h2>
                <h3 style={{ fontSize: "1.125rem", color: "#6b7280", marginTop: "0.5rem" }}>Chief Technology Officer Perspective</h3>
                <div style={{ marginTop: "1.5rem", fontSize: "1rem", color: "#1f2937", lineHeight: "1.6" }}>
                  <p style={{ marginBottom: "1.25rem" }}>
                    "From India, I lead with the mindset of an architect—designing digital systems that go beyond simply solving technical problems. My work is about embedding intelligence, clarity, and accessibility into every layer of how people interact with technology. For me, software is not just code; it is the foundation of trust, built to make complex processes simple, transparent, and human-centered."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "At the core of every platform I build is security. In a world where data is the new currency, protecting information is not optional—it is essential. That is why my approach integrates advanced encryption, multi-layered authentication, and resilient architectures designed to withstand evolving digital risks. Security is not just a feature; it is the backbone of trust that makes every digital interaction possible."
                  </p>

                  <blockquote className="pull-quote" style={{ fontSize: "1.25rem" }}>
                    Our goal is to transform financial complexity into clarity—delivering dashboards, reports, and visualizations that allow you to instantly understand your financial position.
                  </blockquote>

                  <p style={{ marginBottom: "2rem" }}>
                    "Yet, security alone is not enough. A platform that is safe but confusing still fails its purpose. That is why I place transparency and simplicity at the core of my digital design philosophy. My goal is to turn technical and business complexity into clarity—delivering dashboards, workflows, and insights that allow users to instantly understand where they stand. No hidden layers, no unnecessary jargon—just information presented clearly, when it matters most."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "The user experience must feel intuitive and effortless. Too often, software overwhelms with features instead of empowering with clarity. I wanted to change that. The systems I design remove friction points, automate repetitive tasks, and create interfaces that allow users to act quickly and confidently. Every line of code is written with purpose, ensuring that technology is not a maze but a guide toward simplicity and efficiency."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "A defining principle of my work is real-time visibility. Businesses, markets, and client needs shift constantly, and software must keep pace. That is why the platforms I build provide live data, instant updates, and dynamic reports—ensuring users are never left in the dark. With this level of access, people can make informed, confident decisions without waiting for delayed processes or outdated reports."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "Beyond reporting, I focus on building tools that enable true interactive engagement. Whether it is simulating different business scenarios, exploring 'what if' projections, or adjusting assumptions around growth, costs, and outcomes, users can directly interact with their data. This transforms technology from a static reporting system into a dynamic, collaborative platform—one where people remain active participants, testing possibilities, and shaping their future with confidence."
                  </p>

                  <blockquote className="pull-quote" style={{ fontSize: "1.25rem" }}>
                    Ultimately, my role in building this platform is about aligning technology with trust.
                  </blockquote>

                  <p style={{ marginBottom: "2rem" }}>
                    "What makes my approach unique is the blend of advanced capability with elegant design. Too often, technology is either powerful but overwhelming, or simple but limited. My vision bridges that gap—delivering enterprise-grade performance within an interface that feels natural, intuitive, and accessible. It is software that speaks your language, not just that of developers or engineers."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "I also believe technology should never stand still. Just as businesses and industries evolve, so too must the platforms that serve them. That is why I treat every system as a living product—constantly refined with new features, smarter integrations, and stronger safeguards. The solutions I build today are designed to stay relevant tomorrow, giving users confidence that they can adapt and grow without disruption."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "Integration is another cornerstone of my philosophy. I don't build isolated tools; I design ecosystems that connect seamlessly with existing platforms, databases, and workflows. This reduces duplication, minimizes errors, and creates a single, unified source of truth. When every piece of data connects with precision, the user gains clarity, control, and efficiency."
                  </p>
                  <p style={{ marginBottom: "2rem" }}>
                    "Above all, my vision for technology is about empowerment. Software should not create dependency; it should create independence. By giving users control over their data, real-time insights, and interactive tools, I enable them to take ownership of their decisions. With every interaction, they step into a space of clarity, confidence, and control—technology working for them, not the other way around."
                  </p>
                  <p style={{ marginBottom: "0" }}>
                    "Ultimately, my role as a technologist is about aligning innovation with trust. Just as financial expertise relies on fiduciary responsibility, technology must reinforce confidence at every step. When human judgment and digital intelligence work hand in hand, the result is a seamless, modern experience—one where trust is embedded not only in the advisor's words but in the very fabric of the technology itself."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles That Power Growsin */}
      <section style={{ padding: "5rem 0", backgroundColor: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#111827", marginBottom: "1rem" }}>
              Principles That Power Growsin
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {/* Principle 1 */}
            <div className="scroll-reveal" style={{ 
              background: "#ffffff", 
              padding: "2rem", 
              borderRadius: "1rem", 
              textAlign: "center",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ 
                width: "64px", 
                height: "64px", 
                margin: "0 auto 1.5rem", 
                background: "#f0f9ff", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image
                  src="/img/inner-pages/icons/1.svg"
                  alt="Fiduciary Clarity"
                  width={32}
                  height={32}
                />
              </div>
              <h5 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Fiduciary Clarity
              </h5>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: "1.6", marginBottom: "0" }}>
                Advice that is transparent, conflict-free, and accountable — always aligned to your interests.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="scroll-reveal" style={{ 
              background: "#ffffff", 
              padding: "2rem", 
              borderRadius: "1rem", 
              textAlign: "center",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ 
                width: "64px", 
                height: "64px", 
                margin: "0 auto 1.5rem", 
                background: "#f0fdf4", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image
                  src="/img/inner-pages/icons/2.svg"
                  alt="Research + AI"
                  width={32}
                  height={32}
                />
              </div>
              <h5 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Research + AI
              </h5>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: "1.6", marginBottom: "0" }}>
                Regulated expertise enhanced by AI for sharper insights, personalization, and faster decisions.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="scroll-reveal" style={{ 
              background: "#ffffff", 
              padding: "2rem", 
              borderRadius: "1rem", 
              textAlign: "center",
              boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease"
            }}>
              <div style={{ 
                width: "64px", 
                height: "64px", 
                margin: "0 auto 1.5rem", 
                background: "#fef3c7", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
              }}>
                <Image
                  src="/img/inner-pages/icons/3.svg"
                  alt="Confidence for Life"
                  width={32}
                  height={32}
                />
              </div>
              <h5 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>
                Confidence for Life
              </h5>
              <p style={{ fontSize: "1rem", color: "#6b7280", lineHeight: "1.6", marginBottom: "0" }}>
                We replace confusion with clarity and uncertainty with a disciplined, long-term framework.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction2 />

    </PlaxLayout>
  );
};

export default Founder;
