import { Check } from "lucide-react";

export default function Comparison() {
  const features = [
    "Features",
    "DYI System",
    "Creating Apps",
    "Confidentiality",
    "Without Gadget",
  ];

  const competitors = [
    {
      name: "coindox",
      features: [true, true, true, true, true],
    },
    {
      name: "Celo",
      features: [true, false, true, false, false],
    },
    {
      name: "Velo global",
      features: [true, false, false, true, false],
    },
    {
      name: "Hyper",
      features: [true, true, true, true, true],
    },
  ];

  return (
    <section className="gradient1-bg py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-mediem md:text-5xl">
            Comparison With Competitors and
            <br />
            Our Advantages
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Analyzing competitors showcases our standout advantages
          </p>
        </div>

        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full min-w-full table-auto border-collapse">
            <thead>
              <tr className="border-b border-gray-800">
                {features.map((feature, index) => (
                  <th
                    key={index}
                    className="bg-gray-900/50 px-4 py-3 text-left text-sm font-medium text-gray-300"
                  >
                    {feature}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {competitors.map((competitor, compIndex) => (
                <tr
                  key={compIndex}
                  className={
                    compIndex % 2 === 0 ? "bg-gray-900/20" : "bg-gray-900/10"
                  }
                >
                  <td className="px-4 py-3 text-sm font-medium">
                    {competitor.name}
                  </td>
                  {competitor.features.map((hasFeature, featureIndex) => (
                    <td key={featureIndex} className="px-4 py-3 text-center">
                      {hasFeature ? (
                        <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      ) : (
                        <div className="mx-auto h-6 w-6 rounded-full bg-cyan-700"></div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
