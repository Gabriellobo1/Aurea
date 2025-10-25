import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Solutions } from "@/components/Solutions";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
        <Hero />
        <Solutions />
        <Contact />
        
    </div>
  );
}