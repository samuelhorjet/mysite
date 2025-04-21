import Image from "next/image";
import {
  Lock,
  Shield,
  MessageSquare,
  Zap,
  FileText,
  Building,
  Rocket,
} from "lucide-react";

export default function UserOptions() {
  return (
    <section className="gradient1-bg py-20 relative">
      <div className="md:px-8 px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-medium lg:text-5xl text-white">
            Our Users Options
          </h2>
          <p className="text-[20px] text-gray-400">
            We offer two types of account on the platform
          </p>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-center">
          {/* Left Card - Personal */}
          <div className="z-20 w-full md:h-145 h-170 lg:w-125 bg-[#000416] border border-gray-800 p-12 rounded-2xl shadow-xl lg:space-y-6 lg:mr-[-70px]">
            <Image
              src="/images/up_01.png"
              alt="Personal Icon"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold mb-8 mt-5 text-white">
              Personal
            </h3>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-400" />
                  Confidentiality
                </h4>
                <p className="pl-6 text-[15px]">
                  Secure and private blockchain safeguards sensitive data
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  Security
                </h4>
                <p className="pl-6 text-[15px]">
                  Advanced encryption and authentication protocols
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Lock className="h-4 w-4 text-emerald-400" />
                  Easy access to personal data
                </h4>
                <p className="pl-6 text-[15px]">
                  All controlled by the individual without sharing
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  Testing and practical communication
                </h4>
                <p className="pl-6 text-[15px]">
                  Testing and practical communication are essential components
                  of our network
                </p>
              </li>
            </ul>
          </div>

          {/* Center Image */}
          <div className="relative z-10 -mt-6 md:mt-0 md:min-w-[300px] md:w-auto flex-shrink-0">
            <Image
              src="/images/uo_bg.png"
              alt="User Options Background"
              width={430}
              height={430}
              className="object-contain"
            />
          </div>

          {/* Right Card - Commercial */}
          <div className="z-20 md:h-150 h-175 lg:w-125 w-full bg-[#000416] border border-gray-800 p-12 rounded-2xl shadow-xl lg:space-y-6 lg:ml-[-70px]">
            <Image
              src="/images/up_02.png"
              alt="Commercial Icon"
              width={100}
              height={100}
            />
            <h3 className="text-xl font-semibold mb-8 mt-5 text-white">
              Commercial
            </h3>
            <ul className="space-y-5 text-gray-400 text-sm">
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Zap className="h-4 w-4 text-emerald-400" />
                  Automation
                </h4>
                <p className="pl-6 text-[15px]">
                  Streamline operations with the power of blockchain technology
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-emerald-400" />
                  Compliance with regulations
                </h4>
                <p className="pl-6 text-[15px]">
                  Built-in compliance features for regulatory support
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Building className="h-4 w-4 text-emerald-400" />
                  Building a new financial network
                </h4>
                <p className="pl-6 text-[15px]">
                  Building a new financial network is our ambitious goal
                </p>
              </li>
              <li>
                <h4 className="text-white text-xl mb-2 lg:md:0 font-semibold flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-emerald-400" />
                  Startups for blockchain
                </h4>
                <p className="pl-6 text-[15px]">
                  Get help to build blockchain solutions from our team for
                  emerging fintech projects
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
