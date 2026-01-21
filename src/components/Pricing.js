'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

// Plan data structure based on API
const plansData = [
  {
    id: 1,
    name: 'Free Plan',
    plan_type: 'free',
    description: 'Perfect for getting started with basic ad monitoring',
    price_monthly: '0.00',
    price_yearly: '0.00',
    currency: 'USD',
    max_ad_accounts: 1,
    max_campaigns: 1,
    max_connections: 1,
    max_google_customers: 1,
    max_meta_ad_accounts: 1,
    has_google_ads: true,
    has_meta_ads: true,
    has_advanced_analytics: false,
    has_custom_reports: false,
    has_api_access: false,
    has_priority_support: false,
    has_white_label: false,
    has_custom_integrations: false,
    is_active: true,
    is_popular: false,
  },
  {
    id: 2,
    name: 'Premium Plan',
    plan_type: 'premium',
    description: 'Advanced analytics and reporting for growing businesses',
    price_monthly: '3.00',
    price_yearly: '30.00',
    currency: 'USD',
    max_ad_accounts: 4,
    max_campaigns: 8,
    max_connections: 4,
    max_google_customers: 2,
    max_meta_ad_accounts: 2,
    has_google_ads: true,
    has_meta_ads: true,
    has_advanced_analytics: true,
    has_custom_reports: true,
    has_api_access: true,
    has_priority_support: true,
    has_white_label: false,
    has_custom_integrations: false,
    is_active: true,
    is_popular: true,
  },
  {
    id: 3,
    name: 'Enterprise Plan',
    plan_type: 'enterprise',
    description: 'Unlimited access with dedicated support and custom integrations',
    price_monthly: '8.00',
    price_yearly: '80.00',
    currency: 'USD',
    max_ad_accounts: 10,
    max_campaigns: 0, // 0 means unlimited
    max_connections: 10,
    max_google_customers: 0, // 0 means unlimited
    max_meta_ad_accounts: 0, // 0 means unlimited
    has_google_ads: true,
    has_meta_ads: true,
    has_advanced_analytics: true,
    has_custom_reports: true,
    has_api_access: true,
    has_priority_support: true,
    has_white_label: true,
    has_custom_integrations: true,
    is_active: true,
    is_popular: false,
  },
];

const getFeatures = (plan) => {
  const features = [];
  
  // Platform integrations
  if (plan.has_google_ads) features.push('Google Ads Integration');
  if (plan.has_meta_ads) features.push('Meta Ads Integration');
  
  // Limits
  if (plan.max_ad_accounts > 0) {
    features.push(`${plan.max_ad_accounts} Ad Account${plan.max_ad_accounts > 1 ? 's' : ''}`);
  } else {
    features.push('Unlimited Ad Accounts');
  }
  
  if (plan.max_campaigns > 0) {
    features.push(`${plan.max_campaigns} Campaign${plan.max_campaigns > 1 ? 's' : ''}`);
  } else if (plan.plan_type === 'enterprise') {
    features.push('Unlimited Campaigns');
  }
  
  // Features
  if (plan.has_advanced_analytics) features.push('Advanced Analytics & KPIs');
  if (plan.has_custom_reports) features.push('Custom Reports');
  if (plan.has_api_access) features.push('API Access');
  if (plan.has_priority_support) features.push('Priority Support');
  if (plan.has_white_label) features.push('White Label');
  if (plan.has_custom_integrations) features.push('Custom Integrations');
  
  return features;
};

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const formatPrice = (price) => {
    return parseFloat(price).toFixed(2);
  };

  const getPrice = (plan) => {
    return billingPeriod === 'monthly' 
      ? formatPrice(plan.price_monthly) 
      : formatPrice(plan.price_yearly);
  };

  const getPriceDisplay = (plan) => {
    const price = getPrice(plan);
    if (price === '0.00') return 'Free';
    return `$${price}`;
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingPeriod === 'monthly' ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-7 bg-slate-200 dark:bg-slate-700 rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 left-1 w-5 h-5 bg-white dark:bg-slate-300 rounded-full transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-7' : ''
                }`}
              />
            </button>
            <span className={`text-sm ${billingPeriod === 'yearly' ? 'text-slate-900 dark:text-white font-semibold' : 'text-slate-600 dark:text-slate-400'}`}>
              Yearly
              <span className="ml-2 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                Save 17%
              </span>
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto"
        >
          {plansData.map((plan) => {
            const features = getFeatures(plan);
            const isPopular = plan.is_popular;
            const price = getPriceDisplay(plan);
            const isFree = price === 'Free';

            return (
              <motion.div
                key={plan.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: isPopular ? 1.03 : 1.02 }}
                className={`relative rounded-2xl p-8 lg:p-10 border-2 transition-all ${
                  isPopular
                    ? 'bg-gradient-to-br from-[#174A6E] to-[#0B3049] border-[#174A6E] transform scale-105 shadow-xl'
                    : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-slate-900 px-4 py-1 rounded-bl-lg rounded-tr-2xl text-sm font-bold">
                    Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-4 ${isPopular ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className={`text-3xl lg:text-4xl font-bold ${isPopular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {price}
                    </span>
                    {!isFree && (
                      <span className={`ml-2 ${isPopular ? 'text-white/80' : 'text-slate-600 dark:text-slate-400'}`}>
                        /{billingPeriod === 'monthly' ? 'month' : 'year'}
                      </span>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${isPopular ? 'text-white' : 'text-green-500'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className={isPopular ? 'text-white text-sm' : 'text-slate-600 dark:text-slate-300 text-sm'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${
                    isPopular
                      ? 'bg-white hover:bg-blue-50 text-[#174A6E]'
                      : isFree
                      ? 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white'
                      : 'bg-[#174A6E] hover:bg-[#0f3451] text-white'
                  } px-6 py-3 lg:py-4 rounded-lg font-medium transition-colors text-sm lg:text-base`}
                >
                  {isFree ? 'Get Started' : plan.plan_type === 'enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
