import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../data/portfolio";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  MessageCircle,
  Terminal,
  Wifi,
} from "lucide-react";
import { useRef } from "react";

export function Contact() {
  const { personal } = portfolioData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 cyber-bg opacity-50" />

      {/* Parallax Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-20 w-96 h-96 border border-cyber-cyan/20 rotate-45"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-20 w-80 h-80 border border-cyber-pink/20 rotate-12"
      />

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="data-stream"
            style={{
              left: `${i * 4}%`,
              animationDelay: `${i * 0.1}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Scan Lines */}
      <div className="scan-line" style={{ top: "30%" }} />
      <div className="scan-line" style={{ top: "70%", animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-cyber-cyan w-32 mr-4" />
            <Wifi className="w-8 h-8 text-cyber-cyan animate-neon-glow" />
            <div className="h-px bg-cyber-cyan w-32 ml-4" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white font-mono mb-6">
            <span className="text-cyber">ESTABLISH_</span>
            <span className="text-neon">CONNECTION</span>
          </h2>
          <div className="text-cyber-cyan font-mono mb-6">
            $ ssh contact@portfolio.dev
          </div>
          <p className="text-cyan-200 text-lg max-w-2xl mx-auto font-mono">
            Ready to collaborate on your next project? Let's discuss how we can
            bring your ideas to life with cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information Panel */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="holo-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan" />

              <div className="flex items-center mb-8">
                <Terminal className="w-6 h-6 text-cyber-cyan mr-3 animate-neon-glow" />
                <h3 className="text-2xl font-bold text-white font-mono">
                  CONTACT_INFO.JSON
                </h3>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-colors duration-300 group border border-transparent hover:border-cyber-pink/30"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-cyber-pink/20 flex items-center justify-center mr-4 group-hover:bg-cyber-pink/30 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-cyber-pink" />
                    </div>
                    <div>
                      <div className="text-white font-mono font-medium">
                        EMAIL_ADDRESS
                      </div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-cyber-cyan hover:text-cyber-pink transition-colors duration-200 font-mono text-sm"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-colors duration-300 group border border-transparent hover:border-cyber-blue/30"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-cyber-blue/20 flex items-center justify-center mr-4 group-hover:bg-cyber-blue/30 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-cyber-blue" />
                    </div>
                    <div>
                      <div className="text-white font-mono font-medium">
                        PHONE_NUMBER
                      </div>
                      <a
                        href={`tel:${personal.phone}`}
                        className="text-cyber-cyan hover:text-cyber-blue transition-colors duration-200 font-mono text-sm"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-colors duration-300 group border border-transparent hover:border-cyber-purple/30"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-cyber-purple/20 flex items-center justify-center mr-4 group-hover:bg-cyber-purple/30 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-cyber-purple" />
                    </div>
                    <div>
                      <div className="text-white font-mono font-medium">
                        LOCATION
                      </div>
                      <div className="text-cyber-cyan font-mono text-sm">
                        {personal.location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-cyber-cyan/20">
                <h4 className="text-white font-mono font-semibold mb-4">
                  SOCIAL_LINKS:
                </h4>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="cyber-button text-cyber-cyan border-cyber-cyan/30 hover:border-cyber-cyan"
                    asChild
                  >
                    <a
                      href={`https://${personal.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="cyber-button text-cyber-purple border-cyber-purple/30 hover:border-cyber-purple"
                    asChild
                  >
                    <a
                      href={`https://${personal.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Status indicator */}
              <div className="mt-6 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse" />
                  <span className="text-cyber-green">STATUS: ONLINE</span>
                </div>
                <div className="text-cyan-400">RESPONSE_TIME: ~24h</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="holo-card rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-pink to-transparent animate-scan" />

            <div className="flex items-center mb-8">
              <MessageCircle className="w-6 h-6 text-cyber-pink mr-3 animate-neon-glow" />
              <h3 className="text-2xl font-bold text-white font-mono">
                SEND_MESSAGE.EXE
              </h3>
            </div>

            {/* Terminal Header */}
            <div className="bg-black/50 rounded-lg p-4 border border-cyber-cyan/30 mb-6">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-cyber-cyan font-mono text-sm">
                  message_composer.terminal
                </span>
              </div>
              <div className="text-cyber-cyan font-mono text-xs">
                $ initialize_secure_communication_channel
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-mono font-medium mb-2">
                    SENDER_NAME:
                  </label>
                  <Input
                    placeholder="Enter your name"
                    className="cyber-button bg-black/30 border-cyber-cyan/20 text-white placeholder:text-cyan-300 focus:border-cyber-cyan font-mono"
                  />
                </div>
                <div>
                  <label className="block text-white font-mono font-medium mb-2">
                    EMAIL_ADDR:
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@domain.com"
                    className="cyber-button bg-black/30 border-cyber-pink/20 text-white placeholder:text-cyan-300 focus:border-cyber-pink font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white font-mono font-medium mb-2">
                  MESSAGE_SUBJECT:
                </label>
                <Input
                  placeholder="Project collaboration proposal"
                  className="cyber-button bg-black/30 border-cyber-purple/20 text-white placeholder:text-cyan-300 focus:border-cyber-purple font-mono"
                />
              </div>

              <div>
                <label className="block text-white font-mono font-medium mb-2">
                  MESSAGE_BODY:
                </label>
                <Textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="cyber-button bg-black/30 border-cyber-blue/20 text-white placeholder:text-cyan-300 focus:border-cyber-blue resize-none font-mono"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full cyber-button bg-transparent text-cyber-cyan border-cyber-cyan/50 hover:border-cyber-cyan group font-mono"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                TRANSMIT_MESSAGE
              </Button>
            </form>

            {/* Command line output */}
            <div className="mt-6 bg-black/50 rounded-lg p-4 border border-cyber-cyan/30">
              <div className="text-cyber-cyan font-mono text-xs">
                <div>$ validate_form_data()</div>
                <div className="text-white/70 ml-4">
                  ✓ Encryption: AES-256
                  <br />
                  ✓ Verification: Enabled
                  <br />✓ Spam_Filter: Active
                </div>
                <div className="mt-2 flex items-center">
                  <span>$ </span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-cyber-cyan/20"
        >
          <div className="bg-black/40 rounded-lg p-6 border border-cyber-cyan/30 max-w-2xl mx-auto">
            <div className="text-cyber-cyan font-mono text-sm mb-2">
              $ echo $COPYRIGHT
            </div>
            <p className="text-cyan-200 font-mono">
              © 2025 {personal.name} | Built with React + TypeScript + ❤️
            </p>
            <div className="mt-4 text-xs text-cyan-400 font-mono">
              "Code is poetry written in logic"
            </div>
          </div>
        </motion.div>

        {/* Floating binary data */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-cyber-cyan/5 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.05, 0.2, 0.05],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            >
              {Math.random().toString(2).substring(2, 10)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
