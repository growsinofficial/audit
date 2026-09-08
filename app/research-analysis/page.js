'use client';
import { useState, useEffect } from 'react';
import PlaxLayout from '../../layouts/PlaxLayout';
import { CallToAction2 } from '../../components/CallToAction';

const ResearchAnalysisPage = () => {
  const [currentView, setCurrentView] = useState('main');

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
        
        .research-analysis-section * {
          font-family: 'Inter', sans-serif !important;
        }
        
        .research-analysis-section .font-display,
        .research-analysis-section .font-display * {
          font-family: 'Manrope', sans-serif !important;
        }
        
        #pricing .pricing-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr) !important;
          gap: 1.5rem !important;
          align-items: stretch !important;
          overflow: visible !important;
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
        
        .research-analysis-section .pricing-column:hover {
          border-color: #002C51;
          transform: scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0, 44, 81, 0.2);
        }
        
        .research-analysis-section .cta-button {
          transition: all 0.3s ease;
          display: block;
          text-align: center;
          text-decoration: none;
        }
        
        .research-analysis-section .service-list ul {
          list-style-type: none;
          padding: 0;
        }
        
        .research-analysis-section .service-list li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 10px;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        
        .research-analysis-section .service-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          top: 1px;
          color: #1F9A32;
          font-weight: 700;
          font-size: 0.875rem;
        }
        
        .research-analysis-section .glass-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 1.25rem;
          padding: 2.5rem;
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.08);
        }
        
        .research-analysis-section .detail-list h5 {
          font-family: 'Manrope', sans-serif !important;
          font-size: 0.875rem;
          font-weight: 700;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        
        .research-analysis-section .detail-list p {
          margin-bottom: 0.875rem;
          color: #1f2937;
          line-height: 1.6;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .research-analysis-section .detail-list .benefit {
          color: #1F9A32;
          font-weight: 600;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        
        .research-analysis-section .detail-list ul {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: 0.5rem;
          margin-bottom: 1rem;
        }
        
        .research-analysis-section .detail-list li {
          color: #4b5563;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
          line-height: 1.6;
        }
        
        .research-analysis-section table {
          font-size: 0.875rem;
          border-collapse: collapse;
        }
        
        .research-analysis-section table th,
        .research-analysis-section table td {
          padding: 0.75rem 1rem;
        }
        
        .research-analysis-section .comparison-table {
          background: white;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .research-analysis-section .our-price-col {
          background-color: #f0f9ff;
          font-weight: 600;
        }
        
        @media (max-width: 1024px) {
          .research-analysis-section .glass-card {
            padding: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .research-analysis-section .glass-card {
            padding: 1.5rem;
          }
          
          .research-analysis-section table {
            font-size: 0.75rem;
          }
          
          .research-analysis-section table th,
          .research-analysis-section table td {
            padding: 0.5rem;
          }
        }
        
        .research-analysis-section .comparison-table {
          border-collapse: collapse;
          width: 100%;
        }
        
        .research-analysis-section .comparison-table th {
          text-align: left;
          padding: 0.75rem 1rem;
          background-color: #f8f9fa;
          font-weight: 700;
          border-bottom: 2px solid #dee2e6;
        }
        
        .research-analysis-section .comparison-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .research-analysis-section .our-price-col {
          background-color: #e6f7ff;
          font-weight: 700;
          color: #005f99;
        }
      `}</style>

      <div className="research-analysis-section" style={{ background: '#F8F9FA', minHeight: '100vh' }}>
        <div style={{ marginTop: '100px' }}>
          {/* Main Pricing Page */}
          {currentView === 'main' && (
            <main id="page-main" style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem 3rem' }}>
              {/* Hero Section */}
              <section className="text-center mx-auto mb-8" style={{ maxWidth: '1000px', padding: '0 0 1rem' }}>
                <h1 className="font-display" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827', marginBottom: '1rem', marginTop: '2rem', lineHeight: '1.3' }}>
                  "Your Edge in the Market Starts with Smarter Research."
                </h1>
                <p style={{ fontSize: '0.9375rem', color: '#6b7280', marginBottom: '0.75rem', lineHeight: '1.5' }}>
                  At Growsin, we cut through the noise with SEBI-registered, unbiased analysis. We provide actionable strategies—from short-term swing trades to long-term model portfolios—designed to help you make smarter, more informed decisions and stay in control of your investments.
                </p>
                <p style={{ fontSize: '0.8125rem', fontWeight: '600', color: '#9ca3af', letterSpacing: '0.05em', marginTop: '1rem', marginBottom: '2rem' }}>
                  SEBI Registered | Actionable Insights | Data-Driven Strategies
                </p>
              </section>

              {/* Pricing & Services Section */}
              <section id="pricing" style={{ overflow: 'visible' }}>
                <div className="pricing-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', overflow: 'visible' }}>

                  {/* Column 1: Swing Trading */}
                  <div className="pricing-column" style={{ padding: '1.75rem', background: '#ffffff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', borderRadius: '1rem', overflow: 'visible' }}>
                    <h2 className="font-display" style={{ fontSize: '1.375rem', fontWeight: '700', color: '#111827' }}>Swing Trading Ideas</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: '#6b7280' }}>For active traders seeking short-term opportunities.</p>
                    <div style={{ marginTop: '1.25rem' }}>
                      <p className="font-display" style={{ fontSize: '2.25rem', fontWeight: '700', color: '#111827' }}>₹2,999</p>
                      <p style={{ fontSize: '0.8125rem', fontWeight: '500', color: '#9ca3af' }}>Per month • Billed quarterly</p>
                    </div>
                    <div style={{ margin: '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: '0.8125rem' }}>What's Included:</h3>
                      <ul>
                        <li>Exclusive Swing Trade Ideas</li>
                        <li>Pro-Level Research</li>
                        <li>Clear Action Plan</li>
                        <li>Built-in Risk Management</li>
                      </ul>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-swing" onClick={(e) => handleNavClick('plan-swing', e)} className="cta-button" style={{ padding: '0.625rem', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: '0.625rem', fontSize: '0.8125rem', fontWeight: '600', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>

                  {/* Column 2: Model Portfolios - FEATURED */}
                  <div className="pricing-column featured" style={{ padding: '2rem', background: 'linear-gradient(to bottom, #f0fdf4, #ffffff)', border: '2px solid #1F9A32', boxShadow: '0 12px 40px rgba(31, 154, 50, 0.2)', transform: 'scale(1.03)', borderRadius: '1rem', overflow: 'visible', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, boxShadow: '0 2px 8px rgba(31, 154, 50, 0.3)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', fontWeight: '600', letterSpacing: '0.025em', color: 'white', borderRadius: '9999px', padding: '4px 16px', fontSize: '0.75rem', background: 'linear-gradient(135deg, #1F9A32, #16a34a)' }}>Most Popular</span>
                    </div>
                    <h2 className="font-display" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>Model Portfolios</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#6b7280' }}>Long-term, diversified portfolios for wealth building.</p>
                    <div style={{ marginTop: '1.5rem' }}>
                      <p className="font-display" style={{ fontSize: '2.5rem', fontWeight: '700', color: '#111827' }}>₹3,499</p>
                      <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#9ca3af' }}>Per month • Billed quarterly</p>
                    </div>
                    <div style={{ margin: '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: '0.8125rem' }}>What's Included:</h3>
                      <ul>
                        <li>Ready-to-Invest Portfolios</li>
                        <li>Scientific Asset Allocation</li>
                        <li>Dynamic Rebalancing Alerts</li>
                        <li>Transparent Performance Reporting</li>
                      </ul>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-model" onClick={(e) => handleNavClick('plan-model', e)} className="cta-button" style={{ padding: '0.625rem', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: '0.625rem', fontSize: '0.8125rem', fontWeight: '700', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>

                  {/* Column 3: Custom Portfolio Research Reports */}
                  <div className="pricing-column" style={{ padding: '1.75rem', background: '#ffffff', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', borderRadius: '1rem', overflow: 'visible' }}>
                    <h2 className="font-display" style={{ fontSize: '1.375rem', fontWeight: '700', color: '#111827' }}>Custom Portfolio Research Reports</h2>
                    <p style={{ marginTop: '0.5rem', fontSize: '0.8125rem', color: '#6b7280' }}>Personalized research and reports for your portfolio.</p>
                    <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                      <div style={{ textAlign: 'center' }}>
                        <p className="font-display" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827' }}>₹4,999<span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>/mo</span></p>
                        <p style={{ fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af' }}>Up to ₹50L</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af' }}>Billed quarterly</p>
                      </div>
                      <div style={{ fontSize: '2rem', color: '#d1d5db', fontWeight: '300' }}>/</div>
                      <div style={{ textAlign: 'center' }}>
                        <p className="font-display" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#111827' }}>₹9,999<span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>/mo</span></p>
                        <p style={{ fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af' }}>Above ₹50L</p>
                        <p style={{ fontSize: '0.75rem', fontWeight: '500', color: '#9ca3af' }}>Billed quarterly</p>
                      </div>
                    </div>
                    <div style={{ margin: '1.5rem 0', height: '1px', backgroundColor: '#e5e7eb' }}></div>
                    <div style={{ flexGrow: 1, color: '#4b5563' }} className="service-list">
                      <h3 style={{ fontWeight: '600', marginBottom: '0.875rem', color: '#111827', fontSize: '0.8125rem' }}>What's Included:</h3>
                      <ul>
                        <li>Unified Portfolio Dashboard</li>
                        <li>True Performance Metrics</li>
                        <li>Strategic Allocation Insights</li>
                        <li>Portfolio Health Check-Up</li>
                      </ul>
                    </div>
                    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                      <a href="#plan-custom-reports" onClick={(e) => handleNavClick('plan-custom-reports', e)} className="cta-button" style={{ padding: '0.625rem', fontSize: '0.75rem', fontWeight: '600', backgroundColor: '#f3f4f6', color: '#1f2937', borderRadius: '0.5rem' }}>View Details</a>
                      <button className="cta-button" style={{ padding: '0.625rem', fontSize: '0.8125rem', fontWeight: '600', background: '#1F9A32', color: 'white', borderRadius: '0.5rem', border: 'none' }}>Subscribe</button>
                    </div>
                  </div>
                </div>
              </section>

            </main>
          )}

          {/* Detail Pages - Will be loaded from planData.js */}
          {currentView !== 'main' && (
            <div className="detail-page">
              <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem', paddingTop: '2rem' }}>
                <a href="#main" onClick={(e) => handleNavClick('main', e)} className="inline-flex items-center mb-4" style={{ color: '#002C51', textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem', position: 'relative', zIndex: 100 }}>
                  <svg style={{ width: '20px', height: '20px', marginRight: '0.5rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to All Plans
                </a>
                <div className="glass-card">
                  <h1 className="font-display" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', lineHeight: '1.3', marginBottom: '1.25rem' }}>
                    {currentView === 'plan-swing' && 'RA Service: Swing Trading Ideas'}
                    {currentView === 'plan-model' && 'RA Service: Model Portfolios'}
                    {currentView === 'plan-custom-reports' && 'RA Service: Custom Portfolio Research Reports'}
                  </h1>
                  <div className="detail-list">
                    {currentView === 'plan-swing' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-swing'].details }} />
                    )}
                    {currentView === 'plan-model' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-model'].details }} />
                    )}
                    {currentView === 'plan-custom-reports' && (
                      <div dangerouslySetInnerHTML={{ __html: require('./planData').planDetailsContent['plan-custom-reports'].details }} />
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

export default ResearchAnalysisPage;
