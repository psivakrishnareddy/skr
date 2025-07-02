import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Code2,
  Brain,
  Activity,
  Zap,
} from "lucide-react";
import { useRef } from "react";

const skillCategories = [
  {
    title: "FRONTEND",
    icon: Monitor,
    skills: portfolioData.skills.frontend,
    color: "cyber-cyan",
    bgColor: "bg-cyber-cyan/10",
  },
  {
    title: "BACKEND",
    icon: Server,
    skills: portfolioData.skills.backend,
    color: "cyber-pink",
    bgColor: "bg-cyber-pink/10",
  },
  {
    title: "DATABASE",
    icon: Database,
    skills: portfolioData.skills.database,
    color: "cyber-purple",
    bgColor: "bg-cyber-purple/10",
  },
  {
    title: "DEVOPS",
    icon: Wrench,
    skills: portfolioData.skills.tools,
    color: "cyber-green",
    bgColor: "bg-cyber-green/10",
  },
  {
    title: "LANGUAGES",
    icon: Code2,
    skills: portfolioData.skills.languages,
    color: "cyber-orange",
    bgColor: "bg-cyber-orange/10",
  },
  {
    title: "AI/ML",
    icon: Brain,
    skills: portfolioData.skills.ai,
    color: "cyber-blue",
    bgColor: "bg-cyber-blue/10",
  },
];

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden perspective-container"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 clean-bg" />
      <div className="absolute inset-0 matrix-bg opacity-5" />

      {/* Multi-depth Parallax Layers */}
      <div className="parallax-layer-far">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-green/2 via-cyber-purple/2 to-cyber-orange/2" />
      </div>

      <div className="parallax-layer-mid">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyber-purple/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyber-cyan/3 rounded-full blur-3xl" />
      </div>

      {/* Enhanced Parallax Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-64 h-64 depth-layer-2"
      >
        <div className="w-full h-full border-2 border-cyber-purple/40 rotate-45 bg-gradient-to-r from-cyber-purple/8 to-cyber-blue/8 rounded-2xl shadow-2xl shadow-cyber-purple/10" />
        <div className="absolute inset-4 border border-cyber-purple/25 rotate-45 rounded-xl" />
        <div className="absolute inset-8 border border-cyber-purple/15 rotate-45 rounded-lg" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-80 h-80 depth-layer-3"
      >
        <div className="w-full h-full border-2 border-cyber-cyan/40 rotate-12 bg-gradient-to-l from-cyber-cyan/8 to-cyber-green/8 rounded-2xl shadow-2xl shadow-cyber-cyan/10" />
        <div className="absolute inset-6 border border-cyber-cyan/25 rotate-12 rounded-xl" />
        <div className="absolute inset-12 border border-cyber-cyan/15 rotate-12 rounded-lg" />
      </motion.div>

      {/* Refined Matrix Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="data-stream"
            style={{
              left: `${i * 10}%`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.2,
            }}
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <div
            key={`hacker-${i}`}
            className="hacker-stream"
            style={{
              left: `${5 + i * 16}%`,
              height: `${80 + Math.random() * 40}px`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.15,
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
            <div className="h-px bg-cyber-purple w-32 mr-4" />
            <Activity className="w-8 h-8 text-cyber-purple animate-neon-glow" />
            <div className="h-px bg-cyber-purple w-32 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">TECH_</span>
            <span className="text-neon">STACK</span>
          </h2>
          <div className="text-cyber-cyan font-mono mb-6">
            $ sudo apt-get install skills --all-dependencies
          </div>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto font-mono">
            COMPREHENSIVE_TOOLKIT.EXE loaded from years of hands-on experience
            and continuous learning protocols
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 100, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: categoryIndex * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="holo-card rounded-2xl p-8 hover:scale-105 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated header line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${category.color} to-transparent animate-scan`}
              />

              {/* Header */}
              <div className="flex items-center mb-8">
                <div
                  className={`w-12 h-12 rounded-xl holo-card flex items-center justify-center mr-4 border-2 border-${category.color}/50 ${category.bgColor} group-hover:animate-pulse`}
                >
                  <category.icon
                    className={`w-6 h-6 text-${category.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">
                    {category.title}
                  </h3>
                  <div className="text-xs text-cyan-400 font-mono">
                    {category.skills.length} modules loaded
                  </div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.6,
                    }}
                    viewport={{ once: true }}
                    className="bg-black/40 rounded-lg p-4 hover:bg-black/60 transition-all duration-300 group/skill border border-transparent hover:border-cyber-cyan/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div
                          className={`w-2 h-2 rounded-full bg-${category.color} mr-3 animate-pulse`}
                        />
                        <span className="text-white font-mono font-medium group-hover/skill:text-cyber-cyan transition-colors duration-300">
                          {skill}
                        </span>
                      </div>

                      {/* Skill Level Indicator */}
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, barIndex) => (
                          <div
                            key={barIndex}
                            className={`w-1 h-4 rounded-full transition-all duration-500 ${
                              barIndex < 4
                                ? `bg-${category.color}`
                                : "bg-gray-600"
                            }`}
                            style={{
                              animationDelay: `${barIndex * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Progress bar animation */}
                    <div className="mt-2 h-px bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          duration: 1,
                        }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-${category.color} to-${category.color}/50`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hover effect particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-${category.color} rounded-full`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              label: "LANGUAGES",
              value: "5+",
              icon: "💻",
              color: "cyber-blue",
            },
            {
              label: "FRAMEWORKS",
              value: "10+",
              icon: "⚡",
              color: "cyber-purple",
            },
            {
              label: "DATABASES",
              value: "8+",
              icon: "🗄️",
              color: "cyber-cyan",
            },
            {
              label: "CLOUD_SVS",
              value: "15+",
              icon: "☁️",
              color: "cyber-pink",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="holo-card rounded-xl p-6 text-center group hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              {/* Scan line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${stat.color} to-transparent animate-scan`}
              />

              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className={`text-4xl font-bold text-${stat.color} font-mono mb-2 group-hover:scale-125 transition-transform duration-300`}
              >
                {stat.value}
              </div>
              <div className="text-cyan-200 text-sm font-mono">
                {stat.label}
              </div>

              {/* Pulsing border effect */}
              <div
                className={`absolute inset-0 border-2 border-${stat.color}/20 rounded-xl opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Floating tech symbols */}
        <div className="absolute inset-0 pointer-events-none">
          {[
            "React",
            "Node.js",
            "Python",
            "AWS",
            "Docker",
            "MongoDB",
            "GraphQL",
            "TypeScript",
          ].map((tech, i) => (
            <motion.div
              key={i}
              className="absolute text-cyber-cyan/5 font-mono text-sm"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.05, 0.2, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
