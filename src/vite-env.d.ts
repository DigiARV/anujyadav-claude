/// <reference types="vite/client" />
import "react";
declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface HTMLAttributes<T> {
    /** React 18 has no typed `inert`; the HTML attribute is set as an empty string. */
    inert?: "" | undefined;
  }
}
