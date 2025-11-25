import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthContext';

export type AppRole = 'doctor' | 'lab_tech' | 'patient' | 'researcher' | 'insurance_admin' | 'auditor';

interface RoleContextType {
  currentRole: AppRole | null;
  userRoles: AppRole[];
  setCurrentRole: (role: AppRole) => void;
  hasRole: (role: AppRole) => boolean;
  loading: boolean;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [currentRole, setCurrentRole] = useState<AppRole | null>(null);
  const [userRoles, setUserRoles] = useState<AppRole[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchUserRoles();
    } else {
      setUserRoles([]);
      setCurrentRole(null);
      setLoading(false);
    }
  }, [user]);

  const fetchUserRoles = async () => {
    if (!user) return;

    setLoading(true);
    const { data, error } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id);

    if (error) {
      console.error('Error fetching user roles:', error);
      setLoading(false);
      return;
    }

    const roles = data.map(r => r.role as AppRole);
    setUserRoles(roles);
    
    // Set first role as default
    if (roles.length > 0 && !currentRole) {
      setCurrentRole(roles[0]);
    }
    
    setLoading(false);
  };

  const hasRole = (role: AppRole) => userRoles.includes(role);

  return (
    <RoleContext.Provider value={{ currentRole, userRoles, setCurrentRole, hasRole, loading }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRole must be used within a RoleProvider');
  }
  return context;
};
