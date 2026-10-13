import { Navigate, useLocation } from 'react-router-dom'; import { useAuth } from '@/store/auth.store'; import type { Role } from '@/types'; import { can } from '@/config/permissions';
export const ProtectedRoute=({children}:{children:React.ReactNode})=>{const {user}=useAuth(); const loc=useLocation(); return user?children:<Navigate to={`/login?return=${encodeURIComponent(loc.pathname)}`} replace/>};
export const GuestGuard=({children}:{children:React.ReactNode})=>{const {user}=useAuth(); return user?<Navigate to={user.role==='admin'?'/admin':'/dashboard'} replace/>:children};
export const RoleGuard=({roles,children}:{roles:Role[];children:React.ReactNode})=><ProtectedRoute>{(()=>{const {user}=useAuth(); return user&&roles.includes(user.role)?children:<Navigate to='/403' replace/>})()}</ProtectedRoute>;
export const PermissionGuard=({permission,children}:{permission:string;children:React.ReactNode})=>{const {user}=useAuth(); return user&&can(user.role,permission)?children:<Navigate to='/403' replace/>};
export const TenantGuard=({children}:{children:React.ReactNode})=><ProtectedRoute>{children}</ProtectedRoute>;
