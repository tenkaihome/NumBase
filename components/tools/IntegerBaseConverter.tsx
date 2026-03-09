import React, { useState } from "react";
import { ArrowRightLeft, Calculator, Copy, CheckCircle2 } from "lucide-react";

export default function IntegerBaseConverter() {
  const [value, setValue] = useState("");
  const [fromBase, setFromBase] = useState(10);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bases = [
    { label: "Binary (2)", base: 2, className: "text-blue-400" },
    { label: "Octal (8)", base: 8, className: "text-green-400" },
    { label: "Decimal (10)", base: 10, className: "text-yellow-400" },
    { label: "Hexadecimal (16)", base: 16, className: "text-purple-400" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value.toUpperCase());
  };

  const convertValue = (targetBase: number) => {
    if (!value) return "";
    try {
      const parsed = parseInt(value, fromBase);
      if (isNaN(parsed)) return "Invalid input";
      return parsed.toString(targetBase).toUpperCase();
    } catch {
      return "Error";
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    if (!text || text === "Invalid input" || text === "Error") return;
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-3xl text-slate-200 p-8 rounded-3xl border border-white/10 relative overflow-y-auto w-full max-w-2xl mx-auto shadow-2xl">
      
      <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
        <div className="p-4 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 backdrop-blur-sm shadow-[0_4px_30px_rgba(6,182,212,0.1)]">
          <Calculator className="text-cyan-400 w-8 h-8" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Base Converter
          </h2>
          <p className="text-sm text-cyan-200/60 mt-2 font-medium">Instantly convert integers between numeral systems</p>
        </div>
      </div>

      <div className="space-y-8 relative z-10 w-full">
        <div className="bg-black/20 p-6 rounded-2xl border border-white/5">
          <label className="block text-sm font-bold text-cyan-300 mb-3 tracking-wide uppercase">Source Integer</label>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={value}
              onChange={handleInputChange}
              placeholder="Enter number..."
              className="flex-1 bg-black/40 border-2 border-cyan-500/30 rounded-xl px-5 py-4 text-white font-mono text-xl focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all"
            />
            <select
              value={fromBase}
              onChange={(e) => setFromBase(parseInt(e.target.value))}
              className="bg-black/40 border-2 border-white/10 rounded-xl px-4 py-4 text-white font-bold appearance-none cursor-pointer focus:outline-none focus:border-cyan-400 hover:border-white/20 transition-colors sm:w-40"
            >
              <option value={2}>Base 2 (BIN)</option>
              <option value={8}>Base 8 (OCT)</option>
              <option value={10}>Base 10 (DEC)</option>
              <option value={16}>Base 16 (HEX)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {bases.map((b, idx) => {
            const converted = convertValue(b.base);
            const isValid = converted !== "Invalid input" && converted !== "Error" && value !== "";
            return (
              <div key={b.base} className="bg-black/20 p-5 rounded-2xl border border-white/5 hover:bg-black/30 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <label className={`text-xs font-bold uppercase tracking-wider ${b.className}`}>
                    {b.label}
                  </label>
                  {isValid && (
                    <button 
                      onClick={() => copyToClipboard(converted, idx)}
                      className="text-slate-500 hover:text-cyan-400 transition-colors"
                    >
                      {copiedIndex === idx ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
                <div className={`font-mono text-lg break-all ${isValid ? "text-white" : "text-slate-600"}`}>
                  {value ? converted : "0"}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
