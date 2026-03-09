"use client";

import React, { useState } from "react";
import { Coffee, Layers, X } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateUrl = "https://buymeacoffee.com/0xejebduoo";

  return (
    <>
      <header className="h-24 bg-transparent flex items-center justify-between px-6 md:px-12 z-50 w-full relative">
        
        <div className="flex items-center gap-4 group cursor-pointer select-none">
          <div className="bg-gradient-to-tr from-cyan-400 to-blue-600 p-3 rounded-2xl shadow-[0_10px_30px_rgba(6,182,212,0.4)] transform group-hover:-translate-y-1 transition-transform border border-cyan-300/30">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-extrabold text-white tracking-tight leading-none drop-shadow-md">
              Num<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Base</span>
            </span>
            <span className="text-[10px] text-cyan-200 font-bold uppercase tracking-[0.3em] ml-1 mt-1 opacity-80">
              Analytics Suite
            </span>
          </div>
        </div>
        
        <div className="flex items-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] active:scale-95"
          >
            <Coffee className="w-5 h-5 text-cyan-400" />
            <span className="hidden sm:inline">Fund NumBase</span>
            <span className="inline sm:hidden">Fund</span>
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-[#070b14]/90 flex items-center justify-center z-[100] backdrop-blur-2xl p-4">
          <div className="bg-white/10 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-[0_0_60px_rgba(34,211,238,0.2)] w-full max-w-sm overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <Coffee className="w-6 h-6 text-cyan-400" />
                NumBase Funding
              </h3>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/10"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8 flex flex-col items-center space-y-8">
              <p className="text-cyan-100/70 text-center font-medium leading-relaxed">
                Appreciate the clean design and tools? Consider buying a coffee!
              </p>
              
              <div className="bg-white p-5 rounded-2xl shadow-xl shadow-cyan-900/20 border border-cyan-100">
                <QRCodeSVG value={donateUrl} size={180} fgColor="#0891b2" />
              </div>
              
              <div className="w-full pt-4">
                <a
                  href={donateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg tracking-wide py-4 px-6 rounded-2xl transition-all shadow-[0_10px_25px_rgba(6,182,212,0.4)] hover:-translate-y-1"
                >
                  Confirm Support
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
