import Layout from"../../../components/layout";import Image1 from"next/image";import{useRouter}from"next/router";import AdSense from "react-adsense";import InnerHTML from 'dangerously-set-html-content';import Link from"next/link";import Script from"next/script";import Head from"next/head";import fetch from"isomorphic-fetch";import{Button,Form,Header,Image,Comment,Label,Icon,Message,Popup,Grid,Card}from"semantic-ui-react";import{useContext,useState,useEffect}from"react";import{AuthContext}from"../../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../../middleware/utils";import dynamic from"next/dynamic";import{WhatsappIcon,WhatsappShareButton}from"next-share";import useInView from"react-cool-inview";import{Swiper,SwiperSlide}from"swiper/react";import SwiperCore,{Autoplay,Navigation,Thumbs,Pagination,Keyboard}from"swiper";SwiperCore.use([Autoplay,Navigation,Thumbs,Pagination,Keyboard]);
const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../../components/haberComp"),
  { loading: () => <p>...</p> }
);

function BasketbolKadinHaber({
  puanDurumu,
  kadinBasketbolcular,
  profile,
  haberler2,
  h,
  yorumData,
}) {
 const{observe:observe,inView:inView}=useInView({onEnter:({unobserve:unobserve})=>unobserve()}),{observe:observe2,inView:inView2}=useInView({onEnter:({unobserve:unobserve2})=>unobserve2()}),resim="https://kanaryasokagi.com"+h.haberAnasayfaResim,baslik=`${h.haberBaslik} - Kanaryasokağı`,keywords=`kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe kadın basketbol haberleri, fenerbahçe basketbol puan durumu, fenerbahçe basketbol haberleri, basketbol haberleri,${h.haberEtiket1},${h.haberEtiket2}`,desc=`${h.haberBaslik} - Kanaryasokağı - Fenerbahçe Kadın Basketbol Haberleri`,router=useRouter(),[puanDurumuSlider,setPuanDurumuSlider]=useState(20),[puanDurumuGroupSlider,setPuanDurumuGroupSlider]=useState(20),[oyuncuSlider2,setOyuncuSlider2]=useState(6),[oyuncuGroupSlider2,setOyuncuGroupSlider2]=useState(6),data=h,{status:status,user:user}=useContext(AuthContext),[yorum,setYorum]=useState(""),[error,setError]=useState(!1),[yorumGonderState,setYorumGonderState]=useState({success:!1,message:""});useEffect(()=>{const scrollHandler=()=>{window.innerWidth<950?(setPuanDurumuSlider(4),setPuanDurumuGroupSlider(4),setOyuncuSlider2(4),setOyuncuGroupSlider2(4)):window.innerWidth>=950&&window.innerWidth<1230?(setPuanDurumuSlider(8),setPuanDurumuGroupSlider(8),setOyuncuSlider2(5),setOyuncuGroupSlider2(5)):window.innerWidth>=1230&&window.innerWidth<1861?(setPuanDurumuSlider(12),setPuanDurumuGroupSlider(12)):window.innerWidth>=1861&&window.innerWidth<3400&&(setPuanDurumuSlider(14),setOyuncuSlider2(6),setOyuncuGroupSlider2(6))};return window.addEventListener("resize",scrollHandler),scrollHandler(),()=>{window.removeEventListener("resize",scrollHandler)}}),useEffect(()=>{"kadin"==data.haberCinsiyet.cinsiyetAdi&&"basketbol"==data.haberKategori.kategoriAd?setError(!1):setError(!0),null!=profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);const handleYorumSil=async e=>{let type,data={yorumId:e,type:"postYorumSil"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegen=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumLike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegenme=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumDislike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumDegistir=(e,{value:value})=>{setYorum(value)},handleYorumGonder=async()=>{let sonHaberId=data.haberId;if(yorum.length>20&&yorum.length<300){let type="postYorum",data={haberId:sonHaberId,userId:profile.id,yorum:yorum,type:type};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&(setYorumGonderState({success:!1,message:""}),setYorum(""),router.replace(router.asPath))}catch(err){console.log(err)}router.replace(router.asPath)}else setYorumGonderState({success:!0,message:"Yorum 20-300 karakter arası olmalıdır!"})},link=`https://kanaryasokagi.com/basketbol/kadin/${h.haberId}`;
  if (!data || error)
    return (
      <Layout>
        <div
          style={{ height: "100vh" }}
          className="bg-white  flex flex-wrap content-center  justify-center"
        >
          <p className="font-poppins font-bold text-3xl text-blue">
            Haber bulunamadı!
          </p>
        </div>
      </Layout>
    );
  else if (data && !error) {
    return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="title" content={baslik} />
          <meta name="description" content={desc} />
          <meta name="keywords" content={keywords} />
          <meta name="revisit-after" content="3 days" />
          <link rel="icon" href="/kanaryasokagi.ico" />
          <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
          <title>{baslik}</title>
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@kanaryasokagi" />
          <meta name="twitter:creator" content="Kanaryasokağı" />
          <meta name="twitter:title" content={h.haberBaslik} />
          <meta
            name="twitter:description"
            content="Kanaryasokağı | Fenerbahçe'nin bütün branşlarına dair en doğru ve güncel haberler"
          />
          <meta name="twitter:image:src" content={resim} />
          <meta property="og:url" content={link} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={h.haberBaslik} />
          <meta
            property="og:description"
            content="Kanaryasokağı | Fenerbahçe'nin bütün branşlarına dair en doğru ve güncel haberler"
          />
          <meta property="og:image" content={resim} />
          <link rel="canonical" href={link} />
        </Head>
        <div className="mx-0 px-0">
          <div className="px-2 bg-white mt-2 mb-2">
            <Swiper
              spaceBetween={10}
              allowTouchMove={true}
              slidesPerView={puanDurumuSlider}
              observer={true}
              slidesPerGroup={puanDurumuGroupSlider}
              className="w-full h-20 text-blue font-poppins"
            >
              {puanDurumu.data.map((maclar, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white h-20 transition duration-300 ease-in-out transform hover:scale-90">
                    {index < 8 && <div className="w-full h-0.5 bg-green"></div>}
                    {index > 7 && index < 12 && (
                      <div className="w-full h-0.5 bg-gray"></div>
                    )}
                    {index > 11 && <div className="w-full h-0.5 bg-red"></div>}
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
          <Grid>
            <Grid.Row only="mobile">
              <Grid.Column width={16}>
                <Swiper
                  spaceBetween={4}
                  allowTouchMove={true}
                  slidesPerView={3}
                  observer={true}
                  slidesPerGroup={3}
                  className="w-full h-14 text-blue font-poppins"
                >
                  {kadinBasketbolcular.data.map((maclar, index) => (
                    <SwiperSlide key={index}>
                      <Link
                        href={{
                          pathname: `https://kanaryasokagi.com/oyuncular/basketbol/kadin/${maclar.oyuncuId}`,
                        }}
                      >
                        <a
                          target="_blank"
                          className="text-blue hover:text-blue"
                        >
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="mt-4 mb-4">
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
              <Grid.Column computer={16} tablet={16} mobile={16}>
                <Grid>
                  <Grid.Row>
                    <Grid.Column computer={12} tablet={12} mobile={16}>
                      <div className="mb-4">
                        <h2 className="font-poppins font-medium text-white p-4 bg-blue">
                          {h.haberBaslik}
                        </h2>
                        <div>
                          <Icon name="calendar alternate" />
                          <span className="font-poppins font-bold">
                            {h.haberTarih.toString().slice(0, 10)}
                          </span>
                        </div>
                      </div>
                      <Image
                        src={h.haberAnasayfaResim}
                        alt={h.haberBaslik}
                        fluid
                        centered
                      />
                      <div
                        id="apo"
                        className="mt-6"
                      >
                         <InnerHTML html={h.haberIcerik } />
                      </div>
                       <AdSense.Google
                        client="ca-pub-2507406732896466"
                        slot="9420130842"
                        style={{ display: "block" }}
                        layout="in-article"
                        format="fluid"
                      />
                      <h5 className="font-poppins text-center">Paylaş</h5>
                      <div className="mt-2 space-x-6 border-t p-4 flex items-center justify-center">
                        {data.haberEtiket1 ? (
                          <>
                            <div id="fb-root"></div>
                            <Script
                              async
                              defer
                              crossorigin="anonymous"
                              src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v12.0"
                              nonce="WGv84ECM"
                            ></Script>
                            <div
                              className="fb-share-button"
                              data-href={link}
                              data-layout="button_count"
                              data-size="large"
                            >
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(link)}&amp;src=sdkpreparse"
                                className="fb-xfbml-parse-ignore"
                              >
                                Paylaş
                              </a>
                            </div>
                            <div className="inline-block">
                              <a
                                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                className="twitter-share-button"
                                data-show-count="false"
                              >
                                Tweet
                              </a>
                              <Script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charset="utf-8"
                              ></Script>
                            </div>
                          </>
                        ) : (
                          <>
                            <div id="fb-root"></div>
                            <Script
                              async
                              defer
                              crossorigin="anonymous"
                              src="https://connect.facebook.net/tr_TR/sdk.js#xfbml=1&version=v12.0"
                              nonce="WGv84ECM"
                            ></Script>
                            <div
                              className="fb-share-button"
                              data-href={link}
                              data-layout="button_count"
                              data-size="large"
                            >
                              <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.facebook.com/sharer/sharer.php?u={encodeURIComponent(link)}&amp;src=sdkpreparse"
                                className="fb-xfbml-parse-ignore"
                              >
                                Paylaş
                              </a>
                            </div>
                            <div className="inline-block">
                              <a
                                href="https://twitter.com/share?ref_src=twsrc%5Etfw"
                                className="twitter-share-button"
                                data-show-count="false"
                              >
                                Tweet
                              </a>
                              <Script
                                async
                                src="https://platform.twitter.com/widgets.js"
                                charset="utf-8"
                              ></Script>
                            </div>
                          </>
                        )}
                        <WhatsappShareButton
                          url={`https://kanaryasokagi.com/futbol/erkek/${router.query.haberId}`}
                          title={data.haberBaslik}
                          separator=":: "
                        >
                          <div className="w-20 text-center rounded-xl p-0.5 bg-whatsapp1 hover:bg-whatsapp2">
                          <Icon name="whatsapp" className="text-white"/>
                          </div>
                        </WhatsappShareButton>
                      </div>
                      <div className="font-poppins w-full">
                        {profile.email ? (
                          <Comment.Group className="w-full">
                            <Header as="h4" dividing>
                              Yorumlar
                            </Header>
                            {yorumData && (
                              <>
                                {yorumData.map((e, index) => (
                                  <Comment key={index} className="bg-blue">
                                    <Comment.Avatar src={e.user.profile} />
                                    <Comment.Content>
                                      <Comment.Author as="div">
                                        {e.user.userName}
                                      </Comment.Author>
                                      <Comment.Metadata>
                                        <div>{e.yorumTarihi}</div>
                                      </Comment.Metadata>
                                      <Comment.Text>
                                        {e.yorumIcerik}
                                      </Comment.Text>
                                      <Comment.Actions>
                                        {e.user.userId === profile.id ? (
                                          <div className="space-x-4">
                                            <Button
                                              size="mini"
                                              style={{
                                                backgroundColor: "transparent",
                                                padding: 0,
                                              }}
                                            >
                                              <Icon
                                                name="thumbs up"
                                                color="green"
                                              />
                                              <Label
                                                basic
                                                color="green"
                                                size="mini"
                                              >
                                                {e.yorumLikes}
                                              </Label>
                                            </Button>

                                            <Button
                                              size="mini"
                                              style={{
                                                backgroundColor: "transparent",
                                                padding: 0,
                                              }}
                                            >
                                              <Icon
                                                name="thumbs down"
                                                color="red"
                                              />
                                              <Label
                                                basic
                                                color="red"
                                                size="mini"
                                              >
                                                {e.yorumDislikes}
                                              </Label>
                                            </Button>

                                            <Popup
                                              content="Yorum sil"
                                              trigger={
                                                <Button
                                                  onClick={() =>
                                                    handleYorumSil(e.yorumId)
                                                  }
                                                  style={{
                                                    backgroundColor:
                                                      "transparent",
                                                    padding: 0,
                                                  }}
                                                >
                                                  <Icon
                                                    name="minus circle"
                                                    color="red"
                                                  />
                                                </Button>
                                              }
                                            />
                                          </div>
                                        ) : (
                                          <div className="space-x-4">
                                            <Popup
                                              content="Beğendim"
                                              trigger={
                                                <Button
                                                  size="mini"
                                                  style={{
                                                    backgroundColor:
                                                      "transparent",
                                                    padding: 0,
                                                  }}
                                                  onClick={() =>
                                                    handleYorumBegen(
                                                      e.yorumId,
                                                      profile.id
                                                    )
                                                  }
                                                >
                                                  <Icon
                                                    name="thumbs up"
                                                    color="green"
                                                  />
                                                  <Label
                                                    basic
                                                    color="green"
                                                    size="mini"
                                                  >
                                                    {e.yorumLikes}
                                                  </Label>
                                                </Button>
                                              }
                                            />
                                            <Popup
                                              content="Beğenmedim"
                                              trigger={
                                                <Button
                                                  size="mini"
                                                  style={{
                                                    backgroundColor:
                                                      "transparent",
                                                    padding: 0,
                                                  }}
                                                  onClick={() =>
                                                    handleYorumBegenme(
                                                      e.yorumId,
                                                      profile.id
                                                    )
                                                  }
                                                >
                                                  <Icon
                                                    name="thumbs down"
                                                    color="red"
                                                  />
                                                  <Label
                                                    basic
                                                    color="red"
                                                    size="mini"
                                                  >
                                                    {e.yorumDislikes}
                                                  </Label>
                                                </Button>
                                              }
                                            />
                                          </div>
                                        )}
                                      </Comment.Actions>
                                    </Comment.Content>
                                  </Comment>
                                ))}
                              </>
                            )}
                            {yorumGonderState.success && (
                              <Message negative>
                                <Message.Header>HATA!</Message.Header>
                                <Message.Content>
                                  {yorumGonderState.message}
                                </Message.Content>
                              </Message>
                            )}
                            <Form onSubmit={handleYorumGonder} reply>
                              <Form.TextArea
                                value={yorum}
                                onChange={handleYorumDegistir}
                              />
                              <Form.Button
                                content="Yorum Gönder"
                                labelPosition="left"
                                icon="edit"
                                style={{
                                  backgroundColor: "#12326e",
                                  color: "white",
                                }}
                              />
                            </Form>
                          </Comment.Group>
                        ) : (
                          <Comment.Group className="w-full">
                            <Header as="h5" dividing>
                              Yorumlar
                            </Header>
                            <Comment className="bg-blue">
                              <Comment.Content>
                                <Comment.Text className="p-4">
                                  Yorum yapmak ve yorumları görmek için üye
                                  girişi yapınız...
                                </Comment.Text>
                              </Comment.Content>
                            </Comment>
                            <Form onSubmit={handleYorumGonder}>
                              <Form.TextArea disabled />
                              <Form.Button
                                content="Yorum Gönder"
                                labelPosition="left"
                                icon="edit"
                                style={{
                                  backgroundColor: "#12326e",
                                  color: "white",
                                }}
                                disabled
                              />
                            </Form>
                          </Comment.Group>
                        )}
                      </div>
                    </Grid.Column>
                    <Grid.Column
                      only={("computer", "tablet")}
                      computer={4}
                      tablet={4}
                      verticalAlign="top"
                    >
                      <div className="p-4 bg-gradient-to-r from-blue via-blue to-gray rounded-md">
                        <span className="text-white text-lg font-poppins">
                          Kadro
                        </span>
                      </div>
                      <Swiper
                        spaceBetween={4}
                        allowTouchMove={true}
                        slidesPerView={oyuncuSlider2}
                        observer={true}
                        direction={"vertical"}
                        slidesPerGroup={oyuncuGroupSlider2}
                        className="w-full h-96 text-blue font-poppins"
                      >
                        {kadinBasketbolcular.data.map((maclar, index) => (
                          <SwiperSlide key={index}>
                            <Link
                              href={{
                                pathname: `https://kanaryasokagi.com/oyuncular/basketbol/kadin/${maclar.oyuncuId}`,
                              }}
                            >
                              <a
                                target="_blank"
                                className="text-blue hover:text-blue"
                              >
                                <div className="bg-white mt-2 p-4 w-full transition duration-300 ease-in-out transform hover:scale-90 cursor-pointer">
                                  <Grid>
                                    <Grid.Row>
                                      <Grid.Column width={1}>
                                        <span className="font-bold text-lg cursor-pointer">
                                          {"#"}
                                          {maclar.oyuncuFormaNumarasi}
                                        </span>
                                      </Grid.Column>
                                      <Grid.Column width={1}>
                                        <Image1
                                          width={56}
                                          height={56}
                                          src={maclar.oyuncuProfil}
                                          className="object-contain rounded-full cursor-pointer"
                                          alt={maclar.takim}
                                        />
                                      </Grid.Column>
                                      <Grid.Column width={8}>
                                        <span className="flex cursor-default text-xs sm:text-base md:text-base lg:text-base xl:text-base font-bold cursor-pointer">
                                          {maclar.oyuncuAdi}{" "}
                                          {maclar.oyuncuSoyAdi}
                                        </span>
                                      </Grid.Column>
                                    </Grid.Row>
                                  </Grid>
                                </div>
                              </a>
                            </Link>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
                <div className="mt-4 mb-4">
                <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="4508948465"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
                </div>
                <Grid>
                  <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                      <div className="space-y-4">
                        {haberler2.slice(0, 1).map((haber, index) => (
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
                        /></div>
                        {haberler2.slice(1, 6).map((haber, index) => (
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
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                      <div className="space-y-4">
                        {haberler2.slice(6, 8).map((haber, index) => (
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
                        ))} <div
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
                        {haberler2.slice(8, 12).map((haber, index) => (
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div className="mt-4 mb-4">
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
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler2.slice(12, 14)}
                  /> <div
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
                  <DynamicComponentWithCustomLoading
                    data={haberler2.slice(14, 17)}
                  />
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler2.slice(17, 20)}
                  /> <div
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
                    data={haberler2.slice(20, 22)}
                  />
                </Grid.Column>
              </Grid>
            )}
          </div>
          <div className="mt-4 mb-4">
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
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler2.slice(22, 27)}
                  />
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler2.slice(27, 32)}
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
      </Layout>
    );
  }
}

export async function getServerSideProps(context) {
  const{req:req,query:query}=context,{origin:origin}=absoluteUrl(req),baseApiUrl="/api";var id=query.haberId;const{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  const [
      haberlerRes,
      puanDurumuRes,
      kadinBasketbolcularRes,
      hRes,
      yorumlarRes,
    ] = await Promise.all([
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=1&cinsiyetId=1"
      ),
      fetch(
        "http://localhost:8080/api/puandurumu/basketbol-kadin-puandurumu-getir"
      ),
      fetch("http://localhost:8080/api/oyuncular/basketbol-kadin-getir"),
      fetch(
        "http://localhost:8080/api/haberler/getByHaberId?haberId=" +
          query.haberId
      ),
      fetch(
        "http://localhost:8080/api/user-comments/haber-yorumlari-getir?haberId=" +
          query.haberId
      ),
    ]),
    [haberler, puanDurumu, kadinBasketbolcular, h, yorumData] =
      await Promise.all([
        haberlerRes.json(),
        puanDurumuRes.json(),
        kadinBasketbolcularRes.json(),
        hRes.json(),
        yorumlarRes.json(),
      ]);
 const haberler2=[];haberler.data.map(haber=>{haber.haberId!==h.data.haberId&&haberler2.push(haber)});
  return {
    props: {
      puanDurumu: puanDurumu,
      kadinBasketbolcular: kadinBasketbolcular,
      baseApiUrl: baseApiUrl,
      profile: profile,
      haberler2: haberler2,
      h: h.data,
      yorumData: yorumData.data,
    },
  };
}

export default BasketbolKadinHaber;
