import axios, { AxiosError } from 'axios'; import { v4 as uuid } from 'uuid'; import { toast } from 'sonner'; import { ApiError } from '@/types/api.types'; import { env } from '@/config/env';
let getToken:()=>string|null=()=>localStorage.getItem('shopline-token'); let getStore:()=>string|null=()=>null; let getLang:()=>string=()=>'en'; let onLogout:()=>void=()=>{};
export const bindAxios=(o:{getToken:typeof getToken;getStore:typeof getStore;getLang:typeof getLang;onLogout:typeof onLogout})=>{getToken=o.getToken;getStore=o.getStore;getLang=o.getLang;onLogout=o.onLogout};
export const api=axios.create({ baseURL: env.VITE_API_URL, timeout:15000, headers:{'Content-Type':'application/json'} });
let refreshing:Promise<string>|null=null;
api.interceptors.request.use(c=>{ const t=getToken(); if(t) c.headers.Authorization=`Bearer ${t}`; const s=getStore(); if(s) c.headers['X-Store-Slug']=s; c.headers['X-Request-Id']=uuid(); c.headers['Accept-Language']=getLang(); return c; });
api.interceptors.response.use(r=>r, async (err:AxiosError<{message?:string;errors?:unknown}>)=>{ const status=err.response?.status; const orig=err.config as typeof err.config & {_retry?:boolean};
 if(status===401 && orig && !orig._retry){ orig._retry=true; try{ if(!refreshing) refreshing=api.post('/auth/refresh').then(r=>r.data?.data?.access_token as string).finally(()=>{refreshing=null}); const nt=await refreshing; if(nt&&orig.headers) orig.headers.Authorization=`Bearer ${nt}`; return api(orig);}catch{ onLogout(); if(location.pathname!=='/login') location.href='/login'; } }
 if(status===403) toast.error('Permission denied — you do not have access to this resource.');
 if(status===500) toast.error('Something went wrong on our side. Please try again.');
 throw extractApiError(err); });
export function extractApiError(e:unknown):ApiError{ if(e instanceof ApiError) return e; const ax=e as AxiosError<{message?:string;errors?:unknown}>; return new ApiError(ax.response?.data?.message ?? ax.message ?? 'Network error', ax.code ?? 'API_ERROR', ax.response?.status, ax.response?.data?.errors); }
