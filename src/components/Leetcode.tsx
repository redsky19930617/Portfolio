import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export function Leetcode() {
  return (
    <SectionBackground>
      <section id="leetcode">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="Between classes and coding, I somehow manage to solve some DSA problems">Leetcode Progress</SectionTitle>

          <motion.div 
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Leetcode Activity Image */}
            <motion.div 
              className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://leetcard.jacoblin.cool/deepakmodi1?theme=dark&font=Inter&ext=activity&border=2&radius=10"
                title="Leetcode Activity"
                className="absolute w-full h-full rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
              </img>
            </motion.div>

            {/* Leetcode Journey Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                My LeetCode Grind
              </h3>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
                Started solving LeetCode problems to get better at DSA and honestly, it's become a daily habit now. Some days I breeze through easy problems, other days medium problems make me question my life choices 😅
              </p>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
                I've tackled problems across arrays, trees, graphs, and that scary beast called dynamic programming. The goal? Stay consistent, learn something new every day, and maybe not panic during technical interviews!
              </p>

              {/* LeetCode Profile Button */}
              <motion.div 
                className="mt-6 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <a
                  href="https://leetcode.com/deepakmodi1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <SiLeetcode className="w-5 h-5" /> View Profile
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionBackground>
  );
}
