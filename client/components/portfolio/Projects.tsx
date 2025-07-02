import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/button";
import {
  Rocket,
  ExternalLink,
  Github,
  Award,
  Zap,
  Brain,
  Code,
  Cpu,
  Play,
} from "lucide-react";
import { useRef } from "react";

const projectIcons = [Brain, Code, Zap, Cpu];

export function Projects() {
  const { projects } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 grid-bg opacity-5" />

      {/* Parallax Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-32 right-20 w-80 h-80 border border-cyber-green/20 rotate-45"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-32 left-20 w-72 h-72 border border-cyber-orange/20 rotate-12"
      />

      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${i * 5}%`,
              animationDelay: `${i * 0.2}s`,
              opacity: 0.2,
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
            <div className="h-px bg-cyber-green w-32 mr-4" />
            <Rocket className="w-8 h-8 text-cyber-green animate-neon-glow" />
            <div className="h-px bg-cyber-green w-32 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">FEATURED_</span>
            <span className="text-neon">PROJECTS</span>
          </h2>
          <div className="text-cyber-cyan font-mono mb-6">
            $ ls -la /home/projects/
          </div>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto font-mono">
            Innovative solutions showcasing expertise in AI, full-stack
            development, and cloud technologies
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[index % projectIcons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="holo-card rounded-2xl p-8 hover:scale-[1.03] transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-scan" />

                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 rounded-xl holo-card flex items-center justify-center mr-4 border-2 border-cyber-purple/50 bg-cyber-purple/10 group-hover:border-cyber-cyan/50 transition-colors duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-cyber-purple group-hover:text-cyber-cyan transition-colors duration-300" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white font-mono mb-1 group-hover:text-cyber-cyan transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.publication && (
                        <span className="bg-black/40 border border-cyber-pink/30 px-2 py-1 rounded-full text-xs text-cyber-pink font-mono">
                          <Award className="w-3 h-3 inline mr-1" />
                          {project.publication}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="cyber-button text-cyber-blue border-cyber-blue/30 hover:border-cyber-blue w-10 h-10 p-0"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="cyber-button text-cyber-cyan border-cyber-cyan/30 hover:border-cyber-cyan w-10 h-10 p-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="cyber-button text-cyber-purple border-cyber-purple/30 hover:border-cyber-purple w-10 h-10 p-0"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Terminal-style Description */}
                <div className="bg-black/50 rounded-lg p-4 border border-cyber-cyan/30 mb-6">
                  <div className="text-cyber-cyan font-mono text-xs mb-2">
                    $ cat {project.title.toLowerCase().replace(/\s+/g, "_")}.md
                  </div>
                  <p className="text-cyan-100 leading-relaxed font-mono text-sm">
                    {project.description}
                  </p>
                </div>

                {/* Technologies Grid */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center font-mono">
                    <Code className="w-4 h-4 mr-2 text-cyber-blue" />
                    TECH_STACK:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: techIndex * 0.05,
                          duration: 0.3,
                        }}
                        viewport={{ once: true }}
                        className="cyber-button px-3 py-2 rounded-lg text-xs text-white border border-cyber-cyan/20 font-mono text-center hover:border-cyber-cyan/50 transition-colors duration-300 group/tech"
                      >
                        <div className="flex items-center justify-center">
                          <div className="w-1 h-1 bg-cyber-cyan rounded-full mr-2 group-hover/tech:animate-pulse" />
                          {tech}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center font-mono">
                    <Zap className="w-4 h-4 mr-2 text-cyber-pink" />
                    ACHIEVEMENTS:
                  </h4>
                  <div className="space-y-2">
                    {project.achievements.map(
                      (achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: achievementIndex * 0.1,
                            duration: 0.5,
                          }}
                          viewport={{ once: true }}
                          className="flex items-start group/achievement"
                        >
                          <div className="w-2 h-2 bg-cyber-cyan rounded-full mt-2 mr-3 flex-shrink-0 group-hover/achievement:animate-pulse" />
                          <span className="text-cyan-100 font-mono text-sm leading-relaxed group-hover/achievement:text-white transition-colors duration-300">
                            {achievement}
                          </span>
                        </motion.div>
                      ),
                    )}
                  </div>
                </div>

                {/* Status indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse" />
                    <span className="text-cyber-green font-mono text-xs">
                      STATUS: ACTIVE
                    </span>
                  </div>
                  <div className="text-cyan-400 font-mono text-xs">
                    PROJECT_ID: {String(index + 1).padStart(3, "0")}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/5 via-transparent to-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                {/* Matrix effect on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute text-cyber-cyan font-mono text-xs animate-matrix"
                      style={{
                        left: `${10 + i * 10}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    >
                      {Math.random().toString(2).substring(2, 8)}
                    </div>
                  ))}
                </div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-cyber-cyan rounded-full"
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
            );
          })}
        </div>

        {/* Additional Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="holo-card rounded-2xl p-8 max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-scan" />

            <div className="flex items-center justify-center mb-4">
              <Cpu className="w-8 h-8 text-cyber-green mr-3 animate-neon-glow" />
              <h3 className="text-2xl font-bold text-white font-mono">
                MORE_PROJECTS.LOADING
              </h3>
            </div>

            <p className="text-cyan-200 mb-6 font-mono">
              Constantly developing new projects and exploring cutting-edge
              technologies. Initialize connection to repository?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="cyber-button bg-transparent text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan font-mono">
                <Github className="w-4 h-4 mr-2" />
                ACCESS_REPOSITORY
              </Button>
              <Button
                variant="outline"
                className="cyber-button text-cyber-pink border-cyber-pink/30 hover:border-cyber-pink font-mono"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                VIEW_LIVE_DEMOS
              </Button>
            </div>

            {/* Terminal output */}
            <div className="mt-6 bg-black/50 rounded-lg p-4 border border-cyber-cyan/30 text-left">
              <div className="text-cyber-cyan font-mono text-xs">
                <div>$ git status</div>
                <div className="text-white/70 ml-4">
                  On branch main
                  <br />
                  Your branch is up to date with 'origin/main'.
                  <br />
                  <br />
                  nothing to commit, working tree clean
                </div>
                <div className="mt-2 flex items-center">
                  <span>$ </span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
