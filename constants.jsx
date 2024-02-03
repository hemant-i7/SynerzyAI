import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-red-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: "text-pink-500",
    bgColor: "bg-emerald-500/10",
  },

  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-yellow-500",
    bgColor: "bg-green-400",
    href: '/video',
    
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-green-500",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },

  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
];