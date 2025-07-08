import React, { useState, useEffect } from 'react';
import { Database, Zap, BarChart3, Code, Cpu, Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState('');
  const [glitchText, setGlitchText] = useState('MEET NIRAV ZAVERI');

  const tasks = [
    'Initializing neural networks...',
    'Loading data matrices...',
    'Connecting to quantum databases...',
    'Optimizing ETL algorithms...',
    'Calibrating analytics engines...',
    'Synchronizing cloud systems...',
    'Ready to analyze!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1.5;
        const taskIndex = Math.floor((newProgress / 100) * tasks.length);
        setCurrentTask(tasks[Math.min(taskIndex, tasks.length - 1)]);
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    // Glitch effect for name
    const glitchInterval = setInterval(() => {
      const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
      const original = 'MEET NIRAV ZAVERI';
      let glitched = '';
      
      for (let i = 0; i < original.length; i++) {
        if (Math.random() < 0.1) {
          glitched += glitchChars[Math.floor(Math.random() * glitchChars.length)];
        } else {
          glitched += original[i];
        }
      }
      
      setGlitchText(glitched);
      setTimeout(() => setGlitchText(original), 100);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearInterval(glitchInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-md mx-auto px-6">
        {/* Holographic logo */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-spin opacity-75 blur-sm"></div>
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center relative z-10 mt-2 ml-2 border-2 border-cyan-400 shadow-lg shadow-cyan-400/50">
              <Database size={40} className="text-cyan-400 animate-pulse" />
            </div>
            {/* Orbiting icons */}
            <div className="absolute inset-0 animate-spin-slow">
              <Zap className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-purple-400" size={16} />
              <BarChart3 className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 text-pink-400" size={16} />
              <Code className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 text-cyan-400" size={16} />
              <Cpu className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 text-purple-400" size={16} />
            </div>
          </div>
        </div>

        {/* Glitch name */}
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-mono tracking-wider">
          {glitchText}
        </h1>
        <p className="text-cyan-300 mb-8 text-lg font-light tracking-wide">
          Data Engineer & Analyst
        </p>

        {/* Holographic progress bar */}
        <div className="mb-6">
          <div className="w-full bg-gray-800 rounded-full h-3 mb-4 overflow-hidden border border-cyan-400/30 shadow-inner">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full transition-all duration-300 relative overflow-hidden"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-cyan-300 text-sm font-mono">{Math.round(progress)}%</span>
            <span className="text-purple-300 text-sm">LOADING...</span>
          </div>
        </div>

        {/* Current task with typing effect */}
        <div className="flex items-center justify-center gap-3 text-blue-200 min-h-[24px]">
          <Sparkles size={16} className="text-cyan-400 animate-pulse" />
          <span className="text-sm font-mono">{currentTask}</span>
          <span className="animate-pulse">|</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;