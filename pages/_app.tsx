import App from 'next/app'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from '../components/Theme';
import { CommonCSS } from '../components/Common/CommonCSS';

const GlobalStyle =  createGlobalStyle`
    ${CommonCSS}    
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    )
  }
}
