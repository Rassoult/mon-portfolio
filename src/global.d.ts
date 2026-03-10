// global shim for JSX and other untyped imports
// allows the project to compile without installed type packages

declare namespace JSX {
  // minimal definitions so the compiler can handle JSX without React typings
  type Element = any;
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare namespace React {
  // treat ReactNode as any so JSX components remain usable
  type ReactNode = any;
}

declare module "*.png";
declare module "framer-motion";
