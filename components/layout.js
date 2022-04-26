import Head from "next/head";
import Footer from "./footer";
import NaviBar from "./navibar";
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2507406732896466"
          crossOrigin="anonymous"
        ></script>
        <link rel="icon" href="/kanaryasokagi.ico" />
      </Head>
      <div className="md:container md:mx-auto xl:px-44 bg-transparent">
        <div className="bg-white">
          <div>
            <NaviBar />
          </div>
          {children}
          <div className="block">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
