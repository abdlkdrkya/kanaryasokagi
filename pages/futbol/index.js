import Head from"next/head";import Layout from"../../components/layout";import Image1 from"next/image";import{Grid,Image,Card}from"semantic-ui-react";import{useState}from"react";import{Swiper,SwiperSlide}from"swiper/react";import useInView from"react-cool-inview";import Link from"next/link";import AdSense from"react-adsense";import SwiperCore,{Autoplay,Navigation,Thumbs,Pagination,Keyboard}from"swiper";import{useContext,useEffect}from"react";import{AuthContext}from"../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../middleware/utils";SwiperCore.use([Autoplay,Navigation,Thumbs,Pagination,Keyboard]);import dynamic from"next/dynamic";
const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../components/haberComp"),
  { loading: () => <p>...</p> }
);
export default function FutbolHaberleri({
  futbolKategori,
  profile,
  puanDurumu,
  erkekBasketbolcular,
}) {
  const{observe:observe,inView:inView}=useInView({onEnter:({unobserve:unobserve})=>unobserve()}),{observe:observe2,inView:inView2}=useInView({onEnter:({unobserve:unobserve2})=>unobserve2()}),link="https://kanaryasokagi.com/futbol",baslik="Fenerbahçe Futbol Haberleri - Kanaryasokağı",[thumbsSwiper,setThumbsSwiper]=useState(null),[puanDurumuSlider,setPuanDurumuSlider]=useState(20),[puanDurumuGroupSlider,setPuanDurumuGroupSlider]=useState(20),[oyuncuSlider,setOyuncuSlider]=useState(6),[oyuncuGroupSlider,setOyuncuGroupSlider]=useState(6),{status:status,user:user}=useContext(AuthContext);useEffect(()=>{const scrollHandler=()=>{window.innerWidth<950?(setPuanDurumuSlider(4),setPuanDurumuGroupSlider(4),setOyuncuSlider(2),setOyuncuGroupSlider(2)):window.innerWidth>=950&&window.innerWidth<1230?(setPuanDurumuSlider(8),setPuanDurumuGroupSlider(8),setOyuncuSlider(3),setOyuncuGroupSlider(3)):window.innerWidth>=1230&&window.innerWidth<1861?(setPuanDurumuSlider(12),setPuanDurumuGroupSlider(12),setOyuncuSlider(4),setOyuncuGroupSlider(4)):window.innerWidth>=1861&&window.innerWidth<3400&&(setPuanDurumuSlider(20),setOyuncuSlider(6),setOyuncuGroupSlider(6))};return window.addEventListener("resize",scrollHandler),scrollHandler(),()=>{window.removeEventListener("resize",scrollHandler)}}),useEffect(()=>{let leg;void 0!==profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile,isBanned:profile.isBanned}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);
  return (
    <Layout>
      <Head>
        <title>{baslik}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={baslik} />
        <meta
          name="description"
          content="Fenerbahçe Futbol Takımı son dakika transfer haberleri, son dakika Futbol Takımı haberleri ve diğer branşlardan tüm güncel haberler"
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
                {erkekBasketbolcular.data.map((maclar, index) => (
                  <SwiperSlide key={index}>
                    <Link
                      href={{
                        pathname: `https://kanaryasokagi.com/oyuncular/futbol/${maclar.oyuncuId}`,
                      }}
                    >
                      <a target="_blank" className="text-blue hover:text-blue">
                        <div className="bg-white h-24 transition duration-300 ease-in-out transform hover:scale-90 cursor-pointer">
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
                      </a>
                    </Link>
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
                      {futbolKategori.data.slice(0, 5).map((haber) => (
                        <SwiperSlide key={haber.haberId}>
                          <Link
                            href={{
                              pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
                            }}
                          >
                            <Image
                              fluid
                              alt={haber.haberBaslik}
                              src={haber.haberAnasayfaResim}
                            />
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
                      {futbolKategori.data.slice(0, 5).map((haber) => (
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
                    {futbolKategori.data.slice(5, 6).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                    ))} <div
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
                    /></div>
                    {futbolKategori.data.slice(6, 10).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <div className="space-y-4">
                    {futbolKategori.data.slice(10, 12).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                    ))}<div
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
                    /></div>
                    {futbolKategori.data.slice(12, 15).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <div className="space-y-4">
                    {futbolKategori.data.slice(15, 18).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                    ))}<div
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
                    /></div>
                    {futbolKategori.data.slice(18, 20).map((haber, index) => (
                      <div
                        id="normalAltHaber"
                        className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
                        key={index}
                      >
                        <Link
                          href={{
                            pathname: `https://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
                  <Grid.Row centered style={{ marginTop: 4 }}>
                    <Grid.Column mobile={16} tablet={5} computer={5}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(25, 26)}
                      /><div
                      id="normalAltHaber"
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
                        data={futbolKategori.data.slice(26, 30)}
                      />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={5} computer={5}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(30, 32)}
                      /><div
                      id="normalAltHaber"
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
                        data={futbolKategori.data.slice(32, 35)}
                      />
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={5} computer={5}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(35, 39)}
                      /><div
                      id="normalAltHaber"
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
                        data={futbolKategori.data.slice(39, 40)}
                      />
                    </Grid.Column>
                  </Grid.Row>
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
                  <Grid.Row>
                    <Grid.Column computer={5} tablet={5} mobile={16}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(40, 45)}
                      />
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={5} mobile={16}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(45, 50)}
                      />
                    </Grid.Column>
                    <Grid.Column computer={5} tablet={5} mobile={16}>
                      <DynamicComponentWithCustomLoading
                        data={futbolKategori.data.slice(50, 55)}
                      />
                    </Grid.Column>
                  </Grid.Row>
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
const{req:req}=context,{origin:origin}=absoluteUrl(req),baseApiUrl="/api/about",{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  const [futbolKategoriRes, puanDurumuRes, erkekBasketbolcularRes] =
      await Promise.all([
        fetch(
          "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=2"
        ),
        fetch("http://localhost:8080/api/puandurumu/puandurumugetir"),
        fetch("http://localhost:8080/api/oyuncular/futbol-erkek-getir"),
      ]),
    [futbolKategori, puanDurumu, erkekBasketbolcular] = await Promise.all([
      futbolKategoriRes.json(),
      puanDurumuRes.json(),
      erkekBasketbolcularRes.json(),
    ]);
  return futbolKategori
    ? {
        props: {
          futbolKategori: futbolKategori,
          profile: profile,
          puanDurumu: puanDurumu,
          erkekBasketbolcular: erkekBasketbolcular,
        },
      }
    : { notFound: !0 };
}
