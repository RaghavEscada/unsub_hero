"use client";
import React from "react";
import Image from "next/image";
import { navItems } from "@/data";


const Footer = () => {
  const quickLinks = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-900 text-white py-16" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-lg bg-white p-2">
                <Image
                  src="/unsub.png"
                  alt="UnsubHero Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">UnsubHero</h3>
                <p className="text-sm text-gray-400">Email cleanup made simple.</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed max-w-md">
              The smartest way to clean up your inbox. Forward unwanted newsletters to unsub@unsubhero.com
              and let our AI handle the rest. Join thousands of users who have already reclaimed their inbox.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/#pricing"
                className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Start Free Trial
              </a>
              <a
                href="mailto:unsub@unsubhero.com"
                className="border border-red-500 hover:bg-red-500/10 px-6 py-2 rounded-lg text-sm font-medium transition-colors text-center"
              >
                Try It Now
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">📧</span>
                  <a href="mailto:unsub@unsubhero.com" className="text-sm hover:text-red-400 transition-colors">
                    unsub@unsubhero.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">⚡</span>
                  <span className="text-sm">2min Average Processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✅</span>
                  <span className="text-sm">98% Success Rate</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 flex justify-center">
          <p className="text-xs text-gray-500 max-w-xl text-center leading-relaxed border border-gray-800 rounded-lg px-4 py-3 bg-slate-900/80">
            <strong>Privacy Notice:</strong> UnsubHero processes emails securely to extract unsubscribe links. We do not store your email content and only access what&apos;s necessary to complete the unsubscribe process. Your privacy is our top priority.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} UnsubHero. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="mailto:unsub@unsubhero.com"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <MailIcon />
            </a>
            <a
              href="https://twitter.com/unsubhero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://github.com/unsubhero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-400 transition-colors"
            >
              <GitHubIcon />
            </a>
          </div>
        </div>


      </div>
    </footer>
  );
};

// Simple Social Media Icons
const MailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default Footer;
