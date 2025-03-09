import React from "react";
import { IconType } from "react-icons";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({ name, icon: Icon, color, url }: SkillCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col items-center justify-center w-[95px] h-[115px] sm:w-[122px] sm:h-[122px]
      p-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-transform duration-300 
      transform hover:-translate-y-2 hover:shadow-2xl
      before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-br before:from-transparent before:to-[var(--glow-color,rgba(255,255,255,0))] 
      before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-50"
      style={{ "--glow-color": color } as React.CSSProperties}
    >
      {/* Icon with Background & Glow Effect */}
      <div
        className="p-3 rounded-full transition-all duration-300 group-hover:scale-110 relative"
        style={{ backgroundColor: `${color}1A` }}
      >
        <Icon className="w-12 h-12 group-hover:brightness-100 relative z-10" color={color} />

        {/* Inner Glow Effect */}
        <div className="rounded-full group-hover:opacity-50 transition-opacity duration-500"/>
      </div>

      {/* Skill Name */}
      <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100 text-center">{name}</span>
    </a>
  );
}
