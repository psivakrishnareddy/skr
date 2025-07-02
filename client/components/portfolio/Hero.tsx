import { motion } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/button";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ChevronDown,
  Terminal,
  Code2,
} from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const { personal } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-container">
      {/* Advanced Parallax Background */}
      <div className="absolute inset-0 clean-bg" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Parallax Layers */}
      <div className="parallax-layer-far">
        <div className="w-full h-full bg-gradient-to-br from-cyber-purple/5 to-cyber-blue/5" />
      </div>

      <div className="parallax-layer-mid">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyber-pink/5 rounded-full blur-3xl" />
      </div>

      <div className="parallax-layer-near">
        {/* Floating Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`geo-${i}`}
            className="floating-geometry"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
              animationDelay: `${i * 3}s`,
            }}
          >
            <div className="w-6 h-6 border border-cyber-cyan/15 rotate-45" />
          </div>
        ))}
      </div>

      {/* Hacker Matrix Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary data streams */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`stream-${i}`}
            className="data-stream"
            style={{
              left: `${8 + i * 12}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `3s`,
            }}
          />
        ))}

        {/* Hacker green streams */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`hacker-${i}`}
            className="hacker-stream"
            style={{
              left: `${15 + i * 18}%`,
              height: `180px`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `2.5s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Matrix characters falling */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`char-${i}`}
            className="matrix-char"
            style={{
              left: `${12 + i * 12}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `4s`,
              opacity: 0.5,
            }}
          >
            {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
          </div>
        ))}
      </div>

      {/* Scan Lines */}
      <div className="scan-line" style={{ top: "20%" }} />
      <div className="scan-line" style={{ top: "60%", animationDelay: "1s" }} />

      {/* Parallax Layers */}
      <div className="absolute inset-0 parallax">
        {/* Background Layer */}
        <div
          className="parallax-slow absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-cyber-cyan/20 to-cyber-purple/20 blur-3xl" />
        </div>

        {/* Middle Layer */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyber-pink/20 rounded-full blur-2xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyber-cyan/20 rounded-full blur-2xl" />
        </div>

        {/* Foreground Layer */}
        <div
          className="parallax-fast absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
          }}
        >
          <div className="absolute top-40 right-40 w-32 h-32 border border-cyber-cyan/30 rotate-45" />
          <div className="absolute bottom-40 left-40 w-24 h-24 border border-cyber-pink/30 rotate-12" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="holo-card rounded-2xl p-12 max-w-5xl mx-auto"
        >
          {/* Terminal Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="flex items-center space-x-4 bg-black/50 px-6 py-3 rounded-full border border-cyber-cyan/30">
              <Terminal className="w-5 h-5 text-cyber-cyan" />
              <span className="text-cyber-cyan font-mono text-sm">
                INITIALIZING_PORTFOLIO.EXE
              </span>
              <div className="flex space-x-1">
                <div className="w-3 h-3 rounded-full bg-cyber-pink animate-pulse" />
                <div
                  className="w-3 h-3 rounded-full bg-cyber-cyan animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="w-3 h-3 rounded-full bg-cyber-purple animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Name with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6 text-white relative"
          >
            <span className="text-cyber text-glitch font-mono">
              {personal.name.split(" ").map((word, index) => (
                <span key={index} className="inline-block mr-4">
                  {word}
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Code2 className="w-8 h-8 text-cyber-cyan animate-neon-glow" />
              <h2 className="text-3xl md:text-4xl font-bold text-neon font-mono">
                {personal.title}
              </h2>
              <Code2 className="w-8 h-8 text-cyber-pink animate-neon-glow" />
            </div>
            <p className="text-lg md:text-xl text-cyan-200 font-mono max-w-3xl mx-auto">
              {personal.subtitle}
            </p>
          </motion.div>

          {/* Command Line Interface */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="bg-black/70 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto border border-cyber-cyan/30"
          >
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <span className="ml-4 text-cyber-cyan font-mono text-sm">
                terminal@portfolio:~$
              </span>
            </div>
            <div className="font-mono text-sm text-cyber-cyan">
              <div className="mb-2">
                <span className="text-cyber-pink">$</span> cat about_me.txt
              </div>
              <div className="text-white/80 pl-4">
                {personal.summary.substring(0, 120)}...
              </div>
              <div className="mt-2">
                <span className="text-cyber-pink">$</span> ls -la skills/
              </div>
              <div className="text-white/80 pl-4">
                frontend/ backend/ cloud/ ai/{" "}
                <span className="text-cyber-cyan blink">_</span>
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {/* Primary Resume Download Button */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyber-cyan to-cyber-blue hover:from-cyber-blue hover:to-cyber-cyan border-2 border-cyber-cyan/50 hover:border-cyber-cyan text-black font-mono font-bold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyber-cyan/30"
              onClick={() => {
                // Create and trigger download
                const link = document.createElement("a");
                link.href = "/resume.pdf"; // You'll need to add the resume file to public folder
                link.download = "Siva_Krishna_Reddy_Pulicherla_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              DOWNLOAD_RESUME
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="cyber-button text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan font-mono"
              asChild
            >
              <a href={`mailto:${personal.email}`}>
                <Mail className="w-5 h-5 mr-2" />
                SEND_EMAIL
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="cyber-button text-cyber-pink border-cyber-pink/50 hover:border-cyber-pink font-mono"
              asChild
            >
              <a href={`tel:${personal.phone}`}>
                <Phone className="w-5 h-5 mr-2" />
                CALL_NOW
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="cyber-button text-cyber-purple border-cyber-purple/50 hover:border-cyber-purple font-mono"
              asChild
            >
              <a
                href={`https://${personal.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LINKEDIN
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="cyber-button text-cyber-green border-cyber-green/50 hover:border-cyber-green font-mono"
              asChild
            >
              <a
                href={`https://${personal.github}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GITHUB
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <span className="text-cyber-cyan font-mono text-sm mb-2">
              SCROLL_TO_EXPLORE
            </span>
            <div className="relative">
              <ChevronDown className="w-8 h-8 text-cyber-cyan animate-bounce" />
              <div className="absolute inset-0 w-8 h-8 border-2 border-cyber-cyan rounded-full animate-ping" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 border border-cyber-cyan/20 rotate-45 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
