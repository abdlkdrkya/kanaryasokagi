import Layout from"../../../components/layout";import{useRouter}from"next/router";import Link from"next/link";import Script from"next/script";import Head from"next/head";import InnerHTML from 'dangerously-set-html-content';import{useContext,useState,useEffect}from"react";import fetch from"isomorphic-fetch";import AdSense from"react-adsense";import{Image,Button,Comment,Form,Header,Icon,Label,Message,Popup,Grid,Card}from"semantic-ui-react";import{AuthContext}from"../../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../../middleware/utils";import{WhatsappIcon,WhatsappShareButton}from"next-share";import dynamic from"next/dynamic";import useInView from"react-cool-inview";
const DynamicComponentWithCustomLoading = dynamic(
  () => import("../../../components/haberComp"),
  { loading: () => <p>...</p> }
);
function FutbolKadinHaber({ haberler, profile, h, yorumData }) {
 const{observe:observe,inView:inView}=useInView({onEnter:({unobserve:unobserve})=>unobserve()}),{observe:observe2,inView:inView2}=useInView({onEnter:({unobserve:unobserve2})=>unobserve2()}),resim="https://kanaryasokagi.com"+h.haberAnasayfaResim,baslik=`${h.haberBaslik} - Kanaryasokağı`,desc=`${h.haberBaslik} - Kanaryasokağı - Fenerbahçe Kadın Futbol Haberleri`,router=useRouter(),data=h,{status:status,user:user}=useContext(AuthContext),[yorum,setYorum]=useState(""),[error,setError]=useState(!1),[yorumGonderState,setYorumGonderState]=useState({success:!1,message:""});useEffect(()=>{"kadin"==data.haberCinsiyet.cinsiyetAdi&&"futbol"==data.haberKategori.kategoriAd?setError(!1):setError(!0),null!=profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);const handleYorumSil=async e=>{let type,data={yorumId:e,type:"postYorumSil"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegen=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumLike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegenme=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumDislike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}router.replace(router.asPath)},handleYorumDegistir=(e,{value:value})=>{setYorum(value)},handleYorumGonder=async()=>{let sonHaberId=data.haberId;if(yorum.length>20&&yorum.length<300){let type="postYorum",data={haberId:sonHaberId,userId:profile.id,yorum:yorum,type:type};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&(setYorumGonderState({success:!1,message:""}),setYorum(""),router.replace(router.asPath))}catch(err){console.log(err)}router.replace(router.asPath)}else setYorumGonderState({success:!0,message:"Yorum 20-300 karakter arası olmalıdır!"})},link=`https://kanaryasokagi.com/futbol/kadin/${h.haberId}`;
  if (!data || error)
    return (
      <Layout>
        <div
          style={{ height: "100vh" }}
          className="bg-white  flex flex-wrap content-center  justify-center"
        >
          <p className="font-poppins font-bold text-3xl text-blue">
            Yükleme başarısız!
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
          <meta
            name="description"
            content="Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
          />
          <meta
            name="keywords"
            content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek futbol haberleri, fenerbahçe futbol puan durumu, fenerbahçe futbol haberleri, futbol haberleri"
          />
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
          <Grid centered>
            <Grid.Row>
              <Grid.Column computer={16} tablet={16} mobile={16}>
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
                <div className="mb-4 mt-4">
                  <h2 className="font-poppins font-medium text-white p-4 bg-blue">
                    {h.haberBaslik}
                  </h2>
                  <Icon name="calendar alternate" />
                  <span className="font-poppins font-bold">
                    {h.haberTarih.toString().slice(0, 10)}
                  </span>
                </div>
                <Image
                  src={h.haberAnasayfaResim}
                  alt={h.haberBaslik}
                  fluid
                  centered
                />
                <div
                  id="apo"
                  className="mt-6">
                     <InnerHTML html={h.haberIcerik } />
                      </div>
                <div className="mb-2 mt-2">
                  <AdSense.Google
                    client="ca-pub-2507406732896466"
                    slot="9211219615"
                    style={{ display: "block" }}
                    layout="in-article"
                    format="fluid"
                  />
                </div>
                <h5 className="px-4 font-poppins">Paylaş</h5>
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
                      <Icon name="whatsapp" className="text-white" />
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
                                <Comment.Text>{e.yorumIcerik}</Comment.Text>
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
                                        <Icon name="thumbs up" color="green" />
                                        <Label basic color="green" size="mini">
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
                                        <Icon name="thumbs down" color="red" />
                                        <Label basic color="red" size="mini">
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
                                              backgroundColor: "transparent",
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
                                              backgroundColor: "transparent",
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
                                              backgroundColor: "transparent",
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
                            Yorum yapmak ve yorumları görmek için üye girişi
                            yapınız...
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
                <Grid centered>
                  <Grid.Row>
                    <Grid.Column computer={8} tablet={8} mobile={16}>
                      <div className="space-y-4">
                        {haberler.data.slice(0, 2).map((haber, index) => (
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
                        ))}<div  id="normalAltHaber"
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
                        {haberler.data.slice(2, 6).map((haber, index) => (
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
                        {haberler.data.slice(6, 9).map((haber, index) => (
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
                        ))}<div  id="normalAltHaber"
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
                        {haberler.data.slice(9, 12).map((haber, index) => (
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
                    data={haberler.data.slice(12, 14)}
                  /><div  id="normalAltHaber"
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
                    data={haberler.data.slice(14, 17)}
                  />
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler.data.slice(17, 20)}
                  /><div  id="normalAltHaber"
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
                    data={haberler.data.slice(20, 22)}
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
                    data={haberler.data.slice(22, 27)}
                  />
                </Grid.Column>
                <Grid.Column computer={8} tablet={8} mobile={16}>
                  <DynamicComponentWithCustomLoading
                    data={haberler.data.slice(27, 32)}
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
  const{req:req,query:query}=context,{origin:origin}=absoluteUrl(req);var id=query.haberId;const baseApiUrl="/api",{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  const [haberlerRes, hRes, yorumlarRes] = await Promise.all([
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategoriSorted?categoryId=2"
      ),
      fetch("http://localhost:8080/api/haberler/getByHaberId?haberId=" + id),
      fetch(
        "http://localhost:8080/api/user-comments/haber-yorumlari-getir?haberId=" +
          id
      ),
    ]),
    [haberler, h, yorumData] = await Promise.all([
      haberlerRes.json(),
      hRes.json(),
      yorumlarRes.json(),
    ]);
  return {
    props: {
      haberler: haberler,
      baseApiUrl: baseApiUrl,
      profile: profile,
      h: h.data,
      yorumData: yorumData.data,
    },
  };
}

export default FutbolKadinHaber;
