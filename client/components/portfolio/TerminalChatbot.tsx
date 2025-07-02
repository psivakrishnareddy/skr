import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  MessageCircle,
  X,
  Terminal,
  Send,
  Minimize2,
  Maximize2,
  Bot,
} from "lucide-react";
import { PortfolioChatBot, ChatResponse } from "../../data/chatbotKnowledge";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
  type?: "info" | "code" | "list" | "error";
}

export function TerminalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "SIVA-AI Terminal v2.0.1 initialized...\nType 'help' for available commands or ask me anything about Siva Krishna Reddy Pulicherla.",
      sender: "ai",
      timestamp: new Date(),
      type: "info",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatbot = useRef(new PortfolioChatBot());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI processing delay
    setTimeout(
      () => {
        const response: ChatResponse = chatbot.current.processQuery(inputValue);

        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: response.response,
          sender: "ai",
          timestamp: new Date(),
          type: response.type,
        };

        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      },
      800 + Math.random() * 1200,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const clearTerminal = () => {
    setMessages([
      {
        id: "clear",
        text: "Terminal cleared.\nSIVA-AI ready for new queries...",
        sender: "ai",
        timestamp: new Date(),
        type: "info",
      },
    ]);
  };

  const formatMessage = (text: string, type?: string) => {
    if (type === "code") {
      return (
        <pre className="text-cyber-cyan font-mono text-sm whitespace-pre-wrap">
          {text}
        </pre>
      );
    }
    if (type === "list") {
      return (
        <div className="text-cyber-green font-mono text-sm whitespace-pre-wrap">
          {text}
        </div>
      );
    }
    if (type === "error") {
      return (
        <div className="text-cyber-pink font-mono text-sm whitespace-pre-wrap">
          {text}
        </div>
      );
    }
    return (
      <div className="text-cyan-100 font-mono text-sm whitespace-pre-wrap">
        {text}
      </div>
    );
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <Button
              onClick={() => setIsOpen(true)}
              className="w-16 h-16 rounded-full cyber-button bg-black/80 border-2 border-cyber-cyan/50 hover:border-cyber-cyan group relative overflow-hidden"
            >
              <Bot className="w-8 h-8 text-cyber-cyan group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-cyber-cyan/10 rounded-full animate-pulse" />

              {/* Floating particles around button */}
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
                      x: [0, Math.cos(i * 60) * 25],
                      y: [0, Math.sin(i * 60) * 25],
                      opacity: [1, 0],
                      scale: [1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </Button>

            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 bg-black/90 border border-cyber-cyan/30 rounded-lg px-3 py-2 text-cyber-cyan font-mono text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Ask SIVA-AI anything!
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            className={`fixed bottom-0 right-6 z-40 w-96 h-[500px] holo-card rounded-2xl overflow-hidden ${isMinimized ? "h-14" : "h-96"
              } transition-all duration-300`}
          >
            {/* Terminal Header */}
            <div className="bg-black/90 border-b border-cyber-cyan/30 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-cyber-cyan" />
                  <span className="text-cyber-cyan font-mono text-sm">
                    SIVA-AI Terminal
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="w-6 h-6 p-0 hover:bg-cyber-cyan/20"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-3 h-3 text-cyber-cyan" />
                  ) : (
                    <Minimize2 className="w-3 h-3 text-cyber-cyan" />
                  )}
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 p-0 hover:bg-red-500/20"
                >
                  <X className="w-3 h-3 text-red-400" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 bg-black/50 backdrop-blur-sm">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex ${message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                          }`}
                      >
                        <div
                          className={`max-w-xs p-3 rounded-lg ${message.sender === "user"
                            ? "bg-cyber-cyan/20 border border-cyber-cyan/30"
                            : "bg-black/60 border border-cyber-pink/30"
                            }`}
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            {message.sender === "ai" && (
                              <Bot className="w-4 h-4 text-cyber-pink" />
                            )}
                            <span className="text-xs font-mono text-cyan-400">
                              {message.sender === "user" ? "USER" : "SIVA-AI"}
                            </span>
                            <span className="text-xs font-mono text-cyan-600">
                              {message.timestamp.toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          </div>
                          {formatMessage(message.text, message.type)}
                        </div>
                      </motion.div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                      >
                        <div className="bg-black/60 border border-cyber-pink/30 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Bot className="w-4 h-4 text-cyber-pink animate-pulse" />
                            <span className="text-cyan-100 font-mono text-sm">
                              Processing query
                              <span className="animate-pulse">...</span>
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/80 border-t border-cyber-cyan/30">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 relative">
                      <Input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type your query..."
                        className="cyber-button bg-black/50 border-cyber-cyan/20 text-white placeholder:text-cyan-300 focus:border-cyber-cyan font-mono text-sm pr-20"
                      />
                      <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                        <span className="text-cyber-cyan font-mono text-xs">
                          ENTER
                        </span>
                      </div>
                    </div>
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className="cyber-button bg-transparent border-cyber-cyan/30 hover:border-cyber-cyan text-cyber-cyan disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Quick Commands */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["help", "about", "skills", "clear"].map((cmd) => (
                      <Button
                        key={cmd}
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          if (cmd === "clear") {
                            clearTerminal();
                          } else {
                            setInputValue(cmd);
                          }
                        }}
                        className="cyber-button text-xs border-cyber-purple/20 text-cyber-purple hover:border-cyber-purple/50 font-mono"
                      >
                        {cmd}
                      </Button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Data stream animation */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="data-stream opacity-20"
                  style={{
                    left: `${20 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>

            {/* Scan line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-scan opacity-50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
