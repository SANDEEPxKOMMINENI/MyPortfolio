// Analytics utility for tracking resume interactions
export const trackResumeInteraction = (action: 'view' | 'download') => {
  try {
    // You can integrate with Google Analytics or other analytics services here
    if (typeof window !== 'undefined' && 'gtag' in window) {
      // @ts-ignore
      window.gtag('event', `resume_${action}`, {
        event_category: 'Resume',
        event_label: `Resume ${action} - ${new Date().toISOString()}`
      });
    }
  } catch (error) {
    console.error('Analytics error:', error);
  }
};