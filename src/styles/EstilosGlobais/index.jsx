import { createGlobalStyle } from "styled-components";

import MontserratRegular from "./fontes/Montserrat-Regular.ttf";
import MontserratBold from "./fontes/Montserrat-Bold.ttf";
import MontserratThin from "./fontes/Montserrat-Thin.ttf"

const EstilosGlobais = createGlobalStyle`

    @font-face {
    font-family: 'MontserratRegular';
    src: local('Montserrat-Regular'), local('MontserratRegular'), url(${MontserratRegular});
    }
    @font-face {
    font-family: 'MontserratBold';
    src: local('Montserrat-Bold'), local('MontserratBold'), url(${MontserratBold});
    }
    @font-face {
    font-family: 'MontserratThin';
    src: local('Montserrat-Thin'), local('MontserratThin'), url(${MontserratThin});
    }
    
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

`;

export default EstilosGlobais
