export default function VisionMissionSection() {
  return (
    <div className="bg-transparent p-4 md:p-4 2xl:p-8 md:mt-8">
      <div className="max-w-7xl 2xl:max-w-[86%] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Vision and Mission content */}
          <div className="space-y-8">
            {/* Our Vision Section */}
            <div className="border-2 border-[#7fe4ff] rounded-3xl p-8 lg:p-12">
              <h2 className="text-[#7fe4ff] text-xl lg:text-2xl 2xl:text-5xl font-bold mb-6">
                Our Vision
              </h2>
              <div className="space-y-1 lg:space-y-2 2xl:space-y-6 text-white text-sm lg:text-base 2xl:text-lg leading-relaxed">
                <p>
                  Our vision is to create a future where agricultural investment
                  is easy, trusted, and open to everyone. We aim to use
                  blockchain technology to remove barriers and build a new
                  system where farmers, investors, and communities grow
                  together.
                </p>
                <p>
                  We want to lead the way in making agriculture more modern,
                  transparent, and financially rewarding, not just in Colombia,
                  but across Latin America and the world.
                </p>
              </div>
            </div>

            {/* Our Mission Section */}
            <div className="border-2 border-[#7fe4ff] rounded-3xl p-8 lg:p-12">
              <h2 className="text-[#7fe4ff] text-xl lg:text-2xl 2xl:text-5xl font-bold mb-6">
                Our Mission
              </h2>
              <div className="space-y-1 lg:space-y-2 2xl:space-y-6 text-white text-sm lg:text-base 2xl:text-lg leading-relaxed">
                <p>
                  Our mission is to connect farmers with global investors
                  through a secure and transparent blockchain platform. We are
                  committed to giving farmers better access to funding, tools,
                  and support so they can grow their businesses.
                </p>
                <p>
                  At the same time, we offer investors a way to earn income
                  while making a real impact. By combining technology with real
                  farming needs, we help both sides succeed and build stronger,
                  more sustainable communities.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Circular image */}
          <div className="flex justify-center lg:justify-end 2xl:justify-center">
            <div className="relative w-full">
              <div className="overflow-hidden w-full 2xl:w-[70%]  2xl:rounded-6xl border md:border-2 2xl:border-2 mx-auto border-[#7fe4ff] md:rounded-4xl">
                <div className="hidden md:block">
                  <img
                    src="/visionmissionimage.png"
                    alt="Three farmers standing together in a lush green agricultural setting"
                    className="
                      w-full 
                      object-cover 
                      h-[300px] 
                      sm:h-[400px] 
                      lg:h-[500px] 
                      xl:h-[600px] 
                      2xl:h-[700px]
                      rounded-xl
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
