import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",

  },
  {
    label: 'Video Generation',
    icon: ImageIcon,
    color: "text-orange-500",
    bgColor: "bg-red-700/10",
    href: '/image',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  
];
