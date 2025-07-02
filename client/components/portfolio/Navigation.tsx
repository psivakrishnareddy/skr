import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code,
  Rocket,
  Mail,
  Terminal,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { name: "HOME", href: "#home", icon: Home, color: "cyber-cyan" },
  { name: "ABOUT", href: "#about", icon: User, color: "cyber-pink" },
  {
    name: "EXPERIENCE",
    href: "#experience",
    icon: Briefcase,
    color: "cyber-purple",
  },
  { name: "SKILLS", href: "#skills", icon: Code, color: "cyber-green" },
  { name: "PROJECTS", href: "#projects", icon: Rocket, color: "cyber-orange" },
  {
    name: "TESTIMONIALS",
    href: "#testimonials",
    icon: MessageCircle,
    color: "cyber-cyan",
  },
  { name: "CONTACT", href: "#contact", icon: Mail, color: "cyber-blue" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col ${isScrolled ? "liquid-glass-nav shadow-xl" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-8 py-4 flex flex-row justify-center items-center">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="relative group">
                <div className="w-10 h-10 rounded-lg liquid-glass flex items-center justify-center relative overflow-hidden">
                  <Terminal className="w-6 h-6 text-cyber-cyan z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 to-cyber-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute -inset-1 border border-cyber-cyan/20 rounded-lg animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-mono text-white tracking-wider leading-none">
                  SKR<span className="text-cyber-cyan">.DEV</span>
                </span>
                <span className="text-xs font-mono text-cyber-cyan/70 leading-none">
                  Full Stack Engineer
                </span>
              </div>
            </motion.div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 ml-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                >
                  <Button
                    variant="ghost"
                    className={`relative font-mono text-sm px-5 py-2.5 rounded-xl transition-all duration-300 group ${activeSection === item.href.slice(1)
                        ? "text-cyber-cyan bg-cyber-cyan/15 liquid-glass shadow-lg"
                        : "text-cyan-200 hover:text-white hover:bg-white/5"
                      }`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    <item.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    <span className="relative z-10">{item.name}</span>
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/10 to-cyber-blue/10 rounded-xl border border-cyber-cyan/40 shadow-lg shadow-cyber-cyan/20"
                        transition={{
                          type: "spring",
                          bounce: 0.15,
                          duration: 0.5,
                        }}
                      />
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="lg:hidden"
            >
              <Button
                variant="ghost"
                size="sm"
                className="cyber-button text-cyber-cyan border-cyber-cyan/30"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed top-0 right-0 bottom-0 w-80 z-40 lg:hidden"
          >
            <div className="holo-card h-full p-8 pt-20 backdrop-blur-xl border-l border-cyber-cyan/30 relative">
              {/* Background pattern */}
              <div className="absolute inset-0 matrix-bg opacity-10" />

              {/* Data streams */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="data-stream opacity-30"
                    style={{
                      left: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.3}s`,
                    }}
                  />
                ))}
              </div>

              <div className="space-y-4 relative z-10">
                <div className="text-center mb-8">
                  <div className="text-cyber-cyan font-mono text-sm mb-2">
                    NAVIGATION.EXE
                  </div>
                  <div className="h-px bg-cyber-cyan/30 w-full" />
                </div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Button
                      variant="ghost"
                      className={`w-full justify-start cyber-button font-mono transition-all duration-300 ${activeSection === item.href.slice(1)
                          ? `text-${item.color} border-${item.color}/50 bg-${item.color}/10`
                          : "text-cyan-200 border-transparent hover:text-cyber-cyan hover:border-cyber-cyan/30"
                        }`}
                      onClick={() => scrollToSection(item.href)}
                    >
                      <item.icon className="w-5 h-5 mr-3" />
                      {item.name}
                      <div className="ml-auto text-xs opacity-50">
                        0{index + 1}
                      </div>
                    </Button>
                  </motion.div>
                ))}

                {/* Terminal prompt */}
                <div className="mt-8 p-4 bg-black/50 rounded-lg border border-cyber-cyan/30">
                  <div className="text-cyber-cyan font-mono text-xs">
                    <div>$ whoami</div>
                    <div className="text-white/70">
                      Siva Krishna Reddy Pulicherla
                    </div>
                    <div className="mt-2">$ echo $ROLE</div>
                    <div className="text-white/70">Full Stack Engineer</div>
                    <div className="mt-2 flex items-center">
                      <span>$ </span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
