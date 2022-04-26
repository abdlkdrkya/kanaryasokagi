import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";
import { useRouter } from "next/router";
import { useDetectAdBlock } from "adblock-detect-react";
import * as gtag from "../lib/gtag";
import "swiper/css";
import "swiper/css/bundle";
import AuthProvider from "../contexts/AuthProvider";
import { Icon, Modal } from "semantic-ui-react";
function MyApp({ Component, pageProps }) {
  const adBlockDetected = useDetectAdBlock();
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    return (
      router.events.on("routeChangeComplete", handleRouteChange),
      () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      }
    );
  }, [router.events]);
  return (
    <>
      <div className="bg-gray" profile={pageProps.profile}>
        <Head>
          <title>
            Kanaryasokağı - Fenerbahçe SK Takımının tüm branşlarına dair en
            güncel, en hızlı haberler!
          </title>
          <meta name="yandex-verification" content="4c0d7467a5f4b57c" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="title"
            content="Kanaryasokağı - Fenerbahçe SK Takımının tüm branşlarına dair en güncel, en hızlı haberler"
          />
          <meta
            name="description"
            content="Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
          />
          <meta
            name="keywords"
            content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, fenerbahçe opet"
          />
          <meta name="revisit-after" content="3 days" />
          <link rel="icon" href="/kanaryasokagi.ico" />
          <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        </Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <AuthProvider>
          {adBlockDetected && (
            <Modal
              open={adBlockDetected}
              size="tiny"
            >
              <Modal.Header className="text-center"><Icon name="ban" color="red"/><span className="font-poppins font-bold">Adblock Tespit Edildi!</span></Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <p className="font-poppins font-semibold px-6">{"Fenerbahçe'ye dair en doğru ve güncel haberleri size sunabilmek için reklam gelirleri bizim için önemli."}</p><br/><br/><p className="mt-4 px-6 font-poppins font-extrabold text-center text-xl">{"Lütfen Adblock'u kapatıp öyle giriniz."}</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          )}
          <Component {...pageProps} />
        </AuthProvider>
      </div>
    </>
  );
}

export default MyApp;
