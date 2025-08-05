"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { CheckCircle, Mail, Zap, Shield, Clock, Users, Star, ArrowRight, Play } from "lucide-react";

const Home = () => {
  return (
    <main className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Why Choose UnsubHero?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              The smartest way to clean up your inbox. No more manual unsubscribing, no more email clutter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                One-Click Unsubscribe
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Simply forward any unwanted email to unsub@unsubhero.com and we'll handle the rest automatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                AI-Powered Processing
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Our advanced AI analyzes emails and finds the unsubscribe link in seconds, even for complex newsletters.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Privacy First
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Your emails are processed securely and never stored. We only extract what's needed to unsubscribe.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Lightning Fast
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Average processing time of just 2 minutes. Get your inbox cleaned up in no time.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Team Collaboration
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Share the same unsub@unsubhero.com address with your team for collaborative inbox management.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8 hover:bg-gray-800/80 transition-all duration-300">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                98% Success Rate
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Our proven system successfully unsubscribes from 98% of newsletters, including the most stubborn ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Three simple steps to a cleaner inbox
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Forward Email
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Forward any unwanted newsletter to unsub@unsubhero.com
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                AI Processing
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Our AI finds and clicks the unsubscribe link automatically
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Clean Inbox
              </h3>
              <p className="text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Get confirmation and enjoy your cleaner inbox
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Choose the plan that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Free
              </h3>
              <div className="text-4xl font-bold text-white mb-6">
                $0
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>10 emails per month</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Basic AI processing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Email notifications</span>
                </li>
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
                Get Started Free
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-xl border border-red-500/30 rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Pro
              </h3>
              <div className="text-4xl font-bold text-white mb-6">
                $9
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Unlimited emails</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Advanced AI processing</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Team collaboration</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Analytics dashboard</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Priority support</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-red-500/25">
                Start Pro Trial
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                Enterprise
              </h3>
              <div className="text-4xl font-bold text-white mb-6">
                Custom
                <span className="text-lg text-gray-400 font-normal">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Everything in Pro</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Custom integrations</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Dedicated support</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>SLA guarantees</span>
                </li>
              </ul>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-xl font-semibold transition-colors duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Loved by Thousands
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              See what our users are saying about UnsubHero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                "UnsubHero saved me hours every week. I used to manually unsubscribe from dozens of newsletters. Now I just forward them and they're gone!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">SM</span>
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Sarah Mitchell</div>
                  <div className="text-gray-400 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Marketing Manager</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                "The AI is incredibly smart. It finds unsubscribe links that I couldn't even locate myself. 98% success rate is no joke!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>James Davis</div>
                  <div className="text-gray-400 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Software Engineer</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                "Our team uses the shared address and it's been a game-changer. Everyone can contribute to keeping our inboxes clean."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">LK</span>
                </div>
                <div>
                  <div className="text-white font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Lisa Kim</div>
                  <div className="text-gray-400 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Operations Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-red-500/10 to-red-600/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Ready to Clean Up Your Inbox?
          </h2>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            Join thousands of users who have already reclaimed their inbox with UnsubHero
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl hover:shadow-red-500/25 hover:scale-105">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-gray-800/80 transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Home;