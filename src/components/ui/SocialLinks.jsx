import React from 'react';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com/aaabadcode',
    ariaLabel: 'GitHub',
    path: <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.078.069-.078 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/YOUR_USERNAME', 
    ariaLabel: 'LinkedIn',
    path: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  }
];

export default function SocialLinks({ className = "flex items-center gap-4", iconSize = "w-6 h-6" }) {
  return (
    <div className={className}>
      {SOCIAL_LINKS.map(({ name, href, ariaLabel, path }) => (
        <a 
          key={name}
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-neutral-900 dark:text-zinc-400 dark:hover:text-white transition duration-200"
          aria-label={ariaLabel}
        >
          <svg className={`${iconSize} fill-current`} viewBox="0 0 24 24">
            {path}
          </svg>
        </a>
      ))}
    </div>
  );
}