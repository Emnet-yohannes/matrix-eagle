export default function AgricultureProblemAndSolution() {
  return (
    <div className="bg-transparent px-4 py-6 sm:p-8 2xl:mt-[100px] 2xl:pb-[200px]">
      <div className="max-w-4xl 2xl:max-w-[80%] mx-auto space-y-6 sm:space-y-[28px]">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl 2xl:text-[57px] 3xl:text-[76px] font-extrabold text-center text-[#7FE4FF]">
          Agriculture Problem In Latin America
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-3xl 2xl:text-[35px] 3xl:text-[46px] font-semibold text-center text-white">
          Agriculture in Latin America, especially in Colombia, faces many ongoing problems:
        </h2>

        {/* Problem Statement Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-x-[165px] 2xl:mt-[43px]">
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl border border-[#7FE4FF] lg:border-2 3xl:border-4 p-4 sm:p-8 text-center">
            <p className="text-white text-sm sm:text-lg 3xl:text-[40px] font-medium">
              They deal with unstable markets and low profit margins
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl border border-[#7FE4FF] lg:border-2 3xl:border-4 p-4 sm:p-8 text-center">
            <p className="text-white text-sm sm:text-lg 3xl:text-[40px] font-medium">
              Most farmers do not have access to fair or reliable loans
            </p>
          </div>
        </div>

        {/* Wide Problem Box */}
        <div className="2xl:mt-[70px] bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#7FE4FF] lg:border-2 2xl:border-4">
          <p className="text-white text-sm sm:text-lg 2xl:text-[30px] 3xl:text-[40px] font-medium">
            There's a lack of trust and transparency in how agricultural investments are managed
          </p>
        </div>

        {/* Solution Title */}
        <h2 className="2xl:mt-[81px] text-xl sm:text-3xl md:text-4xl 2xl:text-[57px] 3xl:text-[76px] font-extrabold text-center text-[#7FE4FF]">
          Matrix Eagle's Solution To That:
        </h2>

        {/* Solution Subtitle */}
        <h3 className="text-white text-sm sm:text-lg 2xl:text-[35px] 3xl:text-[46px] font-medium">
          Matrix Eagle is a platform that combines blockchain technology and real agriculture to solve the problems above.
        </h3>
        <h3 className="2xl:mt-[70px] text-base sm:text-2xl md:text-3xl 2xl:text-[42px] 3xl:text-[56px] font-semibold text-center text-[#7FE4FF]">
          We create a trusted and easy-to-use space where:
        </h3>

        {/* Solution Boxes */}
        <div className="space-y-4 sm:space-y-6 2xl:space-y-[71px] 2xl:mt-[70px]">
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#7FE4FF] lg:border-2 2xl:border-4">
            <p className="text-white text-sm sm:text-lg 2xl:text-[30px] 3xl:text-[40px] font-medium">
              Farmers can receive funding through smart contracts that protect both sides
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#7FE4FF] lg:border-2 3xl:border-4">
            <p className="text-white text-sm sm:text-lg 2xl:text-[30px] 3xl:text-[40px] font-medium">
              Investors can safely support farming projects while earning profits
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/38 to-black/38 rounded-2xl sm:rounded-3xl p-4 sm:p-8 2xl:py-12 text-center border border-[#7FE4FF] lg:border-2 3xl:border-4">
            <p className="text-white text-sm sm:text-lg 2xl:text-[30px]  3xl:text-[40px] font-medium">
              All transactions are traceable and secure using BEP-20 blockchain standards
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="2xl:mt-[68px] text-base sm:text-2xl md:text-3xl 2xl:text-[42px] 3xl:text-[56px] font-semibold text-center leading-relaxed text-[#7FE4FF]">
          By creating this bridge between modern finance and traditional farming, Matrix Eagle brings real value to both
          worlds
        </p>

        {/* CTA Button */}
        <div className="2xl:mt-[92px] flex justify-center pt-4">
          <button className="bg-[#7FE4FF] hover:bg-[#7FE4FF]/70 text-black font-bold text-sm sm:text-base md:text-lg 2xl:text-[38px] 3xl:text-[50px] px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-colors duration-200 border border-[#38B6FF]">
            Connect & Buy Token
          </button>
        </div>
      </div>
    </div>
  );
}
