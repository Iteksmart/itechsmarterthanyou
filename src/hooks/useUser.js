import { useState } from 'react';

export function useUser() {
  const [user] = useState({ name: 'Guest' });
  return { user, loading: false };
}
