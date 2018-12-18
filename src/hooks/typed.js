import { useEffect } from "react";
import Typed from "typed.js";

export default function useTyped(ref, options) {
  useEffect(() => {
    const typed = new Typed(ref.current, options);
    return () => {
      typed.destroy();
    };
  });
}
