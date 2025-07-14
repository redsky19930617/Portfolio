import React from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
  isLast: boolean;
}

export function EducationCard({ 
  degree, 
  institution, 
  period, 
  score, 
  isLast 
}: EducationCardProps) {
  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3 }}
      className="relative group bg-white dark:bg-gray-900 p-4 sm:p-8 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
    >
      
      <div className="relative z-10 flex items-start gap-6">
        
        {/* Cap Icon */}
        <motion.div 
          className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </motion.div>

        {/* Details Section */}
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">{degree}</h3>
          <p className="text-blue-600 dark:text-blue-400 font-medium">{institution}</p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-3">
            {/* Period */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">{period}</span>
            </div>

            {/* Score */}
            <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
              <Award className="w-4 h-4" />
              <span className="text-sm">Score: {score}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Connector (Hidden for Last Card) */}
      {!isLast && (
        <div className="absolute left-[38px] bottom-0 w-[2px] h-10 bg-blue-300 dark:bg-blue-700 transform translate-y-full" />
      )}
    </motion.div>
  );
}
