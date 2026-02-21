/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Mail, Monitor, Layers, Clock, Shield, CheckCircle, Calendar, Terminal } from 'lucide-react';

export default function App() {
  const scrollToProject = () => {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Navigation / Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight text-white">Aryan<span className="text-indigo-400">.</span></div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <button onClick={scrollToProject} className="hover:text-white transition-colors">Work</button>
            <button onClick={scrollToContact} className="hover:text-white transition-colors">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-wide text-indigo-300 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Frontend Developer
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            I like to code and build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">clean, focused</span> web experiences.
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mb-10">
            Frontend-focused developer building modern, usable interfaces with attention to flow, clarity, and discipline.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={scrollToProject}
              className="px-8 py-3 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors"
            >
              View Project
            </button>
            <a 
              href="https://discipline-nine.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="px-8 py-3 bg-zinc-800 text-white font-medium rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              Live Demo <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-wider">About Me</h2>
          <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
            I build clean, modern websites and web apps with a focus on usability, structure, and flow. I enjoy working on systems that help people stay focused and organized. My approach is grounded in simplicity—removing the unnecessary to let the essential function shine.
          </p>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="project" className="py-20 px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-3xl font-bold text-white">Discipline</h2>
            <span className="px-2 py-0.5 text-xs font-medium bg-zinc-800 text-zinc-300 rounded border border-zinc-700">Flagship Project</span>
          </div>
          <p className="text-xl text-zinc-400 max-w-3xl">
            A focus and study management app designed to help users stay consistent, reduce distractions, and track meaningful progress. It combines structured study workflows with anti-distraction systems.
          </p>
          <div className="mt-6">
            <a 
              href="https://discipline-nine.vercel.app/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition-colors border-b border-indigo-400/30 pb-0.5 hover:border-indigo-300"
            >
              Visit Live App <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <FeatureCard 
            icon={<Clock className="text-indigo-400" />}
            title="Study Workflow"
            items={[
              "Timetable-based schedule mode",
              "Free Flow sessions & Pomodoro",
              "Built-in Timer & Stopwatch",
              "Smart break flow controls"
            ]}
          />
          <FeatureCard 
            icon={<Shield className="text-emerald-400" />}
            title="Focus & Anti-Distraction"
            items={[
              "Focus breach detection",
              "Distraction counter & alerts",
              "App/Website whitelist",
              "Safe mini floating window"
            ]}
          />
          <FeatureCard 
            icon={<CheckCircle className="text-blue-400" />}
            title="Tracking & Verification"
            items={[
              "Accurate wall-clock tracking",
              "Points, streaks & stats",
              "Session verification logs",
              "Problem & chapter tracking"
            ]}
          />
          <FeatureCard 
            icon={<Layers className="text-purple-400" />}
            title="Revision System"
            items={[
              "Subject-wise chapter bank",
              "Independent revision cycles",
              "Tracker dashboard",
              "Revision reminders"
            ]}
          />
          <FeatureCard 
            icon={<Calendar className="text-orange-400" />}
            title="Tasks & Planning"
            items={[
              "Floating task board",
              "Daily study heatmap",
              "Exam schedule widgets",
              "Countdown timers"
            ]}
          />
          <FeatureCard 
            icon={<Monitor className="text-pink-400" />}
            title="Desktop Capabilities"
            items={[
              "Electron multi-window support",
              "PDF & external link handling",
              "Desktop packaging support",
              "Native system integration"
            ]}
          />
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-wider mb-6">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {['React', 'Vite', 'Tailwind CSS', 'Electron', 'Vercel', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-300 text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {/* Placeholder 1: Dashboard */}
           <div className="group relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 flex flex-col p-6">
                <div className="flex gap-4 mb-6">
                  <div className="w-1/4 h-24 bg-zinc-800/50 rounded-lg animate-pulse"></div>
                  <div className="w-1/4 h-24 bg-zinc-800/50 rounded-lg animate-pulse delay-75"></div>
                  <div className="w-1/4 h-24 bg-zinc-800/50 rounded-lg animate-pulse delay-150"></div>
                  <div className="w-1/4 h-24 bg-zinc-800/50 rounded-lg animate-pulse delay-200"></div>
                </div>
                <div className="flex-1 bg-zinc-800/30 rounded-lg border border-zinc-800/50 p-4">
                  <div className="w-1/3 h-4 bg-zinc-700/50 rounded mb-4"></div>
                  <div className="w-full h-2 bg-zinc-700/30 rounded mb-2"></div>
                  <div className="w-2/3 h-2 bg-zinc-700/30 rounded"></div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-white">Dashboard Overview</span>
              </div>
           </div>

           {/* Placeholder 2: Focus Mode */}
           <div className="group relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-4 border-indigo-500/20 flex items-center justify-center relative">
                  <div className="text-4xl font-mono font-bold text-white">25:00</div>
                  <div className="absolute -bottom-8 text-sm text-zinc-500 uppercase tracking-widest">Focus</div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-white">Focus Timer</span>
              </div>
           </div>

           {/* Placeholder 3: Task Board */}
           <div className="group relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 p-6 grid grid-cols-3 gap-4">
                 <div className="bg-zinc-800/30 rounded-lg border border-zinc-800/50 p-3">
                    <div className="w-12 h-2 bg-zinc-600/50 rounded mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-zinc-700/20 rounded border border-zinc-700/30"></div>
                      <div className="h-8 bg-zinc-700/20 rounded border border-zinc-700/30"></div>
                    </div>
                 </div>
                 <div className="bg-zinc-800/30 rounded-lg border border-zinc-800/50 p-3">
                    <div className="w-12 h-2 bg-zinc-600/50 rounded mb-3"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-zinc-700/20 rounded border border-zinc-700/30"></div>
                    </div>
                 </div>
                 <div className="bg-zinc-800/30 rounded-lg border border-zinc-800/50 p-3">
                    <div className="w-12 h-2 bg-zinc-600/50 rounded mb-3"></div>
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-white">Kanban Task Board</span>
              </div>
           </div>

           {/* Placeholder 4: Analytics */}
           <div className="group relative aspect-video bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
              <div className="absolute inset-0 p-6 flex items-end justify-between gap-2">
                 {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                   <div key={i} className="w-full bg-indigo-500/20 rounded-t-sm hover:bg-indigo-500/40 transition-colors" style={{ height: `${h}%` }}></div>
                 ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-zinc-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm font-medium text-white">Progress Analytics</span>
              </div>
           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Let's work together.</h2>
          <p className="text-xl text-zinc-400 mb-10">
            If you're looking for clean, focused, and usable web experiences, let's talk. I'm currently open to freelance projects and opportunities.
          </p>
          <a 
            href="mailto:aryanvpersonal@gmail.com?subject=Project%20Inquiry" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-200 transition-colors"
          >
            <Mail size={20} />
            Message Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-zinc-950">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="font-bold text-white mb-1">Aryan</div>
            <div className="text-sm text-zinc-500">Frontend / UI-focused Developer</div>
          </div>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="https://discipline-nine.vercel.app/" className="hover:text-white transition-colors">Discipline</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="mailto:aryanvpersonal@gmail.com?subject=Project%20Inquiry" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Aryan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, items }: { icon: ReactNode, title: string, items: string[] }) {
  return (
    <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl hover:bg-zinc-900/50 hover:border-white/10 transition-all duration-300">
      <div className="mb-4 p-3 bg-zinc-950 rounded-xl inline-block border border-white/5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
            <span className="mt-1.5 w-1 h-1 bg-zinc-600 rounded-full shrink-0" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

