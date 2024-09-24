import React, { useEffect, useState } from 'react';

export function useAsyncInitialize<T>(func: () => Promise<T>, deps: React.DependencyList = []) {
  const [state, setState] = useState<T | undefined>();
  useEffect(() => {
    (async () => {
      setState(await func());
    })();
  }, deps);

  return state;
}