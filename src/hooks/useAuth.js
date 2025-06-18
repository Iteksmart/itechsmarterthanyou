import { useState } from 'react';

export function useAuth() {
  const [isAuthenticated] = useState(false);
  return {
    isAuthenticated,
    login: () => console.log('login'),
    logout: () => console.log('logout'),
  };
}
