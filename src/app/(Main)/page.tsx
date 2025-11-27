import { Button } from "@/app/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/common/header";
import HeroSection from "@/app/components/home/herosection";
import DemoSection from "../components/home/demo-section";
import HowItWorksection from "../components/home/how-it-works";


export default function Home() {
  return (
    
      <div className="flex flex-col  min-h-[1600] relative ">
        <Header/>
        <main>
          <div className=" flex  space-y-45 flex-col">
            <HeroSection/>
            <DemoSection/>
            <HowItWorksection/>
            

          </div>
          

        </main>
      </div>
    
  );
}



