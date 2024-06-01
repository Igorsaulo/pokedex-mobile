import styled from "styled-components";
import theme from "@/app/shared/styles/theme";

declare module "styled-components" {
    type ThemeType = typeof theme;
    export interface DefaultTheme extends ThemeType {}
}
