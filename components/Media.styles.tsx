export const size = {
    s: 480,
    sm: 768,
    m: 992,
    l: 1280,
    xl: 1440,
};

export const device = {
    s: `(max-width: ${size.sm-1}px)`,
    sm: `(min-width: ${size.sm}px)`,
    smStrict: `(min-width: ${size.sm}px) and (max-width: ${size.m-1}px)`,
    m: `(min-width: ${size.m}px)`,
    l: `(min-width: ${size.l}px)`,
    xl: `(min-width: ${size.xl}px)`,
};
