import React, { useState, useEffect } from 'react';

const SipCalculator = () => {

  
  return (
    <div style={{ fontFamily: "Ascender Sans Narrow, sans-serif" }} className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        
        <ClassicDesign />
        
        <div className="mt-16 bg-white rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">What is a SIP Calculator?</h2>
          <p className="text-gray-600 mb-3">
            A SIP (Systematic Investment Plan) calculator helps you estimate the returns on your mutual fund investments. 
            It allows you to calculate the future value of your investments based on regular monthly contributions, 
            expected rate of return, and investment duration.
          </p>
          <p className="text-gray-600">
            By adjusting the parameters, you can visualize how different investment strategies might impact your 
            financial goals and plan accordingly.
          </p>
        </div>
      </div>
    </div>
  );
};

// Classic Design Component
const ClassicDesign = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [rateOfReturn, setRateOfReturn] = useState(12);
  const [years, setYears] = useState(15);
  
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedAmount, setEstimatedAmount] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  
  useEffect(() => {
    // Calculate SIP returns
    const months = years * 12;
    const monthlyRate = rateOfReturn / 100 / 12;
    
    // Fixed SIP formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
    const futureValue = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate));
    
    const invested = monthlyInvestment * months;
    const estimated = futureValue - invested;
    
    setInvestedAmount(Math.round(invested));
    setEstimatedAmount(Math.round(estimated));
    setTotalReturns(Math.round(futureValue));
  }, [monthlyInvestment, rateOfReturn, years]);
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left Form Side */}
        <div className="w-full md:w-1/2 p-6 space-y-8">
        <div>
  <div className="flex justify-between items-center mb-2">
    <h2 className="text-xl font-bold text-gray-800">Monthly Investment</h2>
    <input
      type="number"
      min="1000"
      max="100000"
      step="1000"
      value={monthlyInvestment}
      onChange={(e) => setMonthlyInvestment(+e.target.value)}
      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold w-30 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  </div>
  <input
    type="range"
    min="1000"
    max="100000"
    step="1000"
    value={monthlyInvestment}
    onChange={(e) => setMonthlyInvestment(+e.target.value)}
    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
  />
  <div className="flex justify-between text-sm text-gray-500 mt-1">
    <span>₹1K</span>
    <span>₹1L</span>
  </div>


          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">Rate of Return</h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                {rateOfReturn}%
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="30"
              value={rateOfReturn}
              onChange={(e) => setRateOfReturn(+e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1%</span>
              <span>30%</span>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold text-gray-800">Time Period</h2>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full font-semibold">
                {years} Years
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1 Year</span>
              <span>40 Years</span>
            </div>
          </div>
        </div>
        
        {/* Right Output Side */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50 flex flex-col justify-between">
          <div className="mb-6">
            <div className="h-40 bg-gradient-to-r from-blue-700 to-blue-500 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm text-blue-100 mb-1">Total Value After {years} Years</div>
                <div className="text-3xl font-bold text-white">
                  ₹ {totalReturns.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded mr-3"></div>
                  <span className="font-medium text-gray-700">Invested Amount</span>
                </div>
                <span className="font-semibold text-gray-800">
                  ₹ {investedAmount.toLocaleString('en-IN')}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-400 rounded mr-3"></div>
                  <span className="font-medium text-gray-700">Estimated Returns</span>
                </div>
                <span className="font-semibold text-gray-800">
                  ₹ {estimatedAmount.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-800 mb-1">Return on Investment</div>
            <div className="font-bold text-blue-900">
              {estimatedAmount > 0 && investedAmount > 0 
                ? Math.round((estimatedAmount / investedAmount) * 100) 
                : 0
              }%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




export default SipCalculator;