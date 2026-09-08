import { useState, useRef, useEffect, FormEvent } from 'react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Trash2 } from 'lucide-react';

export default function DevTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<Array<{ cmd: string; res: string }>>([
    {
      cmd: 'pitch',
      res: TERMINAL_COMMANDS['pitch']
    },
    {
      cmd: 'help',
      res: TERMINAL_COMMANDS['help']
    }
  ]);

  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const res = TERMINAL_COMMANDS[trimmed] || `command not found: "${trimmed}". Type "help" to see available commands.`;
    setHistory((prev) => [...prev, { cmd: trimmed, res }]);
    setInputVal('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const quickCommands = ['about', 'skills', 'projects', 'certs', 'hire', 'pitch', 'contact', 'clear'];

  return (
    <section id="terminal" className="py-20 relative border-t border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Interactive DevHQ CLI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Space_Grotesk'] text-white">
            Ghazi Terminal v2.4
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Explore Syed M Ghazi Abbas's technical stack, growth experience, and direct pitch via command line interface.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="rounded-2xl border border-white/15 bg-[#090d16] shadow-2xl shadow-cyan-950/40 overflow-hidden font-mono text-xs sm:text-sm">
          {/* Window Title Bar */}
          <div className="bg-slate-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 text-xs ml-2 font-mono hidden sm:inline">
                guest@ghazi-devhq:~ (zsh)
              </span>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="text-cyan-400 text-[11px] hidden md:inline">
                Type 'help' or click quick pills
              </span>
              <button
                onClick={() => setHistory([])}
                className="hover:text-white p-1 text-slate-500 hover:text-slate-300 transition-colors"
                title="Clear screen"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick command buttons */}
          <div className="px-4 py-2.5 bg-slate-950/60 border-b border-white/5 flex flex-wrap items-center gap-1.5 overflow-x-auto">
            <span className="text-[11px] text-slate-500 mr-1">Quick:</span>
            {quickCommands.map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-0.5 rounded-md bg-white/5 hover:bg-cyan-500/20 text-cyan-300 hover:border-cyan-500/40 border border-white/5 text-[11px] transition-all"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[300px] max-h-[460px] overflow-y-auto space-y-4 text-slate-300">
            <div className="text-slate-500 text-xs">
              Welcome to Ghazi DevHQ CLI. Type <span className="text-cyan-400">'help'</span> for system commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="text-emerald-400 font-bold">ghazi@devhq:~$</span>
                  <span className="text-white font-semibold">{item.cmd}</span>
                </div>
                <div className="text-slate-300 pl-4 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm border-l border-cyan-500/20">
                  {item.res}
                </div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold flex-shrink-0">ghazi@devhq:~$</span>
              <input
                type="text"
                id="terminal-cli-input"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. 'hire', 'projects', 'skills')..."
                className="w-full bg-transparent border-none text-white focus:outline-none placeholder:text-slate-600 font-mono text-xs sm:text-sm"
                autoComplete="off"
                spellCheck="false"
              />
              <button type="submit" className="text-slate-500 hover:text-cyan-400">
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>

            <div ref={terminalEndRef} />
          </div>
        </div>

      </div>
    </section>
  );
}
