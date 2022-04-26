import Head from "next/head";
import Image1 from "next/image";
import Layout from "../components/layout";
import Link from "next/link";
import useInView from "react-cool-inview";
import { Grid, Image, Card } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AdSense from "react-adsense";
import SwiperCore, {
  Autoplay,
  Navigation,
  Thumbs,
  Pagination,
  Keyboard,
} from "swiper";
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
SwiperCore.use([Autoplay, Navigation, Thumbs, Pagination, Keyboard]);
import dynamic from "next/dynamic";
const DynamicComponentWithCustomLoading = dynamic(() =>
  import("../components/haberComp")
);
export default function Home({
  futbolFikstur,
  haberler,
  basketbolKategori,
  futbolKategori,
  puanDurumu,
  profile,
  voleybolKategori,
}) {
  const { observe: observe, inView: inView } = useInView({
      onEnter: ({ unobserve: unobserve }) => unobserve(),
    }),
    { observe: observe2, inView: inView2 } = useInView({
      onEnter: ({ unobserve: unobserve }) => unobserve(),
    }),
    { status: status, user: user } = useContext(AuthContext),
    [fiksturSlider, setFiksturSlider] = useState(0),
    [puanDurumuSlider, setPuanDurumuSlider] = useState(20),
    [fiksturGroupSlider, setFiksturGroupSlider] = useState(0),
    [puanDurumuGroupSlider, setPuanDurumuGroupSlider] = useState(20),
    [thumbsSwiper, setThumbsSwiper] = useState(null),
    [kadro, setKadro] = useState({ futbol: !0, basketbol: !1, voleybol: !1 }),
    [kadroCinsiyet, setKadroCinsiyet] = useState({ erkek: !0, kadın: !1 });
  useEffect(() => {
    const scrollHandler = () => {
      window.innerWidth < 950
        ? (setFiksturSlider(1),
          setFiksturGroupSlider(1),
          setPuanDurumuSlider(4),
          setPuanDurumuGroupSlider(4))
        : window.innerWidth >= 950 && window.innerWidth < 1230
        ? (setFiksturSlider(2),
          setFiksturGroupSlider(2),
          setPuanDurumuSlider(8),
          setPuanDurumuGroupSlider(8))
        : window.innerWidth >= 1230 && window.innerWidth < 1861
        ? (setFiksturSlider(3),
          setFiksturGroupSlider(3),
          setPuanDurumuSlider(12),
          setPuanDurumuGroupSlider(12))
        : window.innerWidth >= 1861 &&
          window.innerWidth < 3400 &&
          (setFiksturSlider(4),
          setFiksturGroupSlider(4),
          setPuanDurumuSlider(20));
    };
    return (
      window.addEventListener("resize", scrollHandler),
      scrollHandler(),
      () => {
        window.removeEventListener("resize", scrollHandler);
      }
    );
  }, []),
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
          Kanaryasokağı l Fenerbahçeye dair en güncel, en hızlı haberler!
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Kanaryasokağı - SON DAKİKA FENERBAHÇE HABERLERİ"
        />
        <meta
          name="description"
          content="Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
        />
        <meta
          name="keywords"
          content="kanaryasokağı, süperfb com tr,fenerbahçe portalı,fenerbahçe haber a spor,son dakika fb transfer haberleri 2021,son dakika fenerbahçe transfer haberleri a spor,fenerbahçe spor kulübü resmi sitesi,fb transfer haberleri a spor,fb de son durum,en son fenerbahçe transfer haberleri,fenerbahçe futbol kulübü
          fenerbahçe yeni,fenerbahçe com tr,fenerbahçe transfer haberleri sporx,fenerden son dakika haberleri,fener internet s,fener b,fenerbahçe son dakika a spor,fenerbahçe ile son dakika haberleri,superfenerbahce,spor gazeteleri fenerbahçe haberleri,fenerbahçe tüm transferler,fenerbahçe durumu,fener fenerbahçe,fenerbahçe haberleri akşam,fenerbahçe gündem,fc fenerbahçe,fb bugün,fb de transfer,spor haber fenerbahçe,fenerbahçe bu sezon transferleri,fb haber transfer,fb sitesi transfer,fb transfer haberleri 2021,fb transfer haberi,fener haber son dakika,f enerbahce,fener son durum,fb web sitesi,fb com tr,fenerbahçe bugünkü haberleri,fenerbahce son dakika haber,fenerbahçe yeni transferleri 2021,fener bahçe resmi,haberler spor fb,fb transfer gündemi,en son transfer haberleri fenerbahçe,fenerbahce son,fenerbahçe son transfer haberleri,fener son haber,fb haberlerı,fb transfer haberleri 2020,en son fener haberleri,super fb com,fenerbahçe fener,fenerbahce spor kulübü,son dakika spor haberi fenerbahçe,fb de son dakika haberleri,fenerbahçe transfer haberleri 2020,sporda son dakika haberleri fenerbahçe,fenerbahçe internet sitesi,fb son dakika transfer 2021,fenerbahçe ile anlaştı mı,fb son dakika transfer haberleri 2021,fenerbahceden son dakika haberler,fene4bahce,en son spor haberleri fenerbahçe,fener maçı son durum,son dakika fenerbahçe transfer haberleri bugün,fenerbahçeden sondakika haberleri,fener spor haberleri,transferde son dakika fenerbahçe,son dakika haberler fenerbahçe,fenerde son dakika haber,fenerde son dakika haberleri,fenerbahçe ile ilgili son dakika haberleri
          fb nin transferleri,fenerbahçe transfer yapacak mı,fenerbahçe spor kulübü haberleri,fenerbahçe resmi taraftar sayfası,fenerbahçe son dakika haberleri 2021,fener h,fener haberlerı,en iyi fenerbahce taraftar sitesi,fenerbahce son dakika haberi,fener bah,spor haberleri fenerbahçe transfer,fb maçı son dakika,güncel fenerbahçe haberleri,fenerbahçe g,fenerbahçe f,fenerbahçe,futbol takımı haberleri,fenerbahçe güncel haberler,son dakika ,fenerbahçe a spor,fener maçı son dakika,fenerin son transferleri,fenerbahçe yeni transfer haberleri,son fenerbahçe transfer haberleri,fenerbahce site"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link rel="canonical" href="https://kanaryasokagi.com" />
      </Head>
      <div>
        <div className="px-2 bg-yellow mb-2">
          <Swiper
            spaceBetween={10}
            allowTouchMove={true}
            slidesPerView={fiksturSlider}
            observer={true}
            slidesPerGroup={fiksturGroupSlider}
            className="w-full h-28 text-blue font-poppins font-thin text-sm rounded-3xl"
          >
            {futbolFikstur.data.map((maclar) => (
              <SwiperSlide key={maclar.fiksturId}>
                <div className="bg-white h-24 rounded-xl transition duration-300 ease-in-out hover:bg-blue transform  hover:scale-90 hover:text-white">
                  <div className="flex justify-center mt-2 p-2 items-center">
                    <Image1
                      width={24}
                      height={24}
                      src={maclar.fiksturEvSahibiLogo}
                      className="object-contain"
                      alt={maclar.fiksturEvSahibi}
                    />
                    <div className="cursor-default text-sm">
                      <span>&nbsp;</span>
                      {maclar.fiksturEvSahibi} - {maclar.fiksturDeplasman}
                      <span>&nbsp;</span>
                    </div>
                    <Image1
                      width={24}
                      height={24}
                      src={maclar.fiksturDeplasmanLogo}
                      className="object-contain"
                      alt={maclar.fiksturDeplasman}
                    />
                  </div>
                  <span className="flex justify-center cursor-default text-lg">
                    {maclar.fiksturTarih}{" "}
                  </span>
                  <span className="flex justify-center cursor-default text-xxs">
                    {maclar.fiksturTurnuva}{" "}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="6205173516"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
        <main className="mt-2">
          <div className="px-0">
            <div>
              <div className="w-full">
                <Swiper
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  allowTouchMove={true}
                  modules={[Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="h-full w-full"
                  keyboard={{
                    enabled: true,
                  }}
                >
                  {haberler.data.map((haber) => (
                    <SwiperSlide key={haber.haberId}>
                      <Link
                        href={`https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`}
                      >
                        <a target="_blank">
                          <Image
                            fluid
                            alt={haber.haberBaslik}
                            className="object-cover"
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
                  slidesPerView={10}
                  autoplay={false}
                  className="mt-2 h-8 sm:h-12 md:h-10 lg:h-12 xl:h-14"
                  id="swiperThumbs"
                >
                  {haberler.data.map((haber) => (
                    <SwiperSlide
                      key={haber.haberId}
                      className="opacity-70  filter grayscale-70 active:filter-none active:opacity-100"
                    >
                      <Image
                        fluid
                        className="object-cover"
                        src={haber.haberAnasayfaResim}
                        alt={haber.haberBaslik}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className="px-2 bg-white mt-2 mb-2">
              <Swiper
                spaceBetween={10}
                allowTouchMove={true}
                slidesPerView={puanDurumuSlider}
                observer={true}
                slidesPerGroup={puanDurumuGroupSlider}
                className="w-full h-24 text-blue font-poppins"
              >
                {puanDurumu.data.map((maclar, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white h-20 transition duration-300 ease-in-out transform hover:scale-90">
                      {index < 2 && (
                        <div className="w-full h-0.5 bg-green"></div>
                      )}
                      {index > 1 && index < 4 && (
                        <div className="w-full h-0.5 bg-skyblue"></div>
                      )}
                      {index > 3 && index < 16 && (
                        <div className="w-full h-0.5 bg-gray"></div>
                      )}
                      {index > 15 && (
                        <div className="w-full h-0.5 bg-red"></div>
                      )}
                      <div className="flex justify-center mt-1 mb-1 items-center">
                        <Image1
                          width={24}
                          height={24}
                          src={maclar.logo}
                          className="object-contain"
                          alt={maclar.takim}
                        />
                      </div>
                      <span className="flex justify-center cursor-default text-xs sm:text-base md:text-base lg:text-base xl:text-base font-bold">
                        {maclar.puan}P
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="px-2 mt-2 mb-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="4508948465"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
            </div>
            <Grid centered style={{ marginTop: 4 }}>
              <Grid.Column mobile={16} tablet={5} computer={5}>
                <div className="space-y-4">
                  {futbolKategori.data.slice(0, 3).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                  <div
                    id="normalAltHaber"
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="3835797526"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    />
                  </div>
                  {futbolKategori.data.slice(3, 13).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={5} computer={5} className="px-0">
                <div className="space-y-4">
                  {basketbolKategori.data.slice(0, 5).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer  xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                  <div
                    id="normalAltHaber"
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="9220642681"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    />
                  </div>
                  {basketbolKategori.data.slice(5, 13).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer  xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </Grid.Column>
              <Grid.Column mobile={16} tablet={5} computer={5} className="px-0">
                <div className="space-y-4">
                  {voleybolKategori.data.slice(0, 7).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer  xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                  <div
                    id="normalAltHaber"
                    className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                  >
                    <AdSense.Google
                      client="ca-pub-2507406732896466"
                      slot="8631800964"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    />
                  </div>
                  {voleybolKategori.data.slice(7, 13).map((haber, index) => (
                    <div
                      id="normalAltHaber"
                      className="w-full shadow-xl cursor-pointer  xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                      key={index}
                    >
                      <Link
                        href={{
                          pathname: `/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                        }}
                      >
                        <a target="_blank">
                          <Card fluid className="h-full w-full">
                            <div className="relative w-full h-full">
                              <Image1
                                layout="fill"
                                className="object-cover"
                                unoptimized={true}
                                src={haber.haberAnasayfaResim}
                                alt={haber.haberBaslik}
                              />
                            </div>
                          </Card>
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              </Grid.Column>
            </Grid>
            <div className="px-2 mt-2 mb-2">
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
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={futbolKategori.data.slice(13, 20)}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={basketbolKategori.data.slice(13, 20)}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(13, 20)}
                    />
                  </Grid.Column>
                </Grid>
              )}
            </div>
            <div className="px-2 mb-2 mt-2">
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
              {inView && (
                <Grid centered style={{ marginTop: 4 }}>
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={futbolKategori.data.slice(20, 30)}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={basketbolKategori.data.slice(20, 30)}
                    />
                  </Grid.Column>
                  <Grid.Column mobile={16} tablet={5} computer={5}>
                    <DynamicComponentWithCustomLoading
                      data={voleybolKategori.data.slice(20, 30)}
                    />
                  </Grid.Column>
                </Grid>
              )}
            </div>
            <div className="px-2 mb-2 mt-2">
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

        <footer></footer>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const { req: req } = context,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = "/api/about",
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";
  const [
      futbolFiksturRes,
      haberlerRes,
      basketbolKategoriRes,
      futbolKategoriRes,
      puanDurumuRes,
      fotoHaberRes,
      voleybolKategoriRes,
    ] = await Promise.all([
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-sirali-getir?fiksturCinsiyetId=1&fiksturKategoriId=2"
      ),
      fetch("http://localhost:8080/api/haberler/getAllByPage"),
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=1"
      ),
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=2"
      ),
      fetch("http://localhost:8080/api/puandurumu/puandurumugetir"),
      fetch("http://localhost:8080/api/haberler/getAllByPage-fotohaber"),
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=3"
      ),
    ]),
    [
      futbolFikstur,
      haberler,
      basketbolKategori,
      futbolKategori,
      puanDurumu,
      fotoHaber,
      voleybolKategori,
    ] = await Promise.all([
      futbolFiksturRes.json(),
      haberlerRes.json(),
      basketbolKategoriRes.json(),
      futbolKategoriRes.json(),
      puanDurumuRes.json(),
      fotoHaberRes.json(),
      voleybolKategoriRes.json(),
    ]);
  return {
    props: {
      futbolFikstur: futbolFikstur,
      haberler: haberler,
      basketbolKategori: basketbolKategori,
      futbolKategori: futbolKategori,
      puanDurumu: puanDurumu,
      baseApiUrl: baseApiUrl,
      profile: profile,
      fotoHaber: fotoHaber,
      voleybolKategori: voleybolKategori,
    },
  };
}
