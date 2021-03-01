import React from 'react';
import Head from 'next/head';

export default function GoogleAnalytics() {
  return (
    <>
      {process.env.NODE_ENV === 'production' && process.browser ? (
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-663814183"
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag("js", new Date());

                gtag("config", "AW-663814183");`,
            }}
          />
        </Head>
      ) : null}
    </>
  );
}
