import { clsx, type ClassValue } from 'clsx'; import { twMerge } from 'tailwind-merge'; import { format } from 'date-fns';
export const cn=(...i:ClassValue[])=>twMerge(clsx(i));
export const currency=(v:number,c='USD')=>new Intl.NumberFormat('en-US',{style:'currency',currency:c}).format(v);
export const fmtDate=(d:string|Date)=>format(new Date(d),'MMM d, yyyy');
export const fmtNum=(v:number)=>new Intl.NumberFormat('en-US',{notation:'compact'}).format(v);
export const slugify=(s:string)=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const uid=()=>Math.random().toString(36).slice(2,10);
