import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 aurora-bg opacity-90" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-aurora-purple/20 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-aurora-blue/20 rounded-full blur-3xl floating-element" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-10"
      >
        <div className="glass-card rounded-3xl p-12 max-w-md mx-auto">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-8xl font-bold text-aurora mb-4"
          >
            404
          </motion.h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-blue-200 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="aurora-border bg-transparent text-white hover:bg-white/10"
              asChild
            >
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Go Home
              </a>
            </Button>
            <Button
              variant="outline"
              className="glass-button text-white border-white/30"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
