import { Check, X } from "lucide-react";

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
      features: [true, true, true, true],
    },
    {
      name: "Celo",
      features: [true, false, true, false],
    },
    {
      name: "Velo global",
      features: [true, false, false, true],
    },
    {
      name: "Hyper",
      features: [true, true, true, true],
    },
  ];

  return (
    <section className="gradient1-bg py-20">
      <div className="md:px-8 px-4">
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
          <table
            className="w-full min-w-full table-auto border-collapse text-lg"
            style={{ border: "1px solid #000f5a" }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid #000f5a" }}>
                {features.map((feature, index) => (
                  <th
                    key={index}
                    className="bg-gray-900/50 px-4 py-4 text-center text-base font-semibold text-gray-200"
                    style={{
                      borderRight:
                        index !== features.length - 1
                          ? "1px solid #000f5a"
                          : "none",
                    }}
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
                  style={{
                    borderBottom: "1px solid #000f5a",
                  }}
                >
                  <td
                    className="bg-gray-900/50 px-4 py-4 text-center text-base font-semibold text-white"
                    style={{ borderRight: "1px solid #000f5a" }}
                  >
                    {competitor.name}
                  </td>
                  {competitor.features.map((hasFeature, featureIndex) => (
                    <td
                      key={featureIndex}
                      className="bg-gray-900/50 px-4 py-4 text-center"
                      style={{
                        borderRight:
                          featureIndex !== competitor.features.length - 1
                            ? "1px solid #000f5a"
                            : "none",
                      }}
                    >
                      <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-cyan-700">
                        {hasFeature ? (
                          <Check className="h-4 w-4 text-white" />
                        ) : (
                          <X className="h-4 w-4 text-white" />
                        )}
                      </div>
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
