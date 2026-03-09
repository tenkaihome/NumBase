"use client";

import React, { useState } from "react";
import Header from "@/components/Header";

// Tool components
import JsonPrettify from "@/components/tools/JsonPrettify";
import JsonMinify from "@/components/tools/JsonMinify";
import RandomPort from "@/components/tools/RandomPort";
import RegexTester from "@/components/tools/RegexTester";
import NotImplemented from "@/components/tools/NotImplemented";
import ChmodCalculator from "@/components/tools/ChmodCalculator";
import JsonToCsv from "@/components/tools/JsonToCsv";
import SqlPrettify from "@/components/tools/SqlPrettify";
import YamlPrettify from "@/components/tools/YamlPrettify";
import XmlFormatter from "@/components/tools/XmlFormatter";
import EmailNormalizer from "@/components/tools/EmailNormalizer";
import CrontabGenerator from "@/components/tools/CrontabGenerator";
import DockerRunToCompose from "@/components/tools/DockerRunToCompose";
import GitCheatsheet from "@/components/tools/GitCheatsheet";
import RegexCheatsheet from "@/components/tools/RegexCheatsheet";
import IntegerBaseConverter from "@/components/tools/IntegerBaseConverter";

import { 
  GitBranch, Server, Clock, Braces, List, Database, 
  FileText, Box, CodeXml, AlignLeft, Mail, WholeWord,
  FileCode2, Calculator
} from "lucide-react";

export const toolsList = [
  { id: "integer-base", name: "Base Convert", icon: <Calculator className="w-5 h-5 text-cyan-400" /> },
  { id: "json-prettify", name: "Beautify JSON", icon: <Braces className="w-5 h-5 text-sky-400" /> },
  { id: "json-minify", name: "Minify JSON", icon: <Braces className="w-5 h-5 text-teal-400" /> },
  { id: "json-csv", name: "JSON to CSV", icon: <List className="w-5 h-5 text-emerald-400" /> },
  { id: "sql-prettify", name: "Clean SQL", icon: <Database className="w-5 h-5 text-blue-400" /> },
  { id: "xml-formatter", name: "XML Format", icon: <CodeXml className="w-5 h-5 text-indigo-400" /> },
  { id: "yaml-prettify", name: "YAML Format", icon: <AlignLeft className="w-5 h-5 text-violet-400" /> },
  { id: "regex-tester", name: "Regex Engine", icon: <WholeWord className="w-5 h-5 text-fuchsia-400" /> },
  { id: "regex-cheatsheet", name: "Regex Help", icon: <FileCode2 className="w-5 h-5 text-pink-400" /> },
  { id: "random-port", name: "Ports Gen", icon: <Server className="w-5 h-5 text-rose-400" /> },
  { id: "crontab", name: "Crontab", icon: <Clock className="w-5 h-5 text-orange-400" /> },
  { id: "chmod", name: "Chmod", icon: <FileText className="w-5 h-5 text-amber-400" /> },
  { id: "docker-run-compose", name: "Dockerize", icon: <Box className="w-5 h-5 text-yellow-400" /> },
  { id: "email-normalizer", name: "Emails Filter", icon: <Mail className="w-5 h-5 text-lime-400" /> },
  { id: "git-cheatsheet", name: "Git Help", icon: <GitBranch className="w-5 h-5 text-green-400" /> },
];

export default function Home() {
  const [activeToolId, setActiveToolId] = useState("integer-base");

  const renderTool = () => {
    switch (activeToolId) {
      case "integer-base": return <IntegerBaseConverter />;
      case "json-prettify": return <JsonPrettify />;
      case "json-minify": return <JsonMinify />;
      case "random-port": return <RandomPort />;
      case "regex-tester": return <RegexTester />;
      case "chmod": return <ChmodCalculator />;
      case "json-csv": return <JsonToCsv />;
      case "sql-prettify": return <SqlPrettify />;
      case "yaml-prettify": return <YamlPrettify />;
      case "xml-formatter": return <XmlFormatter />;
      case "email-normalizer": return <EmailNormalizer />;
      case "crontab": return <CrontabGenerator />;
      case "docker-run-compose": return <DockerRunToCompose />;
      case "git-cheatsheet": return <GitCheatsheet />;
      case "regex-cheatsheet": return <RegexCheatsheet />;
      default: return <NotImplemented />;
    }
  };

  const activeToolProps = toolsList.find(t => t.id === activeToolId);

  return (
    <div className="flex flex-col min-h-screen bg-[#070b14] text-slate-200 selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Background Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-900/20 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[150px] pointer-events-none"></div>
      
      <Header />
      
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:px-8 md:py-4 flex flex-col md:flex-row gap-8 z-10 relative">
        
        {/* Sleek Sidebar Menu */}
        <aside className="w-full md:w-[260px] flex-shrink-0 flex flex-col h-[calc(100vh-8rem)] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-10 pr-2">
          <div className="sticky top-0 bg-[#070b14]/95 backdrop-blur-xl pt-2 pb-5 mb-2 z-20">
             <h2 className="text-[10px] font-black tracking-[0.3em] text-cyan-500/70 uppercase">Analytics Tools</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            {toolsList.map(tool => {
              const isActive = activeToolId === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => setActiveToolId(tool.id)}
                  className={`flex items-center gap-3.5 px-3 py-3 rounded-xl transition-all duration-300 w-full text-left relative overflow-hidden group ${
                    isActive 
                      ? "bg-cyan-950/40 border border-cyan-800/50" 
                      : "border border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>}
                  <div className={`p-2 rounded-lg transition-all duration-300 ${isActive ? "bg-cyan-900/50 scale-110" : "bg-white/5 group-hover:bg-white/10 group-hover:scale-105"}`}>
                    <div className={isActive ? "" : "opacity-60 group-hover:opacity-100 transition-opacity"}>
                      {tool.icon}
                    </div>
                  </div>
                  <span className={`font-bold tracking-wide text-[13px] ${isActive ? "text-cyan-100" : "text-slate-400 group-hover:text-slate-200"}`}>
                    {tool.name}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Floating Active Canvas */}
        <div className="flex-1 flex flex-col min-h-[600px] h-[calc(100vh-8rem)] bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          
          <div className="w-full h-full p-4 md:p-6 flex flex-col relative min-w-0">
             <div className="absolute -top-10 -right-10 text-[20rem] text-white/[0.02] pointer-events-none rotate-12 blur-sm">
                {activeToolProps?.icon}
             </div>
             <div className="flex-1 w-full h-full overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] min-w-0 flex flex-col relative z-10">
               {renderTool()}
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
