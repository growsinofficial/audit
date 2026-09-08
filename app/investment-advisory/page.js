'use client';
import { useState, useEffect } from 'react';
import PlaxLayout from '../../layouts/PlaxLayout';
import { CallToAction2 } from '../../components/CallToAction';
import Script from 'next/script';

const InvestmentAdvisoryPage = () => {
  const [currentView, setCurrentView] = useState('main');
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(isMobile);
      setIsTablet(isTablet);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      setCurrentView(hash || 'main');
      window.scrollTo(0, 0);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleNavClick = (view, e) => {
    e.preventDefault();
    window.location.hash = view;
  };

  return (
    <PlaxLayout>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif !important;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        
        .investment-advisory-section * {
          font-family: 'Inter', sans-serif !important;
        }
        
        .investment-advisory-section .font-display,
        .investment-advisory-section .font-display * {
          font-family: 'Manrope', sans-serif !important;
        }
        
        #pricing .pricing-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1.5rem !important;
          align-items: stretch !important;
        }
        
        @media (max-width: 1024px) {
          #pricing .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        #pricing .pricing-column {
          border: 1px solid #dee2e6 !important;
          border-radius: 1rem !important;
          transition: all 0.3s ease !important;
          background: white !important;
          display: flex !important;
          flex-direction: column !important;
          overflow: visible !important;
        }
        
        #pricing .pricing-column.featured {
          border: 2px solid #1F9A32 !important;
          box-shadow: 0 12px 40px rgba(31, 154, 50, 0.2) !important;
          transform: scale(1.03) !important;
          background: linear-gradient(to bottom, #f0fdf4, #ffffff) !important;
        }
        
        .investment-advisory-section .pricing-column:hover {
          border-color: #002C51;
          transform: scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0, 44, 81, 0.2);
        }
        
        .investment-advisory-section .cta-button {
          transition: all 0.3s ease;
          display: block;
          text-align: center;
          text-decoration: none;
        }
        
        .investment-advisory-section .service-list ul {
          list-style-type: none;
          padding: 0;
        }
        
        .investment-advisory-section .service-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 8px;
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .investment-advisory-section .service-list li {
            padding-left: 22px;
            margin-bottom: 6px;
            font-size: 0.8125rem;
          }
        }
        
        .investment-advisory-section .service-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          top: 1px;
          color: #1F9A32;
          font-weight: 600;
          font-size: 0.875rem;
        }
        
        @media (max-width: 768px) {
          .investment-advisory-section .service-list li::before {
            font-size: 0.75rem;
          }
        }
        
        .investment-advisory-section .detail-page {
          background-color: #f8f9fa;
          padding: 2rem 0 3rem;
        }
        
        .investment-advisory-section .glass-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
        
        .investment-advisory-section .detail-list h3 {
          font-family: 'Manrope', sans-serif !important;
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 1rem;
          color: #111827;
        }
        
        .investment-advisory-section .detail-list h4 {
          font-family: 'Manrope', sans-serif !important;
          font-size: 1.125rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          color: #111827;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 0.5rem;
        }
        
        .investment-advisory-section .detail-list h5 {
          font-family: 'Manrope', sans-serif !important;
          font-size: 0.875rem;
          font-weight: 700;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        
        .investment-advisory-section .detail-list p {
          margin-bottom: 0.875rem;
          color: #1f2937;
          line-height: 1.6;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .investment-advisory-section .detail-list .benefit {
          color: #1F9A32;
          font-weight: 600;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        
        .investment-advisory-section .detail-list ul {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .investment-advisory-section .detail-list li {
          color: #4b5563;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        
        .investment-advisory-section table {
          font-size: 0.875rem;
          border-collapse: collapse;
        }
        
        .investment-advisory-section table th,
        .investment-advisory-section table td {
          padding: 0.75rem 1rem;
        }
        
        .investment-advisory-section .comparison-table {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .investment-advisory-section .our-price-col {
          background-color: #f0f9ff;
          font-weight: 600;
        }
        
        @media (max-width: 1024px) {
          .investment-advisory-section .glass-card {
            padding: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .investment-advisory-section .glass-card {
            padding: 1.5rem;
          }
          
          .investment-advisory-section table {
            font-size: 0.75rem;
          }
          
          .investment-advisory-section table th,
          .investment-advisory-section table td {
            padding: 0.5rem;
          }
        }
        
        .investment-advisory-section .comparison-table {
          border-collapse: collapse;
          width: 100%;
        }
        
        .investment-advisory-section .comparison-table th {
          text-align: left;
          padding: 0.75rem 1rem;
          background-color: #f8f9fa;
          font-weight: 700;
          border-bottom: 2px solid #dee2e6;
        }
        
        .investment-advisory-section .comparison-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .investment-advisory-section .our-price-col {
          background-color: #e6f7ff;
          font-weight: 700;
          color: #005f99;
        }
        
        .investment-advisory-section .process-diagram {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        
        .investment-advisory-section .process-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .investment-advisory-section .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex-basis: 100px;
          flex-grow: 1;
        }
        
        .investment-advisory-section .process-icon {
          width: 50px;
          height: 50px;
          background-color: #e0e7ff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
          color: #4f46e5;
          flex-shrink: 0;
        }
        
        .investment-advisory-section .process-icon svg {
          width: 24px;
          height: 24px;
        }
        
        .investment-advisory-section .process-step p {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }
        
        .investment-advisory-section .process-arrow {
          font-size: 2rem;
          color: #d1d5db;
          margin-top: 12px;
          display: none;
        }
        
        @media (min-width: 1024px) {
          .investment-advisory-section .process-arrow {
            display: block;
          }
        }
      `}</style>

      <div className="investment-advisory-section" style={{ marginTop: '100px' }}>
        <div id="router-view">
          {/* Main Pricing Page */}
          {currentView === 'main' && (
            <main id="page-main" style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '1rem 1rem 2rem' : '1rem 2rem 3rem' }}>
              {/* Hero Section */}
              <section className="text-center mx-auto mb-8" style={{ maxWidth: '1000px', padding: '0 0 1rem' }}>
                <h1 className="font-display" style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '1rem', marginTop: isMobile ? '1rem' : '2rem', lineHeight: '1.3' }}>
                  "Every Rupee You Earn Deserves a Clear Plan and a Confident Future."
                </h1>
                <p style={{ fontSize: isMobile ? '0.875rem' : '0.9375rem', color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                  At Growsin, we believe financial planning is more than charts and calculations — it's about creating a meaningful, sustainable life. We offer unbiased, research-backed investment guidance that evolves with your needs, so you're always in control of your financial journey.
                </p>
                <p style={{ fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', color: '#9ca3af', letterSpacing: '0.05em', marginTop: '1rem', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
                  SEBI Registered | Fee-Only Advice | Personalized Plans | Backed by Research and Ethics
                </p>
              </section>

              {/* Pricing & Services Section */}
              <section id="pricing" style={{ overflow: 'visible' }}>
                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1rem' : '1.5rem', overflow: 'visible' }}>

                  {/* Column 1: Comprehensive Financial Planning */}
                  <div className="pricing-column" style={{ padding: isMobile ? '1.25rem' : '1.75rem', background: '#ffffff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', borderRadius: '1rem', overflow: 'visible' }}>
                    <h2 className="font-display" style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: '700', color: '#111827' }}>Comprehensive Planning</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: isMobile ? '0.75rem' : '0.8125rem', color: '#6b7280' }}>A complete financial roadmap for individuals and families.</p>
                    <div style={{ marginTop: '1.25rem' }}>
                      <p className="font-display" style={{ fontSize: isMobile ? '1.875rem' : '2.25rem', fontWeight: '700', color: '#111827' }}>₹34,999</p>
                      <p style={{ fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '500', color: '#9ca3af' }}>One-time fee</p>
                    </div>
                    <div style={{ margin: '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: '0.8125rem' }}>Key Areas Covered:</h3>
                      <ul>
                        <li>Financial Health Check</li>
                        <li>Goal-Based Financial Planning</li>
                        <li>Risk Management Planning</li>
                        <li>Investment Planning</li>
                        <li>Retirement & Pension Planning</li>
                        <li>Debt & Credit Advisory</li>
                      </ul>
                      <div style={{ marginTop: '1.25rem', padding: '1rem', backgroundColor: '#f9fafb', borderRadius: '0.5rem', border: '1px solid #e5e7eb' }}>
                        <p style={{ fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>₹34,999 (one-time fee)</p>
                        <p style={{ fontSize: isMobile ? '0.6875rem' : '0.75rem', color: '#4b5563', lineHeight: '1.5', marginBottom: '0.75rem' }}>This includes a complete, end-to-end financial plan with full support for the first month.</p>
                        <p style={{ fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', color: '#111827', marginTop: '0.75rem', marginBottom: '0.5rem' }}>Ongoing Advisory (Optional)</p>
                        <p style={{ fontSize: isMobile ? '0.6875rem' : '0.75rem', color: '#4b5563', lineHeight: '1.5' }}>If you'd like continued monthly guidance, monitoring, and plan updates after the first month,</p>
                        <p style={{ fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', color: '#1F9A32', marginTop: '0.5rem' }}>₹2,499 per month, billed for a 6-month cycle.</p>
                      </div>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-1" onClick={(e) => handleNavClick('plan-1', e)} className="cta-button" style={{ padding: '0.625rem', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: '0.625rem', fontSize: '0.8125rem', fontWeight: '600', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>

                  {/* Column 2: Exclusive Wealth Management */}
                  <div className="pricing-column featured" style={{ padding: isMobile ? '1.5rem' : '2rem', background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)', border: '2px solid #1F9A32', boxShadow: '0 12px 40px rgba(31, 154, 50, 0.2)', transform: isTablet ? 'scale(1)' : 'scale(1.03)', borderRadius: '1rem', overflow: 'visible', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, boxShadow: '0 2px 8px rgba(31, 154, 50, 0.3)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '600', letterSpacing: '0.025em', color: 'white', borderRadius: '9999px', padding: isMobile ? '3px 12px' : '4px 16px', fontSize: isMobile ? '0.6875rem' : '0.75rem', background: 'linear-gradient(135deg, #1F9A32, #16a34a)' }}>Most Popular</span>
                    </div>
                    <h2 className="font-display" style={{ fontSize: isMobile ? '1.125rem' : '1.5rem', fontWeight: '700', color: '#111827' }}>Exclusive Wealth Management</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: isMobile ? '0.75rem' : '0.875rem', color: '#6b7280' }}>Bespoke strategies for high-net-worth clients.</p>
                    <div style={{ marginTop: isMobile ? '1rem' : '1.5rem' }}>
                      <p className="font-display" style={{ fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: '700', color: '#111827' }}>Customized</p>
                      <p style={{ fontSize: isMobile ? '0.75rem' : '0.875rem', fontWeight: '500', color: '#9ca3af' }}>Preferred for &gt; ₹1 Cr Net Worth</p>
                    </div>
                    <div style={{ margin: isMobile ? '1rem 0' : '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: isMobile ? '0.75rem' : '0.8125rem' }}>Includes all Comprehensive services, plus:</h3>
                      <ul style={{ fontSize: isMobile ? '0.8125rem' : '0.875rem' }}>
                        <li>Strategic Wealth Structuring</li>
                        <li>Tactical Capital Growth & Investment</li>
                        <li>Global Diversification & Offshore Planning</li>
                        <li>Advanced Tax Planning & Exit Strategy</li>
                        <li>Legacy & Succession Planning</li>
                        <li>Alternative & Private Market Advisory</li>
                        <li>Lifestyle, Concierge & Philanthropy</li>
                      </ul>
                    </div>
                    <div style={{ marginTop: isMobile ? '1rem' : '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-2" onClick={(e) => handleNavClick('plan-2', e)} className="cta-button" style={{ padding: isMobile ? '0.5rem' : '0.625rem', fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: isMobile ? '0.5rem' : '0.625rem', fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>

                  {/* Column 3: Portfolio Rebalancing */}
                  <div className="pricing-column" style={{ padding: isMobile ? '1.25rem' : '1.75rem', background: '#ffffff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', borderRadius: '1rem', overflow: 'visible' }}>
                    <h2 className="font-display" style={{ fontSize: isMobile ? '1.125rem' : '1.375rem', fontWeight: '700', color: '#111827' }}>Portfolio Rebalancing</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: isMobile ? '0.75rem' : '0.8125rem', color: '#6b7280' }}>A one-time service to align your portfolio.</p>
                    <div style={{ marginTop: '1.25rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? '0.5rem' : '0.75rem' }}>
                        <div style={{ textAlign: 'right' }}>
                          <p className="font-display" style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: '700', color: '#111827' }}>₹14,999</p>
                          <p style={{ fontSize: isMobile ? '0.625rem' : '0.6875rem', fontWeight: '500', color: '#9ca3af' }}>up to ₹50L</p>
                        </div>
                        <div style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: '200', color: '#d1d5db' }}>/</div>
                        <div style={{ textAlign: 'left' }}>
                          <p className="font-display" style={{ fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: '700', color: '#111827' }}>₹24,999</p>
                          <p style={{ fontSize: isMobile ? '0.625rem' : '0.6875rem', fontWeight: '500', color: '#9ca3af' }}>above ₹50L</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ margin: isMobile ? '1rem 0' : '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: isMobile ? '0.75rem' : '0.8125rem' }}>What's Included:</h3>
                      <ul style={{ fontSize: isMobile ? '0.8125rem' : '0.875rem' }}>
                        <li>In-depth Portfolio Analysis & Risk Profiling</li>
                        <li>Intrinsic Value Analysis (DCF Modeling)</li>
                        <li>Asset Allocation using Modern Portfolio Theory (MPT)</li>
                        <li>Portfolio Optimization & Gap Analysis</li>
                        <li>Actionable Rebalancing Report</li>
                        <li>Execution Guidance & Support</li>
                      </ul>
                    </div>
                    <div style={{ marginTop: isMobile ? '1rem' : '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-3" onClick={(e) => handleNavClick('plan-3', e)} className="cta-button" style={{ padding: isMobile ? '0.5rem' : '0.625rem', fontSize: isMobile ? '0.6875rem' : '0.75rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: isMobile ? '0.5rem' : '0.625rem', fontSize: isMobile ? '0.75rem' : '0.8125rem', fontWeight: '600', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>
                </div>
              </section>
            </main>
          )}

          {/* Detail Pages - Will be loaded from planData.js */}
          {currentView !== 'main' && (
            <div className="detail-page" style={{ marginTop: isMobile ? '80px' : '100px' }}>
              <div style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
                <a href="#main" onClick={(e) => handleNavClick('main', e)} className="inline-flex items-center mb-4" style={{ color: '#002C51', textDecoration: 'none', fontWeight: '600', fontSize: isMobile ? '0.8125rem' : '0.875rem', display: 'inline-flex', alignItems: 'center', marginBottom: isMobile ? '1rem' : '1.5rem' }}>
                  <svg style={{ width: isMobile ? '18px' : '20px', height: isMobile ? '18px' : '20px', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to All Plans
                </a>
                <div className="glass-card" style={{ padding: isMobile ? '1.25rem' : '2rem' }}>
                  <h1 className="font-display" style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '700', color: '#111827', lineHeight: '1.3', marginBottom: isMobile ? '1rem' : '1.25rem' }}>
                    {currentView === 'plan-1' && 'Comprehensive Planning: Detailed Services'}
                    {currentView === 'plan-2' && 'Exclusive Wealth Management: In Depth'}
                    {currentView === 'plan-3' && 'Portfolio Rebalancing: In Depth'}
                  </h1>
                  <div className="detail-list">
                    {currentView === 'plan-1' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-1'].details }} />
                    )}
                    {currentView === 'plan-2' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-2'].details }} />
                    )}
                    {currentView === 'plan-3' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-3'].details }} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <CallToAction2 />
      </div>
    </PlaxLayout>
  );
};

export default InvestmentAdvisoryPage;

