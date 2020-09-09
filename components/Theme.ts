import { generateKeyPair } from "crypto";

const colorsBase = {
    background: '#fcfcfc',
    primary: '#336b87',
    primaryTint: '#90afc5',
    secondary: '#90afc5',
    gray: '#cccccc',
    grayDim: '#eeeeee',
    grayDark: '#666666',
    text: '#333333',
    black: '#000000',
    textWhite: '#ffffff',
    textWhiteDim: '#dddddd',
    shadow: "#2A3132",
};

const colorsSemantic = {
    ribbon: colorsBase.textWhite,
    ribbonText: colorsBase.primary,
    actionBlock: colorsBase.secondary,
    actionBlockText: colorsBase.primary,
    prosHighlight: colorsBase.primaryTint,
    prosHighlightText: colorsBase.textWhite,
    primaryButton: colorsBase.primary,
    primaryButtonText: colorsBase.textWhite,
    separator: colorsBase.grayDim,
    footerBackground: colorsBase.shadow,
    tableHeader: colorsBase.gray,
};

export const theme = {
    colors: { ...colorsBase, ...colorsSemantic },
};

export type colorFn = (x: typeof theme.colors) => string;

export const themeColor = (colorExtr: colorFn) => (props) => colorExtr(props.theme.colors);
