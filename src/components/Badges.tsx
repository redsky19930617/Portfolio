import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { motion } from "framer-motion";

// Animation variants for masonry-like layout
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const badges = [
  {
    id: "leetcode-50",
    platform: "LeetCode",
    title: "50 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-50.gif",
    profile: "https://leetcode.com/deepakmodi/",
  },
  {
    id: "leetcode-100",
    platform: "LeetCode",
    title: "100 Days Badge 2024",
    image: "https://assets.leetcode.com/static_assets/marketing/2024-100-new.gif",
    profile: "https://leetcode.com/deepakmodi/",
  },

  {
    id: "github-shark",
    platform: "GitHub",
    title: "Pull Shark",
    image: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
    profile: "https://github.com/decodewithdeepak",
  },
  {
    id: "github-arctic",
    platform: "GitHub",
    title: "Arctic Code Vault Contributor",
    image: "https://github.githubassets.com/images/modules/profile/badge--acv-64.png",
    profile: "https://github.com/decodewithdeepak",
  },

  {
    id: "codechef",
    platform: "CodeChef",
    title: "3-Star Coder",
    image: "https://img.icons8.com/color/96/codechef.png",
    profile: "https://www.codechef.com/users/deepakmodi",
  },

  {
    id: "codeforces",
    platform: "CodeForces",
    title: "Expert Rank",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-codeforces-programming-competitions-and-contests-programming-community-logo-shadow-tal-revivo.png",
    profile: "https://codeforces.com/profile/deepakmodi",
  },

  {
    id: "gfg",
    platform: "GeeksforGeeks",
    title: "Top 10% Coder",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    profile: "https://auth.geeksforgeeks.org/user/deepakmodi/profile",
  },

  {
    id: "hackerrank",
    platform: "HackerRank",
    title: "Java Gold Badge",
    image: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/96/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-shadow-tal-revivo.png",
    profile: "https://www.hackerrank.com/deepakmodi",
  },
];


export function Badges() {
  return (
    <SectionBackground>
      <section id="badges">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Some shiny badges I've collected while grinding - I actually solve stuff! 🏆">Coding Badges</SectionTitle>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 gap-4"
          >
            {badges.map((badge) => (
              <motion.a
                key={badge.id}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                href={badge.profile}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group flex flex-col items-center justify-center p-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 rounded-xl blur-lg transition-all duration-300" />

                {/* Badge Image */}
                <img
                  src={badge.image}
                  alt={badge.platform}
                  className="w-30 h-30 rounded-md transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Badge Text */}
                <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white text-center">
                  {badge.title}
                </p>
                <span className="text-sm text-gray-600 dark:text-gray-400">{badge.platform}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
