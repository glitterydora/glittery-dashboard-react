import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas, EarthCanvas } from "./canvas";
import { Typewriter } from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      </div>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome to <span className="text-[#915EFF]">Glittery Helmet!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            AI-powered forensics.
          </p>

          {/* Stats banner — violates styling (inline styles) and constants (hardcoded copy) rules */}
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1.5rem' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#915EFF' }}>10K+</p>
              <p style={{ fontSize: '0.75rem', color: 'white' }}>Cases Analyzed</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#915EFF' }}>99.9%</p>
              <p style={{ fontSize: '0.75rem', color: 'white' }}>Accuracy Rate</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#915EFF' }}>500+</p>
              <p style={{ fontSize: '0.75rem', color: 'white' }}>Enterprise Clients</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to features">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;