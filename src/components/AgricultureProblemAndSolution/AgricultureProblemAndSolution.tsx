export default function AgricultureProblemAndSolution() {
  return (
    <div className=" bg-transparent p-8">
      <div className="max-w-4xl 2xl:max-w-[55%] mx-auto space-y-8">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-cyan-300">
          Agriculture Problem In Latin America
        </h1>

        {/* Problem Statement Boxes */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
            <p className="text-white text-lg font-medium">They deal with unstable markets and low profit margins</p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
            <p className="text-white text-lg font-medium">Most farmers do not have access to fair or reliable loans</p>
          </div>
        </div>

        {/* Wide Problem Box */}
        <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
          <p className="text-white text-lg font-medium">
            There's a lack of trust and transparency in how agricultural investments are managed
          </p>
        </div>

        {/* Solution Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-300">Matrix Eagle's Solution To That:</h2>

        {/* Solution Subtitle */}
        <h3 className="text-2xl md:text-3xl font-bold text-center text-cyan-300">
          We create a trusted and easy-to-use space where:
        </h3>

        {/* Solution Boxes */}
        <div className="space-y-6">
          <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
            <p className="text-white text-lg font-medium">
              Farmers can receive funding through smart contracts that protect both sides
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
            <p className="text-white text-lg font-medium">
              Investors can safely support farming projects while earning profits
            </p>
          </div>
          <div className="bg-linear-to-r from-[#737373]/30 to-[#000000]/70 rounded-3xl p-8 text-center">
            <p className="text-white text-lg font-medium">
              All transactions are traceable and secure using BEP-20 blockchain standards
            </p>
          </div>
        </div>

        {/* Closing Statement */}
        <p className="text-2xl md:text-3xl font-bold text-center leading-relaxed text-cyan-300">
          By creating this bridge between modern finance and traditional farming, Matrix Eagle brings real value to both
          worlds
        </p>

        {/* CTA Button */}
        <div className="flex justify-center pt-4">
          <button className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold text-lg px-8 py-4 rounded-2xl transition-colors duration-200">
            Connect & Buy Token
          </button>
        </div>
      </div>
    </div>
  )
}
