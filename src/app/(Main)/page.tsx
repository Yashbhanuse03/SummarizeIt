import { Button } from "@/app/components/ui/button";
import { FileText } from "lucide-react";
import Link from "next/link";
import Header from "@/app/components/common/header";
import HeroSection from "@/app/components/Home/herosection";

export default function Home() {
  return (
    
      <div className="flex flex-col  min-h-[1600] relative ">
        <Header/>
        <main>
          <div className=" ">
            <HeroSection/>
          </div>
          

        </main>
      </div>
    
  );
}



