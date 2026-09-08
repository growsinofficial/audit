"use client";

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import PlaxLayout from "@/layouts/PlaxLayout";
import { PageBanner } from "@/components/Banner";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart, Line, BarChart, Bar, Cell } from 'recharts';
import { TrendingUp, DollarSign, Calendar, Percent, ChevronsUp, Package, SlidersHorizontal, Info, RefreshCw, EyeOff, Eye, RotateCw, PlusCircle, XCircle, Download } from 'lucide-react';

const NUM_SIMULATIONS = 250;

// Main App Component
export default function SIPCalculatorPage() {
    const [assets, setAssets] = useState([
        { name: 'US Equity', allocation: 60, return: 12, volatility: 18 },
        { name: 'Indian Equity', allocation: 20, return: 14, volatility: 22 },
        { name: 'Debt', allocation: 20, return: 7, volatility: 5 }
    ]);
    
    const [lumpSum, setLumpSum] = useState(100000);
    const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
    const [timePeriod, setTimePeriod] = useState(20);
    const [annualStepUp, setAnnualStepUp] = useState(10);
    const [expenseRatio, setExpenseRatio] = useState(1.0);
    const [ltcgTaxRate, setLtcgTaxRate] = useState(10);
    const [riskFreeRate, setRiskFreeRate] = useState(7);
    const [annualRebalancing, setAnnualRebalancing] = useState(true);
    const [showAdvanced, setShowAdvanced] = useState(true);
    const [simulationVersion, setSimulationVersion] = useState(0);

    useEffect(() => {
        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${src}"]`)) {
                    resolve(); return;
                }
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Script load error for ${src}`));
                document.head.appendChild(script);
            });
        };
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js').catch(console.error);
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js').catch(console.error);
        loadScript('https://unpkg.com/jspdf-autotable@3.5.23/dist/jspdf.plugin.autotable.js').catch(console.error);
    }, []);

    const runNewSimulation = useCallback(() => setSimulationVersion(prev => prev + 1), []);
    
    const updateAsset = (index, field, value) => {
        setAssets(currentAssets => currentAssets.map((asset, i) => i === index ? { ...asset, [field]: value } : asset));
    };

    const addAsset = () => {
        setAssets(currentAssets => [...currentAssets, { name: `Asset ${currentAssets.length + 1}`, allocation: 0, return: 8, volatility: 10 }]);
    };

    const removeAsset = (index) => {
        setAssets(currentAssets => currentAssets.filter((_, i) => i !== index));
    };

    const monteCarloResults = useMemo(() => {
        const allSimulations = [];
        const totalAllocation = assets.reduce((sum, asset) => sum + asset.allocation, 0);
        if (totalAllocation !== 100) {
            return { chartData: [], bestCase: {}, medianCase: { yearlyValues: [], yearlyReturns: [], totalInvested: 0 }, worstCase: {}, sharpeRatio: 0, yearlyBreakdown: [] };
        }
        
        for (let i = 0; i < NUM_SIMULATIONS; i++) {
            const yearlyValues = [];
            const yearlyReturns = [];
            let assetValues = assets.map(asset => lumpSum * (asset.allocation / 100));
            let currentMonthlySip = monthlyInvestment;

            for (let year = 1; year <= timePeriod; year++) {
                const randomFactors = assets.map(() => (Math.random() - 0.5) * 2);
                const assetReturns = assets.map((asset, index) => (asset.return / 100) + randomFactors[index] * (asset.volatility / 100));
                const yearlySip = currentMonthlySip * 12;
                assetValues = assetValues.map((val, index) => val + yearlySip * (assets[index].allocation / 100));
                const prevTotal = assetValues.reduce((a, b) => a + b, 0);
                assetValues = assetValues.map((val, index) => val * (1 + assetReturns[index]));
                let totalValue = assetValues.reduce((a, b) => a + b, 0);
                totalValue *= (1 - (expenseRatio / 100));
                const netPortfolioReturn = prevTotal > 0 ? (totalValue / prevTotal) - 1 : 0;
                yearlyReturns.push(netPortfolioReturn * 100);
                if (annualRebalancing) {
                    assetValues = assets.map(asset => totalValue * (asset.allocation / 100));
                }
                yearlyValues.push(totalValue);
                currentMonthlySip *= (1 + annualStepUp / 100);
            }
            const totalInvested = lumpSum + Array.from({length: timePeriod}, (_, j) => monthlyInvestment * Math.pow(1 + annualStepUp/100, j) * 12).reduce((a, b) => a + b, 0);
            allSimulations.push({ finalValue: yearlyValues[yearlyValues.length-1] || 0, yearlyValues, yearlyReturns, totalInvested });
        }

        allSimulations.sort((a, b) => a.finalValue - b.finalValue);
        const percentile = (p) => allSimulations[Math.floor(p * (NUM_SIMULATIONS - 1))];
        const bestCase = percentile(0.9);
        const medianCase = percentile(0.5);
        const worstCase = percentile(0.1);

        const chartData = Array.from({ length: timePeriod }, (_, i) => ({
            year: i + 1,
            worst: Math.round(worstCase.yearlyValues[i] || 0),
            median: Math.round(medianCase.yearlyValues[i] || 0),
            best: Math.round(bestCase.yearlyValues[i] || 0),
        }));
        
        const medianReturns = medianCase.yearlyReturns;
        const avgReturn = medianReturns.reduce((a, b) => a + b, 0) / medianReturns.length;
        const stdDev = Math.sqrt(medianReturns.map(x => Math.pow(x - avgReturn, 2)).reduce((a, b) => a + b, 0) / medianReturns.length);
        const sharpeRatio = stdDev > 0 ? (avgReturn - riskFreeRate) / stdDev : 0;
        
        const yearlyBreakdown = [];
        let openingBalanceYear = lumpSum;
        let medianMonthlySip = monthlyInvestment;
        for (let year = 1; year <= timePeriod; year++) {
            const closingBalance = medianCase.yearlyValues[year-1];
            const investedThisYear = medianMonthlySip * 12;
            const interestEarned = closingBalance - openingBalanceYear - investedThisYear;
            yearlyBreakdown.push({
                year,
                openingBalance: Math.round(openingBalanceYear),
                invested: Math.round(investedThisYear),
                returnRate: medianReturns[year-1]?.toFixed(2) || '0.00',
                interest: Math.round(interestEarned),
                closingBalance: Math.round(closingBalance),
            });
            openingBalanceYear = closingBalance;
            medianMonthlySip *= (1 + annualStepUp / 100);
        }
        return { chartData, bestCase, medianCase, worstCase, sharpeRatio, yearlyBreakdown };
    }, [lumpSum, monthlyInvestment, timePeriod, annualStepUp, expenseRatio, assets, annualRebalancing, simulationVersion, riskFreeRate]);

    const formatNumber = (num, decimals = 2) => {
        if (num === null || num === undefined || isNaN(num)) return 'N/A';
        if (num >= 10000000) return `₹${(num / 10000000).toFixed(decimals)} Cr`;
        if (num >= 100000) return `₹${(num / 100000).toFixed(decimals)} L`;
        return `₹${Math.round(num).toLocaleString('en-IN')}`;
    };
    
    const allProps = { lumpSum, monthlyInvestment, timePeriod, annualStepUp, expenseRatio, ltcgTaxRate, riskFreeRate, assets, annualRebalancing, showAdvanced, simulationVersion, monteCarloResults };

    return (
        <PlaxLayout bg={false}>
            <div className="mil-blog-list mil-p-0-160" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <header className="mb-8 text-center">
                        <h1 className="font-bold" style={{ color: 'rgb(31 154 50)', textAlign: 'center', lineHeight: '1.3', fontSize: '1.5rem' }}>Professional Portfolio Simulator</h1>
                        <p className="text-gray-600 mt-2" style={{ textAlign: 'center', fontSize: '0.875rem' }}>Multi-Asset forecasting with Monte Carlo simulation and Rebalancing Strategy.</p>
                    </header>
                    <div className="row">
                        <div className="col-lg-4">
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                <SipCalculatorInputs {...{ updateAsset, addAsset, removeAsset, setAssets, setLumpSum, setMonthlyInvestment, setTimePeriod, setAnnualStepUp, setExpenseRatio, setLtcgTaxRate, setRiskFreeRate, setAnnualRebalancing, setShowAdvanced, runNewSimulation, ...allProps }} />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div style={{ background: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
                                <SipResultsDisplay {...{ ltcgTaxRate, formatNumber, lumpSum, ...allProps }} />
                            </div>
                        </div>
                    </div>
                    <footer className="text-center mt-8 text-sm text-gray-500">
                        <p>Disclaimer: This calculator uses a stochastic model for illustrative purposes and results are not guaranteed. Consult a SEBI-registered financial advisor before investing.</p>
                    </footer>
                </div>
            </div>
        </PlaxLayout>
    );
}

function SipCalculatorInputs({ setLumpSum, setMonthlyInvestment, setTimePeriod, setAnnualStepUp, setExpenseRatio, setLtcgTaxRate, setRiskFreeRate, setAnnualRebalancing, setShowAdvanced, runNewSimulation, ...props }) {
    const { lumpSum, monthlyInvestment, timePeriod, assets, updateAsset, addAsset, removeAsset, annualRebalancing, showAdvanced } = props;
    const totalAllocation = useMemo(() => assets.reduce((sum, asset) => sum + Number(asset.allocation), 0), [assets]);
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h2 className="text-2xl font-bold text-center" style={{ color: 'rgb(0 44 81)' }}>Core Inputs</h2>
            <InputSlider label="Initial Lump Sum" Icon={Package} value={lumpSum} setValue={setLumpSum} min={0} max={10000000} step={10000} inputType="currency" />
            <InputSlider label="Monthly Investment (SIP)" Icon={DollarSign} value={monthlyInvestment} setValue={setMonthlyInvestment} min={500} max={100000} step={500} inputType="currency" />
            <InputSlider label="Time Period (Years)" Icon={Calendar} value={timePeriod} setValue={setTimePeriod} min={1} max={40} step={1} inputType="year" />
            <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                     <h2 className="text-2xl font-bold" style={{ color: 'rgb(0 44 81)' }}>Portfolio</h2>
                     <div style={{ fontWeight: 'bold', fontSize: '0.875rem', padding: '0.25rem 0.5rem', borderRadius: '0.25rem', background: totalAllocation === 100 ? '#d1fae5' : '#fee2e2', color: totalAllocation === 100 ? '#065f46' : '#991b1b' }}>
                        Total: {totalAllocation}%
                     </div>
                </div>
                {assets.map((asset, index) => (
                    <div key={index} style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '0.5rem', border: '1px solid #e5e7eb', marginBottom: '1rem', position: 'relative' }}>
                        {assets.length > 1 && (
                            <button onClick={() => removeAsset(index)} style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', color: '#f87171', cursor: 'pointer', background: 'transparent', border: 'none' }}>
                                <XCircle size={20} />
                            </button>
                        )}
                        <input type="text" value={asset.name} onChange={(e) => updateAsset(index, 'name', e.target.value)} style={{ fontWeight: 'bold', color: 'rgb(31 154 50)', background: 'transparent', marginBottom: '0.5rem', width: '100%', border: 'none', outline: 'none' }} />
                        <InputSlider label="Allocation" Icon={Package} value={asset.allocation} setValue={(val) => updateAsset(index, 'allocation', val)} min={0} max={100} step={5} inputType="percent" />
                        <InputSlider label="Return" Icon={TrendingUp} value={asset.return} setValue={(val) => updateAsset(index, 'return', val)} min={-10} max={30} step={0.5} inputType="percent" />
                        <InputSlider label="Volatility" Icon={SlidersHorizontal} value={asset.volatility} setValue={(val) => updateAsset(index, 'volatility', val)} min={0} max={50} step={1} inputType="percent" />
                    </div>
                ))}
                <button onClick={addAsset} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.5rem 1rem', border: '2px dashed #d1d5db', borderRadius: '0.5rem', fontWeight: '600', color: '#6b7280', cursor: 'pointer', background: 'transparent', transition: 'all 0.3s' }}>
                    <PlusCircle size={20} />Add Asset
                </button>
            </div>
             <div style={{ paddingTop: '1rem', borderTop: '1px solid #e5e7eb' }}>
                <button onClick={() => setShowAdvanced(!showAdvanced)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', fontSize: '1.125rem', fontWeight: '600', color: 'rgb(31 154 50)', cursor: 'pointer', background: 'transparent', border: 'none' }}>
                    <span>Expert Settings</span>
                    {showAdvanced ? <EyeOff /> : <Eye />}
                </button>
                {showAdvanced && (
                    <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <ToggleSwitch label="Annual Rebalancing" Icon={RotateCw} enabled={annualRebalancing} setEnabled={setAnnualRebalancing} tooltip="Resets portfolio to target allocation each year." />
                        <InputSlider label="Annual Step-up (SIP)" Icon={ChevronsUp} value={props.annualStepUp} setValue={setAnnualStepUp} min={0} max={25} step={1} inputType="percent" />
                        <InputSlider label="Portfolio Expense Ratio" Icon={Percent} value={props.expenseRatio} setValue={setExpenseRatio} min={0} max={5} step={0.1} inputType="percent" tooltip="Weighted average annual fee of your portfolio."/>
                        <InputSlider label="Risk-Free Rate" Icon={Percent} value={props.riskFreeRate} setValue={setRiskFreeRate} min={0} max={10} step={0.25} inputType="percent" tooltip="Return on a risk-free asset, like a government bond. Used for Sharpe Ratio."/>
                        <InputSlider label="LTCG Tax Rate" Icon={Percent} value={props.ltcgTaxRate} setValue={setLtcgTaxRate} min={0} max={30} step={1} inputType="percent" tooltip="Long-Term Capital Gains tax on gains over ₹1 lakh."/>
                    </div>
                )}
            </div>
            <button onClick={runNewSimulation} style={{ width: '100%', marginTop: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'rgb(242 116 87)', color: 'white', borderRadius: '0.5rem', fontWeight: '600', cursor: 'pointer', border: 'none', boxShadow: '0 4px 6px rgba(242, 116, 87, 0.3)', transition: 'all 0.3s' }}>
                <RefreshCw size={20}/>Run New Simulation
            </button>
        </div>
    );
}

function SipResultsDisplay({ monteCarloResults, ltcgTaxRate, formatNumber, lumpSum, ...allProps }) {
    const { chartData, bestCase, medianCase, worstCase, sharpeRatio, yearlyBreakdown } = monteCarloResults;
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
    const [showPdfModal, setShowPdfModal] = useState(false);

    const handlePdfDownloadRequest = () => setShowPdfModal(true);

    const handlePdfGeneration = async (userDetails) => {
        setShowPdfModal(false);
        setIsGeneratingPdf(true);
        try {
            if (typeof window.html2canvas === 'undefined' || typeof window.jspdf === 'undefined') {
                alert('PDF libraries are still loading. Please try again in a moment.');
                setIsGeneratingPdf(false);
                return;
            }
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF('p', 'mm', 'a4');
            if (typeof doc.autoTable !== 'function') {
                alert('PDF AutoTable plugin is not ready. Please try again in a moment.');
                setIsGeneratingPdf(false);
                return;
            }
            const pageHeight = doc.internal.pageSize.getHeight();
            let y = 15;
            const addText = (text, size, isBold, x = 15, align = 'left') => {
                if (y > pageHeight - 20) { doc.addPage(); y = 15; }
                doc.setFontSize(size);
                doc.setFont(undefined, isBold ? 'bold' : 'normal');
                doc.text(text, x, y, { align: align });
                y += size * 0.5 + 3;
            };
            addText('Investment Portfolio Simulation Report', 22, true, doc.internal.pageSize.getWidth() / 2, 'center');
            y += 5;
            addText(`Report For: ${userDetails.name}`, 10, false);
            addText(`Email: ${userDetails.email} | Phone: ${userDetails.phone}`, 10, false);
            addText(`Location: ${userDetails.location}`, 10, false);
            addText(`Generated on: ${new Date().toLocaleDateString()}`, 10, false);
            y += 10;
            addText('Summary of Inputs', 16, true);
            const inputData = [
                ['Lump Sum Investment', formatNumber(allProps.lumpSum)],
                ['Monthly Investment (SIP)', formatNumber(allProps.monthlyInvestment)],
                ['Time Period', `${allProps.timePeriod} Years`],
                ['Annual SIP Step-up', `${allProps.annualStepUp}%`],
                ['Portfolio Expense Ratio', `${allProps.expenseRatio}%`],
                ['Annual Rebalancing', allProps.annualRebalancing ? 'Enabled' : 'Disabled'],
            ];
            doc.autoTable({ startY: y, head: [['Parameter', 'Value']], body: inputData, theme: 'grid' });
            y = doc.autoTable.previous.finalY + 10;
            addText('Portfolio Composition', 14, true);
            const assetData = allProps.assets.map(a => [a.name, `${a.allocation}%`, `${a.return}%`, `${a.volatility}%`]);
            doc.autoTable({ startY: y, head: [['Asset Name', 'Allocation', 'Expected Return', 'Volatility']], body: assetData, theme: 'grid' });
            doc.addPage();
            y = 15;
            addText('Simulation Results', 18, true);
            const addImageToPdf = async (elementId) => {
                const element = document.getElementById(elementId);
                if (!element) return;
                const canvas = await window.html2canvas(element, {scale: 2, backgroundColor: '#ffffff'});
                const imgData = canvas.toDataURL('image/png');
                const imgWidth = 180;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                if (y + imgHeight > pageHeight - 15) { doc.addPage(); y = 15; }
                doc.addImage(imgData, 'PNG', 15, y, imgWidth, imgHeight);
                y += imgHeight + 10;
            };
            await addImageToPdf('outcomes-section-for-pdf');
            await addImageToPdf('chart-section');
            doc.addPage();
            y=15;
            await addImageToPdf('rolling-returns-section');
            doc.addPage();
            y = 15;
            addText('Yearly Breakdown (Most Likely Path)', 16, true);
            const breakdownData = yearlyBreakdown.map(r => [r.year, formatNumber(r.invested), `${r.returnRate}%`, formatNumber(r.interest), formatNumber(r.closingBalance)]);
            doc.autoTable({ startY: y, head: [['Year', 'Invested', 'Return', 'Interest', 'Closing Balance']], body: breakdownData, theme: 'grid' });
            doc.save(`Portfolio-Report-${userDetails.name.replace(/\s/g, '_')}.pdf`);
        } catch (error) {
            console.error("PDF Generation Error: ", error);
            alert("An error occurred while generating the PDF. Please check the console for details.");
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    const calculateTax = (finalValue, totalInvested) => {
        if (!finalValue || !totalInvested) return { tax: 0, postTaxValue: 0 };
        const gains = finalValue - totalInvested;
        if (gains <= 100000) return { tax: 0, postTaxValue: finalValue };
        const taxableGains = gains - 100000;
        const tax = taxableGains * (ltcgTaxRate / 100);
        return { tax: Math.round(tax), postTaxValue: Math.round(finalValue - tax) };
    }

    const medianTax = medianCase ? calculateTax(medianCase.finalValue, medianCase.totalInvested) : {};
    
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {showPdfModal && <PdfFormModal on_Submit={handlePdfGeneration} on_Cancel={() => setShowPdfModal(false)} />}
            <div id="outcomes-section-for-pdf">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <h3 className="text-xl font-bold" style={{ color: 'rgb(31 154 50)' }}>Probabilistic Outcomes</h3>
                    <button onClick={handlePdfDownloadRequest} disabled={isGeneratingPdf} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.75rem', background: '#4b5563', color: 'white', borderRadius: '0.5rem', fontWeight: '600', fontSize: '0.875rem', cursor: 'pointer', border: 'none', transition: 'all 0.3s' }}>
                        {isGeneratingPdf ? <RefreshCw size={16} style={{ animation: 'spin 1s linear infinite' }} /> : <Download size={16} /> }
                        {isGeneratingPdf ? 'Generating...' : 'Download PDF'}
                    </button>
                </div>
                <div className="row mb-4">
                    <div className="col-md-3 col-6 mb-3"><StatCard label="Worst Case (10%)" value={formatNumber(worstCase?.finalValue)} color="red" /></div>
                    <div className="col-md-3 col-6 mb-3"><StatCard label="Most Likely (50%)" value={formatNumber(medianCase?.finalValue)} color="purple" /></div>
                    <div className="col-md-3 col-6 mb-3"><StatCard label="Best Case (90%)" value={formatNumber(bestCase?.finalValue)} color="green" /></div>
                    <div className="col-md-3 col-6 mb-3"><StatCard label="Sharpe Ratio" value={sharpeRatio?.toFixed(2) || 'N/A'} color="blue" tooltip="Measures risk-adjusted return. Higher is better." /></div>
                </div>
                <div style={{ background: '#f3f4f6', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>
                    <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#374151' }}>Most Likely Post-Tax Value: <span style={{ color: '#10b981' }}>{formatNumber(medianTax.postTaxValue)}</span></p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>(After est. LTCG tax of {formatNumber(medianTax.tax)})</p>
                </div>
            </div>
            <div id="chart-section" style={{ height: '380px', width: '100%', marginTop: '1.5rem' }}>
                <ResponsiveContainer>
                    <ComposedChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis dataKey="year" tickFormatter={(tick) => `Yr ${tick}`} stroke="#6b7280" style={{ fontSize: '0.75rem' }} />
                        <YAxis tickFormatter={(val) => formatNumber(val, 0)} width={65} stroke="#6b7280" style={{ fontSize: '0.75rem' }} />
                        <Tooltip contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', border: '1px solid #e0e0e0', borderRadius: '8px', fontSize: '0.875rem' }} formatter={(value) => formatNumber(value)}/>
                        <Legend wrapperStyle={{ paddingTop: '20px' }} iconSize={10} />
                        <Area type="monotone" dataKey="worst" name="Worst Case" stroke="#fca5a5" fill="#fee2e2" fillOpacity={0.6} dot={false} />
                        <Area type="monotone" dataKey="best" name="Best Case" stroke="#86efac" fill="#dcfce7" fillOpacity={0.6} dot={false} />
                        <Line type="monotone" dataKey="median" name="Most Likely" stroke="#a855f7" strokeWidth={3} dot={false} />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <RollingReturnsDisplay data={useMemo(() => {
                if (!medianCase) return { '1Y': [], '3Y': [], '5Y': [] };
                const calcRollingReturns = (period) => {
                    const returns = [];
                    const values = [lumpSum, ...medianCase.yearlyValues];
                    if (values.length <= period) return [];
                    for (let i = period; i < values.length; i++) {
                        const startValue = values[i-period];
                        const endValue = values[i];
                        let cagr = 0;
                        if (startValue > 0) cagr = (Math.pow(endValue / startValue, 1/period) - 1) * 100;
                        returns.push({ year: i, return: parseFloat(cagr.toFixed(2)) });
                    }
                    return returns;
                }
                return { '1Y': calcRollingReturns(1), '3Y': calcRollingReturns(3), '5Y': calcRollingReturns(5) };
            }, [medianCase, lumpSum])} />
            {yearlyBreakdown && <YearlyBreakdownTable data={yearlyBreakdown} formatNumber={formatNumber} />}
        </div>
    );
}

function YearlyBreakdownTable({ data, formatNumber }) {
    return (
        <div id="yearly-breakdown-section">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Yearly Breakdown (Most Likely Path)</h3>
            <div style={{ overflow: 'auto', borderRadius: '0.5rem', border: '1px solid #e5e7eb', maxHeight: '300px' }}>
                <table style={{ width: '100%', fontSize: '0.875rem', textAlign: 'left', color: '#6b7280' }}>
                    <thead style={{ background: '#f3f4f6', fontSize: '0.75rem', color: '#374151', textTransform: 'uppercase', position: 'sticky', top: 0 }}>
                        <tr><th style={{ padding: '0.75rem 1rem' }}>Year</th><th style={{ padding: '0.75rem 1rem' }}>Invested</th><th style={{ padding: '0.75rem 1rem' }}>Return</th><th style={{ padding: '0.75rem 1rem' }}>Interest</th><th style={{ padding: '0.75rem 1rem' }}>Balance</th></tr>
                    </thead>
                    <tbody style={{ background: 'white' }}>
                        {data.map(row => (
                            <tr key={row.year} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '0.75rem 1rem', fontWeight: '500', color: '#111827' }}>{row.year}</td>
                                <td style={{ padding: '0.75rem 1rem' }}>{formatNumber(row.invested)}</td>
                                <td style={{ padding: '0.75rem 1rem', fontWeight: '600', color: row.returnRate >= 0 ? '#10b981' : '#ef4444' }}>{row.returnRate}%</td>
                                <td style={{ padding: '0.75rem 1rem' }}>{formatNumber(row.interest)}</td>
                                <td style={{ padding: '0.75rem 1rem', fontWeight: 'bold', color: '#111827' }}>{formatNumber(row.closingBalance)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function RollingReturnsDisplay({ data }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} id="rolling-returns-section">
            <h3 style={{ fontSize: '1rem', fontWeight: 'bold', color: '#1f2937', textAlign: 'center', marginBottom: '0.5rem' }}>Rolling Returns Analysis (Median Path)</h3>
            <div className="row">
                <div className="col-md-4 col-sm-6 mb-3"><RollingReturnCard title="1-Year Rolling" data={data['1Y']} color="indigo" /></div>
                <div className="col-md-4 col-sm-6 mb-3"><RollingReturnCard title="3-Year CAGR" data={data['3Y']} color="purple" /></div>
                <div className="col-md-4 col-sm-12 mb-3"><RollingReturnCard title="5-Year CAGR" data={data['5Y']} color="green" /></div>
            </div>
            <div style={{ height: '220px', width: '100%' }}>
                <ResponsiveContainer>
                    <BarChart data={data['1Y']} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" /><XAxis dataKey="year" tickFormatter={(tick) => `End Yr ${tick}`} style={{ fontSize: '0.75rem' }} /><YAxis tickFormatter={(val) => `${val}%`} style={{ fontSize: '0.75rem' }} /><Tooltip formatter={(value) => [`${value}%`, '1-Yr Return']} cursor={{fill: 'rgba(230, 230, 230, 0.5)'}} />
                        <Bar name="1-Year Rolling Return" dataKey="return" >
                            {data['1Y'].map((entry, index) => ( <Cell key={`cell-${index}`} fill={entry.return >= 0 ? '#22c55e' : '#ef4444'} /> ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

function RollingReturnCard({title, data, color}) {
    if (!data || data.length === 0) {
        return <div style={{ padding: '0.75rem', borderRadius: '0.5rem', background: '#f9fafb', border: '1px solid #e5e7eb', textAlign: 'center', color: '#6b7280', fontSize: '0.75rem' }}>Not enough data for {title}.</div>;
    }
    const returns = data.map(d => d.return);
    const avg = (returns.reduce((a,b) => a + b, 0) / returns.length).toFixed(2);
    const max = Math.max(...returns).toFixed(2);
    const min = Math.min(...returns).toFixed(2);
    const colorClasses = { indigo: { bg: '#eef2ff', border: '#c7d2fe', text: '#3730a3' }, purple: { bg: '#faf5ff', border: '#e9d5ff', text: '#6b21a8' }, green: { bg: '#ecfdf5', border: '#bbf7d0', text: '#065f46' } }
    const c = colorClasses[color] || colorClasses.indigo;
    return (
        <div style={{ padding: '0.75rem', borderRadius: '0.5rem', border: `1px solid ${c.border}`, background: c.bg, color: c.text }}>
            <h4 style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', fontSize: '0.875rem' }}>{title}</h4>
            <div style={{ textAlign: 'center', fontWeight: '800', fontSize: '1.25rem', marginBottom: '0.5rem' }}>{avg}% <span style={{ fontWeight: 'normal', fontSize: '0.625rem' }}>(Avg)</span></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.625rem' }}><span style={{ color: '#10b981' }}>Max {max}%</span><span style={{ color: '#ef4444' }}>Min {min}%</span></div>
        </div>
    )
}

function PdfFormModal({ on_Submit, on_Cancel }) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', location: '' });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.location) newErrors.location = 'Location is required';
        return newErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            on_Submit(formData);
        }
    };
    return (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 50 }}>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)', width: '100%', maxWidth: '28rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1.5rem' }}>Enter Details to Download</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <FormInput name="name" label="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
                    <FormInput name="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} error={errors.email} />
                    <FormInput name="phone" type="tel" label="Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} />
                    <FormInput name="location" label="Location" value={formData.location} onChange={handleChange} error={errors.location} />
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1rem' }}>
                        <button type="button" onClick={on_Cancel} style={{ padding: '0.5rem 1rem', background: '#e5e7eb', color: '#1f2937', borderRadius: '0.5rem', cursor: 'pointer', border: 'none' }}>Cancel</button>
                        <button type="submit" style={{ padding: '0.5rem 1rem', background: 'rgb(242 116 87)', color: 'white', borderRadius: '0.5rem', cursor: 'pointer', border: 'none' }}>Submit & Download</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

const FormInput = ({ name, label, type = 'text', value, onChange, error }) => (
    <div>
        <label htmlFor={name} style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151' }}>{label}</label>
        <input type={type} id={name} name={name} value={value} onChange={onChange} style={{ marginTop: '0.25rem', display: 'block', width: '100%', padding: '0.5rem 0.75rem', border: error ? '1px solid #ef4444' : '1px solid #d1d5db', borderRadius: '0.375rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }} />
        {error && <p style={{ color: '#ef4444', fontSize: '0.75rem', marginTop: '0.25rem' }}>{error}</p>}
    </div>
);

function InputSlider({ label, Icon, value, setValue, min, max, step, tooltip, inputType }) {
    const handleInputChange = (e) => {
        let numericValue = e.target.value === '' ? min : parseFloat(e.target.value);
        if (isNaN(numericValue)) numericValue = min;
        if (numericValue > max) numericValue = max;
        if (numericValue < min) numericValue = min;
        setValue(numericValue);
    };
    const getSuffix = () => inputType === 'percent' ? '%' : (inputType === 'year' ? 'Yrs' : '');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <label style={{ fontWeight: '600', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '1 1 auto', minWidth: '0', fontSize: '0.875rem' }}>
                    <Icon size={18} style={{ color: 'rgb(31 154 50)', flexShrink: 0 }} />
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
                     {tooltip && <div style={{ position: 'relative', display: 'flex', alignItems: 'center', group: true, flexShrink: 0 }}><Info size={14} style={{ color: '#6b7280', cursor: 'pointer' }} /><span style={{ position: 'absolute', bottom: '100%', zIndex: 10, marginBottom: '0.5rem', width: '12rem', padding: '0.5rem', fontSize: '0.75rem', color: 'white', background: '#1f2937', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', opacity: 0, pointerEvents: 'none' }}>{tooltip}</span></div>}
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', border: '1px solid #d1d5db', borderRadius: '0.375rem', padding: '0.25rem 0.5rem', background: 'white', flexShrink: 0 }}>
                    {inputType === 'currency' && <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>₹</span>}
                    <input type="number" value={inputType === 'percent' || inputType === 'year' ? value : Math.round(value)} onChange={handleInputChange} onBlur={(e) => { if(e.target.value === '') setValue(min); }} min={min} max={max} step={step} style={{ width: '4rem', textAlign: 'right', fontWeight: 'bold', color: 'rgb(31 154 50)', background: 'transparent', border: 'none', outline: 'none', fontSize: '0.875rem' }} />
                    {getSuffix() && <span style={{ color: '#6b7280', fontSize: '0.875rem' }}>{getSuffix()}</span>}
                </div>
            </div>
            <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} style={{ width: '100%', height: '0.5rem', background: '#e5e7eb', borderRadius: '0.5rem', appearance: 'none', cursor: 'pointer', accentColor: 'rgb(31 154 50)', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
        </div>
    );
}

function StatCard({ label, value, color, tooltip }) {
    const colorClasses = {
        red: { border: '#ef4444', bg: '#fee2e2', text: '#991b1b' },
        green: { border: '#10b981', bg: '#d1fae5', text: '#065f46' },
        purple: { border: '#a855f7', bg: '#f3e8ff', text: '#6b21a8' },
        blue: { border: '#3b82f6', bg: '#dbeafe', text: '#1e40af' },
    };
    const c = colorClasses[color] || colorClasses.blue;
    return (
        <div style={{ padding: '0.75rem', borderRadius: '0.5rem', borderTop: `4px solid ${c.border}`, background: c.bg, color: c.text, minHeight: '85px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem', flexWrap: 'wrap', textAlign: 'center' }}>
                {label}
                {tooltip && <div style={{ position: 'relative', display: 'flex', alignItems: 'center', group: true }}><Info size={12} style={{ color: '#9ca3af', cursor: 'pointer' }} /><span style={{ position: 'absolute', bottom: '100%', zIndex: 10, marginBottom: '0.5rem', width: '12rem', padding: '0.5rem', fontSize: '0.75rem', color: 'white', background: '#1f2937', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', opacity: 0, pointerEvents: 'none' }}>{tooltip}</span></div>}
            </div>
            <p style={{ fontSize: '1.125rem', fontWeight: 'bold', marginTop: '0.5rem', textAlign: 'center', wordBreak: 'break-word' }}>{value}</p>
        </div>
    );
}

function ToggleSwitch({ label, Icon, enabled, setEnabled, tooltip }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <label style={{ fontWeight: '600', color: '#374151', display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
        <Icon size={20} style={{ color: 'rgb(31 154 50)' }} />{label}
        {tooltip && <div style={{ position: 'relative', display: 'flex', alignItems: 'center', group: true }}><Info size={16} style={{ color: '#6b7280', cursor: 'pointer' }} /><span style={{ position: 'absolute', bottom: '100%', zIndex: 10, marginBottom: '0.5rem', width: '12rem', padding: '0.5rem', fontSize: '0.75rem', color: 'white', background: '#1f2937', borderRadius: '0.375rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', opacity: 0, pointerEvents: 'none' }}>{tooltip}</span></div>}
      </label>
      <button type="button" style={{ width: '2.75rem', height: '1.5rem', borderRadius: '9999px', background: enabled ? 'rgb(242 116 87)' : '#e5e7eb', display: 'inline-flex', flexShrink: 0, cursor: 'pointer', alignItems: 'center', padding: '0.1875rem', border: '2px solid transparent', transition: 'colors 0.2s' }} onClick={() => setEnabled(!enabled)}>
        <span style={{ width: '1.25rem', height: '1.25rem', display: 'inline-block', transform: enabled ? 'translateX(1.25rem)' : 'translateX(0)', borderRadius: '50%', background: 'white', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s' }} />
      </button>
    </div>
  );
}
