import Image from "next/image";
import HeroSection from "@/app/components/ui/HeroSection"
import Navbar from "@/app/components/ui/Navbar"
import ProjectSection from "@/app/components/ui/ProjectSection"
export default function Home() {
  return (
  

      <main className="flex min-h-screen w-full flex-col px-12 py-4 lg:px-40">
        <Navbar />
        <HeroSection />
      </main>


  );
}
