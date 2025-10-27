import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Features from "@/components/features";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <Hero />
        <Features/>
        <Solutions />
        <About />
        <Contact />
       
        
    </div>
  );
}