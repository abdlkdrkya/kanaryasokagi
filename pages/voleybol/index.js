import Head from "next/head";
import Layout from "../../components/layout";
import { Grid, Image, Card } from "semantic-ui-react";
import AdSense from "react-adsense";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import useInView from "react-cool-inview";
import SwiperCore, {
  Autoplay,
  Navigation,
  Thumbs,
  Pagination,
  Keyboard,
} from "swiper";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import {
  absoluteUrl,
  getAppCookies,
  verifyToken,
} from "../../middleware/utils";
SwiperCore.use([Autoplay, Navigation, Thumbs, Pagination, Keyboard]);
import dynamic from "next/dynamic";
const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../components/haberComp"),
  { loading: () => <p>...</p> }
);
export default function VoleybolHaberleri({ voleybolKategori, profile }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null),
 { observe: observe, inView: inView } = useInView({
    onEnter: ({ unobserve: unobserve }) => unobserve(),
  }),
  { observe: observe2, inView: inView2 } = useInView({
    onEnter: ({ unobserve: unobserve2 }) => unobserve2(),
  }),
    { status: status, user: user } = useContext(AuthContext);
  useEffect(() => {
    let leg;
    void 0 !== profile.email
      ? (user.setUserDetails({
          id: profile.id,
          email: profile.email,
          username: profile.username,
          firstname: profile.firstname,
          lastname: profile.lastname,
          roleId: profile.roleId,
          profile: profile.profile,
          isBanned: profile.isBanned,
        }),
        status.setLoggedIn(!0))
      : status.setLoggedIn(!1);
  }, [profile]);
  return (
    <Layout>
      <Head>
        <title>
          Kanaryasokağı - Fenerbahçe SK Voleybol Takımlarına dair en güncel, en
          hızlı haberler!
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Kanaryasokağı - Fenerbahçe SK Voleybol Takımlarına dair en güncel, en hızlı haberler!"
        />
        <meta
          name="description"
          content="Fenerbahçe Voleybol Takımı son dakika transfer haberleri, son dakika haberleri ve tüm güncel haberler"
        />
        <meta
          name="keywords"
          content="kanaryasokağı, voleybol haberleri, fenerbahçe haberleri, fenerbahçe voleybol haberleri, fenerbahçe voleybol fikstur, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri,voleybol sultanlar ligi,voleybol efeler ligi,axa sigorta efeler ligi,efeler ligi voleybol,axa efeler ligi,sultanlar ligi voleybol,sultanlar voleybol ligi,sultanlar,voleybol,efeler ligi fenerbahçe,axa sigorta voleybol,voleybol,sultanlar,fenerbahçe efeler ligi,axa voleybol,voleybol axa sigorta efeler ligi,axa sigorta voleybol ligi,voleybol ligi efeler"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link rel="canonical" href="https://kanaryasokagi.com/voleybol" />
      </Head>
      <div>
        <main>
          <div className="px-0">
            <div className="mb-2 mt-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="6205173516"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
            </div>
            <Grid centered>
              <Grid.Row>
                <Grid.Column>
                  <div className="w-full">
                    <Swiper
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      modules={[Thumbs]}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="h-full w-full"
                      keyboard={{
                        enabled: true,
                      }}
                    >
                      {voleybolKategori.data.slice(0, 5).map((haber) => (
                        <SwiperSlide key={haber.haberId}>
                          <Link
                            href={{
                              pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                            }}
                          >
                            <a target="_blank">
                              <Image
                                fluid
                                alt={haber.haberBaslik}
                                src={haber.haberAnasayfaResim}
                              />
                            </a>
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="w-full px-0">
                    <Swiper
                      modules={[Thumbs]}
                      freeMode={true}
                      watchSlidesProgress={true}
                      onSwiper={setThumbsSwiper}
                      loop={false}
                      spaceBetween={1}
                      slidesPerView={5}
                      autoplay={false}
                      className="mt-2 h-14 sm:h-16 md:h-20 lg:h-24 xl:h-32"
                      id="swiperThumbs"
                    >
                      {voleybolKategori.data.slice(0, 5).map((haber) => (
                        <SwiperSlide
                          key={haber.haberId}
                          className="opacity-70  filter grayscale-70 active:filter-none active:opacity-100"
                        >
                          <Image
                            fluid
                            alt={haber.haberBaslik}
                            src={haber.haberAnasayfaResim}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className="mb-2 mt-2">
                  <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="4508948465"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <div className="space-y-4">
                    {voleybolKategori.data.slice(5, 6).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}<div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="8631800964"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    {voleybolKategori.data.slice(6, 10).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid.Column>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <div className="space-y-4">
                    {voleybolKategori.data.slice(10, 12).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}<div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="9220642681"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    {voleybolKategori.data.slice(12, 15).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid.Column>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <div className="space-y-4">
                    {voleybolKategori.data.slice(15, 18).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}<div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="3835797526"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    {voleybolKategori.data.slice(18, 20).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a target="_blank">
                            <div>
                              <Card fluid>
                                <Image
                                  fluid
                                  src={haber.haberAnasayfaResim}
                                  alt={haber.haberBaslik}
                                />
                              </Card>
                            </div>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="mt-2 mb-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="8779365960"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
            </div>
            <div ref={observe}>
              {inView && (
                <Grid centered style={{ marginTop: 4 }}>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(20, 21)}
                    /><div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="1917169057"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(21, 25)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(25, 27)}
                    /><div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="3688759181"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(27, 30)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(30, 34)}
                    /><div
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="6840508465"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(34, 35)}
                    />
                  </Grid.Column>
                </Grid>
              )}
            </div>
            <div className="mt-2 mb-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="6560396737"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
            </div>
            <div ref={observe2}>
              {inView2 && (
                <Grid centered style={{ marginTop: 4 }}>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(35, 40)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(40, 45)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(45, 50)}
                    />
                  </Grid.Column>
                </Grid>
              )}
            </div>
            <div className="mb-2 mt-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="5055743373"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req: req } = context,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = `/api/about`,
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";
  const voleybolKategoriRes = await fetch(
      "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=3"
    ),
    voleybolKategori = await voleybolKategoriRes.json();
  return voleybolKategori
    ? {
        props: {
          voleybolKategori: voleybolKategori,
          baseApiUrl: baseApiUrl,
          profile: profile,
        },
      }
    : { notFound: !0 };
}
