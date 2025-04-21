import Comparison from "@/Component/sections/comparison";
import Hero from "@/Component/sections/herosection";
import Navbar from "@/Component/sections/navbar";
import PainPoints from "@/Component/sections/Point";
import Solutions from "@/Component/sections/solution";
import UserOptions from "@/Component/sections/user-options";


export default function Home() { 
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <UserOptions />
      <PainPoints />
      <Comparison />
      <Solutions />
    </main>  
  )
}