import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import {
  Building,
  MapPin,
  Calendar,
  Code,
  Trophy,
  Zap,
  Cpu,
} from "lucide-react";
import { useRef } from "react";

export function Experience() {
  const { experience } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden perspective-container"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 clean-bg" />
      <div className="absolute inset-0 grid-bg opacity-8" />

      {/* Multi-layer Parallax Background */}
      <div className="parallax-layer-far">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/2 via-cyber-purple/2 to-cyber-cyan/2" />
      </div>

      <div className="parallax-layer-mid">
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyber-blue/5 rounded-full blur-2xl" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyber-green/5 rounded-full blur-2xl" />
      </div>

      {/* Advanced Parallax Elements */}
      <motion.div
        style={{ y }}
        className="absolute top-40 left-10 w-72 h-72 depth-layer-2"
      >
        <div className="w-full h-full border-2 border-cyber-pink/30 rotate-45 bg-gradient-to-br from-cyber-pink/5 to-transparent rounded-xl" />
        <div className="absolute inset-6 border border-cyber-pink/20 rotate-45 rounded-xl" />
        <div className="absolute inset-12 border border-cyber-pink/10 rotate-45 rounded-lg" />
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute bottom-40 right-10 w-96 h-96 depth-layer-3"
      >
        <div className="w-full h-full border-2 border-cyber-cyan/30 rotate-12 bg-gradient-to-tl from-cyber-cyan/5 to-transparent rounded-2xl" />
        <div className="absolute inset-8 border border-cyber-cyan/20 rotate-12 rounded-xl" />
        <div className="absolute inset-16 border border-cyber-cyan/10 rotate-12 rounded-lg" />
      </motion.div>

      {/* Enhanced Matrix Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`data-${i}`}
            className="data-stream"
            style={{
              left: `${8 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.3,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`hacker-${i}`}
            className="hacker-stream"
            style={{
              left: `${15 + i * 18}%`,
              height: `${100 + Math.random() * 60}px`,
              animationDelay: `${i * 0.7}s`,
              opacity: 0.25,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-cyber-pink w-32 mr-4" />
            <Cpu className="w-8 h-8 text-cyber-pink animate-neon-glow" />
            <div className="h-px bg-cyber-pink w-32 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">WORK_</span>
            <span className="text-neon">EXPERIENCE</span>
          </h2>
          <div className="text-cyber-cyan font-mono">
            $ cat career_timeline.log
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative mb-16 last:mb-0"
            >
              {/* Timeline Connection */}
              {index !== experience.length - 1 && (
                <div className="absolute left-8 top-32 w-1 h-32 bg-gradient-to-b from-cyber-cyan via-cyber-pink to-cyber-purple opacity-60" />
              )}

              <div className="flex flex-col lg:flex-row gap-8">
                {/* Timeline Node */}
                <div className="flex-shrink-0 relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-full holo-card flex items-center justify-center border-2 border-cyber-cyan relative overflow-hidden"
                  >
                    <Building className="w-8 h-8 text-cyber-cyan z-10" />
                    <div className="absolute inset-0 bg-cyber-cyan/20 animate-pulse" />
                  </motion.div>

                  {/* Floating particles around node */}
                  <div className="absolute inset-0">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyber-cyan rounded-full"
                        style={{
                          left: "50%",
                          top: "50%",
                        }}
                        animate={{
                          x: [0, Math.cos(i * 60) * 30],
                          y: [0, Math.sin(i * 60) * 30],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 holo-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden">
                  {/* Animated scan line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />

                  {/* Header */}
                  <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-6">
                    <div className="mb-4 xl:mb-0">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-cyber-cyan rounded-full mr-2 animate-pulse" />
                        <h3 className="text-2xl font-bold text-white font-mono">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="text-cyber-cyan text-xl font-mono font-semibold mb-2">
                        {exp.company}
                      </div>
                      <div className="text-cyber-pink font-mono font-medium">
                        PROJECT: {exp.project}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="flex items-center justify-end text-cyan-200 mb-2 font-mono">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <div className="flex items-center justify-end text-cyan-200 mb-2 font-mono">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <span className="bg-black/40 border border-cyber-cyan/30 px-3 py-1 rounded-full text-xs text-cyber-cyan font-mono">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex items-center text-white mb-3 font-mono">
                      <Code className="w-5 h-5 mr-2 text-cyber-blue" />
                      <span className="font-semibold">TECH_STACK:</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: techIndex * 0.05,
                            duration: 0.3,
                          }}
                          viewport={{ once: true }}
                          className="cyber-button px-3 py-2 rounded-lg text-sm text-white border border-cyber-cyan/20 font-mono text-center hover:border-cyber-cyan/50 transition-colors duration-300"
                        >
                          {tech}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <div className="flex items-center text-white mb-3 font-mono">
                      <Trophy className="w-5 h-5 mr-2 text-cyber-pink" />
                      <span className="font-semibold">ACHIEVEMENTS:</span>
                    </div>
                    <div className="space-y-3">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <motion.div
                          key={highlightIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: highlightIndex * 0.1,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start group"
                        >
                          <Zap className="w-4 h-4 text-cyber-purple mt-1 mr-3 flex-shrink-0 group-hover:text-cyber-cyan transition-colors duration-300" />
                          <span className="text-cyan-100 font-mono text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                            {highlight}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                  {/* Binary rain effect on hover */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute text-cyber-cyan font-mono text-xs animate-matrix"
                        style={{
                          left: `${10 + i * 12}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      >
                        {Math.random() > 0.5 ? "1" : "0"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating code symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {["</>", "{}", "[]", "()", "=>", "!=", "&&", "||", "++", "--"].map(
            (symbol, i) => (
              <motion.div
                key={i}
                className="absolute text-cyber-cyan/10 font-mono text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              >
                {symbol}
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
