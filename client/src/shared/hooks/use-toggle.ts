'use client';

import { useCallback, useState } from 'react';

export function useToggle() {
  const [isOn, setIsOn] = useState(false);

  const on = useCallback(() => setIsOn(true), []);
  const off = useCallback(() => setIsOn(false), []);
  const toggle = useCallback(() => setIsOn((state) => !state), []);

  return { isOn, on, off, toggle };
}
