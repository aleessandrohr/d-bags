import "styled-components";

import Light from "./themes/light";

export type Theme = typeof Light;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
