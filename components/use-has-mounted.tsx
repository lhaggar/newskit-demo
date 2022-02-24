import { useState, useEffect } from 'react';

// Avilable in Newskit but not exported
export default () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};
