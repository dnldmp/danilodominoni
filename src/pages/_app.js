import '../../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Danilo Dominoni</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="author" content="Danilo Dominoni" />
                <meta name="description" content="Danilo Dominoni - Desenvolvedor de sistemas - Programação Web e Apps." />
                <meta name="keywords" content="desenvolvimento web,seo,programação,portifólio,web design,front-end,web developer,back-end" />
                <meta name="robots" content="index,follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta property="og:title" content="Danilo Dominoni"/>
                <meta property="og:site_name" content="Danilo Dominoni"/>
                <meta property="og:description" content="Danilo Dominoni - Desenvolvedor de sistemas - Programação Web e Apps."/>
                <meta property="og:url" content="https://danilodominoni.com"/>
                <meta property="og:image" content="https://danilodomiononi.com/danilodominoni.png"/>
                <meta property="og:image:type" content="image/png"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
  
export default MyApp