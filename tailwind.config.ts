import type { Config } from 'tailwindcss';
export default { darkMode:'class', content:['./index.html','./src/**/*.{ts,tsx}'], theme:{ extend:{
 colors:{ brand:{ lime:'#90d833', violet:'#8f39fa', blue:'#0b80e6', purple:'#703fed', cyan:'#0f8dcf' }, success:'#22c55e', warning:'#f59e0b', error:'#ef4444', info:'#0b80e6' },
 backgroundImage:{ 'brand-gradient':'linear-gradient(135deg,#90d833 0%,#0b80e6 45%,#703fed 75%,#8f39fa 100%)', 'brand-soft':'linear-gradient(135deg,rgba(144,216,51,.14),rgba(11,128,230,.12),rgba(143,57,250,.14))' },
 fontFamily:{ sans:['Inter','system-ui','sans-serif'], display:['"Plus Jakarta Sans"','Inter','sans-serif'], mono:['"JetBrains Mono"','monospace'] },
 boxShadow:{ brand:'0 8px 24px -8px rgba(143,57,250,.35)', 'brand-lg':'0 16px 48px -12px rgba(112,63,237,.45)', soft:'0 4px 24px -6px rgba(15,23,42,.08)' },
 borderRadius:{ xl:'12px','2xl':'16px' },
 keyframes:{ shimmer:{'0%':{backgroundPosition:'-200% 0'},'100%':{backgroundPosition:'200% 0'}}, float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-14px)'}}, 'gradient-x':{'0%,100%':{backgroundPosition:'0% 50%'},'50%':{backgroundPosition:'100% 50%'}}, marquee:{from:{transform:'translateX(0)'},to:{transform:'translateX(-50%)'}} },
 animation:{ shimmer:'shimmer 1.6s linear infinite', float:'float 6s ease-in-out infinite', 'gradient-x':'gradient-x 8s ease infinite', marquee:'marquee 28s linear infinite' }
}}, plugins:[require('tailwindcss-animate'), require('@tailwindcss/forms'), require('@tailwindcss/typography')] } satisfies Config;