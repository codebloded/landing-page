import { motion } from "framer-motion";
import { useState } from "react";
import { MessageSquare, ShoppingBag, BarChart3, Users, Send, Star, Facebook, Twitter, Instagram } from "lucide-react";

const App = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 w-full">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 md:px-6 py-3 w-full">
        <div className="max-w-full mx-auto flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-800">WhatsBot</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-10"
          >
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#cta" className="text-gray-600 hover:text-gray-900 transition-colors">Get Started</a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full font-medium transition-colors"
          >
            Contact Us
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 md:px-6 w-full bg-blue-600 text-white">
        <div className="max-w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transform Your <span className="text-green-400">WhatsApp</span> Into A Powerful Business Tool
            </h1>
            <p className="text-lg text-gray-100 mb-8">
              Our AI-powered chatbots automate customer support, boost sales, and generate qualified leads—all through the platform your customers already use.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Watch Demo
              </motion.button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-700 bg-gray-200 overflow-hidden">
                    <img src={`/api/placeholder/40/40`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm text-gray-100">
                  <span className="font-bold">4.9/5</span> from 2,500+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative mx-auto max-w-md md:max-w-lg bg-white rounded-2xl p-2 shadow-xl border border-gray-200">
              <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-xl py-3 px-4 mb-2">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-white overflow-hidden mr-3">
                    <img src="/api/placeholder/40/40" alt="Bot Avatar" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">WhatsBot Assistant</p>
                    <p className="text-xs text-white opacity-75">Online</p>
                  </div>
                </div>
              </div>

              <div className="py-4 px-3 h-80 overflow-y-auto">
                <div className="flex justify-end mb-4">
                  <div className="bg-blue-800 text-white rounded-lg rounded-tr-none py-2 px-4 max-w-xs">
                    <p>Hello! I need information about your product.</p>
                    <p className="text-xs opacity-75 text-right mt-1">11:42 AM</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none py-2 px-4 max-w-xs">
                    <p>Hi there! 👋 I'm your WhatsBot assistant. I'd be happy to help with information about our products. What specific information are you looking for?</p>
                    <p className="text-xs opacity-75 mt-1">11:43 AM</p>
                  </div>
                </div>

                <div className="flex justify-end mb-4">
                  <div className="bg-blue-800 text-white rounded-lg rounded-tr-none py-2 px-4 max-w-xs">
                    <p>I need a bot for customer support. Do you offer that?</p>
                    <p className="text-xs opacity-75 text-right mt-1">11:44 AM</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none py-2 px-4 max-w-xs">
                    <p>Yes, we offer customer support bots! Our solution can handle frequently asked questions, troubleshooting, and even complex support workflows. Would you like to see a demo of how it works?</p>
                    <p className="text-xs opacity-75 mt-1">11:45 AM</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 p-3">
                <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center">
                  <input type="text" placeholder="Type a message..." className="bg-transparent outline-none flex-grow text-gray-800" />
                  <button className="ml-2 text-green-500">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 md:px-6 bg-white w-full">
        <div className="max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What We Offer</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our intelligent WhatsApp bots help businesses automate conversations and deliver exceptional experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Customer Support Bots",
                description: "Provide 24/7 support and instantly resolve customer queries without human intervention.",
                icon: <Users className="h-8 w-8" />,
                color: "text-blue-500"
              },
              {
                title: "E-Commerce Bots",
                description: "Simplify shopping with product recommendations, order tracking, and personalized experiences.",
                icon: <ShoppingBag className="h-8 w-8" />,
                color: "text-purple-500"
              },
              {
                title: "Lead Generation Bots",
                description: "Capture and qualify leads effortlessly through automated conversations that never sleep.",
                icon: <BarChart3 className="h-8 w-8" />,
                color: "text-green-500"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 px-4 md:px-6 bg-gray-100 w-full">
        <div className="max-w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Getting started with our WhatsApp bots is simple and straightforward.
            </p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 hidden md:block"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              {[
                {
                  step: "1",
                  title: "Consultation",
                  description: "We understand your business needs and create a custom strategy.",
                },
                {
                  step: "2",
                  title: "Design",
                  description: "We design conversation flows tailored to your brand voice.",
                },
                {
                  step: "3",
                  title: "Development",
                  description: "Our team builds and rigorously tests your custom bot.",
                },
                {
                  step: "4",
                  title: "Launch",
                  description: "We deploy your bot and provide ongoing optimization.",
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm relative"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-lg font-bold z-10 text-white">
                    {step.step}
                  </div>
                  <div className="text-center pt-4">
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-16 px-4 md:px-6 bg-blue-800 text-white w-full">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center bg-white bg-opacity-10 rounded-xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl  text-gray-600 font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of businesses already using our WhatsApp chatbots to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Start Your Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
              >
                Schedule a Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-6 bg-gray-800 text-white w-full">
        <div className="max-w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <MessageSquare className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">WhatsBot</span>
            </div>

            <div className="flex flex-wrap justify-center space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms</a>
            </div>

            <div className="flex space-x-4">
              {/* Social media icons */}
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-gray-400">© 2023 Danish Arora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
