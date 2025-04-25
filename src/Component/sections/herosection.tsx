const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 gradient-bg">
      <div className="md:pl-8 mx-auto h-150 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="mt-10 md:mt-30 mb-10 md:mb-0">
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

          {/* Redesigned right div */}
          <div className="md:w-1/2 relative h-[500px] flex items-center justify-center">
            {/* Animated blockchain sphere */}
            <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-[#14a384]/30 animate-[spin_25s_linear_infinite]">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#14a384] rounded-full shadow-[0_0_15px_5px_rgba(20,163,132,0.4)]"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#14a384] rounded-full shadow-[0_0_15px_5px_rgba(20,163,132,0.4)]"></div>
              </div>

              {/* Middle rotating ring */}
              <div className="absolute inset-[30px] rounded-full border-2 border-[#205ed2]/30 animate-[spin_20s_linear_infinite_reverse]">
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#205ed2] rounded-full shadow-[0_0_15px_5px_rgba(32,94,210,0.4)]"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#205ed2] rounded-full shadow-[0_0_15px_5px_rgba(32,94,210,0.4)]"></div>
              </div>

              {/* Inner rotating ring */}
              <div className="absolute inset-[60px] rounded-full border-2 border-white/30 animate-[spin_15s_linear_infinite]">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"></div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_15px_5px_rgba(255,255,255,0.4)]"></div>
              </div>

              {/* Center sphere */}
              <div className="absolute inset-[90px] rounded-full bg-gradient-to-br from-[#14a384]/80 to-[#205ed2]/80 shadow-[0_0_30px_10px_rgba(20,163,132,0.3)]">
                <div className="absolute inset-0 rounded-full bg-[#0c0c0c]/40 backdrop-blur-sm"></div>
                <div className="absolute inset-[15px] rounded-full bg-gradient-to-br from-[#14a384] to-[#205ed2] opacity-80 animate-pulse"></div>
              </div>

              {/* Floating nodes */}
              <div className="absolute top-[15%] left-[10%] w-5 h-5 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 animate-[pulse_2s_ease-in-out_infinite]"></div>
              <div className="absolute top-[75%] left-[20%] w-4 h-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 animate-[pulse_3s_ease-in-out_infinite]"></div>
              <div className="absolute top-[30%] right-[15%] w-6 h-6 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="absolute top-[60%] right-[10%] w-3 h-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 animate-[pulse_2.5s_ease-in-out_infinite]"></div>
            </div>

            {/* Feature tags with improved styling */}
            <div className="absolute top-[15%] left-[10%] flex items-center gap-2 bg-[#0c0c0c]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#14a384]/30 shadow-[0_0_15px_rgba(20,163,132,0.2)] animate-[fadeIn_1s_ease-in-out]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#14a384] to-[#205ed2] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-white"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Secure & Safe
              </span>
            </div>

            <div className="absolute top-[25%] right-[5%] flex items-center gap-2 bg-[#0c0c0c]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#14a384]/30 shadow-[0_0_15px_rgba(20,163,132,0.2)] animate-[fadeIn_1s_ease-in-out_0.3s_both]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#14a384] to-[#205ed2] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-white"
                >
                  <path d="M7 10v12" />
                  <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Trustworthy
              </span>
            </div>

            <div className="absolute bottom-[30%] left-[5%] flex items-center gap-2 bg-[#0c0c0c]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#14a384]/30 shadow-[0_0_15px_rgba(20,163,132,0.2)] animate-[fadeIn_1s_ease-in-out_0.6s_both]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#14a384] to-[#205ed2] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-white"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Tested
              </span>
            </div>

            <div className="absolute bottom-[15%] right-[10%] flex items-center gap-2 bg-[#0c0c0c]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#14a384]/30 shadow-[0_0_15px_rgba(20,163,132,0.2)] animate-[fadeIn_1s_ease-in-out_0.9s_both]">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#14a384] to-[#205ed2] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-white"
                >
                  <path d="m18.5 20 4.5-4.5-4.5-4.5" />
                  <path d="M5.5 20 1 15.5 5.5 11" />
                  <path d="m14 7-4 10" />
                </svg>
              </div>
              <span className="text-white text-sm font-medium whitespace-nowrap">
                Optimized
              </span>
            </div>

            {/* Background glow effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#14a384] opacity-10 rounded-full blur-[80px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#205ed2] opacity-10 rounded-full blur-[60px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
