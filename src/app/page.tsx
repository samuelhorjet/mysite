import Hero from "@/Component/sections/herosection";
import Navbar from "@/Component/sections/navbar";

export default function Home() { 
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      
    </main>  
  )
}