"use client";

import { useState } from "react";

export default function Purchase() {
  const [selectedCurrency, setSelectedCurrency] = useState("USDT");
  const [amount, setAmount] = useState("5");
  const [tokenAmount, setTokenAmount] = useState("20,000");
  const [progress] = useState(40);

  return (
    <div className="relative  md:max-w-2xl 2xl:max-w-6xl px-4 sm:px-6 md:px-8 lg:px-12 2xl:px-12 py-12 w-full ">
      {/* Decorative Images */}
      <img
        src="/coinRight.svg"
        alt="Top Right"
        className="absolute top-0 2xl:-top-12 right-0 2xl:-right-12 w-20 sm:w-24 md:w-28 2xl:w-50 object-contain z-10"
      />
      <img
        src="/coinLeft.svg"
        alt="Bottom Left"
        className="absolute bottom-0 2xl:-bottom-12 left-0 2xl:-left-12 w-20 sm:w-24 md:w-28 2xl:w-50 object-contain z-10 "
      />

      <div className="relative  flex items-center justify-center w-full ">
        <div className="w-full bg-transparent rounded-3xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 border border-[#7fe4ff] md:border-2 2xl:border-4 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold mb-4">
              <span className="text-[#7fe4ff]">Buy </span>
              <span className="text-yellow-400">$ETATA </span>
              <span className="text-[#7fe4ff]">Now</span>
            </h1>
            <h2 className="text-[#ffffff] text-lg sm:text-xl md:text-2xl font-semibold mb-2">
              Powering the future of Agriculture
            </h2>
            <p className="text-[#ffffff] text-sm sm:text-base md:text-lg">
              Secure your tokens before the next price increase.
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative rounded-xl mb-6 border border-[#7fe4ff] 2xl:border-2">
            <div
              className="bg-[#7fe4ff] p-3 sm:p-4 rounded-l-xl rounded-r-sm transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Stats */}
          <div className="text-center mb-8 space-y-2 text-sm sm:text-base md:text-lg">
            <div>
              <span className="text-[#ffffff]">USDT RAISED SO FAR: </span>
              <span className="text-green-400 font-bold">$15,000</span>
            </div>
            <div className="text-[#ffffff]">
              <span>Tokens </span>
              <span className="text-green-400 font-semibold">Sold</span>
              <span>: 150,000,000</span>
            </div>
          </div>

          {/* Price Info */}
          <div className="bg-[#73737361] rounded-xl p-4 mb-6 border border-[#7fe4ff] 2xl:border-2 flex justify-between items-center text-sm sm:text-base md:text-lg text-white">
            <div>
              1 <span className="text-[#7fe4ff] font-semibold">$ETATA</span> =
              $0.005
            </div>
            <div>Next Price: $0.6</div>
          </div>

          {/* Currency Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {["USDT", "BNB", "USDC"].map((currency) => (
              <button
                key={currency}
                onClick={() => setSelectedCurrency(currency)}
                className={`flex-1 py-3 rounded-xl border border-[#7fe4ff] 2xl:border-2 font-semibold text-sm sm:text-base transition-colors ${
                  selectedCurrency === currency
                    ? "bg-[#7fe4ff] text-black"
                    : "bg-[#73737361] text-white hover:bg-[#d5dfed]"
                }`}
              >
                {currency}
              </button>
            ))}
          </div>

          {/* Amount Inputs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-4xl mx-auto ">
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-[#73737361] border border-[#7fe4ff] 2xl:border-2 rounded-xl p-2.5 sm:p-3 md:p-4 text-white text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-[#7fe4ff]"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <input
                type="text"
                value={`${tokenAmount} $ETATA`}
                onChange={(e) =>
                  setTokenAmount(e.target.value.replace(" $ETATA", ""))
                }
                className="w-full bg-[#73737361] border border-[#7fe4ff] 2xl:border-2 rounded-xl p-2.5 sm:p-3 md:p-4 text-white text-sm sm:text-base md:text-lg text-center focus:outline-none focus:ring-2 focus:ring-[#7fe4ff]"
              />
            </div>
          </div>

          {/* Rate Info */}
          <div className="text-left text-[#ffffff] mb-6 text-sm sm:text-base md:text-lg">
            Current Rate: 1 USDT = 200 $ETATA
          </div>

          {/* Connect Button */}
          <button className="w-full bg-[#7fe4ff] hover:bg-[#7fe4ff]/90 text-[#01273E] text-sm sm:text-base md:text-lg font-bold py-3 sm:py-4 rounded-xl transition-colors">
            Connect Wallet & Buy $ETATA
          </button>
        </div>
      </div>
    </div>
  );
}
