export default function TokenMarket() {
  const tokenInfo = [
    { label: "Token Name", value: "coindox(ITU)" },
    { label: "Nominal Price", value: "1 ITU =0,025 USD" },
    { label: "Number of Tokens Produced", value: "7 BN ITU" },
    { label: "Unsold Tokens", value: "Burn Smart Contract" },
    { label: "Type of the Token", value: "ERC – 20" },
  ];

  const termsInfo = [
    { label: "Minimum Payment", value: "100 USD" },
    { label: "Maximum Payment in the first 7 days", value: "100 000 USD" },
    { label: "Maximum Payment in the first 7 days", value: "No Limits" },
    { label: "Soft Cap", value: "15 MLN USD" },
    { label: "Hard Cap", value: "75 MLN USD" },
  ];

  return (
    <section className="gradient1-bg py-20 text-white">
      <div className="md:px-8 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-semibold md:text-5xl">
            Live Token Market Updates
          </h2>
          <p className="mx-auto text-xl text-gray-400">
            Stay informed with Live Data and Analytics
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Token Info */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">
              Information About Tokens
            </h3>
            <div className="space-y-4">
              {tokenInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded border border-[#02134b] bg-[#00082d] overflow-hidden"
                >
                  <div className="relative flex-1 text-xl px-5 py-4 bg-[#02134b] font-medium">
                    {item.label}
                    <div className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 bg-[#000f5a] translate-x-1/2"></div>
                  </div>
                  <div className="flex-1 text-center px-5 py-4 font-bold text-xl text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Terms & Conditions */}
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Terms & Conditions</h3>
            <div className="space-y-4">
              {termsInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex rounded border border-[#000f5a] bg-[#00082d] overflow-hidden"
                >
                  <div className="relative flex-1 text-xl px-5 py-4 bg-[#02134b] font-medium">
                    {item.label}
                    <div className="absolute right-0 top-1/2 h-6 w-6 -translate-y-1/2 rotate-45 bg-[#000f5a] translate-x-1/2"></div>
                  </div>
                  <div className="flex-1 text-center py-4 font-bold text-xl text-white">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
