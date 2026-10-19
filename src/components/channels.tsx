import type { ComponentType } from "react";
import { CalendarDays } from "lucide-react";
import type { ChannelType } from "@/lib/content";
import {
  EventbriteIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "./BrandIcons";

/** Display name, icon and brand tint for each community channel. */
export const channelMeta: Record<
  ChannelType,
  { name: string; Icon: ComponentType<{ className?: string }>; tint: string; hover: string }
> = {
  telegram: {
    name: "Telegram",
    Icon: TelegramIcon,
    tint: "bg-[#26A5E4]/10 text-[#26A5E4]",
    hover: "hover:border-[#26A5E4]/30",
  },
  whatsapp: {
    name: "WhatsApp",
    Icon: WhatsAppIcon,
    tint: "bg-[#25D366]/10 text-[#25D366]",
    hover: "hover:border-[#25D366]/30",
  },
  luma: {
    name: "Luma",
    Icon: CalendarDays,
    tint: "bg-purple-500/10 text-purple-400",
    hover: "hover:border-purple-500/30",
  },
  eventbrite: {
    name: "Eventbrite",
    Icon: EventbriteIcon,
    tint: "bg-[#F05537]/10 text-[#F05537]",
    hover: "hover:border-[#F05537]/30",
  },
  linkedin: {
    name: "LinkedIn",
    Icon: LinkedInIcon,
    tint: "bg-[#0A66C2]/10 text-[#0A66C2]",
    hover: "hover:border-[#0A66C2]/30",
  },
  facebook: {
    name: "Facebook",
    Icon: FacebookIcon,
    tint: "bg-[#0866FF]/10 text-[#0866FF]",
    hover: "hover:border-[#0866FF]/30",
  },
  instagram: {
    name: "Instagram",
    Icon: InstagramIcon,
    tint: "bg-[#E4405F]/10 text-[#E4405F]",
    hover: "hover:border-[#E4405F]/30",
  },
};

export function ChannelIcon({ type, className }: { type: ChannelType; className?: string }) {
  const { Icon } = channelMeta[type];
  return <Icon className={className} />;
}
