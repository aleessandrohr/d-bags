import "styled-components";

import { dark } from "./themes/dark";
import { light } from "./themes/light";

export type Theme = typeof light & typeof dark;

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
