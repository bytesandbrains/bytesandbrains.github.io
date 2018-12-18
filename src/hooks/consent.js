import { useEffect, useState } from "react";

let listeners = [];
const writeConsent = value => {
  localStorage.setItem('consent', JSON.stringify(value))
  window['ga-disable-UA-115579130-1'] = !value;
  listeners.forEach(cb => cb());
};
const readConsent = () => JSON.parse(localStorage.getItem('consent'));

export function useConsent() {
  const [consent, setConsent] = useState(readConsent());
  const updateConsent = () => setConsent(readConsent());
  useEffect(() => {
    listeners.push(updateConsent)
    window.addEventListener('storage', updateConsent)
    return () => {
      listeners = listeners.filter(l => l !== updateConsent)
      window.removeEventListener('storage', updateConsent)
    }
  })

  function toggleConsent() {
    writeConsent(!consent);
    updateConsent();
  }

  return [consent, toggleConsent];
}
