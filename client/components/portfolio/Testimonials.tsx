import { motion, useScroll, useTransform } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import { Quote, Star, Users } from "lucide-react";
import { useRef } from "react";

export function Testimonials() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden perspective-container"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 clean-bg" />
      <div className="absolute inset-0 matrix-bg opacity-4" />

      {/* Parallax Background Layers */}
      <div className="parallax-layer-far">
        <div className="absolute inset-0 bg-gradient-to-bl from-cyber-green/2 via-cyber-cyan/2 to-cyber-pink/2" />
      </div>

      <div className="parallax-layer-mid">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyber-green/4 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyber-pink/4 rounded-full blur-3xl" />
      </div>

      {/* Advanced Parallax Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-32 right-20 w-80 h-80 depth-layer-2"
      >
        <div className="w-full h-full border-2 border-cyber-green/35 rotate-45 bg-gradient-to-tr from-cyber-green/6 to-cyber-cyan/6 rounded-2xl shadow-xl shadow-cyber-green/5" />
        <div className="absolute inset-6 border border-cyber-green/20 rotate-45 rounded-xl" />
        <div className="absolute inset-12 border border-cyber-green/10 rotate-45 rounded-lg" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-32 left-20 w-72 h-72 depth-layer-3"
      >
        <div className="w-full h-full border-2 border-cyber-pink/35 rotate-12 bg-gradient-to-bl from-cyber-pink/6 to-cyber-purple/6 rounded-2xl shadow-xl shadow-cyber-pink/5" />
        <div className="absolute inset-5 border border-cyber-pink/20 rotate-12 rounded-xl" />
        <div className="absolute inset-10 border border-cyber-pink/10 rotate-12 rounded-lg" />
      </motion.div>

      {/* Enhanced Hacker Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`data-${i}`}
            className="data-stream"
            style={{
              left: `${12 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.3,
            }}
          />
        ))}
        {[...Array(5)].map((_, i) => (
          <div
            key={`hacker-${i}`}
            className="hacker-stream"
            style={{
              left: `${18 + i * 16}%`,
              height: `${100 + Math.random() * 60}px`,
              animationDelay: `${i * 0.8}s`,
              opacity: 0.4,
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
            <Users className="w-8 h-8 text-cyber-green animate-neon-glow" />
            <div className="h-px bg-cyber-green w-32 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">CLIENT_</span>
            <span className="text-neon">TESTIMONIALS</span>
          </h2>
          <div className="text-cyber-cyan font-mono mb-6">
            $ cat feedback_reviews.log
          </div>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto font-mono">
            Validated feedback from industry professionals and team leaders
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="holo-card rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Animated border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />

              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-cyber-cyan opacity-50" />
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-cyber-green fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="mb-8">
                <div className="bg-black/40 rounded-lg p-4 border border-cyber-cyan/30 mb-6">
                  <div className="text-cyber-cyan font-mono text-xs mb-2">
                    $ echo "$TESTIMONIAL_CONTENT"
                  </div>
                  <p className="text-cyan-100 leading-relaxed font-mono text-sm italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyber-cyan/50 group-hover:border-cyber-cyan transition-colors duration-300"
                  />
                  <div className="absolute inset-0 w-16 h-16 rounded-full border-2 border-cyber-cyan/20 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-white font-mono font-bold text-lg">
                    {testimonial.name}
                  </h4>
                  <div className="text-cyber-cyan font-mono text-sm">
                    {testimonial.designation}
                  </div>
                  <div className="text-cyber-pink font-mono text-xs">
                    @ {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse" />
                <span className="text-cyber-green font-mono text-xs">
                  VERIFIED
                </span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

              {/* Matrix effect on hover */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-cyber-cyan font-mono text-xs animate-matrix"
                    style={{
                      left: `${10 + i * 12}%`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  >
                    {Math.random().toString(2).substring(2, 8)}
                  </div>
                ))}
              </div>

              {/* Floating particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyber-green rounded-full"
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              label: "SATISFIED_CLIENTS",
              value: "100%",
              icon: "✓",
              color: "cyber-green",
            },
            {
              label: "PROJECTS_DELIVERED",
              value: "20+",
              icon: "🚀",
              color: "cyber-cyan",
            },
            {
              label: "TEAM_LEADERSHIP",
              value: "4+",
              icon: "👥",
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

        {/* Floating testimonial quotes */}
        <div className="absolute inset-0 pointer-events-none">
          {['"', "'", "«", "»", "Q", "q"].map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-cyber-cyan/5 font-mono text-4xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.05, 0.2, 0.05],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
