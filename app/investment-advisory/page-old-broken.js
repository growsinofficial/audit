'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';

const InvestmentAdvisoryPage = () => {
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

  const planDetailsContent = {
    'plan-1': {
      title: 'Comprehensive Planning: Detailed Services',
      details: `
        <div class="overflow-x-auto mb-12">
          <table class="w-full text-sm comparison-table">
            <thead>
              <tr>
                <th>Service Category</th>
                <th class="our-price-col">Our Price</th>
                <th>Industry Normal*</th>
                <th>Industry Average*</th>
                <th>Industry High*</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Financial Health Check</td><td class="our-price-col">~ ₹6,000</td><td>₹8,000</td><td>₹12,000</td><td>₹20,000</td></tr>
              <tr><td>Goal-Based Financial Planning</td><td class="our-price-col">~ ₹7,000</td><td>₹10,000</td><td>₹15,000</td><td>₹25,000</td></tr>
              <tr><td>Risk Management Planning</td><td class="our-price-col">~ ₹6,000</td><td>₹8,000</td><td>₹12,000</td><td>₹20,000</td></tr>
              <tr><td>Investment Planning</td><td class="our-price-col">~ ₹7,000</td><td>₹10,000</td><td>₹18,000</td><td>₹30,000</td></tr>
              <tr><td>Retirement & Pension Planning</td><td class="our-price-col">~ ₹6,000</td><td>₹8,000</td><td>₹15,000</td><td>₹25,000</td></tr>
              <tr><td>Debt & Credit Advisory</td><td class="our-price-col">~ ₹2,999</td><td>₹5,000</td><td>₹8,000</td><td>₹15,000</td></tr>
              <tr class="font-bold bg-gray-50 text-base"><td><strong>Total Plan Cost</strong></td><td class="our-price-col"><strong>₹34,999</strong></td><td><strong>~₹49,000</strong></td><td><strong>~₹80,000</strong></td><td><strong>~₹135,000</strong></td></tr>
            </tbody>
          </table>
        </div>
        <p class="mt-4 text-xs text-gray-500">* Industry prices are estimates for standalone services and can vary based on the planner's experience and the complexity of the client's situation. Our plan offers these services as a holistic, integrated package for a single fee.</p>
        
        <h3 class="font-display text-3xl font-bold mt-12 mb-4">Our 6-Step Comprehensive Process</h3>
        
        <h4>1. Financial Health Check</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg></div><p>Onboarding</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg></div><p>Analysis</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg></div><p>Gap Identification</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg></div><p>Action Plan</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">This foundational step provides a crystal-clear understanding of your current financial standing. It's like a financial MRI, revealing strengths, weaknesses, and hidden opportunities, allowing us to build a plan that is perfectly tailored to you.</p>

        <h4>2. Goal-Based Planning</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V7a2 2 0 012-2h6l2-2h2l-2 2z" /></svg></div><p>Goal Discovery & Quantification</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><p>Resource Mapping</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div><p>Asset Allocation & Product Selection</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h5V4H4zm0 9h5v5H4v-5zm9-9h5v5h-5V4zm0 9h5v5h-5v-5z" /></svg></div><p>Monitoring & Rebalancing</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">This transforms vague dreams into actionable steps. By attaching a timeline and a number to your goals, we create a motivating roadmap that makes your financial journey purposeful and exciting.</p>

        <h4>3. Investment Planning</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg></div><p>Client Profiling & IPS Creation</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg></div><p>Asset-Class Optimization</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><p>Stress Testing</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg></div><p>Implementation & Reporting</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">You receive a scientifically crafted, resilient portfolio that is designed to weather market volatility. Our rigorous, research-backed approach ensures your investments are always aligned with your risk tolerance and aimed at consistent, long-term growth.</p>

        <h4>4. Risk Management</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><p>Risk Profiling & Needs Analysis</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><p>Risk Identification & Quantification</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg></div><p>Emergency Fund & Insurance Plan</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.714 5.428a2 2 0 001.736 2.97h4.618a2 2 0 002-2z" /></svg></div><p>Implementation</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">This provides a powerful safety net for your finances. By proactively addressing potential risks, we ensure that unforeseen events like a medical emergency or job loss do not derail your long-term financial goals, giving you and your family complete peace of mind.</p>

        <h4>5. Retirement Planning</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg></div><p>Goal Discovery & Lifestyle Assessment</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><p>Gap Analysis (Required vs. Existing)</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" /></svg></div><p>Asset Allocation (Glide Path)</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg></div><p>Withdrawal Phase Planning</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">This provides a clear, stress-free path to a comfortable and financially independent retirement. You'll have an inflation-protected income stream, giving you the freedom to live your golden years on your own terms.</p>

        <h4>6. Debt Management</h4>
        <div class="process-diagram">
          <div class="process-flow">
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg></div><p>Debt Profiling & Data Collection</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg></div><p>Analysis & Credit Score Review</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 01-.517-3.86l-.477-2.387a2 2 0 01.547-1.806z" /></svg></div><p>Debt Restructuring Strategy</p></div>
            <div class="process-arrow">&rarr;</div>
            <div class="process-step"><div class="process-icon"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><p>Action Plan & Behavioral Coaching</p></div>
          </div>
        </div>
        <h5>Benefit for You:</h5>
        <p class="benefit">This service helps you regain control of your finances. By creating a structured plan to reduce and eliminate debt, we help you lower your interest burden, improve your credit score, and free up cash flow to be directed towards your wealth-building goals.</p>
      `
    },
    'plan-2': {
      title: 'Exclusive Wealth Management: In Depth',
      details: `
        <p class="mb-6 text-lg text-gray-600">This is our premier offering for high-net-worth individuals and families, encompassing all services from our Comprehensive Plan, plus the following specialized advisory services designed for the complexities of significant wealth.</p>

        <h3 class="font-display text-3xl font-bold mt-12 mb-4">Detailed Explanation of Exclusive Services and Client Benefits</h3>

        <h4>1. Strategic Wealth Structuring</h4>
        <h5>Family Office Setup & Management</h5><p>For significant family wealth, an informal approach is insufficient. We help you design and implement a professional 'Family Office' structure, creating a centralized, institutional-grade system to manage your family's financial affairs, investments, reporting, and legacy with the utmost discipline and privacy.</p><p class="benefit">Benefit: This moves beyond simple management to professional governance. It centralizes control, streamlines complex operations, and ensures your wealth is managed with a long-term vision that can be passed down through generations.</p>
        <h5>Asset Protection via LLP, Trusts, HUF, Holding Companies</h5><p>We utilize a sophisticated toolkit of advanced legal structures—including Limited Liability Partnerships, private trusts, Hindu Undivided Families, and holding companies—to build a multi-layered, protective fortress around your most important assets, legally insulating them from potential business, creditor, and personal liability risks.</p><p class="benefit">Benefit: This is financial ring-fencing at the highest level. It secures your family's core wealth against unforeseen liabilities, ensuring that what you've built is preserved exclusively for its intended purpose and beneficiaries.</p>
        <h5>Segregation of Business vs Personal Wealth</h5><p>A critical step for entrepreneurs. We create a clear legal and financial separation between your business assets and your personal wealth, which is crucial for risk management and liability protection.</p><p class="benefit">Benefit: Protects your personal and family assets from any liabilities or downturns related to your business operations, and vice versa, providing clarity and reducing overall risk exposure.</p>
        <h5>Wealth Transfer Structures with Legal Oversight</h5><p>We design and implement seamless, tax-efficient strategies for transferring wealth to the next generation, all under the guidance of legal experts to ensure full compliance with relevant laws and regulations, minimizing future complexities and potential disputes.</p><p class="benefit">Benefit: Ensures your legacy is passed on smoothly, tax-efficiently, and exactly according to your wishes, preserving family harmony and minimizing tax burdens.</p>
        <h5>High-Value Asset Documentation & Centralized Vault (digital + physical)</h5><p>We establish a secure, organized system for documenting and managing your high-value assets, both digitally and physically, providing a comprehensive overview and ensuring easy access for authorized individuals and future generations.</p><p class="benefit">Benefit: Provides peace of mind knowing your important documents and asset details are secure, easily accessible, and well-organized for efficient management and future planning.</p>

        <h4>2. Tactical Capital Growth & Investment Planning</h4>
        <h5>Customized Multi-Asset Portfolios (Equity, Debt, PMS, AIFs)</h5><p>We construct and actively manage bespoke portfolios that go far beyond standard equity and debt. This includes direct equity, fixed income instruments, Portfolio Management Services (PMS), and a diversified range of Alternative Investment Funds (AIFs), all tailored precisely to your unique risk-return objectives and cash flow needs.</p><p class="benefit">Benefit: You receive a highly personalized investment engine—not a one-size-fits-all model—engineered for superior performance, intelligent risk management, and capital preservation.</p>
        <h5>Short-Term Trading & Arbitrage Advisory (covered call, pair trading, hedging)</h5><p>For sophisticated investors, we provide expert advisory on complex, market-neutral, and alpha-generating strategies. This includes covered calls for income generation, pair trading to exploit market inefficiencies, and hedging strategies to protect capital during volatile periods.</p><p class="benefit">Benefit: This unlocks an entirely new layer of potential returns and portfolio protection, allowing you to profit from market movements in ways that are simply not accessible through traditional long-term investing alone.</p>
        <h5>Tactical Asset Allocation - Sector Rotation, Thematic Portfolios</h5><p>We actively manage your portfolio's asset allocation by strategically shifting investments between different sectors and capitalizing on emerging market themes to enhance returns and mitigate risks based on prevailing economic conditions.</p><p class="benefit">Benefit: A dynamic and responsive investment approach that seeks to outperform the market by being strategically positioned in the sectors and themes with the highest growth potential.</p>
        <h5>Private Credit & Structured Debt Investment Opportunities</h5><p>We provide exclusive access to high-yield investment opportunities in the private credit and structured debt markets. These are non-market-linked instruments that offer attractive returns and diversification benefits, typically reserved for institutional investors.</p><p class="benefit">Benefit: Enhances portfolio returns with stable, predictable income streams that are insulated from public market volatility, adding a layer of security and diversification.</p>
        <h5>Cash Flow Deployment Models (Park idle capital for yield optimization)</h5><p>We design sophisticated models to ensure that any idle capital in your accounts is never truly idle. We strategically "park" these funds in ultra-short-term, high-liquidity instruments to generate optimal yield without compromising accessibility.</p><p class="benefit">Benefit: Maximizes the earning potential of every rupee in your portfolio, ensuring that even your surplus cash is working hard for you 24/7.</p>

        <h4>3. Global Diversification & Offshore Planning</h4>
        <h5>International Mutual Funds & ETF Advisory (US, UK, Singapore)</h5><p>To hedge against domestic economic risk, we provide expert, curated advice on investing in top-tier international mutual funds and ETFs across major global markets like the US, UK, and Singapore, giving you a stake in the world's leading economies.</p><p class="benefit">Benefit: A truly resilient, globally diversified portfolio that reduces your dependence on the Indian economy, providing a powerful hedge and access to a much broader set of growth opportunities.</p>
        <h5>LRS Advisory & Execution Support</h5><p>We provide comprehensive, end-to-end guidance on the Liberalized Remittance Scheme (LRS). We handle the advisory, paperwork, and compliance to help you seamlessly remit funds abroad for investments in global stocks, real estate, or other offshore assets.</p><p class="benefit">Benefit: Unlocks the full potential of global markets, allowing you to build a truly international asset base and legacy without navigating the complex compliance and logistical headaches yourself.</p>
        <h5>NRI Structuring (NRE-NRO, Repatriation Guidance)</h5><p>Specialized financial planning for Non-Resident Indians (NRIs), covering the optimal management of NRE/NRO accounts, providing clear guidance on the repatriation of funds, and ensuring full compliance with FEMA regulations.</p><p class="benefit">Benefit: Ensures your cross-border financial affairs are managed with maximum efficiency, tax-effectiveness, and complete peace of mind.</p>
        <h5>Foreign Real Estate/REITs/Tech Startups Investment Planning</h5><p>We provide specialized advisory and access to international investment opportunities in real estate, Real Estate Investment Trusts (REITs), and promising technology startups, allowing you to participate in global innovation and property markets.</p><p class="benefit">Benefit: Adds unique, high-growth asset classes to your portfolio that are geographically diversified and offer returns uncorrelated to domestic markets.</p>

        <h4>4. Advanced Tax Planning & Exit Strategy</h4>
        <h5>Capital Gains Optimization (FIFO/Indexation Strategy) & Tax-Loss Harvesting</h5><p>We employ sophisticated and proactive strategies throughout the year to actively and legally minimize the capital gains tax on your entire investment portfolio. This includes detailed FIFO/Indexation analysis and the strategic harvesting of losses to offset gains.</p><p class="benefit">Benefit: This can significantly increase your in-hand returns by ensuring you pay the absolute minimum tax required by law, maximizing your wealth accumulation.</p>
        <h5>Gift Deed & Tax Arbitrage Structuring</h5><p>We architect the transfer of assets within your family, trusts, or HUF to be maximally tax-efficient. We also identify and execute legal tax arbitrage strategies across these different entities (individual, family, HUF) to lower the overall tax liability of the family unit.</p><p class="benefit">Benefit: A holistic, coordinated approach to your family's taxation that legally minimizes the tax burden on the family as a whole, preserving more of your wealth.</p>
        <h5>Exit Readiness Planning (from large positions, ESOPs, business sales)</h5><p>For entrepreneurs, senior executives, and investors with large, concentrated holdings (including ESOPs), we provide strategic financial advisory to prepare for a successful and tax-efficient exit, ensuring you maximize the value from a sale or liquidation event.</p><p class="benefit">Benefit: Maximizes the financial outcome of your hard work and years of investment, ensuring a smooth, financially optimized transition when you decide to convert your equity into liquid wealth.</p>

        <h4>5. Legacy & Succession Planning</h4>
        <h5>Comprehensive Estate Planning (Will, Living Will, POA, Trusts)</h5><p>We move far beyond a simple will. We create a holistic estate plan that includes Living Wills (for medical directives), Powers of Attorney (POA) for financial and medical decisions, and the formation of trusts to ensure your wishes are executed precisely and with minimum fuss.</p><p class="benefit">Benefit: This guarantees a smooth, tax-efficient, and conflict-free transfer of your legacy to your loved ones, minimizing potential disputes and preserving family harmony during difficult times.</p>
        <h5>Inter-generational Wealth Transfer Models</h5><p>We design and implement sophisticated, multi-generational wealth transfer models that ensure your assets are passed down efficiently, in a manner that aligns with your family's values and protects the capital from being squandered.</p><p class="benefit">Benefit: Preserves your family's wealth for generations to come, fostering a legacy of financial stewardship and responsibility.</p>
        <h5>Family Constitution Drafting & Governance</h5><p>We facilitate the creation of a "Family Constitution"—a formal document that outlines the family's shared values, vision, and the rules of engagement for managing wealth, businesses, and resolving conflicts across generations.</p><p class="benefit">Benefit: This powerful tool creates deep alignment and prevents future conflicts by establishing clear, mutually agreed-upon rules and principles for the entire family, ensuring harmony and shared purpose.</p>
        <h5>Business Succession & Founder Exit Plans</h5><p>We help business owners create a clear and legally sound plan for transitioning the ownership and management of their company to the next generation, a management team, or an external buyer. This includes a detailed Founder Exit Plan to ensure your personal financial goals are met.</p><p class="benefit">Benefit: Ensures the continuity and continued success of the business you've built, while securing your own financial freedom post-exit.</p>
        <h5>Cross-Border Succession Structuring (Offshore Assets)</h5><p>For families with assets and members in multiple countries, we design legally sound succession plans that navigate the complexities of international inheritance laws, tax treaties, and legal structures to ensure a seamless transfer of global assets.</p><p class="benefit">Benefit: A seamless and compliant transfer of your global assets, avoiding legal pitfalls, double taxation, and excessive administrative burdens.</p>

        <h4>6. Alternative & Private Market Investment Advisory</h4>
        <h5>Angel, Venture Capital & Pre-IPO Deal Access (curated)</h5><p>Leveraging our network, we provide our clients with highly selective, curated access to exclusive, high-growth investment opportunities in the startup ecosystem, including direct stakes in promising companies before they go public.</p><p class="benefit">Benefit: The potential for exponential, non-linear returns by investing in the potential market leaders of tomorrow, an opportunity typically reserved for institutional investors.</p>
        <h5>AIFs (Category II & III) - Due Diligence & Matching</h5><p>We perform rigorous due diligence on a wide range of Alternative Investment Funds (AIFs) and match you with the ones that best fit your risk profile and investment thesis, from venture capital to hedge funds.</p><p class="benefit">Benefit: Access to a professionally vetted and managed pool of high-growth, alternative investment strategies, saving you the time and risk of individual deal sourcing.</p>
        <h5>Real Estate Investment Trusts (REITs), Commercial Property Pools</h5><p>We provide advisory on and access to institutional-grade real estate investments through REITs and curated pools of high-quality commercial properties, offering a stable and income-generating asset class.</p><p class="benefit">Benefit: Allows you to invest in a diversified portfolio of high-value real estate without the hassles of direct ownership, providing both rental income and capital appreciation.</p>
        <h5>Art, Gold, Whisky, Collectibles – Tangible Alternative Assets</h5><p>We offer guidance on diversifying your portfolio with tangible, non-financial assets like fine art, investment-grade gold, rare whisky, and other collectibles, which often have a low correlation to public markets.</p><p class="benefit">Benefit: Adds a unique layer of diversification and potential inflation hedging to your portfolio through assets that you can also appreciate personally.</p>
        <h5>Debt Syndication & Private Lending Networks</h5><p>We provide access to and facilitate participation in private lending opportunities through our exclusive networks, allowing you to act as a lender and earn high, fixed-income returns. We also assist in syndicating large loans for your own business needs.</p><p class="benefit">Benefit: Creates a stable, high-yield income stream for your portfolio while diversifying away from traditional equity and bond markets.</p>

        <h4>7. Lifestyle, Concierge & Philanthropy Planning</h4>
        <h5>Philanthropy Structuring – 80G Foundation / Trust Creation</h5><p>We guide you in establishing and managing your own charitable foundation or trust. We handle the structuring to ensure it is tax-efficient (under Section 80G) and designed to create a lasting social impact that aligns with your values.</p><p class="benefit">Benefit: A professionally structured and deeply personal way to give back to society, creating a philanthropic legacy that will endure for generations.</p>
        <h5>High-Value Asset Financing (Luxury Cars, Aircraft, Art Loans)</h5><p>We provide specialized financing advisory and solutions for the acquisition of high-value luxury assets, helping you structure the purchase in the most financially prudent and tax-efficient manner.</p><p class="benefit">Benefit: Allows you to acquire and enjoy luxury assets without unnecessarily tying up large amounts of liquid capital that could be better invested elsewhere.</p>
        <h5>Concierge Family Office Services (Family Budget, Event, Travel Oversight etc.)</h5><p>Our services extend to managing the day-to-day financial complexities of a high-net-worth lifestyle. This can include overseeing complex family budgets, planning the financials for major life events, and managing large travel expenditures.</p><p class="benefit">Benefit: You gain a single, trusted point of contact for managing these complexities, freeing up your valuable time and mental energy to focus on what truly matters most to you.</p>
        <h5>Citizenship / Residency by Investment Advisory (Golden Visa etc.)</h5><p>We provide initial guidance and connect you with top-tier legal and immigration experts on citizenship and residency-by-investment programs, facilitating global mobility for your family.</p><p class="benefit">Benefit: Opens up a world of possibilities for travel, business, education, and lifestyle for your family, providing a powerful geopolitical hedge.</p>
        <h5>Custom Global Education/Marriage Planning for Next Generation</h5><p>We create highly customized, long-term financial plans specifically designed to fund world-class global education (e.g., Ivy League universities) or major life events like marriages for the next generation, factoring in international costs and currency fluctuations.</p><p class="benefit">Benefit: Ensures that your children and grandchildren have the financial backing to pursue their dreams on a global stage, without any compromises.</p>
      `
    },
    'plan-3': {
      title: 'Portfolio Rebalancing: In Depth',
      details: `
        <h3 class="font-display text-3xl font-bold mt-12 mb-4">Our Portfolio Rebalancing Process</h3>
        
        <h4>Step 1: Deep-Dive Analysis & Risk Profiling</h4>
        <p>This is the foundational stage where we get to know you and your portfolio. We conduct a thorough review of your existing investments, looking at every stock, mutual fund, and asset. We identify high-cost products, redundant holdings, and any concentrated risks (e.g., too much exposure to one sector). Alongside this, we conduct a scientific risk tolerance assessment to understand your comfort with market volatility. This isn't just a questionnaire; it's a conversation about your experiences and expectations.</p>
        <p class="benefit"><strong>Example (Mutual Funds):</strong> We might find that you hold three different large-cap mutual funds that all have similar holdings, leading to unnecessary overlap and fee duplication.</p>
        
        <h5 class="mt-6 font-bold text-gray-800">Intrinsic Value Assessment (for Direct Equity)</h5>
        <p>For portfolios with direct stock holdings, we go a step further. We employ rigorous Discounted Cash Flow (DCF) valuation models, including Free Cash Flow to Firm (FCFF) and Free Cash Flow to Equity (FCFE), to determine the intrinsic value of each company. This fundamental analysis helps us identify whether your stocks are overvalued, undervalued, or fairly priced based on their future earning potential, not just market sentiment.</p>
        <p class="benefit"><strong>Example (Direct Stocks):</strong> We might analyze a stock in your portfolio and find that its current market price is 30% higher than our calculated intrinsic value, suggesting it's overvalued and a candidate for profit-booking. Conversely, a stock might be trading below its DCF value, indicating a potential buying or holding opportunity.</p>

        <h4>Step 2: Capital Market Expectations (CME) & Asset Allocation using Modern Portfolio Theory (MPT)</h4>
        <p>Based on our in-house research, we formulate our Capital Market Expectations (CME) – our forward-looking projections for the risk and return of various asset classes (like Indian equities, international equities, government bonds, gold, etc.). Using your risk profile and our CME, we then use Modern Portfolio Theory (MPT) to construct an efficient portfolio. This is the ideal, scientifically-backed asset allocation designed specifically for you.</p>
        <p class="benefit"><strong>Example:</strong> For a client with a "Moderate" risk profile, an ideal asset allocation might be 55% in Equities (40% Indian, 15% International), 35% in Debt, 5% in Gold, and 5% in Real Estate (via REITs). This is the strategic benchmark against which we'll measure your current portfolio.</p>
        
        <h4>Step 3: Portfolio Optimization & Gap Analysis</h4>
        <p>Here, we use advanced financial models to optimize the portfolio, ensuring it offers the highest possible potential return for your level of risk. We then conduct a Gap Analysis, which is a direct comparison of your current portfolio against your new, ideal asset allocation. This clearly highlights where your portfolio has drifted and what changes are needed.</p>
        <p class="benefit"><strong>Example:</strong> The Gap Analysis might show your current portfolio has 75% in Indian equities and only 5% in debt. The "gap" is a 20% overweight position in equities and a 30% underweight position in debt compared to the ideal allocation. This immediately tells us we need to reduce equity risk and increase stability.</p>
        
        <h4>Step 4: Scenario Analysis & Stress Testing</h4>
        <p>A plan is only as good as its resilience. Before recommending any changes, we put the proposed new portfolio through rigorous stress tests. We simulate how this rebalanced portfolio would have performed during major historical market crises, such as the 2008 financial crisis or the 2020 COVID-19 crash. This helps us understand its potential downside and ensures it aligns with your comfort level.</p>
        <p class="benefit"><strong>Example:</strong> Our stress test might show that during the 2020 crash, your original portfolio would have fallen by 35%, while the proposed rebalanced portfolio would have only fallen by 22%. This demonstrates the value of proper asset allocation in protecting capital.</p>
        
        <h4>Step 5: Actionable Rebalancing Report</h4>
        <p>You will receive a comprehensive yet easy-to-understand report. This isn't just theory; it's a practical, step-by-step guide. It will list the exact investments to sell and the exact investments to buy, along with the recommended amounts. Crucially, we formulate this plan to be as tax-efficient as possible, considering things like capital gains tax and exit loads.</p>
        <p class="benefit"><strong>Example:</strong> The report might say, "Sell 100 units of ABC Large Cap Fund (profit booking to take advantage of long-term capital gains tax rules) and use the proceeds to buy 150 units of XYZ Short Duration Debt Fund to reduce equity exposure and increase portfolio stability."</p>
        
        <h4>Step 6: Execution Guidance & Support</h4>
        <p>We believe in partnership. We don't just send you a report and wish you luck. We provide dedicated support to help you implement the changes. Whether you need help navigating your broker's platform or have questions about the timing of trades, we are available via phone or email to guide you through every step of the execution process, ensuring the plan is implemented correctly and with confidence.</p>
      `
    }
  };

  return (
    <div style={{ all: 'initial' }}>
      <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      
      <style jsx global>{`
        #investment-advisory-container * {
          all: revert;
        }
        #investment-advisory-container {
        body {
          font-family: 'Inter', sans-serif;
          background-color: #F8F9FA;
          color: #212529;
        }
        
        .font-display {
          font-family: 'Manrope', sans-serif;
        }
        
        .pricing-column {
          border: 1px solid #dee2e6;
          transition: all 0.3s ease;
        }
        
        .pricing-column:hover {
          border-color: #495057;
          transform: scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.15);
        }
        
        .cta-button {
          transition: all 0.3s ease;
          font-weight: 600;
        }
        
        .btn-view-details {
          background-color: #e5e7eb;
          color: #1f2937;
        }
        
        .btn-view-details:hover {
          background-color: #d1d5db;
        }
        
        .btn-subscribe {
          background-color: #4f46e5;
          color: white;
        }
        
        .btn-subscribe:hover {
          background-color: #4338ca;
        }
        
        .service-list ul {
          list-style-type: none;
          padding: 0;
        }
        
        .service-list li {
          position: relative;
          padding-left: 28px;
          margin-bottom: 12px;
        }
        
        .service-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          top: 1px;
          color: #28a745;
          font-weight: 600;
        }
        
        .detail-page {
          background-color: #ffffff;
        }
        
        .detail-list h4 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          margin-top: 2.5rem;
          margin-bottom: 1.5rem;
          color: #111827;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 0.75rem;
        }
        
        .detail-list h5 {
          font-family: 'Manrope', sans-serif;
          font-size: 1.125rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: #1f2937;
        }
        
        .detail-list p {
          margin-bottom: 0.5rem;
          color: #4b5563;
        }
        
        .detail-list .benefit {
          color: #059669;
          font-weight: 600;
        }
        
        .detail-list ul {
          list-style-position: inside;
          list-style-type: disc;
          padding-left: 0.5rem;
        }
        
        .detail-list li {
          color: #495057;
          margin-bottom: 0.75rem;
        }
        
        .comparison-table {
          border-collapse: collapse;
          width: 100%;
        }
        
        .comparison-table th {
          text-align: left;
          padding: 0.75rem 1rem;
          background-color: #f8f9fa;
          font-weight: 700;
          border-bottom: 2px solid #dee2e6;
        }
        
        .comparison-table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid #e9ecef;
        }
        
        .our-price-col {
          background-color: #e6f7ff;
          font-weight: 700;
          color: #005f99;
        }
        
        .process-diagram {
          background-color: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin-top: 1rem;
          margin-bottom: 2rem;
        }
        
        .process-flow {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .process-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex-basis: 100px;
          flex-grow: 1;
        }
        
        .process-icon {
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
        
        .process-step p {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }
        
        .process-arrow {
          font-size: 2rem;
          color: #d1d5db;
          margin-top: 12px;
          display: none;
        }
        
        @media (min-width: 1024px) {
          .process-arrow {
            display: block;
          }
        }
      `}</style>

      <PlaxLayout>
        <div id="router-view">
          {/* Main Pricing Page */}
          {currentView === 'main' && (
          <main id="page-main" className="page container mx-auto px-6 py-16 sm:py-24">
            {/* Hero Section */}
            <section className="text-center max-w-5xl mx-auto mb-20">
              <h1 className="font-display text-4xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                "Every Rupee You Earn Deserves a Clear Plan and a Confident Future."
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                At Growsin, we believe financial planning is more than charts and calculations — it's about creating a meaningful, sustainable life. We offer unbiased, research-backed investment guidance that evolves with your needs, so you're always in control of your financial journey.
              </p>
              <p className="mt-8 text-sm font-semibold text-gray-500 tracking-wider">
                SEBI Registered | Fee-Only Advice | Personalized Plans | Backed by Research and Ethics
              </p>
            </section>

            {/* Pricing & Services Section */}
            <section id="pricing">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Column 1: Comprehensive Financial Planning */}
                <div className="pricing-column rounded-xl p-8 flex flex-col bg-white">
                  <h2 className="font-display text-3xl font-bold text-gray-900">Comprehensive Planning</h2>
                  <p className="mt-2 text-gray-600">A complete financial roadmap for individuals and families.</p>
                  <div className="mt-6">
                    <p className="text-5xl font-display font-bold text-gray-900">₹34,999</p>
                    <p className="text-sm font-medium text-gray-500">One-time fee</p>
                  </div>
                  <div className="my-8 h-px bg-gray-200"></div>
                  <div className="flex-grow service-list text-gray-700">
                    <h3 className="font-bold mb-4 text-gray-800">Key Areas Covered:</h3>
                    <ul>
                      <li>Financial Health Check</li>
                      <li>Goal-Based Financial Planning</li>
                      <li>Risk Management Planning</li>
                      <li>Investment Planning</li>
                      <li>Retirement & Pension Planning</li>
                      <li>Debt & Credit Advisory</li>
                    </ul>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <a href="#plan-1" onClick={(e) => handleNavClick('plan-1', e)} className="cta-button btn-view-details w-full py-3 text-center rounded-lg">View Details</a>
                    <button className="cta-button btn-subscribe w-full py-3 text-center rounded-lg">Subscribe</button>
                  </div>
                </div>

                {/* Column 2: Exclusive Wealth Management */}
                <div className="pricing-column rounded-xl p-8 flex flex-col bg-white relative" style={{ border: '2px solid #4f46e5' }}>
                  <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center px-4 py-1 font-semibold tracking-wide text-white bg-indigo-600 rounded-full text-sm">Most Popular</span>
                  </div>
                  <h2 className="font-display text-3xl font-bold text-gray-900">Exclusive Wealth Management</h2>
                  <p className="mt-2 text-gray-600">Bespoke strategies for high-net-worth clients.</p>
                  <div className="mt-6">
                    <p className="text-5xl font-display font-bold text-gray-900">Customized</p>
                    <p className="text-sm font-medium text-gray-500">Preferred for &gt; ₹1 Cr Net Worth</p>
                  </div>
                  <div className="my-8 h-px bg-gray-200"></div>
                  <div className="flex-grow service-list text-gray-700">
                    <h3 className="font-bold mb-4 text-gray-800">Includes all Comprehensive services, plus:</h3>
                    <ul>
                      <li>Strategic Wealth Structuring</li>
                      <li>Tactical Capital Growth & Investment</li>
                      <li>Global Diversification & Offshore Planning</li>
                      <li>Advanced Tax Planning & Exit Strategy</li>
                      <li>Legacy & Succession Planning</li>
                      <li>Alternative & Private Market Advisory</li>
                      <li>Lifestyle, Concierge & Philanthropy</li>
                    </ul>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <a href="#plan-2" onClick={(e) => handleNavClick('plan-2', e)} className="cta-button btn-view-details w-full py-3 text-center rounded-lg">View Details</a>
                    <button className="cta-button btn-subscribe w-full py-3 text-center rounded-lg">Subscribe</button>
                  </div>
                </div>

                {/* Column 3: Portfolio Rebalancing */}
                <div className="pricing-column rounded-xl p-8 flex flex-col bg-white">
                  <h2 className="font-display text-3xl font-bold text-gray-900">Portfolio Rebalancing</h2>
                  <p className="mt-2 text-gray-600">A one-time service to align your portfolio.</p>
                  <div className="mt-6">
                    <div className="flex items-center justify-center gap-4">
                      <div className="text-right">
                        <p className="text-4xl font-display font-bold text-gray-900">₹14,999</p>
                        <p className="text-xs font-medium text-gray-500">For Portfolio Value up to ₹50L</p>
                      </div>
                      <div className="text-4xl font-extralight text-gray-300">/</div>
                      <div className="text-left">
                        <p className="text-4xl font-display font-bold text-gray-900">₹24,999</p>
                        <p className="text-xs font-medium text-gray-500">For Portfolio Value above ₹50L</p>
                      </div>
                    </div>
                  </div>
                  <div className="my-8 h-px bg-gray-200"></div>
                  <div className="flex-grow service-list text-gray-700">
                    <h3 className="font-bold mb-4 text-gray-800">What's Included:</h3>
                    <ul>
                      <li>In-depth Portfolio Analysis & Risk Profiling</li>
                      <li>Intrinsic Value Analysis (DCF Modeling)</li>
                      <li>Asset Allocation using Modern Portfolio Theory (MPT)</li>
                      <li>Portfolio Optimization & Gap Analysis</li>
                      <li>Actionable Rebalancing Report</li>
                      <li>Execution Guidance & Support</li>
                    </ul>
                  </div>
                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <a href="#plan-3" onClick={(e) => handleNavClick('plan-3', e)} className="cta-button btn-view-details w-full py-3 text-center rounded-lg">View Details</a>
                    <button className="cta-button btn-subscribe w-full py-3 text-center rounded-lg">Subscribe</button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        )}

        {/* Detail Pages */}
        {['plan-1', 'plan-2', 'plan-3'].map((planId) => (
          currentView === planId && (
            <div key={planId} className="page detail-page">
              <div className="container mx-auto px-6 py-16 sm:py-24 max-w-5xl">
                <a href="#main" onClick={(e) => handleNavClick('main', e)} className="inline-flex items-center text-indigo-600 font-semibold mb-8 hover:text-indigo-800">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                  </svg>
                  Back to All Plans
                </a>
                <h1 className="font-display text-5xl font-extrabold text-gray-900 leading-tight">
                  {planDetailsContent[planId].title}
                </h1>
                <div className="mt-8 detail-list" dangerouslySetInnerHTML={{ __html: planDetailsContent[planId].details }} />
              </div>
            </div>
          )
        ))}
          </div>

          <CallToAction2 />
        </PlaxLayout>
      </>
    );
  };

export default InvestmentAdvisoryPage;
