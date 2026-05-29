import React from 'react';

export function InteractiveTerminal({ username }) {
  return (
    <div className="bg-[#050507] rounded-xl p-5 border border-neutral-200 dark:border-zinc-900 shadow-lg font-mono text-xs text-zinc-400">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
        <span className="text-[10px] text-zinc-600 ml-2">terminal</span>
      </div>
      <div className="space-y-3">
        <div>
          <span className="text-cyan-500">$</span> whoami
          <p className="text-zinc-300 mt-0.5">&gt; {username}</p>
        </div>
        <div>
          <span className="text-cyan-500">$</span> cat skills.txt
          <p className="text-zinc-300 mt-0.5">&gt; laravel, react.js, wordpress, python, django, rest-api, mysql</p>
        </div>
        <div>
          <span className="text-cyan-500">$</span> echo $STATUS
          <p className="text-emerald-400 mt-0.5">&gt; building the future</p>
        </div>
      </div>
    </div>
  );
}