import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { Atom, Zap, ArrowRight, Zap as ZapIcon } from "lucide-react";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import Navbar from "@/components/layout/Navbar";

export default function LandingPage() {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Cyan orb - top right */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Purple orb - bottom left */}
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Blue accent - center */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Content */}
<div className="relative z-10 w-full min-h-screen flex flex-col">
        <Navbar />
        {/* Main Content */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-8 sm:py-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Hero Title */}
          <motion.div className="text-center mb-8 sm:mb-12 md:mb-16 max-w-4xl" variants={itemVariants}>
            <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t('landing.hero.title')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {t('landing.hero.subtitle')}
            </p>
          </motion.div>

          {/* Lab Cards Grid */}
          <motion.div
            className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16"
            variants={itemVariants}
          >
            {/* Physics Lab */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <Link to="/physics">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-cyan-500/30 transition-all duration-300 group-hover:border-cyan-400/60 group-hover:shadow-2xl group-hover:shadow-cyan-500/40">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Accent glow */}
                  <motion.div
                    className="absolute -top-32 -right-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />

                  {/* Content */}
                  <div className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 py-12 sm:py-16 md:py-20">
                    <motion.div
                      className="mb-4 sm:mb-6 md:mb-8"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 mx-auto">
                        <Zap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                      {t('landing.physics_card.title')}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-sm">
                      {t('landing.physics_card.description')}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6 md:mb-8">
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                        {t('landing.physics_card.tags.0')}
                      </span>
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/40">
                        {t('landing.physics_card.tags.1')}
                      </span>
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40">
                        {t('landing.physics_card.tags.2')}
                      </span>
                    </div>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-xs sm:text-sm md:text-base rounded-full hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                    >
                      {t('landing.physics_card.button')}
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Chemistry Lab */}
            <motion.div
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              <Link to="/chemistry">
                <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-black border border-purple-500/30 transition-all duration-300 group-hover:border-purple-400/60 group-hover:shadow-2xl group-hover:shadow-purple-500/40">
                  {/* Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/5 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Accent glow */}
                  <motion.div
                    className="absolute -top-32 -right-32 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  />

                  {/* Content */}
                  <div className="relative flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 py-12 sm:py-16 md:py-20">
                    <motion.div
                      className="mb-4 sm:mb-6 md:mb-8"
                      whileHover={{ rotate: -360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/50 mx-auto">
                        <Atom className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
                      {t('landing.chemistry_card.title')}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 md:mb-8 leading-relaxed max-w-sm">
                      {t('landing.chemistry_card.description')}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-4 sm:mb-6 md:mb-8">
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/40">
                        {t('landing.chemistry_card.tags.0')}
                      </span>
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/40">
                        {t('landing.chemistry_card.tags.1')}
                      </span>
                      <span className="text-xs px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-red-500/20 text-red-300 border border-red-400/40">
                        {t('landing.chemistry_card.tags.2')}
                      </span>
                    </div>

                    {/* Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-xs sm:text-sm md:text-base rounded-full hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
                    >
                      {t('landing.chemistry_card.button')}
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                    </motion.button>
                  </div>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div className="w-full max-w-6xl" variants={itemVariants}>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
              {t('landing.features.title')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: "⚡", title: t('landing.features.feature1.title'), desc: t('landing.features.feature1.description') },
                { icon: "🎓", title: t('landing.features.feature2.title'), desc: t('landing.features.feature2.description') },
                { icon: "🚀", title: t('landing.features.feature3.title'), desc: t('landing.features.feature3.description') },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gray-900/50 hover:bg-gray-900/80 transition-all duration-300"
                >
                  <div className="text-3xl sm:text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

