import React, { Suspense, lazy, ComponentType } from 'react';

type LazyImport<T extends ComponentType> = () => Promise<{ default: T }>;

/**
 * A component that lazily loads another component with Suspense
 * @param props - The component to be lazily loaded
 * @returns A Suspense wrapper around the lazy-loaded component
 */
const SuspenseLazy = <T extends ComponentType>(props: LazyImport<T>) => {
  return (
    <Suspense fallback={<>...</>}>{React.createElement(lazy(props))}</Suspense>
  );
};

export default SuspenseLazy;
