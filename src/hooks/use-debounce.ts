import debounce from "lodash/debounce";
import { useRef, useEffect, useMemo } from "react";

export const useDebounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, delay: number) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const fn = (...args: Parameters<T>) => {
      ref.current?.(...args);
    };

    return debounce(fn, delay);
  }, [delay]);

  return debouncedCallback;
};
