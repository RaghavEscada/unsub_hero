import React, { useEffect, useState } from "react";
import { Star, Mail, CheckCircle, Zap, TrendingUp, BarChart3, Clock, Shield, Users } from "lucide-react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-black">

      {/* Subtle animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>



      <div className="relative z-20 px-8 pt-16 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* Trust Badge */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-600/30 text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 fill-current text-yellow-400 drop-shadow-lg" />
                <span className="font-semibold text-gray-200">Trustpilot</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <span className="text-white font-medium">Excellent 2,847 reviews</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current drop-shadow-lg" />
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tight" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Email cleanup made<br />
              <span className="bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent">simpler and smarter</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
              Forward unwanted newsletters to <span className="font-bold text-transparent bg-gradient-to-r from-red-400 to-red-500 bg-clip-text">unsub@unsubhero.com</span> and watch the magic happen.<br />
              <span className="text-gray-400">Powerful email management built for modern inbox cleanup.</span>
            </p>

            {/* Call to Action */}
            <div className="flex justify-center mb-12">
              <button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-10 py-5 rounded-2xl font-semibold flex items-center space-x-3 transition-all duration-300 shadow-2xl hover:shadow-red-500/30 hover:scale-105 border border-red-400/20" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                <span>Try UnsubHero</span>
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </button>
            </div>

            {/* User Success Stories */}
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-700 flex items-center justify-center text-white text-xs font-semibold shadow-lg">SA</div>
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-700 flex items-center justify-center text-white text-xs font-semibold shadow-lg">MA</div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-700 flex items-center justify-center text-white text-xs font-semibold shadow-lg">JD</div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full border-2 border-gray-700 flex items-center justify-center text-white text-xs font-semibold shadow-lg">LK</div>
                <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-gray-700 flex items-center justify-center text-white text-xs font-semibold shadow-lg">
                  +1K
                </div>
              </div>
              <span className="text-gray-400 text-sm ml-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>1,000s of global teams use our service daily</span>
            </div>
          </div>

          {/* Email Management Demo */}
          <div className="flex justify-center">
            <div className="relative max-w-4xl">

              {/* Annotations */}
              <div className="absolute -left-32 top-20 text-white">
                <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 relative shadow-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <span className="text-sm text-gray-300">98% Success Rate<br />2min Average Time</span>
                  <div className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2">
                    <svg width="40" height="2" viewBox="0 0 40 2" className="text-gray-400">
                      <path d="M0 1h40" stroke="currentColor" strokeWidth="1" markerEnd="url(#arrowhead)" />
                      <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                          <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" />
                        </marker>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Browser Window */}
              <div className="bg-gray-900 rounded-t-xl shadow-2xl border border-gray-700">

                {/* Browser Bar */}
                <div className="bg-gray-800 px-4 py-3 rounded-t-xl flex items-center border-b border-gray-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-gray-700 rounded-lg px-4 py-1 text-gray-300 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>unsubhero.com</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                    <div className="w-4 h-4 bg-gray-600 rounded"></div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 bg-gray-900">

                  {/* Dashboard Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-red-500 rounded-lg shadow-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>UnsubHero</span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-400" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                      <span className="text-red-400 font-medium">Dashboard</span>
                      <span className="hover:text-white transition-colors cursor-pointer">Analytics</span>
                      <span className="hover:text-white transition-colors cursor-pointer">History</span>
                      <span className="hover:text-white transition-colors cursor-pointer">Settings</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full shadow-lg flex items-center justify-center">
                        <span className="text-white text-xs font-semibold" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>You</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Stats */}
                  <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Email Cleanup Dashboard</h2>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Track your unsubscribe success, processing times, and inbox cleanup analytics</p>
                  </div>

                  {/* Stats Cards Row */}
                  <div className="grid grid-cols-4 gap-4 mb-6">

                    {/* Emails Processed */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 relative shadow-lg">
                      <div className="absolute top-3 right-3">
                        <Mail className="w-4 h-4 text-gray-500" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Emails Processed</h3>
                      <div className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2,847</div>
                      <div className="flex items-center space-x-1">
                        <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>+25%</span>
                      </div>
                    </div>

                    {/* Success Rate */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 relative shadow-lg">
                      <div className="absolute top-3 right-3">
                        <CheckCircle className="w-4 h-4 text-gray-500" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Success Rate</h3>
                      <div className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>98.2%</div>
                      <div className="flex items-center space-x-1">
                        <span className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Excellent</span>
                      </div>
                    </div>

                    {/* Average Time */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 relative shadow-lg">
                      <div className="absolute top-3 right-3">
                        <Clock className="w-4 h-4 text-gray-500" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Average Time</h3>
                      <div className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>2m 30s</div>
                      <div className="flex items-center space-x-1">
                        <span className="bg-blue-900 text-blue-400 text-xs px-2 py-1 rounded-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Fast</span>
                      </div>
                    </div>

                    {/* Clean Inboxes */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 relative shadow-lg">
                      <div className="absolute top-3 right-3">
                        <Shield className="w-4 h-4 text-gray-500" />
                      </div>
                      <h3 className="text-sm font-medium text-gray-400 mb-2" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Clean Inboxes</h3>
                      <div className="text-2xl font-semibold text-white mb-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>1,247</div>
                      <div className="text-xs space-y-1" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                        <div className="flex justify-between">
                          <span className="text-green-400">● Gmail</span>
                          <span className="text-gray-300">847</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-blue-400">● Outlook</span>
                          <span className="text-gray-300">265</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-purple-400">● Yahoo</span>
                          <span className="text-gray-300">135</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Charts Row */}
                  <div className="grid grid-cols-3 gap-4">

                    {/* Processing Activity */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-medium text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Daily Processing</h3>
                        <TrendingUp className="w-4 h-4 text-gray-500" />
                      </div>

                      {/* Bar Chart */}
                      <div className="space-y-2">
                        <div className="flex items-end justify-between h-20">
                          <div className="bg-red-500 w-6 h-12 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-16 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-10 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-14 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-8 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-18 rounded-t shadow-lg"></div>
                          <div className="bg-red-500 w-6 h-12 rounded-t shadow-lg"></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                          <span>Mon</span>
                          <span>Tue</span>
                          <span>Wed</span>
                          <span>Thu</span>
                          <span>Fri</span>
                          <span>Sat</span>
                          <span>Sun</span>
                        </div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg">
                      <h3 className="font-medium text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Recent Unsubscribes</h3>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Sarah Johnson</div>
                            <div className="text-xs text-gray-400" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Newsletter Rep</div>
                          </div>
                          <div className="bg-green-900 text-green-400 text-xs px-2 py-1 rounded-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Done</div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-purple-500 rounded-full shadow-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-white" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Mark Adams</div>
                            <div className="text-xs text-gray-400" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Operations Mgr</div>
                          </div>
                          <div className="bg-yellow-900 text-yellow-400 text-xs px-2 py-1 rounded-lg" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Processing</div>
                        </div>
                      </div>
                    </div>

                    {/* Process Flow */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-4 shadow-lg">
                      <h3 className="font-medium text-white mb-4" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>How It Works</h3>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg shadow-lg flex items-center justify-center">
                            <Mail className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sm text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Forward email</div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-yellow-500 rounded-lg shadow-lg flex items-center justify-center">
                            <Zap className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sm text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>AI processes</div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-500 rounded-lg shadow-lg flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                          <div className="text-sm text-gray-300" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>Unsubscribed!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;