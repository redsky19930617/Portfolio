import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SiLeetcode } from "react-icons/si";

export function Leetcode() {
  return (
    <SectionBackground>
      <section id="leetcode">
        <div className="container mx-auto max-w-6xl px-8">
          <SectionTitle subtitle="DSA isn't just practice — it's how I sharpen problem-solving daily.">Leetcode Progress</SectionTitle>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Leetcode Activity Image */}
            <div className="relative w-full h-[18rem] md:h-[25rem] overflow-hidden">
              <img
                src="https://leetcard.jacoblin.cool/deepakmodi1?theme=dark&font=Inter&ext=activity&border=2&radius=10"
                title="Leetcode Activity"
                className="absolute w-full h-full rounded-xl shadow-md"
              >
              </img>
            </div>

            {/* Leetcode Journey Text */}
            <div>
              <h3 className=" text-center text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                My Leetcode Journey
              </h3>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300 mb-4">
                Solving problems on Leetcode has helped me strengthen my Data
                Structures and Algorithms skills. I enjoy tackling challenges that
                push my problem-solving abilities and prepare me for technical
                interviews.
              </p>
              <p className=" text-center text-lg text-gray-600 dark:text-gray-300">
                I've completed hundreds of problems across a variety of topics,
                including arrays, trees, graphs, and dynamic programming. My goal
                is to keep improving and stay consistent in learning and solving
                new problems daily.
              </p>

              {/* LeetCode Profile Button */}
              <div className="mt-6 flex justify-center">
                <a
                  href="https://leetcode.com/deepakmodi1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition-all"
                >
                  <SiLeetcode className="w-5 h-5" /> View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
