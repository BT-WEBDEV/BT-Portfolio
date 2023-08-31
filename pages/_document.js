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

            {/* <!-- Google Tag Manager --> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-K2FVJ57P');`,
              }}
            />

            {/* <!-- Google tag (gtag.js) --> */}
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-LFW219BTEH" />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-LFW219BTEH');`,
              }}
            />

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

            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K2FVJ57P" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
              }}
            />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
  