import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--m3-title-small: Roboto;

/* font sizes */
--font-size-9xl: 28px;
--m3-body-small-size: 12px;
--m3-body-large-size: 16px;
--m3-title-small-size: 14px;
--m3-title-large-size: 22px;
--m3-label-small-size: 11px;
--font-size-lg: 18px;

/* Colors */
--schemes-surface: #fef7ff;
--schemes-surface-container-low: #f7f2fa;
--schemes-surface-container: #f3edf7;
--schemes-outline-variant: #cac4d0;
--schemes-surface-container-lowest: #fff;
--schemes-outline: #79747e;
--schemes-on-secondary-container: #1d192b;
--schemes-on-surface: #1d1b20;
--schemes-on-surface-variant: #49454f;
--schemes-surface-container-high: #ece6f0;
--schemes-primary-container: #eaddff;
--schemes-secondary-container: #e8def8;
--schemes-tertiary-container: #ffd8e4;
--color-thistle: #cfc4de;
--schemes-secondary: #625b71;
--schemes-shadow: #000;

/* Spacing */
--corner-extra-large: 28px;
--corner-large: 16px;

/* Gaps */
--gap-9xs: 4px;
--gap-4xs: 9px;
--gap-21xl: 40px;
--gap-xs: 12px;
--gap-5xs: 8px;
--gap-5xl: 24px;
--gap-base: 16px;
--gap-3xs: 10px;

/* Paddings */
--padding-8xs: 5px;
--padding-base: 16px;
--padding-5xl: 24px;
--padding-9xl: 28px;
--padding-5xs: 8px;
--padding-xs: 12px;
--padding-25xl: 44px;
--padding-37xl: 56px;
--padding-11xs: 2px;
--padding-9xs: 4px;
--padding-7xs: 6px;
--padding-10xs-8: 2.8px;
--padding-11xs-2: 1.2px;
--padding-6xs: 7px;
--padding-8xs-3: 4.3px;
--padding-mini: 15px;
--padding-xl: 20px;
--padding-3xs: 10px;
--padding-lg: 18px;
--padding-21xl: 40px;

/* Border radiuses */
--br-lg: 18px;
--br-9xl: 28px;
--br-xs: 12px;
--br-81xl: 100px;
--br-base: 16px;
--br-90xl-1: 109.1px;
--br-27xl-1: 46.1px;
--br-xl: 20px;
--br-5xs: 8px;

/* Effects */
--m3-elevation-light-1: 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
--m3-elevation-light-3: 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3);
}
`;
