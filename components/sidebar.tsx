import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  File,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  VideoIcon,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },

  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-green-500",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },

  
 
];

const Sidebar = () => {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-gray-900 text-white">
      <div className="px-3 py-2 flex-1 ">
        <div style={{ pointerEvents: "none" }} />
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            Synerzy AI
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className="text-sm group 
              flex p-3 w-full justify-start 
              font-medium cursor-pointer
               hover:text-white hover:bg-white/10 
               rounded-lg transition "
            >
              <div style={{ pointerEvents: "none" }}></div>
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        {/* Add GitHub and YouTube buttons */}
        <div className="flex justify-between px-3 absolute bottom-4 left-0 right-0">
          <Link href="https://github.com/hemant-i7/SynerzyAI" passHref>
            <div className="text-white flex items-center cursor-pointer">
              <Image src="/git.png" alt="GitHub" width={24} height={24} />
              <span className="ml-2">GitHub</span>
            </div>
          </Link>
          <Link href="https://youtu.be/kn3O5BG_yV0" passHref>
            <div className="text-white flex items-center cursor-pointer">
              <Image src="/yt.png" alt="YouTube" width={24} height={24} />
              <span className="ml-2">YouTube</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
