import debounce from "lodash/debounce";
import { useRef, useEffect, useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useDebounce = <T extends (...args: Array<any>) => any>(callback: T,delay: number)  => {
    const ref = useRef<T | null>(null);
  
    useEffect(() => {
      ref.current = callback;
    }, [callback]);
  
    const debouncedCallback = useMemo(() => {
      const fn = () => {
        ref.current?.();
      };
  
      return debounce(fn, delay);
    }, [delay]);
  
    return debouncedCallback;
  };

export default useDebounce