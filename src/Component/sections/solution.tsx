import { Shield, BarChart3, Fingerprint, Settings } from "lucide-react";

export default function Solutions() {
  return (
    <section className="gradient1-bg py-20">
      <div className="md:px-8 px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-medium md:text-5xl">
            Our Best Blockchain
            <br />
            Solution Platform
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            A blockchain solution platform is a comprehensive software or
            infrastructure that enables businesses and developers to build
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg1 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Blockchain Protocol Support
            </h3>
            <p className="text-sm text-white">
              Our support for major blockchain protocols, such as Ethereum
            </p>
          </div>

          <div className="rounded-lg bg1 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <BarChart3 className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Analytics and Monitoring
            </h3>
            <p className="text-sm text-white">
              Comprehensive analytics and monitoring tools are included
            </p>
          </div>

          <div className="rounded-lg bg1 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Fingerprint className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Security Measures</h3>
            <p className="text-sm text-white">
              Robust security features and cryptographic protocols
            </p>
          </div>

          <div className="rounded-lg bg1 p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">
              Governance Mechanisms
            </h3>
            <p className="text-sm text-white">
              Some platforms provide built-in governance features
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
