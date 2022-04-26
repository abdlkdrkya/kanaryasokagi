import Layout from"../../components/layout";import Image1 from"next/image";import{useRouter}from"next/router";import Link from"next/link";import AdSense from "react-adsense";import Head from"next/head";import fetch from"isomorphic-fetch";import{Button,Comment,Label,Icon,Popup,Grid,Tab,Menu}from"semantic-ui-react";import{useContext,useState,useEffect}from"react";import{AuthContext}from"../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../middleware/utils";
function YorumActions(props) {
  const router=useRouter(),handleYorumSil=async e=>{let type,data={yorumId:e,type:"postYorumSil"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegen=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumLike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}},handleYorumBegenme=async(yorumId,userId)=>{let type,data={yorumId:yorumId,userId:userId,type:"postYorumDislike"};const postApi=await fetch("/api/api/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}).catch(error=>{console.log(error)});try{let result;(await postApi.json()).success&&router.replace(router.asPath)}catch(err){console.log(err)}};
  if (props.yorumUserId == props.userId) {
    return (
      <div className="space-x-4 mb-2">
        <Button
          size="mini"
          style={{
            backgroundColor: "transparent",
            padding: 0,
          }}
        >
          <Icon name="thumbs up" color="green" />
          <Label basic color="green" size="mini">
            {props.yorumLikes}
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
            {props.yorumDislikes}
          </Label>
        </Button>
        <Popup
          content="Yorum sil"
          trigger={
            <Button
              style={{ backgroundColor: "transparent", padding: 0 }}
              onClick={() => handleYorumSil(props.yorumId)}
            >
              <Icon name="minus circle" color="red" />
            </Button>
          }
        />
      </div>
    );
  } else {
    return (
      <div className="space-x-4 mb-2">
        <Popup
          content="Beğendim"
          trigger={
            <Button
              size="mini"
              style={{
                backgroundColor: "transparent",
                padding: 0,
              }}
              onClick={() => handleYorumBegen(props.yorumId, props.userId)}
            >
              <Icon name="thumbs up" color="green" />
              <Label basic color="green" size="mini">
                {props.yorumLikes}
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
              onClick={() => handleYorumBegenme(props.yorumId, props.userId)}
            >
              <Icon name="thumbs down" color="red" />
              <Label basic color="red" size="mini">
                {props.yorumDislikes}
              </Label>
            </Button>
          }
        />
      </div>
    );
  }
}

function Kullanici({
  profile,
  kullaniciYorumlari,
  begenilenKullaniciYorumlari,
  begenilmeyenKullaniciYorumlari,
  h,
}) {
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
                      <Comment.Avatar as="a" src={yorum.user.profile} />
                      <Comment.Content>
                        <Comment.Author as="a">
                          {yorum.user.userName}
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
                            <span className="text-skyblue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <YorumActions
                              yorumUserId={yorum.user.userId}
                              userId={profile.id}
                              yorumId={yorum.yorumId}
                              yorumLikes={yorum.yorumLikes}
                              yorumDislikes={yorum.yorumDislikes}
                            />
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
                        src={yorum.user.profile}
                      ></Comment.Avatar>
                      <Comment.Content>
                        <Comment.Author>{yorum.user.userName}</Comment.Author>
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
                            <span className="text-skyblue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <YorumActions
                              yorumUserId={yorum.user.userId}
                              userId={profile.id}
                              yorumId={yorum.yorumId}
                              yorumLikes={yorum.yorumLikes}
                              yorumDislikes={yorum.yorumDislikes}
                            />
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
                        src={yorum.user.profile}
                      ></Comment.Avatar>
                      <Comment.Content>
                        <Comment.Author>{yorum.user.userName}</Comment.Author>
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
                            <span className="text-skyblue underline cursor-pointer">
                              {yorum.haber.haberBaslik}
                            </span>
                            </a>
                          </Link>
                        </Comment.Text>
                        <Comment.Actions>
                          <Comment.Action>
                            <YorumActions
                              yorumUserId={yorum.user.userId}
                              userId={profile.id}
                              yorumId={yorum.yorumId}
                              yorumLikes={yorum.yorumLikes}
                              yorumDislikes={yorum.yorumDislikes}
                            />
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
 const data=h,{status:status,user:user}=useContext(AuthContext),[error,setError]=useState(!1);useEffect(()=>{"user"==data.role.roleName?setError(!1):setError(!0),null!=profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);
  if (!data || error)
    return (
      <Layout>
        <div
          style={{ height: "100vh" }}
          className="bg-white  flex flex-wrap content-center  justify-center"
        >
          <p className="font-poppins font-bold text-3xl text-blue">
            Kullanıcı bulunamadı!
          </p>
        </div>
      </Layout>
    );
  else if (data && !error) {
    return (
      <>
        {!profile ? (
          <Layout>
            <div className="h-screen">
              <main>
                <div className=" flex flex-wrap justify-center items-center">
                  <div className="space-y-10">
                    <div>
                      <span className="font-poppins text-xl">
                        Devam etmek için giriş yapınız...
                      </span>
                    </div>
                    <div className="text-center">
                      <Link href="https://kanaryasokagi.com/giris">
                      <a target="_blank">
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
              </main>
            </div>
          </Layout>
        ) : (
          <Layout>
            <Head>
              <title>
                {h.userName}
                {" | Kanaryasokağı"}
              </title>
            </Head>
            <div className="h-screen">
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
              <main>
                <Grid container centered>
                  <Grid.Row className="mt-4">
                    <Grid.Column
                      computer={4}
                      tablet={16}
                      mobile={16}
                      textAlign="center"
                      verticalAlign="middle"
                    >
                      <Image1
                        src={h.profile}
                        alt="kullaniciProfili"
                        width={196}
                        height={196}
                        className="object-cover rounded-full"
                      />
                    </Grid.Column>
                    <Grid.Column
                      computer={12}
                      tablet={16}
                      mobile={16}
                      verticalAlign="middle"
                      textAlign="left"
                    >
                      <h2 className="text-blue">{h.userName}</h2>
                      <div className="h-1 bg-blue" />
                      <div className="grid grid-cols-6">
                        <div className="xxs:col-span-6 xs:col-span-6">
                          <div className="grid grid-cols-6">
                            <div className="col-span-6 mt-4">
                              <h4>
                                {"Kayıt tarihi: "}
                                {h.userKayitTarihi}
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Column width={16}>
                      <Tab
                        menu={{ fluid: true, pointing: true }}
                        className="mt-4"
                        panes={yorumlarPanes}
                      />
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
                </Grid>
              </main>
            </div>
          </Layout>
        )}
      </>
    );
  }
}

export async function getServerSideProps(context) {
  const { req, query } = context;
  const { origin } = absoluteUrl(req);
  const baseApiUrl = `${origin}/api`;
  var id = query.userId;
  const { token } = getAppCookies(req);
  const profile = token ? verifyToken(token.split(" ")[1]) : "";

  const [
      kullaniciYorumlariRes,
      begenilenKullaniciYorumlariRes,
      begenilmeyenKullaniciYorumlariRes,
      kullaniciRes,
    ] = await Promise.all([
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-yorumlari-getir?userId=${id}`
      ),
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-begenilen-yorumlar?userId=${id}`
      ),
      fetch(
        `http://localhost:8080/api/user-comments/kullanici-begenilmeyen-yorumlar?userId=${id}`
      ),
      fetch("http://localhost:8080/api/kullanicilar/id-getir?userId=" + id),
    ]),
    [
      kullaniciYorumlari,
      begenilenKullaniciYorumlari,
      begenilmeyenKullaniciYorumlari,
      kullanici,
    ] = await Promise.all([
      kullaniciYorumlariRes.json(),
      begenilenKullaniciYorumlariRes.json(),
      begenilmeyenKullaniciYorumlariRes.json(),
      kullaniciRes.json(),
    ]);
  return {
    props: {
      baseApiUrl: baseApiUrl,
      profile: profile,
      kullaniciYorumlari: kullaniciYorumlari,
      begenilenKullaniciYorumlari: begenilenKullaniciYorumlari,
      begenilmeyenKullaniciYorumlari: begenilmeyenKullaniciYorumlari,
      h: kullanici.data,
    },
  };
}

export default Kullanici;
