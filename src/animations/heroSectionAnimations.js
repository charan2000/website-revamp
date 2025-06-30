// Animation variants - defined outside to prevent recreation
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// Common animation props
export const commonTransition = {
  duration: 0.4, // Reduced from 0.8 for snappier animations
};
