import { create } from 'zustand'; import { persist } from 'zustand/middleware'; import type { User } from '@/types';
interface S{user:User|null;token:string|null;login:(u:User)=>void;logout:()=>void}
export const useAuth=create<S>()(persist((set)=>({user:null,token:null,login:(u)=>set({user:u,token:'demo-'+Date.now()}),logout:()=>set({user:null,token:null})} ),{name:'shopline-auth'}));
