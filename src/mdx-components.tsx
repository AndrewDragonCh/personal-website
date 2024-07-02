import type { MDXComponents } from "mdx/types";
// import React from 'react';

// const h1 = ({ children }: { children: React.ReactNode }) => (
//   <h1 className="text-4xl font-bold">{children}</h1>
// );

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: h1,
    ...components,
  };
}