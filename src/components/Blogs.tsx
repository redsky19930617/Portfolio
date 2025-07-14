import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./ui/BlogCard";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { motion } from "framer-motion";

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

export function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <SectionBackground>
      <section id="blogs">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="I write about the cool stuff I discover while coding - maybe you'll find it useful too!">Latest Blogs</SectionTitle>

          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Loading blogs...
            </p>
          ) : (
            <>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              >
                {blogs.map((blog) => (
                  <BlogCard key={blog.slug} {...blog} />
                ))}
              </motion.div>

              {/* "See All Blogs" Button */}
              <motion.div 
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a
                  href="https://deepakmodi.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  View More Articles →
                </a>
              </motion.div>
            </>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
