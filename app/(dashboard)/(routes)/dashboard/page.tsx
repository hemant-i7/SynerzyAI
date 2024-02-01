import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import Cards from "../dashboard/cards";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });


export default function DashbordPage()


{
  return (
    
    <div className="bg-gray-500">
      <div className="mb-8 space-y-4">
        <h2 className={cn("text-2xl md:text-4xl font-bold text-center ", montserrat.className)}>
          Explore the Intelligence of AI{" "}
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Where Intelligence Meets Synergy
        </p>
      </div>
      <Cards />
      <div>

      </div>
    </div>
  );
}
