'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Integrations', href: '#platforms' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Roadmap', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  support: [
    { name: 'Documentation', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12"
        >
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="h-10 w-auto flex items-center">
                <Image 
                  src="/assets/V3.svg" 
                  alt="KAMPALO Logo" 
                  width={120} 
                  height={22} 
                  className="h-8 w-auto"
                />
              </div>
            </div>
            <p className="text-sm lg:text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Unified marketing analytics and campaign management for modern businesses.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Product</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Company</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-slate-900 dark:text-white font-semibold mb-4 lg:mb-6 text-base lg:text-lg">Support</h4>
            <ul className="space-y-2 lg:space-y-3 text-sm lg:text-base">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-sm lg:text-base"
        >
          <p className="text-slate-600 dark:text-slate-400">© 2024 KAMPALO. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
