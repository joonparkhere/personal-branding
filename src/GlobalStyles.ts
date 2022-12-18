import { createGlobalStyle } from "styled-components";
import { themedPalette, themes } from "./lib/themes";

const GlobalStyles = createGlobalStyle`
    body {
        color: ${themedPalette.text1};
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    * {
        box-sizing: inherit;
    }
    
    code {
        font-family: 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    }
    
    input, button, textarea {
        font-family: inherit;
    }
    
    html, body, #root {
        height: 100%;
    }
    
    body {
        ${themes.light};
    }
    
    @media (prefers-color-scheme: dark) {
        body {
            ${themes.dark};
        }
    }
    
    body[data-theme="light"] {
        ${themes.light};
    }
    
    body[data-theme="dark"] {
        ${themes.dark};
    }
`;

export default GlobalStyles;
