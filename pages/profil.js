import Link from"next/link";import Head from"next/head";import Image from"next/image";import{useContext,useState,useEffect}from"react";import AdSense from "react-adsense";import{AuthContext}from"../contexts/AuthProvider";import{storage}from"../firebase";import{absoluteUrl,getAppCookies,verifyToken}from"../middleware/utils";import Layout from"../components/layout";import{Button,Comment,Form,Grid,Icon,Label,Menu,Message,Popup,Tab}from"semantic-ui-react";
import { useRouter } from "next/router";
export default function Profil({
  profile,
  baseApiUrl,
  kullaniciYorumlari,
  begenilenKullaniciYorumlari,
  begenilmeyenKullaniciYorumlari,
}) {
 const router=useRouter(),{status:status,user:user}=useContext(AuthContext),[image,setImage]=useState(null),[stateSifreDegistir,setStateSifreDegistir]=useState(!1),[sifreDegistir,setSifreDegistir]=useState({eskiSifre:"",eskiSifreRep:"",yeniSifre:"",yeniSifreRep:"",userName:""}),[stateFormMessage,setStateFormMessage]=useState({success:!0,message:""}),[stateFormMessage2,setStateFormMessage2]=useState({success:!1,message:""}),[loading,setLoading]=useState(!1),{eskiSifre:eskiSifre,eskiSifreRep:eskiSifreRep,yeniSifre:yeniSifre,yeniSifreRep:yeniSifreRep}=sifreDegistir;useEffect(()=>{null!=profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);const handleSifreDegistirFormData=(e,{name:name,value:value})=>{setSifreDegistir({...sifreDegistir,[name]:value,userName:profile.username})},handleImageChange=e=>{e.target.files[0]&&setImage(e.target.files[0])},submitSifreDegistirFormData=async e=>{if(e.preventDefault(),sifreDegistir.eskiSifre!=sifreDegistir.eskiSifreRep)setStateFormMessage({success:!1,message:"Girdiğiniz eski şifreler eşleşmiyor!"}),setTimeout((function(){setStateFormMessage({success:!0,message:""}),setStateFormMessage2({success:!1,message:""})}),3e3);else if(sifreDegistir.yeniSifre!=sifreDegistir.yeniSifreRep)setStateFormMessage({success:!1,message:"Girdiğiniz yeni şifreler eşleşmiyor"}),setTimeout((function(){setStateFormMessage({success:!0,message:""}),setStateFormMessage2({success:!1,message:""})}),3e3);else{let data={...sifreDegistir};setLoading(!loading);const kayitApi=await fetch("/api/sifreDegistir/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.error("Error:",error)});try{let result=await kayitApi.json();result.success?setStateFormMessage2({success:result.success,message:result.message}):setStateFormMessage({success:result.success,message:result.message}),setTimeout((function(){setStateFormMessage({success:!0,message:""}),setStateFormMessage2({success:!1,message:""})}),3e3),setLoading(!1)}catch(errorr){console.log(errorr)}}},handleImageUpload=async()=>{if(null!=image){const uploadTask=storage.ref(`images/${profile.username}`).put(image);uploadTask.then(uploadTaskSnapshot=>uploadTaskSnapshot.ref.getDownloadURL()).then(url=>{let sonUrl=encodeURIComponent(url);profile.profile=sonUrl,handleResimDegistir(sonUrl)})}};async function handleResimDegistir(e){let userName,type,data={e:e,userName:profile.username,type:"postProfilResmi"};const kayitApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.error("Error:",error)});try{let result;(await kayitApi.json()).success&&alert("Profil fotoğrafı değiştirildi!")}catch(error){console.log(error)}}const handleYorumSil=async e=>{let type,data={yorumId:e,type:"postYorumSil"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}};
 const yorumlarPanes = [
    {
      menuItem: (
        <Menu.Item className="xxs:text-xxs xs:text-xs sm:text-tiny md:text-base xl:text-lg">
          Son Yorumlar
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className="font-poppins">
          {kullaniciYorumlari.data != null ? (
            <>
              {kullaniciYorumlari.data.map((yorum, index) => (
                <div key={index}>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar as="a" src={profile.profile} />
                      <Comment.Content>
                        <Comment.Author as="a">
                          {profile.username}
                        </Comment.Author>
                        <Comment.Metadata>
                          <div>{yorum.yorumTarihi}</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>{yorum.yorumIcerik}</p>
                        </Comment.Text>
                        <Comment.Text className="mb-1">
                          <Link
                            href={{
                              pathname: `https://kanaryasokagi.com/${yorum.haber.haberKategori.kategoriAd}/${yorum.haber.haberCinsiyet.cinsiyetAdi}/${yorum.haber.haberId}`,
                            }}
                          >
                            <a target="_blank">
                            <span className="text-blue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
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
                                  {yorum.yorumLikes}
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
                                  {yorum.yorumDislikes}
                                </Label>
                              </Button>
                              <Popup
                                content="Yorum sil"
                                trigger={
                                  <Button
                                    onClick={() =>
                                      handleYorumSil(yorum.yorumId)
                                    }
                                    style={{
                                      backgroundColor: "transparent",
                                      padding: 0,
                                    }}
                                  >
                                    <Icon name="minus circle" color="red" />
                                  </Button>
                                }
                              />
                            </div>
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </div>
              ))}
            </>
          ) : (
            <div>Yorum bulunamadı!</div>
          )}
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className="xxs:text-xxs xs:text-xs sm:text-tiny md:text-base xl:text-lg">
          Beğenilen Yorumlar
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className="font-poppins">
          {begenilenKullaniciYorumlari.data != null ? (
            <>
              {begenilenKullaniciYorumlari.data.map((yorum, index) => (
                <div key={index}>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar
                        as="a"
                        src={profile.profile}
                      ></Comment.Avatar>
                      <Comment.Content>
                        <Comment.Author>{profile.username}</Comment.Author>
                        <Comment.Metadata>
                          <div>{yorum.yorumTarihi}</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>{yorum.yorumIcerik}</p>
                        </Comment.Text>
                        <Comment.Text className="mb-1">
                          <Link
                            href={{
                              pathname: `https://kanaryasokagi.com/${yorum.haber.haberKategori.kategoriAd}/${yorum.haber.haberCinsiyet.cinsiyetAdi}/${yorum.haber.haberId}`,
                            }}
                          >
                            <a target="_blank">
                            <span className="text-blue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
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
                                  {yorum.yorumLikes}
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
                                  {yorum.yorumDislikes}
                                </Label>
                              </Button>
                              <Popup
                                content="Yorum sil"
                                trigger={
                                  <Button
                                    onClick={() =>
                                      handleYorumSil(yorum.yorumId)
                                    }
                                    style={{
                                      backgroundColor: "transparent",
                                      padding: 0,
                                    }}
                                  >
                                    <Icon name="minus circle" color="red" />
                                  </Button>
                                }
                              />
                            </div>
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </div>
              ))}
            </>
          ) : (
            <div>Yorum bulunamadı!</div>
          )}
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item className="xxs:text-xxs xs:text-xs sm:text-tiny md:text-base xl:text-lg">
          Beğenilmeyen Yorumlar
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane className="font-poppins">
          {begenilmeyenKullaniciYorumlari.data != null ? (
            <>
              {begenilmeyenKullaniciYorumlari.data.map((yorum, index) => (
                <div key={index}>
                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar
                        as="a"
                        src={profile.profile}
                      ></Comment.Avatar>
                      <Comment.Content>
                        <Comment.Author>{profile.username}</Comment.Author>
                        <Comment.Metadata>
                          <div>{yorum.yorumTarihi}</div>
                        </Comment.Metadata>
                        <Comment.Text>
                          <p>{yorum.yorumIcerik}</p>
                        </Comment.Text>
                        <Comment.Text className="mb-1">
                          <Link
                            href={{
                              pathname: `https://kanaryasokagi.com/${yorum.haber.haberKategori.kategoriAd}/${yorum.haber.haberCinsiyet.cinsiyetAdi}/${yorum.haber.haberId}`,
                            }}
                          >
                            <a target="_blank">
                            <span className="text-blue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
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
                                  {yorum.yorumLikes}
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
                                  {yorum.yorumDislikes}
                                </Label>
                              </Button>
                              <Popup
                                content="Yorum sil"
                                trigger={
                                  <Button
                                    onClick={() =>
                                      handleYorumSil(yorum.yorumId)
                                    }
                                    style={{
                                      backgroundColor: "transparent",
                                      padding: 0,
                                    }}
                                  >
                                    <Icon name="minus circle" color="red" />
                                  </Button>
                                }
                              />
                            </div>
                          </Comment.Action>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </div>
              ))}
            </>
          ) : (
            <div>Yorum bulunamadı!</div>
          )}
        </Tab.Pane>
      ),
    },
  ];
  return (
    <Layout>
	    <Head>
        <title>
          Profil - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Profil - Kanaryasokağı - Fenerbahçeye dair en güncel haberler!"
        />
        <meta
          name="description"
          content="Profil - Kanaryasokağı - Fenerbahçeye dair en güncel, en hızlı haberler! Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
        />
        <meta
          name="keywords"
          content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, fenerbahçe opet"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link rel="canonical" href="https://kanaryasokagi.com/profil" />
      </Head>
      <div className="h-screen">
        <main>
          {!profile ? (
            <div className=" flex h-screen flex-wrap justify-center items-center">
              <div className="space-y-10">
                <div>
                  <span className="font-poppins text-xl">
                    Devam etmek için giriş yapınız...
                  </span>
                </div>
                <div className="text-center">
                  <Link href="https://kanaryasokagi.com/giris">
                    <a>
                    <Button
                      className="w-full"
                      style={{ backgroundColor: "#12326e" }}
                    >
                      <span className="font-poppins text-white text-xl">
                        Giriş
                      </span>
                    </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
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
            <Grid container centered>
              <Grid.Row className="mt-4">
                <Grid.Column
                  computer={4}
                  tablet={16}
                  mobile={16}
                  textAlign="center"
                  verticalAlign="middle"
                >
                  <Image
                    src={profile.profile}
					          alt={profile.username}
                    width={300}
                    height={300}
                    id="profile"
                  />
                </Grid.Column>
                <Grid.Column
                  computer={12}
                  tablet={16}
                  mobile={16}
                  verticalAlign="middle"
                  textAlign="left"
                >
                  <h2 className="text-blue">{profile.username}</h2>
                  <div className="h-1 bg-blue" />
                  <div className="grid grid-cols-6">
                    <div className="xxs:col-span-6 xs:col-span-6">
                      <div className="grid grid-cols-6">
                        <div className="xxs:col-span-6 sm:col-span-2 mt-4">
                          <h3>Ad:{profile.firstname}</h3>
<h3>Soyad:{profile.lastname}</h3>
                          
                        </div>
                        <div className="xxs:col-span-6 sm:col-span-4 mt-4">
                          <h4>Email:{profile.email}</h4>
                          <h4>
                            {"Kayıt tarihi: "}
                            {profile.createdAt}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Form className="mt-10">
                    <Form.Field>
                      <label>Profil resmi değiştir: </label>
                      <Form.Input
                        type="file"
                        accept="image/png, image/jpg, image/jpeg"
                        onChange={handleImageChange}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Button
                        fluid
                        color="green"
                        size="mini"
                        onClick={handleImageUpload}
                      >
                        Upload
                      </Button>
                    </Form.Field>
                  </Form>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={16}>
                  <Button
                    color="blue"
                    onClick={() => setStateSifreDegistir(!stateSifreDegistir)}
                  >
                    Şifre değiştir
                  </Button>
                  {!stateFormMessage.success && (
                    <Message negative>
                      <Message.Header>HATA!</Message.Header>
                      <Message.Content>
                        {stateFormMessage.message}
                      </Message.Content>
                    </Message>
                  )}
                  {stateFormMessage2.success && (
                    <Message positive>
                      <Message.Header>TEBRİKLER!</Message.Header>
                      <Message.Content>
                        {stateFormMessage2.message}
                      </Message.Content>
                    </Message>
                  )}
                  {stateSifreDegistir && (
                    <Form
                      onSubmit={submitSifreDegistirFormData}
                      className="mt-4"
                    >
                      <Form.Field>
                        <label>Eski şifre:</label>
                        <Form.Input
                          type="password"
                          name="eskiSifre"
                          value={eskiSifre}
                          onChange={handleSifreDegistirFormData}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Eski şifre tekrarı:</label>
                        <Form.Input
                          type="password"
                          name="eskiSifreRep"
                          value={eskiSifreRep}
                          onChange={handleSifreDegistirFormData}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Yeni şifre:</label>
                        <Form.Input
                          type="password"
                          name="yeniSifre"
                          value={yeniSifre}
                          onChange={handleSifreDegistirFormData}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>Yeni şifre tekrarı:</label>
                        <Form.Input
                          type="password"
                          name="yeniSifreRep"
                          value={yeniSifreRep}
                          onChange={handleSifreDegistirFormData}
                        />
                      </Form.Field>
                      <Form.Button
                        color="blue"
                        className="text-center"
                        content="Submit"
                      />
                    </Form>
                  )}
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
                  <Tab
                    renderActiveOnly={true}
                    menu={{ fluid: true, pointing: true }}
                    className="mt-4"
                    panes={yorumlarPanes}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <div className="mb-2 mt-2">
            <AdSense.Google
          client="ca-pub-2507406732896466"
          slot="8779365960"
          style={{ display: "block" }}
          responsive="true"
          format="fluid"
          layoutKey="-fb+5w+4e-db+86"
        />
                  </div>
          </>
          )}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req: req } = context,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = "/api/",
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";
  const [
      kullaniciYorumlariRes,
      begenilenKullaniciYorumlariRes,
      begenilmeyenKullaniciYorumlariRes,
    ] = await Promise.all([
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-yorumlari-getir?userId=${profile.id}`
      ),
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-begenilen-yorumlar?userId=${profile.id}`
      ),
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-begenilmeyen-yorumlar?userId=${profile.id}`
      ),
    ]),
    [
      kullaniciYorumlari,
      begenilenKullaniciYorumlari,
      begenilmeyenKullaniciYorumlari,
    ] = await Promise.all([
      kullaniciYorumlariRes.json(),
      begenilenKullaniciYorumlariRes.json(),
      begenilmeyenKullaniciYorumlariRes.json(),
    ]);
  return {
    props: {
      baseApiUrl: baseApiUrl,
      profile: profile,
      kullaniciYorumlari: kullaniciYorumlari,
      begenilenKullaniciYorumlari: begenilenKullaniciYorumlari,
      begenilmeyenKullaniciYorumlari: begenilmeyenKullaniciYorumlari,
    },
  };
}
