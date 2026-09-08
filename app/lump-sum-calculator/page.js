"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import PlaxLayout from "@/layouts/PlaxLayout";
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector } from 'recharts';
import { Target, PiggyBank, Calendar, Percent, Landmark, TrendingDown, ChevronsDown, AlertTriangle, FilePieChart, BarChart3, SlidersHorizontal, Info, Repeat, Download, Loader, X, User, Mail, Phone, MapPin, TrendingUp, Shuffle } from 'lucide-react';

// --- UI/UX Components with Inline Styles ---

const Card = ({ children, className = '' }) => (
  <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', border: '1px solid #E7F1FA', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 44, 81, 0.1)', height: '100%', display: 'flex', flexDirection: 'column' }} className={className}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => (
  <div style={{ padding: '20px', borderBottom: '1px solid #E7F1FA' }} className={className}>{children}</div>
);

const CardContent = ({ children, className = '', style = {} }) => (
  <div style={{ padding: '20px', flexGrow: 1, ...style }} className={className}>{children}</div>
);

const CardTitle = ({ children, icon, className = '' }) => (
  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#002C51', display: 'flex', alignItems: 'center', gap: '12px' }} className={className}>
    {icon}{children}
  </h3>
);

const CardDescription = ({ children, className = '' }) => (
  <p style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }} className={className}>{children}</p>
);

const InputGroup = ({ icon, label, id, value, onChange, disabled = false, placeholder, unit, type = "number" }) => (
    <div style={{ position: 'relative' }}>
        <label htmlFor={id} style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#4b5563', marginBottom: '6px' }}>{label}</label>
        <div style={{ position: 'relative' }}>
            {icon && <div style={{ position: 'absolute', inset: '0', left: 0, paddingLeft: '14px', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: '#9ca3af' }}>{icon}</div>}
            <input
                type={type} id={id} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder}
                style={{ 
                    width: '100%', 
                    paddingLeft: icon ? '44px' : '16px', 
                    paddingRight: '56px', 
                    paddingTop: '10px', 
                    paddingBottom: '10px', 
                    border: '1px solid #92ADCB', 
                    borderRadius: '8px', 
                    transition: 'all 0.2s', 
                    fontSize: '14px',
                    backgroundColor: disabled ? '#F3F7FD' : 'rgba(255, 255, 255, 0.8)',
                    cursor: disabled ? 'not-allowed' : 'text',
                    color: '#002C51',
                    outline: 'none'
                }}
                onFocus={(e) => { e.target.style.borderColor = '#1F9A32'; e.target.style.boxShadow = '0 0 0 3px rgba(31, 154, 50, 0.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = '#92ADCB'; e.target.style.boxShadow = 'none'; }}
            />
            {unit && <div style={{ position: 'absolute', inset: '0', right: 0, paddingRight: '16px', display: 'flex', alignItems: 'center', pointerEvents: 'none', color: '#9ca3af', fontWeight: '500', fontSize: '13px' }}>{unit}</div>}
        </div>
    </div>
);

const SliderGroup = ({ icon, label, id, value, onChange, min, max, step, unit }) => (
    <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <label htmlFor={id} style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#4b5563' }}>{label}</label>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#1F9A32' }}>{value}{unit}</span>
        </div>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '12px' }}>
             {icon}
            <input
                type="range" id={id} value={value} onChange={onChange} min={min} max={max} step={step}
                style={{ 
                    width: '100%', 
                    height: '8px', 
                    backgroundColor: '#e5e7eb', 
                    borderRadius: '8px', 
                    appearance: 'none', 
                    cursor: 'pointer',
                    outline: 'none'
                }}
                className="slider-thumb"
            />
        </div>
    </div>
);

const RadioGroup = ({ value, onChange, options, disabledOptions = [], isMobile = false }) => (
    <div>
        <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#4b5563', marginBottom: '8px' }}>Calculate For:</label>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gap: '10px' }}>
            {options.map(option => (
                <button 
                    key={option.value} 
                    onClick={() => onChange(option.value)} 
                    disabled={disabledOptions.includes(option.value)}
                    style={{ 
                        padding: '8px 12px', 
                        fontSize: '13px', 
                        fontWeight: '600', 
                        borderRadius: '8px', 
                        transition: 'all 0.2s', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        gap: '10px',
                        transform: value === option.value ? 'translateY(-2px)' : 'none',
                        backgroundColor: disabledOptions.includes(option.value) ? '#F3F7FD' : (value === option.value ? '#1F9A32' : '#E7F1FA'),
                        color: disabledOptions.includes(option.value) ? '#92ADCB' : (value === option.value ? 'white' : '#002C51'),
                        cursor: disabledOptions.includes(option.value) ? 'not-allowed' : 'pointer',
                        border: 'none',
                        boxShadow: value === option.value ? '0 4px 6px rgba(31, 154, 50, 0.2)' : 'none'
                    }}
                    onMouseEnter={(e) => {
                        if (!disabledOptions.includes(option.value) && value !== option.value) {
                            e.target.style.backgroundColor = '#92ADCB';
                            e.target.style.color = 'white';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!disabledOptions.includes(option.value) && value !== option.value) {
                            e.target.style.backgroundColor = '#E7F1FA';
                            e.target.style.color = '#002C51';
                        }
                    }}
                >
                    {option.icon}
                    {option.label}
                </button>
            ))}
        </div>
    </div>
);

const Tabs = ({ value, onChange, tabs }) => (
    <div>
        <div style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.8)' }}>
            <nav style={{ marginBottom: '-1px', display: 'flex', gap: '20px', overflowX: 'auto' }} aria-label="Tabs">
                {tabs.map(tab => (
                    <button 
                        key={tab.id} 
                        onClick={() => onChange(tab.id)}
                        style={{ 
                            whiteSpace: 'nowrap', 
                            paddingTop: '12px', 
                            paddingBottom: '12px', 
                            paddingLeft: '4px', 
                            paddingRight: '4px', 
                            borderBottom: value === tab.id ? '2px solid #1F9A32' : '2px solid transparent',
                            color: value === tab.id ? '#1F9A32' : '#6b7280',
                            fontWeight: '600', 
                            fontSize: '14px', 
                            transition: 'colors 0.2s', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '8px',
                            background: 'none',
                            border: 'none',
                            borderBottom: value === tab.id ? '2px solid #1F9A32' : '2px solid transparent',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            if (value !== tab.id) {
                                e.target.style.color = '#002C51';
                                e.target.style.borderBottom = '2px solid #92ADCB';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (value !== tab.id) {
                                e.target.style.color = '#6b7280';
                                e.target.style.borderBottom = '2px solid transparent';
                            }
                        }}
                    >
                        {tab.icon}{tab.name}
                    </button>
                ))}
            </nav>
        </div>
        <div style={{ marginTop: '24px' }}>{tabs.find(tab => tab.id === value)?.content}</div>
    </div>
);

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }} onClick={onClose}>
            <div style={{ backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', width: '100%', maxWidth: '28rem' }} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

// --- Main App Component ---

export default function LumpSumCalculator() {
    // --- State Management ---
    const [presentValue, setPresentValue] = useState('10000');
    const [monthlyContribution, setMonthlyContribution] = useState('200');
    const [futureValue, setFutureValue] = useState('');
    const [rate, setRate] = useState('7');
    const [term, setTerm] = useState('10');
    const [inflationRate, setInflationRate] = useState('3');
    const [taxRate, setTaxRate] = useState('15');
    const [calculationTarget, setCalculationTarget] = useState('fv');
    const [activeTab, setActiveTab] = useState('chart');
    const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    
    // --- Refs for PDF Generation ---
    const summaryRef = useRef();
    const analysisRef = useRef(); 

    // --- Helper Functions ---
    const formatCurrency = (val) => isNaN(val) ? "$0.00" : val.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const formatPercent = (val) => isNaN(val) ? "N/A" : `${val}%`;
    const formatYears = (val) => isNaN(val) ? "N/A" : `${val.toFixed(2)} years`;
    const handleInputChange = (setter) => (e) => setter(e.target.value);

    // --- Load PDF Libraries ---
    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth < 1024);
        };
        checkSize();
        window.addEventListener('resize', checkSize);

        const jspdfScript = document.createElement("script");
        jspdfScript.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
        jspdfScript.async = true;
        document.body.appendChild(jspdfScript);

        const html2canvasScript = document.createElement("script");
        html2canvasScript.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
        html2canvasScript.async = true;
        document.body.appendChild(html2canvasScript);
        
        // Add slider thumb styles
        const style = document.createElement('style');
        style.innerHTML = `
          .slider-thumb::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            background: #1F9A32;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 0 5px rgba(31, 154, 50, 0.3);
          }

          .slider-thumb::-moz-range-thumb {
            width: 20px;
            height: 20px;
            background: #1F9A32;
            border-radius: 50%;
            cursor: pointer;
            border: 3px solid white;
            box-shadow: 0 0 5px rgba(31, 154, 50, 0.3);
          }
        `;
        document.head.appendChild(style);

        return () => {
            window.removeEventListener('resize', checkSize);
        };
    }, []);

    const { result, growthData, scenarios, summary, breakdownData, error, disabledCalcs } = useMemo(() => {
        const pv = parseFloat(String(presentValue).replace(/,/g, ''));
        const pmt = parseFloat(String(monthlyContribution).replace(/,/g, ''));
        const fv = parseFloat(String(futureValue).replace(/,/g, ''));
        const r = parseFloat(String(rate).replace(/,/g, '')) / 100;
        const n = parseFloat(String(term).replace(/,/g, ''));
        const iRate = parseFloat(String(inflationRate).replace(/,/g, '')) / 100;
        const tRate = parseFloat(String(taxRate).replace(/,/g, '')) / 100;

        const disabledCalcs = pmt > 0 ? ['rate', 'term'] : [];

        const required = { fv: { pv, r, n }, pv: { fv, r, n }, rate: { pv, fv, n }, term: { pv, fv, r }, pmt: {pv, fv, r, n} };
        for (const key in required[calculationTarget]) {
            if (isNaN(required[calculationTarget][key])) return { error: `Please fill all required fields for this calculation.`, disabledCalcs };
        }
        
        let calculatedValue = NaN;
        let finalFv = fv, finalPv = pv, finalPmt = pmt, finalRate = r, finalTerm = n;

        try {
            const compoundInterest = (p, r, t) => r === 0 ? p : p * Math.pow(1 + r / 12, t * 12);
            const fvAnnuity = (pmt, r, t) => r === 0 ? pmt * 12 * t : pmt * (Math.pow(1 + r / 12, t * 12) - 1) / (r / 12);

            switch (calculationTarget) {
                case 'fv':
                    calculatedValue = compoundInterest(pv, r, n) + fvAnnuity(pmt, r, n);
                    finalFv = calculatedValue;
                    break;
                case 'pv':
                     if (pmt > 0 && fv < fvAnnuity(pmt, r, n)) throw new Error("FV goal is too low for the given contributions.");
                    calculatedValue = r === 0 ? fv - (pmt * 12 * n) : (fv - fvAnnuity(pmt, r, n)) / Math.pow(1 + r / 12, n * 12);
                    finalPv = calculatedValue;
                    break;
                case 'pmt':
                     if (pv > 0 && fv < compoundInterest(pv,r,n)) throw new Error("FV goal is too low for the given initial amount.");
                     calculatedValue = r === 0 ? (fv-pv) / (12 * n) : (fv - compoundInterest(pv,r,n)) / ((Math.pow(1 + r / 12, n * 12) - 1) / (r / 12));
                     finalPmt = calculatedValue;
                     break;
                case 'rate':
                    if (pmt > 0) throw new Error("Calculating Rate with contributions is disabled.");
                    calculatedValue = 12 * (Math.pow(fv / pv, 1 / (n * 12)) - 1) * 100;
                    finalRate = calculatedValue / 100;
                    break;
                case 'term':
                    if (pmt > 0) throw new Error("Calculating Term with contributions is disabled.");
                    calculatedValue = Math.log(fv / pv) / (12 * Math.log(1 + r / 12));
                    finalTerm = calculatedValue;
                    break;
            }
            if (!isFinite(calculatedValue)) throw new Error("Calculation resulted in an invalid number.");

            const totalContributions = finalPmt * 12 * finalTerm;
            const totalInvestment = finalPv + totalContributions;
            const totalInterest = finalFv - totalInvestment;
            const taxOnGains = totalInterest > 0 ? totalInterest * tRate : 0;
            const afterTaxFv = finalFv - taxOnGains;
            const finalInflationAdjustedFv = afterTaxFv / Math.pow(1 + iRate, finalTerm);
            const roi = totalInvestment > 0 ? (totalInterest / totalInvestment) * 100 : 0;

            let crossoverYear = null;
            const data = [];
            if (isFinite(finalPv) && isFinite(finalRate) && isFinite(finalTerm) && finalTerm > 0) {
                 for (let year = 0; year <= Math.ceil(finalTerm); year++) {
                    const t = year > finalTerm ? finalTerm : year;
                    const principalComponent = compoundInterest(finalPv, finalRate, t);
                    const contributionsSoFar = finalPmt * 12 * t;
                    const balance = principalComponent + fvAnnuity(finalPmt, finalRate, t);
                    const interestComponent = balance - (finalPv + contributionsSoFar);
                    const inflationAdjustedBalance = balance / Math.pow(1 + iRate, t);
                    
                    if (year > 0 && crossoverYear === null) {
                        const lastYearBalance = data[year-1].balance;
                        const interestThisYear = balance - lastYearBalance - (finalPmt * 12);
                        if (interestThisYear > (finalPmt * 12)) {
                            crossoverYear = year;
                        }
                    }

                    data.push({ year, principal: finalPv, contributions: contributionsSoFar, interest: interestComponent, balance, inflationAdjustedBalance });
                }
            }
            const scenarioFunc = (rate, inflation) => {
                const fv = compoundInterest(finalPv, rate, finalTerm) + fvAnnuity(finalPmt, rate, finalTerm);
                const interest = fv - finalPv - (finalPmt * 12 * finalTerm);
                const tax = interest > 0 ? interest * tRate : 0;
                const netFv = fv-tax;
                const realFv = netFv / Math.pow(1 + inflation, finalTerm);
                return { netFv, realFv };
            };
            const scenarios = {
                rate: [-0.02, -0.01, 0, 0.01, 0.02].map(delta => ({
                    variable: `${((finalRate + delta)*100).toFixed(1)}%`,
                    ...scenarioFunc(finalRate + delta, iRate)
                })),
                inflation: [-0.01, -0.005, 0, 0.005, 0.01].map(delta => ({
                    variable: `${((iRate + delta)*100).toFixed(1)}%`,
                    ...scenarioFunc(finalRate, iRate + delta)
                })),
            };

            const breakdown = [{ name: 'Principal', value: finalPv }, {name: 'Contributions', value: totalContributions}, { name: 'Interest', value: totalInterest > 0 ? totalInterest : 0 }];
            
            return { result: calculatedValue, growthData: data, scenarios, summary: { totalInvestment, totalContributions, afterTaxFv, finalInflationAdjustedFv, roi, crossoverYear }, breakdownData: breakdown, error: null, disabledCalcs };
        } catch (e) {
            return { error: e.message, disabledCalcs };
        }
    }, [presentValue, monthlyContribution, futureValue, rate, term, inflationRate, taxRate, calculationTarget]);

    const tabs = [{ id: 'chart', name: 'Projection', icon: <BarChart3 size={16}/>, content: <InvestmentChart data={growthData} formatCurrency={formatCurrency} isMobile={isMobile} /> }, { id: 'breakdown', name: 'Breakdown', icon: <FilePieChart size={16}/>, content: <BreakdownCardContent data={breakdownData} summary={summary} formatCurrency={formatCurrency} formatPercent={formatPercent} isMobile={isMobile} isTablet={isTablet}/> }, { id: 'scenarios', name: 'Scenarios', icon: <SlidersHorizontal size={16}/>, content: <ScenarioCardContent scenarios={scenarios} formatCurrency={formatCurrency} isMobile={isMobile} isTablet={isTablet} /> }, { id: 'table', name: 'Data Table', icon: <ChevronsDown size={16}/>, content: <YearlyTable data={growthData} formatCurrency={formatCurrency} isMobile={isMobile} /> }];

    const handleDownloadPDF = async (userDetails) => {
        if (!window.jspdf || !window.html2canvas) { alert("PDF libraries are still loading..."); return; }
        setIsModalOpen(false);
        setIsGeneratingPDF(true);
        await new Promise(resolve => setTimeout(resolve, 50));

        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        const canvasOptions = { scale: 2, useCORS: true, backgroundColor: '#f9fafb' };
        const originalActiveTab = activeTab;

        const addPageHeader = (doc, title) => {
            doc.setFontSize(18);
            doc.setTextColor(30, 41, 59);
            doc.text(title, 105, 20, { align: 'center' });
            doc.setFontSize(10);
            doc.setTextColor(107, 114, 128);
            doc.text(`Generated for: ${userDetails.name}`, 105, 27, { align: 'center' });
            doc.text(`Generated on: ${new Date().toLocaleDateString('en-GB')}`, 105, 32, { align: 'center' });
        };
        const addPageFooter = (doc, pageNum) => {
            doc.setFontSize(8);
            doc.setTextColor(156, 163, 175);
            doc.text(`Page ${pageNum}`, 105, 290, { align: 'center' });
        };

        addPageHeader(pdf, "Investment Summary");
        const summaryCanvas = await window.html2canvas(summaryRef.current, canvasOptions);
        pdf.addImage(summaryCanvas.toDataURL('image/png'), 'PNG', 10, 45, 190, (summaryCanvas.height * 190) / summaryCanvas.width);
        addPageFooter(pdf, 1);
        
        for (let i = 0; i < tabs.length; i++) {
            const tab = tabs[i];
            setActiveTab(tab.id);
            await new Promise(resolve => setTimeout(resolve, 300));

            pdf.addPage();
            addPageHeader(pdf, `Analysis: ${tab.name}`);
            const analysisCanvas = await window.html2canvas(analysisRef.current, { ...canvasOptions, windowWidth: analysisRef.current.scrollWidth, windowHeight: analysisRef.current.scrollHeight });
            pdf.addImage(analysisCanvas.toDataURL('image/png'), 'PNG', 10, 45, 190, (analysisCanvas.height * 190) / analysisCanvas.width);
            addPageFooter(pdf, i + 2);
        }

        pdf.save(`investment-report-${new Date().toISOString().slice(0,10)}.pdf`);
        
        setActiveTab(originalActiveTab);
        setIsGeneratingPDF(false);
    };

    const radioOptions = [
        { value: 'fv', label: 'Future Value', icon: <Target size={16}/> }, 
        { value: 'pv', label: 'Present Value', icon: <Landmark size={16}/> }, 
        { value: 'pmt', label: 'Contribution', icon: <Repeat size={16} /> }, 
        { value: 'rate', label: 'Rate', icon: <Percent size={16}/> }, 
        { value: 'term', label: 'Term', icon: <Calendar size={16}/> }
    ];

    return (
        <PlaxLayout>
            <div style={{ minHeight: '100vh', width: '100%', backgroundColor: '#f3f4f6', color: '#1f2937', fontFamily: 'system-ui, -apple-system, sans-serif', paddingTop: '120px' }}>
                <PdfGeneratingOverlay isGenerating={isGeneratingPDF} />
                <header style={{ padding: '16px 24px', borderBottom: '1px solid #E7F1FA', backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(12px)', position: 'sticky', top: '120px', zIndex: 10 }}>
                    <div style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                        <h1 style={{ fontSize: isMobile ? '16px' : '18px', fontWeight: '700', letterSpacing: '-0.025em', color: '#002C51', margin: 0 }}>Professional Investment Dashboard</h1>
                        <button 
                            onClick={() => setIsModalOpen(true)} 
                            disabled={isGeneratingPDF || !!error}
                            style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '8px', 
                                padding: '8px 16px', 
                                backgroundColor: isGeneratingPDF || !!error ? '#92ADCB' : '#1F9A32', 
                                color: 'white', 
                                fontWeight: '600', 
                                borderRadius: '8px', 
                                boxShadow: '0 4px 6px rgba(31, 154, 50, 0.2)', 
                                border: 'none',
                                cursor: isGeneratingPDF || !!error ? 'not-allowed' : 'pointer',
                                transition: 'background-color 0.2s',
                                fontSize: '13px'
                            }}
                            onMouseEnter={(e) => { if (!isGeneratingPDF && !error) e.target.style.backgroundColor = '#178a2b'; }}
                            onMouseLeave={(e) => { if (!isGeneratingPDF && !error) e.target.style.backgroundColor = '#1F9A32'; }}
                        >
                            {isGeneratingPDF ? <Loader style={{ animation: 'spin 1s linear infinite' }} size={20}/> : <Download size={20} />}
                            {isGeneratingPDF ? 'Generating...' : 'Download Report'}
                        </button>
                    </div>
                </header>
                
                <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onDownload={handleDownloadPDF} />

                <main style={{ width: '100%', padding: isMobile ? '12px' : (isTablet ? '16px' : '24px'), maxWidth: '1400px', margin: '0 auto', overflowX: 'hidden' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 2fr', gap: isMobile ? '16px' : '24px', alignItems: 'start' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px', minWidth: 0 }}>
                            <Card>
                                <CardHeader><CardTitle icon={<PiggyBank size={20} />} >Investment Variables</CardTitle></CardHeader>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <RadioGroup value={calculationTarget} onChange={setCalculationTarget} options={radioOptions} disabledOptions={disabledCalcs} isMobile={isMobile} />
                                    {disabledCalcs.length > 0 && <p style={{ fontSize: '11px', textAlign: 'center', color: '#6b7280' }}>Rate & Term calculation is disabled when using monthly contributions.</p>}
                                    <hr style={{ border: 'none', borderTop: '1px solid #e5e7eb', margin: '8px 0' }}/>
                                    <InputGroup icon={<Landmark size={18} />} label="Initial Investment (PV)" id="present-value" value={presentValue} onChange={handleInputChange(setPresentValue)} disabled={calculationTarget === 'pv'} placeholder="10,000" unit="$"/>
                                    <InputGroup icon={<Repeat size={18} />} label="Monthly Contribution" id="monthly-contribution" value={monthlyContribution} onChange={handleInputChange(setMonthlyContribution)} disabled={calculationTarget === 'pmt'} placeholder="e.g., 200" unit="$"/>
                                    <InputGroup icon={<Target size={18} />} label="Future Value Goal (FV)" id="future-value" value={futureValue} onChange={handleInputChange(setFutureValue)} disabled={calculationTarget === 'fv'} placeholder="e.g., 250,000" unit="$"/>
                                    <InputGroup icon={<Calendar size={18} />} label="Term" id="term" value={term} onChange={handleInputChange(setTerm)} disabled={calculationTarget === 'term'} placeholder="e.g., 10" unit="years"/>
                                </CardContent>
                            </Card>
                            <Card>
                                 <CardHeader><CardTitle icon={<SlidersHorizontal size={20}/>}>Economic Factors</CardTitle></CardHeader>
                                <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <SliderGroup icon={<Percent size={18} />} label="Annual Rate" id="rate" value={rate} onChange={handleInputChange(setRate)} min="0" max="20" step="0.1" unit="%"/>
                                    <SliderGroup icon={<TrendingDown size={18} />} label="Inflation Rate" id="inflation-rate" value={inflationRate} onChange={handleInputChange(setInflationRate)} min="0" max="10" step="0.1" unit="%"/>
                                    <SliderGroup icon={<Percent size={18} />} label="Gains Tax Rate" id="tax-rate" value={taxRate} onChange={handleInputChange(setTaxRate)} min="0" max="50" step="0.5" unit="%"/>
                                </CardContent>
                            </Card>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '16px' : '24px', minWidth: 0, width: '100%' }}>
                            <div ref={summaryRef}><ResultSummaryCard error={error} summary={summary} calculatedResult={result} target={calculationTarget} formatters={{formatCurrency, formatPercent, formatYears}} isMobile={isMobile} /></div>
                            <div ref={analysisRef}>
                                <Card>
                                    <CardHeader>
                                       <CardTitle icon={<Info size={20}/>}>In-Depth Analysis</CardTitle>
                                    </CardHeader>
                                    <CardContent style={{ overflowX: 'hidden' }}>
                                        {!error && summary ? <Tabs value={activeTab} onChange={setActiveTab} tabs={tabs} /> : <p style={{ textAlign: 'center', color: '#6b7280', padding: '40px 0' }}>Analysis will appear here once inputs are valid.</p>}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </PlaxLayout>
    );
}

// --- Sub-components ---
function PdfGeneratingOverlay({ isGenerating }) {
    if (!isGenerating) return null;
    return (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px', color: 'white' }}>
            <Loader style={{ animation: 'spin 1s linear infinite' }} size={64} />
            <h2 style={{ fontSize: '22px', fontWeight: '700', marginTop: '24px' }}>Generating Your Report...</h2>
            <p style={{ marginTop: '8px', fontSize: '16px' }}>Please wait, this may take a moment.</p>
        </div>
    );
}

function DownloadModal({ isOpen, onClose, onDownload }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [formError, setFormError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email) {
            setFormError('Please fill out at least Name and Email.');
            return;
        }
        setFormError('');
        onDownload({name, email, phone, location});
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>Download Report</h3>
                    <button onClick={onClose} style={{ color: '#9ca3af', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }} onMouseEnter={(e) => e.target.style.color = '#4b5563'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}><X size={24} /></button>
                </div>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '24px' }}>Enter your details to generate a personalized report.</p>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <InputGroup icon={<User size={18}/>} label="Full Name" id="pdf-name" value={name} onChange={e => setName(e.target.value)} type="text" placeholder="John Doe" />
                    <InputGroup icon={<Mail size={18}/>} label="Email Address" id="pdf-email" value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="john.doe@example.com" />
                    <InputGroup icon={<Phone size={18}/>} label="Phone Number (Optional)" id="pdf-phone" value={phone} onChange={e => setPhone(e.target.value)} type="tel" placeholder="+1 (555) 123-4567" />
                    <InputGroup icon={<MapPin size={18}/>} label="Location (Optional)" id="pdf-location" value={location} onChange={e => setLocation(e.target.value)} type="text" placeholder="City, Country" />
                    {formError && <p style={{ fontSize: '13px', color: '#ef4444', textAlign: 'center' }}>{formError}</p>}
                    <button type="submit" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#1F9A32', color: 'white', fontWeight: '600', borderRadius: '8px', boxShadow: '0 4px 6px rgba(31, 154, 50, 0.2)', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#178a2b'} onMouseLeave={(e) => e.target.style.backgroundColor = '#1F9A32'}>
                        <Download size={20} /> Submit & Download
                    </button>
                </form>
            </div>
        </Modal>
    );
}

function ResultSummaryCard({ error, summary, calculatedResult, target, formatters, isMobile = false }) {
    const { formatCurrency, formatPercent, formatYears } = formatters;
    
    if (error) return (
        <Card style={{ borderColor: 'rgba(245, 158, 11, 0.5)' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '32px', height: '100%' }}>
                <AlertTriangle style={{ width: '48px', height: '48px', color: '#f59e0b', marginBottom: '16px' }}/>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#b45309', marginBottom: '8px' }}>Calculation Error</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px', maxWidth: '384px' }}>{error}</p>
            </CardContent>
        </Card>
    );
    
    if (!summary) return null;

    const resultMapping = { 
        fv: {l:"Projected Future Value", v:formatCurrency}, 
        pv: {l:"Required Initial Investment", v:formatCurrency}, 
        pmt:{l:"Required Monthly Contribution", v:formatCurrency}, 
        rate: {l:"Required Annual Rate", v:formatPercent}, 
        term: {l:"Required Term", v:formatYears} 
    };
    
    return (
        <Card style={{ background: 'linear-gradient(135deg, #F3F7FD 0%, #E7F1FA 100%)' }}>
            <CardContent style={{ padding: isMobile ? '24px' : '32px' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: '14px', fontWeight: '500', color: '#1F9A32', marginBottom: '8px' }}>{resultMapping[target].l}</p>
                    <p style={{ fontSize: isMobile ? '32px' : '40px', fontWeight: '800', color: '#002C51', letterSpacing: '-0.025em', margin: 0 }}>{resultMapping[target].v(calculatedResult)}</p>
                </div>
                <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '20px' }}>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #E7F1FA' }}>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>Total Contributions</p>
                        <p style={{ fontSize: '18px', fontWeight: '700', color: '#002C51', marginTop: '4px' }}>{formatCurrency(summary.totalContributions)}</p>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #E7F1FA' }}>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>Net Future Value</p>
                        <p style={{ fontSize: '18px', fontWeight: '700', color: '#002C51', marginTop: '4px' }}>{formatCurrency(summary.afterTaxFv)}</p>
                    </div>
                    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '16px', borderRadius: '8px', textAlign: 'center', border: '1px solid #E7F1FA' }}>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>Real Value (Today's $)</p>
                        <p style={{ fontSize: '18px', fontWeight: '700', color: '#002C51', marginTop: '4px' }}>{formatCurrency(summary.finalInflationAdjustedFv)}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

const ActiveDonutShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
    return (
        <g>
            <text x={cx} y={cy-10} dy={8} textAnchor="middle" fill="#1f2937" style={{ fontSize: '20px', fontWeight: '700' }}>{(percent * 100).toFixed(1)}%</text>
            <text x={cx} y={cy+15} dy={8} textAnchor="middle" fill="#6b7280" style={{ fontSize: '13px' }}>{payload.name}</text>
            <Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius + 4} startAngle={startAngle} endAngle={endAngle} fill={fill} />
        </g>
    );
};

function BreakdownCardContent({ data, summary, formatCurrency, formatPercent, isMobile, isTablet }) {
    const [activeIndex, setActiveIndex] = useState(0);
    if (!data || data.some(d => d.value < 0)) return null;
    const COLORS = ['#002C51', '#1F9A32', '#92ADCB'];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr', gap: isMobile ? '16px' : '24px', alignItems: 'center' }}>
            <div style={{ height: isMobile ? '180px' : '224px', width: '100%', minWidth: 0 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie dataKey="value" data={data} cx="50%" cy="50%" innerRadius={isMobile ? 50 : 70} outerRadius={isMobile ? 70 : 90} paddingAngle={3} activeIndex={activeIndex} activeShape={ActiveDonutShape} onMouseEnter={(_, index) => setActiveIndex(index)}>
                            {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px', minWidth: 0 }}>
                {data.map((entry, index) => (
                    <div key={entry.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: isMobile ? '10px' : '12px', borderRadius: '8px', backgroundColor: `${COLORS[index]}1A`, minWidth: 0 }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '8px' : '12px', minWidth: 0, flex: 1 }}>
                           <div style={{ width: isMobile ? '10px' : '12px', height: isMobile ? '10px' : '12px', borderRadius: '50%', backgroundColor: COLORS[index], flexShrink: 0 }}></div>
                           <span style={{ fontWeight: '600', color: COLORS[index], fontSize: isMobile ? '12px' : '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{entry.name}</span>
                       </div>
                       <span style={{ fontWeight: '700', fontSize: isMobile ? '13px' : '16px', color: '#1f2937', whiteSpace: 'nowrap', marginLeft: '8px' }}>{formatCurrency(entry.value)}</span>
                    </div>
                ))}
            </div>
             <div style={{ gridColumn: isTablet ? '1' : '1 / -1', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '16px', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#F3F7FD', padding: '12px', borderRadius: '8px', border: '1px solid #E7F1FA' }}>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>Return on Investment</p>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#1F9A32', marginTop: '4px' }}>{formatPercent(summary.roi)}</p>
                </div>
                <div style={{ backgroundColor: '#F3F7FD', padding: '12px', borderRadius: '8px', border: '1px solid #E7F1FA' }}>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>"Crossover" Point</p>
                    <p style={{ fontSize: '18px', fontWeight: '700', color: '#002C51', marginTop: '4px' }}>{summary.crossoverYear ? `Year ${summary.crossoverYear}` : 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

function ScenarioCardContent({ scenarios, formatCurrency, isMobile, isTablet }) {
    const [variable, setVariable] = useState('rate');
    if (!scenarios) return null;
    
    const data = scenarios[variable];
    const header = variable === 'rate' ? 'Annual Rate' : 'Inflation Rate';

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '12px' : '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: isMobile ? '6px' : '8px', flexWrap: 'wrap' }}>
                <button onClick={() => setVariable('rate')} style={{ padding: isMobile ? '6px 12px' : '8px 16px', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', borderRadius: '6px', backgroundColor: variable === 'rate' ? '#1F9A32' : '#E7F1FA', color: variable === 'rate' ? 'white' : '#002C51', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', whiteSpace: 'nowrap' }}>Rate Scenarios</button>
                <button onClick={() => setVariable('inflation')} style={{ padding: isMobile ? '6px 12px' : '8px 16px', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', borderRadius: '6px', backgroundColor: variable === 'inflation' ? '#1F9A32' : '#E7F1FA', color: variable === 'inflation' ? 'white' : '#002C51', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s', whiteSpace: 'nowrap' }}>Inflation Scenarios</button>
            </div>
            <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                <table style={{ minWidth: isMobile ? '500px' : '100%', width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: 'rgba(249, 250, 251, 0.7)', position: 'sticky', top: 0, zIndex: 1 }}>
                        <tr>
                            <th style={{ padding: isMobile ? '8px' : '8px 16px', textAlign: 'left', fontSize: isMobile ? '10px' : '11px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>{header}</th>
                            <th style={{ padding: isMobile ? '8px' : '8px 16px', textAlign: 'left', fontSize: isMobile ? '10px' : '11px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Net Future Value</th>
                            <th style={{ padding: isMobile ? '8px' : '8px 16px', textAlign: 'left', fontSize: isMobile ? '10px' : '11px', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Real Value{isMobile ? '' : " (Today's $)"}</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                        {data.map(row => (
                            <tr key={row.variable} style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.5)' }}>
                                <td style={{ padding: isMobile ? '10px 8px' : '12px 16px', whiteSpace: 'nowrap', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937' }}>{row.variable}</td>
                                <td style={{ padding: isMobile ? '10px 8px' : '12px 16px', whiteSpace: 'nowrap', fontSize: isMobile ? '11px' : '13px', color: '#4b5563' }}>{formatCurrency(row.netFv)}</td>
                                <td style={{ padding: isMobile ? '10px 8px' : '12px 16px', whiteSpace: 'nowrap', fontSize: isMobile ? '11px' : '13px', color: '#4b5563' }}>{formatCurrency(row.realFv)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function InvestmentChart({ data, formatCurrency, isMobile = false }) {
    if (!data || data.length === 0) return null;
    return (
        <div style={{ height: isMobile ? '300px' : '384px', width: '100%', overflowX: 'hidden' }}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 5, right: isMobile ? 5 : 20, left: isMobile ? 0 : 10, bottom: 5 }}>
                     <defs>
                        <linearGradient id="colorInterest" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#1F9A32" stopOpacity={0.8}/><stop offset="95%" stopColor="#1F9A32" stopOpacity={0.1}/></linearGradient>
                        <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#92ADCB" stopOpacity={0.8}/><stop offset="95%" stopColor="#92ADCB" stopOpacity={0.1}/></linearGradient>
                         <linearGradient id="colorPrincipal" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#002C51" stopOpacity={0.8}/><stop offset="95%" stopColor="#002C51" stopOpacity={0.1}/></linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(128, 128, 128, 0.2)" />
                    <XAxis dataKey="year" stroke="#9ca3af" tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }} dy={10} />
                    <YAxis stroke="#9ca3af" tick={{ fill: '#6b7280', fontSize: isMobile ? 10 : 12 }} tickFormatter={(tick) => isMobile ? `$${Math.round(tick / 1000)}k` : `$${Math.round(tick / 1000)}k`} dx={isMobile ? -10 : -5} width={isMobile ? 50 : 60}/>
                    <Tooltip content={<CustomTooltip formatCurrency={formatCurrency} isMobile={isMobile} />} />
                    <Legend wrapperStyle={{paddingTop: '25px', fontSize: isMobile ? '11px' : '12px'}} iconSize={isMobile ? 10 : 14}/>
                    <Area type="monotone" dataKey="principal" stackId="1" stroke="#002C51" fill="url(#colorPrincipal)" name="Principal" />
                    <Area type="monotone" dataKey="contributions" stackId="1" stroke="#92ADCB" fill="url(#colorContributions)" name="Contributions" />
                    <Area type="monotone" dataKey="interest" stackId="1" stroke="#1F9A32" fill="url(#colorInterest)" name="Interest" />
                    <Line type="monotone" dataKey="inflationAdjustedBalance" name={isMobile ? "Real Value" : "Real Value (Today's $)"} stroke="#f59e0b" strokeWidth={isMobile ? 2 : 3} strokeDasharray="5 5" dot={false} activeDot={{ r: isMobile ? 4 : 6 }}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

const CustomTooltip = ({ active, payload, label, formatCurrency, isMobile = false }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div style={{ 
                padding: isMobile ? '12px' : '16px', 
                backgroundColor: 'rgba(0, 44, 81, 0.95)', 
                backdropFilter: 'blur(4px)', 
                color: 'white', 
                borderRadius: '8px', 
                border: '1px solid #92ADCB', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', 
                minWidth: isMobile ? '160px' : '200px',
                maxWidth: isMobile ? '220px' : '280px'
            }}>
                <p style={{ fontWeight: '700', fontSize: isMobile ? '13px' : '16px', marginBottom: isMobile ? '6px' : '8px', color: '#E7F1FA' }}>{`Year ${label}`}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '3px' : '4px' }}>
                    <p style={{ fontSize: isMobile ? '11px' : '13px' }}><span style={{ fontWeight: '600', color: '#E7F1FA' }}>Principal:</span> <span style={{ color: 'white' }}>{formatCurrency(data.principal)}</span></p>
                    <p style={{ fontSize: isMobile ? '11px' : '13px' }}><span style={{ fontWeight: '600', color: '#92ADCB' }}>Contributions:</span> <span style={{ color: 'white' }}>{formatCurrency(data.contributions)}</span></p>
                    <p style={{ fontSize: isMobile ? '11px' : '13px' }}><span style={{ fontWeight: '600', color: '#1F9A32' }}>Interest:</span> <span style={{ color: 'white' }}>{formatCurrency(data.interest)}</span></p>
                    <hr style={{ margin: isMobile ? '6px 0' : '8px 0', border: 'none', borderTop: '1px solid #92ADCB' }} />
                    <p style={{ fontWeight: '700', fontSize: isMobile ? '12px' : '14px', color: '#E7F1FA' }}>{isMobile ? 'Total:' : 'Total Balance:'} <span style={{ color: 'white' }}>{formatCurrency(data.balance)}</span></p>
                    <p style={{ fontSize: isMobile ? '11px' : '13px', color: '#1F9A32', fontWeight: '600' }}>{isMobile ? 'Real:' : 'Real Value:'} <span style={{ color: 'white' }}>{formatCurrency(data.inflationAdjustedBalance)}</span></p>
                </div>
            </div>
        );
    }
    return null;
};

function YearlyTable({ data, formatCurrency, isMobile = false }) {
    if (!data || data.length < 2) return null;
    const tableData = data.slice(1).map((row, index) => ({...row, startingBalance: data[index].balance, interestEarned: row.balance - data[index].balance - (row.contributions - data[index].contributions) }));
    return (
        <div style={{ width: '100%', maxHeight: isMobile ? '300px' : '384px', overflowY: 'auto', overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(229, 231, 235, 0.8)' }}>
            <table style={{ minWidth: isMobile ? '600px' : '100%', width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: 'rgba(249, 250, 251, 0.7)', position: 'sticky', top: 0, backdropFilter: 'blur(4px)', zIndex: 1 }}>
                    <tr>
                        <th style={{ padding: isMobile ? '10px 8px' : '14px 16px', textAlign: 'left', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Year</th>
                        <th style={{ padding: isMobile ? '10px 8px' : '14px 16px', textAlign: 'left', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Start</th>
                        <th style={{ padding: isMobile ? '10px 8px' : '14px 16px', textAlign: 'left', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Interest</th>
                        <th style={{ padding: isMobile ? '10px 8px' : '14px 16px', textAlign: 'left', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>End Balance</th>
                        <th style={{ padding: isMobile ? '10px 8px' : '14px 16px', textAlign: 'left', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', borderBottom: '1px solid rgba(229, 231, 235, 0.8)', whiteSpace: 'nowrap' }}>Real Value</th>
                    </tr>
                </thead>
                <tbody style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
                    {tableData.map((row) => (
                        <tr key={row.year} style={{ borderBottom: '1px solid rgba(229, 231, 235, 0.5)', transition: 'background-color 0.2s' }}>
                            <td style={{ padding: isMobile ? '10px 8px' : '16px', fontSize: isMobile ? '11px' : '13px', fontWeight: '500', color: '#1f2937', whiteSpace: 'nowrap' }}>{row.year}</td>
                            <td style={{ padding: isMobile ? '10px 8px' : '16px', fontSize: isMobile ? '11px' : '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{formatCurrency(row.startingBalance)}</td>
                            <td style={{ padding: isMobile ? '10px 8px' : '16px', fontSize: isMobile ? '11px' : '13px', color: '#10b981', fontWeight: '500', whiteSpace: 'nowrap' }}>{`+ ${formatCurrency(row.interestEarned)}`}</td>
                            <td style={{ padding: isMobile ? '10px 8px' : '16px', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: '#1f2937', whiteSpace: 'nowrap' }}>{formatCurrency(row.balance)}</td>
                            <td style={{ padding: isMobile ? '10px 8px' : '16px', fontSize: isMobile ? '11px' : '13px', color: '#6b7280', whiteSpace: 'nowrap' }}>{formatCurrency(row.inflationAdjustedBalance)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}