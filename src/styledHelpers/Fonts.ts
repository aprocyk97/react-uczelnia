import { createGlobalStyle } from "styled-components";
import RobotoWoff from '../media/fonts/robotoLatin/roboto-latin-regular.woff';
import RobotoWoff2 from '../media/fonts/robotoLatin/roboto-latin-regular.woff2';

export const Fonts = createGlobalStyle`
    /* roboto-regular - latin */
    @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: 
        url(${RobotoWoff2}) format('woff2'), /* Super Modern Browsers */
        url(${RobotoWoff}) format('woff'), /* Modern Browsers */

}
`;
export const GlobalFont = createGlobalStyle`
    body{
        font-family: 'Roboto', sans-serif;
    }
`;