import Head from"next/head";import Layout from"../../../components/layout";import{Grid,Image,Card}from"semantic-ui-react";import AdSense from "react-adsense";import{useState}from"react";import{Swiper,SwiperSlide}from"swiper/react";import Image1 from"next/image";import Link from"next/link";import SwiperCore,{Autoplay,Navigation,Thumbs,Pagination,Keyboard}from"swiper";import{useContext,useEffect}from"react";import{AuthContext}from"../../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../../middleware/utils";SwiperCore.use([Autoplay,Navigation,Thumbs,Pagination,Keyboard]);import dynamic from"next/dynamic";import useInView from"react-cool-inview";
const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../../components/haberComp"),
  { loading: () => <p>...</p> }
);
export default function VoleybolKadinHaberleri({
  haberler,
  puanDurumu,
  erkekFutbolcular,
  profile,
}) {
 const{observe:observe,inView:inView}=useInView({onEnter:({unobserve:unobserve})=>unobserve()}),{observe:observe2,inView:inView2}=useInView({onEnter:({unobserve:unobserve2})=>unobserve2()}),baslik="Fenerbahçe Kadın Voleybol Haberleri - Kanaryasokağı",keywords="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe voleybol haberleri, fenerbahçe Kadın voleybol haberleri, fenerbahçe Kadın voleybol puan durumu, fenerbahçe Kadın voleybol, voleybol haberleri, Kadın voleybol haberleri,voleybol sultanlar ligi,voleybol efeler ligi,axa sigorta efeler ligi,efeler ligi voleybol,axa efeler ligi,sultanlar ligi voleybol,sultanlar voleybol ligi,sultanlar,voleybol,efeler ligi fenerbahçe,axa sigorta voleybol,voleybol,sultanlar,fenerbahçe efeler ligi,axa voleybol,voleybol axa sigorta efeler ligi,axa sigorta voleybol ligi,voleybol ligi efeler",{status:status,user:user}=useContext(AuthContext),[puanDurumuSlider,setPuanDurumuSlider]=useState(20),[puanDurumuGroupSlider,setPuanDurumuGroupSlider]=useState(20),[oyuncuSlider,setOyuncuSlider]=useState(6),[oyuncuGroupSlider,setOyuncuGroupSlider]=useState(6),[thumbsSwiper,setThumbsSwiper]=useState(null);useEffect(()=>{const scrollHandler=()=>{window.innerWidth<950?(setPuanDurumuSlider(4),setPuanDurumuGroupSlider(4),setOyuncuSlider(2),setOyuncuGroupSlider(2)):window.innerWidth>=950&&window.innerWidth<1230?(setPuanDurumuSlider(8),setPuanDurumuGroupSlider(8),setOyuncuSlider(3),setOyuncuGroupSlider(3)):window.innerWidth>=1230&&window.innerWidth<1861?(setPuanDurumuSlider(12),setPuanDurumuGroupSlider(12),setOyuncuSlider(4),setOyuncuGroupSlider(4)):window.innerWidth>=1861&&window.innerWidth<3400&&(setPuanDurumuSlider(14),setOyuncuSlider(6),setOyuncuGroupSlider(6))};return window.addEventListener("resize",scrollHandler),scrollHandler(),()=>{window.removeEventListener("resize",scrollHandler)}}),useEffect(()=>{let leg;void 0!==profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile,isBanned:profile.isBanned}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);
     const link = `https://kanaryasokagi.com/voleybol/kadin`;
	return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={baslik} />
        <meta
          name="description"
          content="Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
        />
        <meta name="keywords" content={keywords} />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <title>{baslik}</title>
        <link rel="canonical" href={link} />
      </Head>
      <div>
        <main>
          <div className="px-0">
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
                      {index < 4 && (
                        <div className="w-full h-0.5 bg-green"></div>
                      )}
                      {index > 3 && index < 8 && (
                        <div className="w-full h-0.5 bg-skyblue"></div>
                      )}
                      {index > 7 && index < 12 && (
                        <div className="w-full h-0.5 bg-gray"></div>
                      )}
                      {index > 11 && (
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
            <div className="px-2 bg-white mt-2 mb-2">
              <Swiper
                spaceBetween={2}
                allowTouchMove={true}
                slidesPerView={oyuncuSlider}
                observer={true}
                slidesPerGroup={oyuncuGroupSlider}
                className="w-full h-28 text-blue font-poppins"
              >
                {erkekFutbolcular.data.map((maclar, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-white h-24 transition duration-300 ease-in-out transform hover:scale-90 cursor-default">
                      <div className="flex justify-center mt-1 mb-1 items-center">
                        <Image1
                          width={24}
                          height={24}
                          src={maclar.oyuncuProfil}
                          className="object-contain"
                          alt={maclar.takim}
                        />
                      </div>
                      <span className="flex justify-center cursor-default text-xs sm:text-base md:text-base lg:text-base xl:text-base font-bold">
                        {maclar.oyuncuAdi} {maclar.oyuncuSoyAdi}
                      </span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Grid centered>
              <Grid.Row>
                <Grid.Column width={16}>
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
                      {haberler.data.slice(0, 5).map((haber) => (
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
                      {haberler.data.slice(0, 5).map((haber) => (
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
                    {haberler.data.slice(5, 6).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
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
                    {haberler.data.slice(6, 10).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid.Column>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                <div className="space-y-4">
                    {haberler.data.slice(10, 12).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
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
                    {haberler.data.slice(12, 15).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
                          </a>
                        </Link>
                      </div>
                    ))}
                  </div>
                </Grid.Column>
                <Grid.Column computer={5} tablet={5} mobile={16}>
                <div className="space-y-4">
                    {haberler.data.slice(15, 18).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
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
                     {haberler.data.slice(18, 20).map((haber, index) => (
                      <div
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                          }}
                        >
                          <a>
                          <Card fluid>
                            <Image
                              fluid
                              src={haber.haberAnasayfaResim}
                              alt={haber.haberBaslik}
                            />
                          </Card>
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
                      data={haberler.data.slice(20, 21)}
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
                      data={haberler.data.slice(21, 25)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={haberler.data.slice(25, 27)}
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
                      data={haberler.data.slice(27, 30)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={haberler.data.slice(30, 34)}
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
                      />
                      </div>
                      <DynamicComponentWithCustomLoading
                      data={haberler.data.slice(34, 35)}
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
                      data={haberler.data.slice(35, 40)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={haberler.data.slice(40, 45)}
                    />
                  </Grid.Column>
                  <Grid.Column computer={5} tablet={5} mobile={16}>
                    <DynamicComponentWithCustomLoading
                      data={haberler.data.slice(45, 50)}
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
  const { req: req, query: query } = context,
    id = query.haberId,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = "/api/about",
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";
  const [haberlerRes, puanDurumuRes, erkekFutbolcularRes] = await Promise.all([
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=3&cinsiyetId=1"
      ),
      fetch(
        "http://localhost:8080/api/puandurumu/voleybol-kadin-puandurumu-getir"
      ),
      fetch("http://localhost:8080/api/oyuncular/voleybol-kadin-getir"),
    ]),
    [haberler, puanDurumu, erkekFutbolcular] = await Promise.all([
      haberlerRes.json(),
      puanDurumuRes.json(),
      erkekFutbolcularRes.json(),
    ]);
  return {
    props: {
      haberler: haberler,
      puanDurumu: puanDurumu,
      erkekFutbolcular: erkekFutbolcular,
      baseApiUrl: baseApiUrl,
      profile: profile,
    },
  };
}
