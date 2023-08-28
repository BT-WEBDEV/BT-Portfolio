import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
    }
  
    render() {
    const setInitialTheme = `
    function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
            return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
                    ? 'dark'
                    : 'light'
        }
    document.body.dataset.theme = getUserPreference();
    `;
      return (
        <Html>
          <Head >
            {/* Fancybox CSS */}
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
            />
            {/* Fancybox JS */}
            <Script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js" />
          </Head>
          <body>
            <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  