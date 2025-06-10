import React, { useState, useEffect } from "react";

const HomeEmiCalculator = () => {
  // State for inputs and results
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(20);
  const [emi, setEmi] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);
  
  // Animation state
  const [animateResults, setAnimateResults] = useState(false);
  
  // Format currency for display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate EMI, total payment and interest
  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const R = parseFloat(interestRate) / 12 / 100;
    const N = parseFloat(loanTenure) * 12;

    const emiValue = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalPaymentValue = emiValue * N;
    const totalInterestValue = totalPaymentValue - P;

    setEmi(emiValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(0));
    setTotalInterest(totalInterestValue.toFixed(0));
    setIsCalculated(true);
    
    // Trigger animation
    setAnimateResults(false);
    setTimeout(() => setAnimateResults(true), 50);
  };

  // Calculate EMI on initial load
  useEffect(() => {
    calculateEMI();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center mb-10 ">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section - Visual Representation */}
        <div className="w-full md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-800 p-8 text-white flex flex-col">
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-6 flex items-center">
             
              EMI Calculator
            </h2>
            
            <div className="mt-10 mb-8">
              <div className="relative h-3 bg-blue-400 rounded-full mb-2 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-white rounded-full"
                  style={{ width: `${(loanAmount / 10000000) * 100 > 100 ? 100 : (loanAmount / 10000000) * 100}%` }}
                ></div>
              </div>
              <p className="text-blue-200 text-sm">Loan Amount: {formatCurrency(loanAmount)}</p>
            </div>
            
            <div className="flex justify-between mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold">{loanTenure} yrs</div>
                <div className="text-blue-200 text-sm">Loan Tenure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{interestRate}%</div>
                <div className="text-blue-200 text-sm">Interest Rate</div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-900 bg-opacity-30 rounded-xl p-4 border border-blue-500 border-opacity-30">
            <p className="text-blue-200 text-sm mb-1">Estimated Monthly Payment</p>
            <p className="text-2xl font-bold">{formatCurrency(emi)}</p>
          </div>
        </div>
        
        {/* Right Section - Inputs and Results */}
        <div className="w-full md:w-3/5 p-8">
          <div className="space-y-6">
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between     mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Loan Amount (₹)
                </label>
                
                <span className="text-sm font-medium text-blue-600">
                  <input
                  type="input"
                 
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-[90%] h-2 bg-gray-200 rounded-lg appearance-none p-4 cursor-pointer"
                />
                </span>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 rounded-l-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setLoanAmount(Math.max(100000, loanAmount - 50000))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <button 
                  className="bg-gray-200 rounded-r-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setLoanAmount(Math.min(10000000, loanAmount + 50000))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>₹1L</span>
                <span>₹1Cr</span>
              </div>
            </div>
            
            {/* Interest Rate */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Annual Interest Rate (%)
                </label>
                <span className="text-sm font-medium text-blue-600">
                  {interestRate}%
                </span>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 rounded-l-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setInterestRate(Math.max(1, interestRate - 0.25))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.25"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <button 
                  className="bg-gray-200 rounded-r-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setInterestRate(Math.min(20, interestRate + 0.25))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>1%</span>
                <span>20%</span>
              </div>
            </div>
            
            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Loan Tenure (Years)
                </label>
                <span className="text-sm font-medium text-blue-600">
                  {loanTenure} years
                </span>
              </div>
              <div className="flex items-center">
                <button 
                  className="bg-gray-200 rounded-l-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setLoanTenure(Math.max(1, loanTenure - 1))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={loanTenure}
                  onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <button 
                  className="bg-gray-200 rounded-r-lg p-2 hover:bg-gray-300 transition"
                  onClick={() => setLoanTenure(Math.min(30, loanTenure + 1))}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>1 year</span>
                <span>30 years</span>
              </div>
            </div>
            
            {/* Calculate Button */}
            <button
              onClick={calculateEMI}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 rounded-xl shadow-lg transition-all transform hover:scale-[1.02]"
            >
              Calculate EMI
            </button>
            
            {/* Results Section */}
            {isCalculated && (
              <div className={`mt-6 space-y-4 transition-all duration-500 ${animateResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="text-center text-lg font-medium text-gray-700">
                  Loan Breakdown
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-gray-500 text-sm">Monthly EMI</div>
                    <div className="text-xl font-bold text-blue-600">{formatCurrency(emi)}</div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="text-gray-500 text-sm">Total Interest</div>
                    <div className="text-xl font-bold text-blue-600">{formatCurrency(totalInterest)}</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                  <div className="text-gray-500 text-sm">Total Payment</div>
                  <div className="text-2xl font-bold text-blue-700">{formatCurrency(totalPayment)}</div>
                </div>
                
                {/* Interest vs Principal Visualization */}
                <div className="mt-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-blue-600">Principal</span>
                    <span className="text-sm font-medium text-indigo-600">Interest</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                      style={{ 
                        width: `${(loanAmount / totalPayment * 100).toFixed(1)}%`,
                        background: `linear-gradient(90deg, #3b82f6 ${(loanAmount / totalPayment * 100).toFixed(1)}%, #6366f1 ${(loanAmount / totalPayment * 100).toFixed(1)}%)`
                      }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>{formatCurrency(loanAmount)}</span>
                    <span>{formatCurrency(totalInterest)}</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                This calculator provides estimates only. Actual loan terms may vary based on lender policies and your credit profile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEmiCalculator;