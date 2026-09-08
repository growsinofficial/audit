"use client";

import React, { useState, useEffect, useMemo } from 'react';
import PlaxLayout from "@/layouts/PlaxLayout";
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChevronsRight, Info, TrendingUp, DollarSign, Briefcase, Home, Target, LifeBuoy, Download, BarChart2, AlertTriangle, CheckCircle2, SlidersHorizontal } from 'lucide-react';

// --- PDF Generation Libraries (jsPDF & html2canvas) ---
const loadScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
};


// --- UTILITY FUNCTIONS ---

const randomNormal = (mean, stdDev) => {
    let u1 = 0, u2 = 0;
    while (u1 === 0) u1 = Math.random();
    while (u2 === 0) u2 = Math.random();
    const z0 = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    return z0 * stdDev + mean;
};

const formatCurrency = (value) => {
    if (value === null || value === undefined) return '$...';
    if (Math.abs(value) >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (Math.abs(value) >= 1e3) return `$${(value / 1e3).toFixed(0)}k`;
    return `$${Math.round(value)}`;
};


// --- CORE SIMULATION ENGINE ---

const runMonteCarloSimulation = (inputs, numSimulations = 1000) => {
    const allSimulations = [];
    const worstDrawdowns = [];
    let successCount = 0;

    const totalYears = inputs.lifeExpectancy - inputs.currentAge;

    for (let i = 0; i < numSimulations; i++) {
        const yearlyData = [];
        let currentBalance = inputs.currentSavings.taxable + inputs.currentSavings.taxDeferred + inputs.currentSavings.rothIra;
        let currentSalary = inputs.annualIncome;
        let initialRetirementBalance = -1;
        let peakBalance = currentBalance;
        let maxDrawdown = 0;

        for (let j = 0; j <= totalYears; j++) {
            const age = inputs.currentAge + j;
            
            if (inputs.stressTest.enabled && age === inputs.stressTest.age) {
                currentBalance *= (1 - inputs.stressTest.dropPercent / 100);
            }
            
            const annualReturnRate = randomNormal(inputs.investments.expectedReturn / 100, inputs.investments.volatility / 100);
            currentBalance *= (1 + annualReturnRate);

            if (age < inputs.retirementAge) { // Accumulation Phase
                const contributions = currentSalary * (inputs.savingsRate / 100);
                currentBalance += contributions;
                currentSalary *= (1 + inputs.salaryGrowth / 100);
            } else { // Withdrawal Phase
                if (initialRetirementBalance === -1) initialRetirementBalance = currentBalance;
                
                const retirementYear = age - inputs.retirementAge;
                const inflationMultiplier = Math.pow(1 + inputs.inflationRate / 100, retirementYear);
                const socialSecurityIncome = age >= inputs.socialSecurityAge ? (inputs.socialSecurityBenefit * inflationMultiplier) : 0;
                
                let withdrawalAmount = 0;
                switch(inputs.withdrawalStrategy) {
                    case 'fourPercentRule':
                        withdrawalAmount = (initialRetirementBalance * 0.04) * inflationMultiplier;
                        break;
                    case 'inflationAdjusted':
                    default:
                        withdrawalAmount = inputs.retirementExpenses * inflationMultiplier;
                        break;
                }
                currentBalance -= Math.max(0, withdrawalAmount - socialSecurityIncome);
            }

            const lifeEvent = inputs.lifeEvents.find(e => e.age === age);
            if (lifeEvent) currentBalance += lifeEvent.amount;
            
            if (currentBalance > peakBalance) {
                peakBalance = currentBalance;
            } else {
                const drawdown = (peakBalance - currentBalance) / peakBalance;
                if (drawdown > maxDrawdown) maxDrawdown = drawdown;
            }

            if (currentBalance < 0) {
                yearlyData.push({ year: new Date().getFullYear() + j, age: age, balance: 0 });
                break;
            }
            yearlyData.push({ year: new Date().getFullYear() + j, age: age, balance: currentBalance });
        }
        
        allSimulations.push(yearlyData);
        worstDrawdowns.push(maxDrawdown);
        if (yearlyData.length > totalYears && yearlyData[yearlyData.length - 1].balance > 0) successCount++;
    }
    
    const chartData = [];
    for (let j = 0; j <= totalYears; j++) {
        const balancesForYear = allSimulations.map(sim => sim[j]?.balance).filter(b => b !== undefined && b !== null).sort((a, b) => a - b);
        if (balancesForYear.length > 0) {
            chartData.push({
                year: new Date().getFullYear() + j, age: inputs.currentAge + j,
                p10: balancesForYear[Math.floor(balancesForYear.length * 0.10)],
                p50: balancesForYear[Math.floor(balancesForYear.length * 0.50)],
                p90: balancesForYear[Math.floor(balancesForYear.length * 0.90)],
            });
        }
    }
    
    worstDrawdowns.sort((a, b) => a - b);
    const medianWorstDrawdown = worstDrawdowns[Math.floor(worstDrawdowns.length * 0.50)];
    const successProbability = (successCount / numSimulations) * 100;
    const medianNestEgg = chartData.find(d => d.age === inputs.retirementAge)?.p50 || 0;

    return { chartData, successProbability, medianNestEgg, medianWorstDrawdown };
};


// --- UI COMPONENTS ---

const InfoTooltip = ({ text }) => (
    <div className="relative flex items-center group">
        <Info className="h-4 w-4 text-gray-400 ml-2 cursor-pointer" />
        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-64 p-3 bg-white border border-gray-200 rounded-lg shadow-xl text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
            {text}
        </div>
    </div>
);

const InputField = ({ label, type = "number", value, onChange, name, info }) => (
    <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: '500', color: 'rgb(0 44 81)', marginBottom: '3px' }}>{label}{info && <InfoTooltip text={info} />}</label>
        <input type={type} name={name} value={value} onChange={onChange} style={{ width: '100%', backgroundColor: '#F3F7FD', border: '1px solid #E7F1FA', color: 'rgb(0 44 81)', borderRadius: '5px', padding: '6px 10px', fontSize: '0.8125rem', outline: 'none', height: 'auto', fontFamily: 'inherit' }} />
    </div>
);

const InputSlider = ({ label, value, onChange, name, min, max, step, info, unit="%" }) => (
    <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontWeight: '500', color: 'rgb(0 44 81)', marginBottom: '6px' }}>
            <span>{label} {info && <InfoTooltip text={info} />}</span>
            <span style={{ color: '#1F9A32', fontWeight: '600', fontSize: '0.75rem' }}>{value}{unit}</span>
        </label>
        <input type="range" name={name} value={value} onChange={onChange} min={min} max={max} step={step} 
            style={{ width: '100%', height: '5px', backgroundColor: '#E7F1FA', borderRadius: '6px', appearance: 'slider-horizontal', cursor: 'pointer', accentColor: '#1F9A32', border: 'none' }} />
    </div>
);

const SelectField = ({ label, value, onChange, name, children, info }) => (
    <div style={{ marginBottom: '10px' }}>
        <label style={{ display: 'flex', alignItems: 'center', fontSize: '0.75rem', fontWeight: '500', color: 'rgb(0 44 81)', marginBottom: '3px' }}>{label}{info && <InfoTooltip text={info} />}</label>
        <select name={name} value={value} onChange={onChange} style={{ display: 'block', width: '100%', padding: '6px 32px 6px 10px', fontSize: '0.8125rem', backgroundColor: '#F3F7FD', border: '1px solid #E7F1FA', color: 'rgb(0 44 81)', outline: 'none', borderRadius: '5px', height: 'auto', fontFamily: 'inherit' }}>
            {children}
        </select>
    </div>
);

const SummaryCard = ({ title, value, icon, color, subtext, isMobile = false }) => {
    const colorMap = {
        'bg-blue-100': '#E7F1FA',
        'bg-green-100': '#D4F4DD',
        'bg-orange-100': '#FFE5CC',
        'bg-indigo-100': '#CFE1F1',
        'bg-yellow-100': '#FFF4CC'
    };
    return (
        <div style={{ backgroundColor: 'white', padding: isMobile ? '14px' : '18px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'flex-start', gap: '12px', border: '1px solid #E7F1FA' }}>
            <div style={{ padding: isMobile ? '8px' : '10px', borderRadius: '10px', backgroundColor: colorMap[color] || '#E7F1FA' }}>{icon}</div>
            <div>
                <p style={{ fontSize: '0.75rem', color: 'rgb(146 173 203)', fontWeight: '500' }}>{title}</p>
                <p style={{ fontSize: isMobile ? '1.125rem' : '1.25rem', fontWeight: 'bold', color: 'rgb(0 44 81)', marginTop: '3px' }}>{value}</p>
                {subtext && <p style={{ fontSize: '0.6875rem', color: 'rgb(137, 141, 150)', marginTop: '3px' }}>{subtext}</p>}
            </div>
        </div>
    );
};

const CustomTooltipContent = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(4px)', border: '1px solid #E7F1FA', padding: '12px', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', fontSize: '0.8125rem' }}>
                <p style={{ fontWeight: 'bold', color: 'rgb(0 44 81)', marginBottom: '6px' }}>{`Year: ${label} (Age: ${data.age})`}</p>
                <p style={{ color: '#1F9A32', marginBottom: '2px' }}>{`Best Case (90th %): ${formatCurrency(data.p90)}`}</p>
                <p style={{ color: '#92ADCB', marginBottom: '2px' }}>{`Median Case (50th %): ${formatCurrency(data.p50)}`}</p>
                <p style={{ color: '#FF8C42', marginBottom: '0' }}>{`Worst Case (10th %): ${formatCurrency(data.p10)}`}</p>
            </div>
        );
    }
    return null;
};


// --- MAIN APP COMPONENT ---
export default function RetirementCalculatorPage() {
    const [inputs, setInputs] = useState({
        currentAge: 35, retirementAge: 65, lifeExpectancy: 95,
        annualIncome: 80000, salaryGrowth: 3,
        currentSavings: { taxable: 50000, taxDeferred: 150000, rothIra: 25000 },
        savingsRate: 15, retirementExpenses: 50000, inflationRate: 3,
        investments: { expectedReturn: 7, volatility: 15 },
        lifeEvents: [{ age: 45, description: "Child's College", amount: -50000 }, { age: 55, description: "Inheritance", amount: 100000 }],
        socialSecurityBenefit: 25000, socialSecurityAge: 67,
        withdrawalStrategy: 'inflationAdjusted',
        stressTest: { enabled: false, age: 65, dropPercent: 30 }
    });

    const [results, setResults] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Load PDF libraries on component mount
    useEffect(() => {
        const checkSize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth < 1024);
        };
        checkSize();
        window.addEventListener('resize', checkSize);

        Promise.all([
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'),
            loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'),
        ]).catch(err => console.error("Failed to load PDF libraries", err));
        calculate();

        return () => window.removeEventListener('resize', checkSize);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const parsedValue = type === 'number' ? parseFloat(value) : (type === 'checkbox' ? checked : value);
        const keys = name.split('.');

        if (keys.length > 1) {
            setInputs(prev => {
                const newState = {...prev};
                let current = newState;
                for (let i = 0; i < keys.length - 1; i++) current = current[keys[i]];
                current[keys[keys.length - 1]] = parsedValue;
                return newState;
            });
        } else {
            setInputs(prev => ({ ...prev, [name]: parsedValue }));
        }
    };
    
    const handleEventChange = (index, field, value) => {
        const newEvents = [...inputs.lifeEvents];
        newEvents[index][field] = field === 'amount' ? parseFloat(value) : value;
        setInputs(prev => ({...prev, lifeEvents: newEvents}));
    };
    
    const addEvent = () => setInputs(prev => ({...prev, lifeEvents: [...prev.lifeEvents, { age: 50, description: 'New Event', amount: 0}]}));
    const removeEvent = (index) => setInputs(prev => ({...prev, lifeEvents: inputs.lifeEvents.filter((_, i) => i !== index)}));

    const calculate = () => {
        setIsLoading(true);
        setTimeout(() => {
            const res = runMonteCarloSimulation(inputs);
            setResults(res);
            setIsLoading(false);
        }, 500);
    };

    const handleDownloadPDF = async () => {
        if (!window.jspdf || !window.html2canvas) {
            alert("PDF generation library is not loaded yet. Please try again in a moment.");
            return;
        }
        setIsDownloading(true);

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        let y = 15;

        // --- Helper function to add text and manage y-position ---
        const addText = (text, options = {}) => {
            if (y > 280) { // Page break
                doc.addPage();
                y = 15;
            }
            doc.text(text, options.x || 15, y, options);
            y += (options.size || 10) / 2 + 3;
        };

        const addTitle = (text) => {
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            addText(text);
            y += 4;
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
        }

        // --- PDF Content ---
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        addText('Retirement Plan Summary Report', {align: 'center', x: 105});
        y+=5;
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');

        addTitle("Summary Results");
        addText(`Success Probability: ${Math.round(results.successProbability)}%`);
        addText(`Median Nest Egg at Retirement: ${formatCurrency(results.medianNestEgg)}`);
        y+=5;
        
        addTitle("Your Inputs");
        const inputData = {
            "Vitals": { "Current Age": inputs.currentAge, "Retirement Age": inputs.retirementAge, "Life Expectancy": inputs.lifeExpectancy },
            "Income & Savings": { "Gross Annual Income": formatCurrency(inputs.annualIncome), "Salary Growth": `${inputs.salaryGrowth}%`, "Savings Rate": `${inputs.savingsRate}%` },
            "Current Assets": { "Taxable": formatCurrency(inputs.currentSavings.taxable), "Tax-Deferred": formatCurrency(inputs.currentSavings.taxDeferred), "Roth/Tax-Free": formatCurrency(inputs.currentSavings.rothIra) },
            "Retirement Goals": { "Annual Expenses": formatCurrency(inputs.retirementExpenses), "Assumed Inflation": `${inputs.inflationRate}%` },
            "Investment Strategy": { "Avg. Annual Return": `${inputs.investments.expectedReturn}%`, "Volatility": `${inputs.investments.volatility}%` },
            "Advanced Modeling": { "Annual Social Security": formatCurrency(inputs.socialSecurityBenefit), "Benefit Age": inputs.socialSecurityAge, "Withdrawal Strategy": inputs.withdrawalStrategy },
        };
        for (const section in inputData) {
            addText(section, {size: 12});
            for(const [key, value] of Object.entries(inputData[section])){
                addText(`  • ${key}: ${value}`);
            }
            y+=2;
        }

        addTitle("Life Events");
        if(inputs.lifeEvents.length > 0) {
            inputs.lifeEvents.forEach(event => {
                addText(`  • Age ${event.age}: ${event.description} (${formatCurrency(event.amount)})`);
            });
        } else {
            addText("  No life events entered.");
        }

        // --- Add Charts as Images ---
        doc.addPage();
        y = 15;
        addTitle("Charts & Visualizations");

        try {
            const chart1 = document.getElementById('portfolio-chart');
            const canvas1 = await window.html2canvas(chart1, {backgroundColor: '#ffffff'});
            const imgData1 = canvas1.toDataURL('image/png');
            doc.addImage(imgData1, 'PNG', 15, y, 180, 100);
            y += 110;

            const chart2 = document.getElementById('savings-composition-chart');
            const canvas2 = await window.html2canvas(chart2, {backgroundColor: '#ffffff'});
            const imgData2 = canvas2.toDataURL('image/png');
            doc.addImage(imgData2, 'PNG', 15, y, 180, 80);
            y += 90;
        } catch (error) {
            console.error("Error capturing charts:", error);
            addText("Could not render charts in PDF.", {color: 'red'});
        }

        // --- Add Disclaimer ---
        const disclaimer = "This calculator is intended for educational purposes only and does not constitute financial advice. The projections are based on the assumptions you provide and a Monte Carlo simulation of potential market outcomes. These results are hypothetical and may not reflect your actual retirement outcome. Please consult with a qualified financial advisor for personalized advice tailored to your specific situation.";
        doc.addPage();
        y = 15;
        addTitle("Disclaimer");
        const splitDisclaimer = doc.splitTextToSize(disclaimer, 180);
        addText(splitDisclaimer);
        
        doc.save('Retirement_Plan_Report.pdf');
        setIsDownloading(false);
    };

    const totalCurrentSavings = useMemo(() => Object.values(inputs.currentSavings).reduce((sum, val) => sum + val, 0), [inputs.currentSavings]);
    const savingsCompositionData = useMemo(() => ([
        { name: 'Taxable', value: inputs.currentSavings.taxable },
        { name: 'Tax-Deferred', value: inputs.currentSavings.taxDeferred },
        { name: 'Roth IRA', value: inputs.currentSavings.rothIra },
    ]), [inputs.currentSavings]);
    const COLORS = ['#002C51', '#1F9A32', '#92ADCB']; // Navy, Green, Light Blue

    const analysis = useMemo(() => {
        if (!results) return { message: "Run simulation to see analysis.", icon: <Info/>, color: "text-gray-500"};
        if (results.successProbability > 85) return { message: "On Track. Your plan has a high probability of success.", icon: <CheckCircle2/>, color: "text-green-500"};
        if (results.successProbability > 60) return { message: "Needs Attention. Your plan is moderately successful.", icon: <AlertTriangle/>, color: "text-amber-500"};
        return { message: "High Risk. Your current plan has a low chance of success.", icon: <AlertTriangle/>, color: "text-red-500"};
    }, [results]);

    const calculatorContent = (
        <div style={{ backgroundColor: '#F3F7FD', color: 'rgb(0 44 81)', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif', display: 'flex', flexDirection: isMobile ? 'column' : 'row', paddingTop: '120px' }}>
            <aside style={{ width: isMobile ? '100%' : '420px', backgroundColor: 'white', padding: isMobile ? '16px' : '20px', display: 'flex', flexDirection: 'column', gap: '16px', borderRight: isMobile ? 'none' : '1px solid #E7F1FA', borderBottom: isMobile ? '1px solid #E7F1FA' : 'none', height: isMobile ? 'auto' : 'calc(100vh - 120px)', position: isMobile ? 'relative' : 'sticky', top: isMobile ? '0' : '120px', overflowY: 'auto', overflowX: 'hidden' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                     <div style={{ padding: '6px', backgroundColor: '#E7F1FA', borderRadius: '6px' }}><BarChart2 style={{ height: '22px', width: '22px', color: '#002C51' }}/></div>
                     <h1 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: 'rgb(0 44 81)' }}>Retirement Calculator</h1>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* --- Input Sections --- */}
                     <Section title="Vitals" icon={<Briefcase className="mr-2" style={{ color: '#002C51' }}/>}>
                        <InputField label="Current Age" name="currentAge" value={inputs.currentAge} onChange={handleInputChange} />
                        <InputField label="Retirement Age" name="retirementAge" value={inputs.retirementAge} onChange={handleInputChange} />
                        <InputField label="Life Expectancy" name="lifeExpectancy" value={inputs.lifeExpectancy} onChange={handleInputChange} />
                    </Section>
                    
                    <Section title="Income & Savings" icon={<DollarSign className="mr-2" style={{ color: '#002C51' }}/>}>
                         <InputField label="Gross Annual Income" name="annualIncome" value={inputs.annualIncome} onChange={handleInputChange} info="Your current pre-tax annual salary." />
                         <InputSlider label="Annual Salary Growth" name="salaryGrowth" value={inputs.salaryGrowth} onChange={handleInputChange} min="0" max="10" step="0.1" info="Expected average annual pay increase."/>
                         <InputSlider label="Savings Rate" name="savingsRate" value={inputs.savingsRate} onChange={handleInputChange} min="0" max="50" step="1" info="Percentage of gross income you save annually."/>
                    </Section>
                    
                    <Section title="Current Assets" icon={<Home className="mr-2" style={{ color: '#002C51' }}/>}>
                        <InputField label="Taxable Account" name="currentSavings.taxable" value={inputs.currentSavings.taxable} onChange={handleInputChange} info="e.g., Brokerage accounts."/>
                        <InputField label="Tax-Deferred" name="currentSavings.taxDeferred" value={inputs.currentSavings.taxDeferred} onChange={handleInputChange} info="e.g., 401(k), Traditional IRA."/>
                        <InputField label="Roth / Tax-Free" name="currentSavings.rothIra" value={inputs.currentSavings.rothIra} onChange={handleInputChange} info="e.g., Roth IRA, Roth 401(k), HSA."/>
                    </Section>

                    <Section title="Retirement Goals" icon={<Target className="mr-2" style={{ color: '#002C51' }}/>}>
                         <InputField label="Annual Expenses in Retirement" name="retirementExpenses" value={inputs.retirementExpenses} onChange={handleInputChange} info="Estimated annual spending in today's dollars."/>
                         <InputSlider label="Assumed Inflation" name="inflationRate" value={inputs.inflationRate} onChange={handleInputChange} min="0" max="10" step="0.1" info="Long-term average inflation rate."/>
                    </Section>

                    <Section title="Investment Strategy" icon={<TrendingUp className="mr-2" style={{ color: '#002C51' }}/>}>
                        <InputSlider label="Avg. Annual Return" name="investments.expectedReturn" value={inputs.investments.expectedReturn} onChange={handleInputChange} min="0" max="15" step="0.1" info="Your portfolio's estimated average annual growth."/>
                        <InputSlider label="Portfolio Volatility" name="investments.volatility" value={inputs.investments.volatility} onChange={handleInputChange} min="0" max="30" step="0.5" info="Standard deviation. Higher means more risk and wider range of outcomes."/>
                    </Section>
                    
                    <Section title="Advanced Modeling" icon={<SlidersHorizontal className="mr-2" style={{ color: '#002C51' }}/>}>
                        <InputField label="Annual Social Security" name="socialSecurityBenefit" value={inputs.socialSecurityBenefit} onChange={handleInputChange} info="Annual benefit in today's dollars."/>
                        <InputField label="Social Security Age" name="socialSecurityAge" value={inputs.socialSecurityAge} onChange={handleInputChange} info="Age you plan to start receiving benefits."/>
                        <SelectField label="Withdrawal Strategy" name="withdrawalStrategy" value={inputs.withdrawalStrategy} onChange={handleInputChange} info="Method for taking money out in retirement.">
                            <option value="inflationAdjusted">Inflation Adjusted Expenses</option>
                            <option value="fourPercentRule">4% Rule</option>
                        </SelectField>
                         <div style={{ paddingTop: '12px' }}>
                            <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                                <input type="checkbox" name="stressTest.enabled" checked={inputs.stressTest.enabled} onChange={handleInputChange} style={{ height: '20px', width: '20px', color: '#1F9A32', backgroundColor: '#F3F7FD', border: '1px solid #E7F1FA', borderRadius: '4px', cursor: 'pointer', accentColor: '#1F9A32' }}/>
                                <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'rgb(0 44 81)' }}>Enable Market Stress Test</span>
                            </label>
                            {inputs.stressTest.enabled && (
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px', paddingLeft: '12px', borderLeft: '2px solid #92ADCB' }}>
                                    <InputField label="Age at Crash" name="stressTest.age" value={inputs.stressTest.age} onChange={handleInputChange} />
                                    <InputSlider label="Market Drop" name="stressTest.dropPercent" value={inputs.stressTest.dropPercent} onChange={handleInputChange} min="10" max="90" step="1"/>
                                </div>
                            )}
                        </div>
                    </Section>

                     <Section title="Life Events" icon={<LifeBuoy className="mr-2" style={{ color: '#002C51' }}/>}>
                        {inputs.lifeEvents.map((event, index) => (
                            <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 2fr auto', gap: '8px', alignItems: 'center' }}>
                               <div><InputField label="Age" name={`event-age-${index}`} value={event.age} onChange={e => handleEventChange(index, 'age', e.target.value)} /></div>
                               <div><InputField label="Description" type="text" name={`event-desc-${index}`} value={event.description} onChange={e => handleEventChange(index, 'description', e.target.value)} /></div>
                               <div><InputField label="Amount" name={`event-amount-${index}`} value={event.amount} onChange={e => handleEventChange(index, 'amount', e.target.value)} /></div>
                               <div style={{ paddingTop: '24px' }}><button onClick={() => removeEvent(index)} style={{ color: '#dc2626', fontSize: '1.5rem', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer', padding: '0 8px', fontFamily: 'inherit' }} onMouseEnter={(e) => e.target.style.color = '#991b1b'} onMouseLeave={(e) => e.target.style.color = '#dc2626'}>&times;</button></div>
                            </div>
                        ))}
                        <button onClick={addEvent} style={{ width: '100%', fontSize: '0.875rem', padding: '8px 16px', backgroundColor: '#E7F1FA', color: '#002C51', borderRadius: '6px', border: 'none', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#CFE1F1'} onMouseLeave={(e) => e.target.style.backgroundColor = '#E7F1FA'}>Add Event</button>
                        <p style={{ fontSize: '0.75rem', color: 'rgb(137, 141, 150)', textAlign: 'center' }}>Use negative amounts for expenses.</p>
                    </Section>
                </div>

                <button onClick={calculate} disabled={isLoading} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 14px', fontSize: '0.875rem', backgroundColor: isLoading ? 'rgb(137, 141, 150)' : '#1F9A32', color: 'white', fontWeight: '600', borderRadius: '6px', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', fontFamily: 'inherit' }} onMouseEnter={(e) => !isLoading && (e.target.style.backgroundColor = '#178A2C')} onMouseLeave={(e) => !isLoading && (e.target.style.backgroundColor = '#1F9A32')}>
                    {isLoading ? (<> <svg style={{ animation: 'spin 1s linear infinite', marginLeft: '-4px', marginRight: '12px', height: '18px', width: '18px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }}></circle> <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }} fill="currentColor"></path> </svg> Recalculating... </>) : (<> <ChevronsRight style={{ marginRight: '8px', height: '18px', width: '18px' }}/> Run Simulation </>)}
                </button>
            </aside>

            <main style={{ flex: 1, padding: isMobile ? '16px' : '24px', overflowY: 'auto', backgroundColor: '#F3F7FD' }}>
                {isLoading && !results ? (<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}><p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: 'rgb(137, 141, 150)' }}>Loading Initial Simulation...</p></div>) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '20px' : '28px', maxWidth: '1280px', margin: '0 auto' }}>
                        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '12px' : '0' }}>
                            <h1 style={{ fontSize: isMobile ? '1.375rem' : '1.75rem', fontWeight: 'bold', color: 'rgb(0 44 81)' }}>Your Retirement Calculator</h1>
                             <button onClick={handleDownloadPDF} disabled={isDownloading || !results} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '6px 12px' : '7px 14px', fontSize: isMobile ? '0.8125rem' : '0.875rem', backgroundColor: isDownloading || !results ? 'rgb(137, 141, 150)' : '#1F9A32', color: 'white', fontWeight: '600', borderRadius: '6px', border: 'none', cursor: isDownloading || !results ? 'not-allowed' : 'pointer', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', fontFamily: 'inherit' }} onMouseEnter={(e) => !isDownloading && !(!results) && (e.target.style.backgroundColor = '#178A2C')} onMouseLeave={(e) => !isDownloading && !(!results) && (e.target.style.backgroundColor = '#1F9A32')}>
                                {isDownloading ? (<> <svg style={{ animation: 'spin 1s linear infinite', marginLeft: '-4px', marginRight: '8px', height: '16px', width: '16px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" style={{ opacity: 0.25 }}></circle> <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" style={{ opacity: 0.75 }} fill="currentColor"></path> </svg> Creating... </>) : (<> <Download style={{ marginRight: '6px', height: '16px', width: '16px' }}/> Download Report (PDF) </>)}
                            </button>
                        </div>
                        
                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(180px, 1fr))', gap: isMobile ? '12px' : '16px' }}>
                            <SummaryCard title="Success Probability" value={`${results ? Math.round(results.successProbability) : '...'}%`} icon={<Target style={{ height: isMobile ? '18px' : '20px', width: isMobile ? '18px' : '20px', color: '#002C51' }}/>} color="bg-blue-100" subtext="Chance of not running out of money" isMobile={isMobile}/>
                            <SummaryCard title="Median Nest Egg" value={results ? formatCurrency(results.medianNestEgg) : '...'} icon={<DollarSign style={{ height: isMobile ? '18px' : '20px', width: isMobile ? '18px' : '20px', color: '#1F9A32' }}/>} color="bg-green-100" subtext={`At retirement (age ${inputs.retirementAge})`} isMobile={isMobile}/>
                            <SummaryCard title="Median Worst Drawdown" value={results ? `${(results.medianWorstDrawdown * 100).toFixed(1)}%` : '...'} icon={<AlertTriangle style={{ height: isMobile ? '18px' : '20px', width: isMobile ? '18px' : '20px', color: '#FF8C42' }}/>} color="bg-orange-100" subtext="Typical largest portfolio drop" isMobile={isMobile}/>
                            <SummaryCard title="Total Current Savings" value={formatCurrency(totalCurrentSavings)} icon={<Briefcase style={{ height: isMobile ? '18px' : '20px', width: isMobile ? '18px' : '20px', color: '#92ADCB' }}/>} color="bg-indigo-100" subtext="Across all accounts" isMobile={isMobile}/>
                            <SummaryCard title="Retirement Years" value={`${inputs.lifeExpectancy - inputs.retirementAge} yrs`} icon={<Home style={{ height: isMobile ? '18px' : '20px', width: isMobile ? '18px' : '20px', color: '#FFB627' }}/>} color="bg-yellow-100" subtext={`From age ${inputs.retirementAge} to ${inputs.lifeExpectancy}`} isMobile={isMobile}/>
                        </div>

                        <div id="portfolio-chart" style={{ backgroundColor: 'white', padding: isMobile ? '14px' : '18px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #E7F1FA' }}>
                             <h2 style={{ fontSize: isMobile ? '0.9375rem' : '1rem', fontWeight: '600', marginBottom: isMobile ? '10px' : '12px', color: 'rgb(0 44 81)' }}>Portfolio Value Over Time (Monte Carlo Simulation)</h2>
                             <ResponsiveContainer width="100%" height={isMobile ? 280 : 360}>
                                <AreaChart data={results?.chartData} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#E7F1FA" />
                                    <XAxis dataKey="age" stroke="#92ADCB" tick={{fill: 'rgb(146 173 203)'}} name="Age"/>
                                    <YAxis stroke="#92ADCB" tickFormatter={formatCurrency} tick={{fill: 'rgb(146 173 203)'}} />
                                    <Tooltip content={<CustomTooltipContent />} />
                                    <Legend />
                                    <defs>
                                        <linearGradient id="colorP50" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#92ADCB" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#92ADCB" stopOpacity={0}/>
                                        </linearGradient>
                                        <linearGradient id="colorP10" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#FF8C42" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#FF8C42" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="p90" stroke="#1F9A32" fill="none" name="Best Case (90th %)" dot={false} strokeWidth={2}/>
                                    <Area type="monotone" dataKey="p50" stroke="#92ADCB" fill="url(#colorP50)" name="Median (50th %)" dot={false} strokeWidth={2}/>
                                    <Area type="monotone" dataKey="p10" stroke="#FF8C42" fill="url(#colorP10)" name="Worst Case (10th %)" dot={false} strokeWidth={2}/>
                                </AreaChart>
                             </ResponsiveContainer>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '12px' : '16px' }}>
                            <div style={{ backgroundColor: 'white', padding: isMobile ? '14px' : '18px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #E7F1FA', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                                <h2 style={{ fontSize: isMobile ? '0.9375rem' : '1rem', fontWeight: '600', marginBottom: isMobile ? '10px' : '12px', color: 'rgb(0 44 81)' }}>Plan Analysis</h2>
                                <div style={{ height: isMobile ? '72px' : '80px', width: isMobile ? '72px' : '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: analysis.color === 'text-green-500' ? '#D4F4DD' : analysis.color === 'text-amber-500' ? '#FFF4CC' : analysis.color === 'text-red-500' ? '#FFE5E5' : '#E7F1FA', marginBottom: isMobile ? '10px' : '12px' }}>
                                   {React.cloneElement(analysis.icon, {style: { height: isMobile ? '36px' : '40px', width: isMobile ? '36px' : '40px', color: analysis.color === 'text-green-500' ? '#1F9A32' : analysis.color === 'text-amber-500' ? '#FFB627' : analysis.color === 'text-red-500' ? '#dc2626' : 'rgb(137, 141, 150)' }})}
                                </div>
                                <p style={{ fontSize: isMobile ? '0.875rem' : '0.9375rem', fontWeight: '500', color: analysis.color === 'text-green-500' ? '#1F9A32' : analysis.color === 'text-amber-500' ? '#FFB627' : analysis.color === 'text-red-500' ? '#dc2626' : 'rgb(137, 141, 150)' }}>{analysis.message}</p>
                                <p style={{ fontSize: '0.75rem', color: 'rgb(146 173 203)', marginTop: '6px' }}>Based on 1,000 simulations of market conditions.</p>
                            </div>

                             <div id="savings-composition-chart" style={{ backgroundColor: 'white', padding: isMobile ? '14px' : '18px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', border: '1px solid #E7F1FA' }}>
                                 <h2 style={{ fontSize: isMobile ? '0.9375rem' : '1rem', fontWeight: '600', marginBottom: isMobile ? '10px' : '12px', color: 'rgb(0 44 81)' }}>Current Savings Composition</h2>
                                 <ResponsiveContainer width="100%" height={isMobile ? 260 : 280}>
                                    <PieChart>
                                        <Pie data={savingsCompositionData} cx="50%" cy="45%" labelLine={false}
                                             label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                                                const RADIAN = Math.PI / 180;
                                                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                                const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                                const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                                return (<text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" style={{ fontSize: '0.75rem', fontWeight: '600' }}>{`${(percent * 100).toFixed(0)}%`}</text>);
                                              }}
                                             outerRadius={isMobile ? 75 : 90} innerRadius={isMobile ? 35 : 45} fill="#8884d8" dataKey="value" paddingAngle={5}>
                                            {savingsCompositionData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                                        </Pie>
                                        <Tooltip formatter={(value) => formatCurrency(value)}/>
                                        <Legend />
                                    </PieChart>
                                 </ResponsiveContainer>
                            </div>
                        </div>
                        
                        <p style={{ fontSize: '0.6875rem', color: 'rgb(137, 141, 150)', marginTop: isMobile ? '16px' : '20px', textAlign: 'center', maxWidth: '896px', marginLeft: 'auto', marginRight: 'auto', lineHeight: '1.5' }}>
                            This calculator is intended for educational purposes only and does not constitute financial advice. The projections are based on the assumptions you provide and a Monte Carlo simulation of potential market outcomes. These results are hypothetical and may not reflect your actual retirement outcome. Please consult with a qualified financial advisor for personalized advice tailored to your specific situation.
                        </p>
                    </div>
                )}
            </main>
        </div>
    );

    return (
        <PlaxLayout>
            {calculatorContent}
        </PlaxLayout>
    );
}

// A helper component to create styled sections in the sidebar
const Section = ({ title, icon, children }) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: 'rgba(231, 241, 250, 0.3)', padding: '12px', borderRadius: '10px', border: '1px solid #E7F1FA' }}>
        <h2 style={{ fontSize: '0.875rem', fontWeight: '600', display: 'flex', alignItems: 'center', color: 'rgb(0 44 81)' }}>{icon}{title}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {children}
        </div>
    </div>
);

