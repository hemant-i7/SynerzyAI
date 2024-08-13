
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { File, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <div style={{ pointerEvents: "none" }}></div>

      <Button variant="ghost" size="icon" className="md:hidden">
        <File/>
      </Button>

      <div className="flex w-full justify-end px-5 py-4">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
