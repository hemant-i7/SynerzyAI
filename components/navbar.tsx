import CustomCursor from "@/app/(dashboard)/(routes)/dashboard/CustomCursor";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div style={{ pointerEvents: "none" }}></div>

      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>

      <div className="flex w-full justify-end px-5 py-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
