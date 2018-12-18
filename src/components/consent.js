import React from "react";
import { useConsent } from "../hooks/consent.js";

export default () => {
  const [consent, toggleConsent] = useConsent();
  return (
    <p>
      <label>
        <input checked={consent} onChange={toggleConsent} type="checkbox" />
        Allow cookies
      </label>
    </p>
  );
};
