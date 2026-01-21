import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us - KAMPALO',
  description: 'Learn about KAMPALO - Our mission, vision, and the team behind unified marketing analytics.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About KAMPALO
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to simplify marketing analytics and empower businesses to make data-driven decisions across all their advertising platforms.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-br from-[#174A6E] to-[#0B3049] rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                In today's complex digital advertising landscape, marketers juggle multiple platforms—Google Ads, Meta, TikTok, LinkedIn, and more. Each platform has its own dashboard, metrics, and reporting system, making it nearly impossible to get a unified view of performance.
              </p>
              <p className="text-lg text-white/90 leading-relaxed">
                KAMPALO was born from the frustration of switching between multiple tabs, exporting spreadsheets, and manually comparing data. We believe that marketing analytics should be unified, intuitive, and actionable—giving you the insights you need to optimize campaigns and maximize ROI, all from one dashboard.
              </p>
            </div>
          </section>

          {/* Vision Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              We envision a world where marketers spend less time gathering data and more time acting on insights. Our platform connects all your advertising accounts, consolidates performance metrics, and provides powerful analytics tools that help you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Save Time</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Eliminate the need to switch between multiple dashboards and manually compile reports.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Make Better Decisions</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Get a complete picture of your advertising performance to optimize budget allocation.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Increase ROI</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Identify top-performing platforms and campaigns to maximize your return on ad spend.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6">
                <div className="text-3xl mb-3">🔗</div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Unify Your Stack</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Connect all your advertising platforms in one place for streamlined management.
                </p>
              </div>
            </div>
          </section>

          {/* Story Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              <p>
                KAMPALO was founded by a team of marketers and engineers who experienced the pain of fragmented analytics firsthand. As digital advertising professionals, we spent countless hours each week compiling data from multiple sources, trying to answer simple questions like "Which platform delivers the best ROI?" or "How are my campaigns performing overall?"
              </p>
              <p>
                We realized that while the advertising industry had evolved rapidly with new platforms and sophisticated targeting, the tools for analyzing performance had not kept pace. Marketers needed a solution that could bring everything together—a single source of truth for their advertising data.
              </p>
              <p>
                After months of development and testing with beta users, KAMPALO was launched. Today, we're proud to serve businesses of all sizes—from startups to enterprises—helping them unlock the full potential of their advertising investments through unified analytics.
              </p>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Values</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#174A6E]/10 dark:bg-[#174A6E]/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">User-Centric</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    Everything we build starts with understanding our users' needs. We're committed to creating tools that truly solve real problems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#174A6E]/10 dark:bg-[#174A6E]/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Security & Privacy</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We take data security seriously. Your information is encrypted, secure, and never sold. We're fully compliant with GDPR, CCPA, and other data protection regulations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#174A6E]/10 dark:bg-[#174A6E]/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Innovation</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We continuously evolve our platform based on user feedback and industry trends. New features and integrations are added regularly.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#174A6E]/10 dark:bg-[#174A6E]/30 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Transparency</h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    We believe in clear communication, honest pricing, and transparent practices. What you see is what you get.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 text-center">Our Team</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-8 max-w-2xl mx-auto">
              KAMPALO is built by a passionate team of marketers, engineers, designers, and data analysts who are dedicated to simplifying marketing analytics.
            </p>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We're always looking for talented individuals who share our vision. If you're passionate about marketing technology and want to help shape the future of advertising analytics, we'd love to hear from you.
              </p>
              <a
                href="/careers"
                className="inline-block bg-[#174A6E] hover:bg-[#0f3451] text-white px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-[#174A6E] to-[#0B3049] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Have questions, feedback, or partnership ideas? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@kampalo.com"
                className="bg-white hover:bg-slate-100 text-[#174A6E] px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/help"
                className="bg-[#0f3451]/50 hover:bg-[#0f3451]/70 text-white border-2 border-white/30 px-8 py-3 rounded-xl font-semibold transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
