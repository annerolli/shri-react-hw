'use client';

import { useState } from 'react';

export function useAccordion() {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setIsVisible((state) => !state);

  return { isVisible, toggle };
}
