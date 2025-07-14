import React from "react";
import { IconType } from "react-icons";
import { DivideIcon as LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

interface SkillCardProps {
  name: string;
  icon: LucideIcon | IconType;
  color?: string;
  url?: string;
}

export function SkillCard({ name, icon: Icon, color, url }: SkillCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ 
        y: -8, 
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer"      
        className="group relative flex flex-col items-center p-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-500/50
          before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-transparent before:to-[var(--glow-color,rgba(255,255,255,0))] before:opacity-0 before:blur-lg before:transition-all before:duration-500 hover:before:opacity-30"
        style={{ "--glow-color": color } as React.CSSProperties}
      >
        {/* Icon with Background */}
        <div className="p-3 rounded-full transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${color}1A` }}>
          <Icon size={50} color={color} className="group-hover:brightness-100" />
        </div>

        {/* Skill Name */}
        <span className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">{name}</span>
      </a>
    </motion.div>
  );
}