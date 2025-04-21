  const Hero = () => {
    return (
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg">
        <div className="md:pl-8 mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full mt-10 md:mt-30 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-7xl leading-10 md:leading-20 font-titillium font-medium mb-8">
                Navigating the world
                <br />
                of blockchain
              </h1>
              <p className="text-gray-300 mb-10 text-[15px]">
                Smart digital assets, trust, security, and efficiency are now a
                reality with blockchain <br />
                technology. The game changer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* First button - smooth gradient hover */}
                <button className="px-14 py-4 bg-[#1a1d23] cursor-pointer text-white font-medium relative overflow-hidden group">
                  <span className="relative z-10">GET STARTED</span>
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute inset-0 rounded-md transition-all duration-500 ease-in-out"
                      style={{
                        background: "linear-gradient(90deg, #0ea5e9, #10b981)",
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      }}
                    ></span>
                    <span
                      className="absolute inset-[1.5px] bg-[#1a1d23] rounded-sm transition-all duration-500 ease-in-out"
                      style={{
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        background: "linear-gradient(90deg, #1a1d23, #1a1d23)",
                      }}
                    ></span>
                  </span>
                  {/* Hover overlay with gradient */}
                  <span
                    className="absolute inset-[1.5px] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0"
                    style={{
                      background: "linear-gradient(90deg, #15b284, #205ed2)",
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                    }}
                  ></span>
                </button>

                {/* Second button - transparent on hover */}
                <button className="px-14 py-4 bg-[#1a1d23] cursor-pointer text-white hover:text-[#483c6b] font-medium relative overflow-hidden group">
                  <span className="relative font-medium z-10">WHITE PAPER</span>
                  <span className="absolute inset-0 overflow-hidden">
                    <span
                      className="absolute inset-0 rounded-md transition-all duration-500 ease-in-out"
                      style={{
                        background: "linear-gradient(90deg, #94a3b8, #e2e8f0)",
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      }}
                    ></span>
                    <span
                      className="absolute inset-[1.5px] bg-[#1a1d23] rounded-sm transition-all duration-500 ease-in-out group-hover:bg-transparent"
                      style={{
                        background: "bg-[#1a1d23]",
                        clipPath:
                          "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      }}
                    ></span>
                  </span>
                  {/* Border glow effect on hover */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      filter: "blur(4px)",
                      opacity: 0,
                    }}
                  ></span>
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative h-[500px] flex items-center justify-center">
              {/* Background visuals: consider using absolute positioned SVG or image elements */}
              <img
                src="/images/about_shape1-removebg-preview.png" // Or use divs with gradients if you're creating it with CSS
                alt="Curved Visual"
                className="absolute top-10 w-[50] h-[50] object-cover pointer-events-none"
              />
              <img
                src="/images/about_shape1-removebg-preview.png" // Or use divs with gradients if you're creating it with CSS
                alt="Curved Visual"
                className="absolute w-[50] h-[50] object-cover pointer-events-none"
              />
              <img
                src="/images/about_shape1-removebg-preview.png" // Or use divs with gradients if you're creating it with CSS
                alt="Curved Visual"
                className="absolute bottom-10 w-[50] h-[50] object-cover pointer-events-none"
              />
              <img
                src="/images/about_shape1-removebg-preview.png" // Or use divs with gradients if you're creating it with CSS
                alt="Curved Visual"
                className="absolute left-10 w-[50] h-[50] object-cover pointer-events-none"
              />
              <img
                src="/images/about_shape1-removebg-preview.png" // Or use divs with gradients if you're creating it with CSS
                alt="Curved Visual"
                className="absolute right-10 w-[50] h-[50] object-cover pointer-events-none"
              />

              {/* Feature tags */}
              <div className="absolute flex items-center">
                <img src="/images/sc.svg" alt="icon" className="w-30 h-30" />
                <span className="text-white right-[100px] text-sm font-medium">
                  Secure & Safe
                </span>
              </div>

              <div className="absolute top-[25%] right-[20%] flex items-center gap-2">
                <img src="/images/sc.svg" alt="icon" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">
                  Trustworthy
                </span>
              </div>

              <div className="absolute bottom-[25%] left-[15%] flex items-center gap-2">
                <img src="/images/sc.svg" alt="icon" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">Tested</span>
              </div>

              <div className="absolute bottom-[15%] right-[25%] flex items-center gap-2">
                <img src="/images/sc.svg" alt="icon" className="w-6 h-6" />
                <span className="text-white text-sm font-medium">
                  Optimized
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;
