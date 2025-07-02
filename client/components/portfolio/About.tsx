import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Award, MapPin, GraduationCap, Target, Zap } from "lucide-react";
import { useRef } from "react";

export function About() {
  const { personal, education, certifications } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden perspective-container"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 clean-bg" />
      <div className="absolute inset-0 matrix-bg opacity-15" />

      {/* Advanced Parallax Elements */}
      <div className="parallax-layer-far">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/3 via-transparent to-cyber-cyan/3" />
      </div>

      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-20 right-20 w-64 h-64 depth-layer-2"
      >
        <div className="w-full h-full border-2 border-cyber-cyan/30 rotate-45 bg-cyber-cyan/5 rounded-lg" />
        <div className="absolute inset-4 border border-cyber-cyan/20 rotate-45 rounded-lg" />
      </motion.div>

      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-20 left-20 w-48 h-48 depth-layer-3"
      >
        <div className="w-full h-full border-2 border-cyber-pink/30 rotate-12 bg-cyber-pink/5 rounded-lg" />
        <div className="absolute inset-3 border border-cyber-pink/20 rotate-12 rounded-lg" />
      </motion.div>

      {/* Floating Data Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-cyber-cyan/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Enhanced Hacker Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={`data-${i}`}
            className="data-stream"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              opacity: 0.6,
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={`hacker-${i}`}
            className="hacker-stream"
            style={{
              left: `${20 + i * 20}%`,
              height: `${120 + Math.random() * 80}px`,
              animationDelay: `${i * 0.6}s`,
              opacity: 0.5,
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
            <div className="h-px bg-cyber-cyan w-24 mr-4" />
            <Target className="w-8 h-8 text-cyber-cyan animate-neon-glow" />
            <div className="h-px bg-cyber-cyan w-24 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">SYSTEM_</span>
            <span className="text-neon">PROFILE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          {/* Summary Panel */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-card rounded-2xl p-8 relative"
          >
            {/* Scan line animation */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />

            <div className="flex items-center mb-6">
              <div className="w-4 h-4 bg-cyber-cyan rounded-full mr-3 animate-pulse" />
              <h3 className="text-2xl font-bold text-white font-mono">
                ABOUT_ME.EXE
              </h3>
            </div>

            <div className="bg-black/50 rounded-lg p-6 border border-cyber-cyan/30 mb-6">
              <div className="text-cyber-cyan font-mono text-sm mb-2">
                $ cat professional_summary.txt
              </div>
              <p className="text-cyan-100 leading-relaxed text-lg">
                {personal.summary}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Years_XP", value: "4+", icon: "⚡" },
                { label: "Users_Served", value: "500+", icon: "👥" },
                { label: "Projects", value: "20+", icon: "🚀" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="holo-card rounded-lg p-4 text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-bold text-cyber-cyan font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-cyan-200 text-xs font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Education Panel */}
            <div className="holo-card rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-pink to-transparent animate-scan" />

              <div className="flex items-center mb-6">
                <GraduationCap className="w-6 h-6 text-cyber-pink mr-3 animate-neon-glow" />
                <h3 className="text-2xl font-bold text-white font-mono">
                  EDUCATION.DB
                </h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-black/40 rounded-lg p-6 border-l-4 border-cyber-pink relative overflow-hidden"
                  >
                    {/* Animated border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-pink/10 to-transparent animate-data-stream" />

                    <h4 className="text-lg font-semibold text-white font-mono mb-2">
                      {edu.degree}
                    </h4>
                    <div className="text-cyber-cyan font-mono font-medium mb-2">
                      {edu.institution}
                    </div>
                    <div className="flex items-center justify-between text-cyan-200 text-sm mb-3 font-mono">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </span>
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Zap className="w-4 h-4 text-cyber-pink mr-2" />
                      <span className="text-cyber-pink font-mono font-medium">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    <div className="text-cyan-200 text-sm font-mono">
                      <strong className="text-white">COURSEWORK:</strong>{" "}
                      {edu.coursework.join(" | ")}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Panel */}
            <div className="holo-card rounded-2xl p-8 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-scan" />

              <div className="flex items-center mb-6">
                <Award className="w-6 h-6 text-cyber-purple mr-3 animate-neon-glow" />
                <h3 className="text-2xl font-bold text-white font-mono">
                  CERTS.JSON
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-black/40 rounded-lg p-4 border-l-4 border-cyber-purple hover:bg-black/60 transition-colors duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-cyber-purple rounded-full mr-3 group-hover:animate-pulse" />
                      <div className="text-white font-mono text-sm group-hover:text-cyber-purple transition-colors duration-300">
                        {cert}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {["{ }", "< />", "( )", "[ ]", "=>", "==", "&&", "||"].map(
            (symbol, i) => (
              <motion.div
                key={i}
                className="absolute text-cyber-cyan/20 font-mono text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
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
