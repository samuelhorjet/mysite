import Comparison from "@/Component/sections/comparison";
import FaqSection from "@/Component/sections/faq";
import Footer from "@/Component/sections/footer";
import Hero from "@/Component/sections/herosection";
import Navbar from "@/Component/sections/navbar";
import PartnersSection from "@/Component/sections/partners";
import PainPoints from "@/Component/sections/Point";
import Roadmap from "@/Component/sections/roadmap";
import Solutions from "@/Component/sections/solution";
import TeamSection from "@/Component/sections/team";
import TokenDistribution from "@/Component/sections/token-dist";
import TokenMarket from "@/Component/sections/token-market";
import UserOptions from "@/Component/sections/user-options";

export default function Home() {
  return (
    <main className="text-white">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <UserOptions />
        <PainPoints />
        <Comparison />
        <Solutions />
      </section>
      <section id="token">
        <TokenMarket />
      </section>
      <section id="team">
        <TeamSection />
        <TokenDistribution />
      </section>
      <section id="roadmap">
        <Roadmap />
      </section>
      <section id="blog">
        <FaqSection />
      </section>
      <section id="contact">
        <PartnersSection />
        <Footer />
      </section>
    </main>
  );
}
