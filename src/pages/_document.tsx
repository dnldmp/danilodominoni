import Document, { Html, Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <GoogleAnalytics />
          <link
            rel="shortcut icon"
            href="danilodominoni.png"
            type="image/png"
          />
          <meta name="author" content="Danilo Dominoni" />
          <meta
            name="description"
            content="Danilo Dominoni - Desenvolvedor de sistemas - Programação Web e Apps."
          />
          <meta
            name="keywords"
            content="desenvolvimento web,seo,programação,portifólio,web design,front-end,web developer,back-end"
          />
          <meta name="robots" content="index,follow" />
          <meta name="yandex-verification" content="858220c6447b1efe" />
          <meta property="og:title" content="Danilo Dominoni" />
          <meta property="og:site_name" content="Danilo Dominoni" />
          <meta
            property="og:description"
            content="Danilo Dominoni - Desenvolvedor de sistemas - Programação Web e Apps."
          />
          <meta property="og:url" content="https://danilodominoni.com" />
          <meta
            property="og:image"
            content="https://danilodomiononi.com/aboutme.jpg"
          />
          <meta property="og:image:type" content="image/jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
