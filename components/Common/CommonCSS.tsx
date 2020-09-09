import { css } from 'styled-components';

import { themeColor } from '../Theme';
import { HeaderHeight } from './Common.styles';

export const CommonCSS = css`
    @font-face {
        font-family: 'Exo2';
        src: url('/fonts/Exo2-VariableFont_wght.ttf');
    }

    @font-face {
        font-family: 'OpenSans';
        src: url('/fonts/opensans/OpenSans-Regular.ttf');
        font-weight: normal;
    }
    @font-face {
        font-family: 'OpenSans';
        src: url('/fonts/opensans/OpenSans-SemiBold.ttf');
        font-weight: 500;
    }

     body {
         background: ${themeColor(c => c.background)};
         font-family: OpenSans;
         color: ${themeColor(c => c.text)};
         font-size: 20px;
     }

     h1, h2, h3 {
         font-family: Exo2;
         font-variation-settings: 'wght' 400;
         color: ${themeColor(c => c.primary)};
     }

     h1 {
         font-size: 1.5em;
     }
     h2 {
         font-size: 1.2em;
     }
     h3 {
         font-size: 1.1em;
     }

     a {
         color: ${themeColor(c => c.primary)};
         text-decoration: none;
         font-weight: bold;
     }

     html, body {
        padding: 0;
        margin: 0;
        min-height: 100vh;

        & > #__next {
            min-height: 100%;
        }
    }

    body {
        padding-top: ${HeaderHeight}px;
    }

    html {
        scroll-behavior: smooth;
    }
        
    * {
        box-sizing: border-box;
    }
`;