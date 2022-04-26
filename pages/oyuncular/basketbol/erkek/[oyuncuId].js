import Layout from"../../../../components/layout";import Image1 from"next/image";import{useRouter}from"next/router";import AdSense from "react-adsense";import Link from"next/link";import Head from"next/head";import fetch from"isomorphic-fetch";import{Card, Image, Table}from"semantic-ui-react";import{Container,Icon,Popup,Grid}from"semantic-ui-react";import{useContext,useEffect}from"react";import{AuthContext}from"../../../../contexts/AuthProvider";import{absoluteUrl,getAppCookies,verifyToken}from"../../../../middleware/utils";
export default function Oyuncu({ basketbolKategori, h, profile, oyuncu}) {
 const data=h,keywords=`kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, ${oyuncu.oyuncuAdi} ${oyuncu.oyuncuSoyAdi} istatistikleri`,baslik=`${oyuncu.oyuncuAdi} ${oyuncu.oyuncuSoyAdi} İstatistikleri - Kanaryasokağı`,aciklama=`Fenerbahçe son dakika ${oyuncu.oyuncuAdi} ${oyuncu.oyuncuSoyAdi} bilgileri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler`,{status:status,user:user}=useContext(AuthContext);useEffect(()=>{null!=profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);const router=useRouter();
	const link = `https://kanaryasokagi.com/oyuncular/basketbol/erkek/${oyuncu.oyuncuId}`;
  if (!data)
    return (
      <Layout>
        <div
          style={{ height: "100vh" }}
          className="bg-white  flex flex-wrap content-center  justify-center"
        >
          <p className="font-poppins font-bold text-3xl text-blue">
            Oyuncu Bulunamadı!
          </p>
        </div>
      </Layout>
    );
  else if (data) {
    return (
      <>
        {h.length >= 1 ? (
          <Layout>
            <Head>
              <title>{baslik}</title>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                name="title"
                content={baslik}
              />
              <meta
                name="description"
                content={aciklama}
              />
              <meta
                name="keywords"
                content={keywords}
              />
              <meta name="revisit-after" content="3 days" />
              <link rel="icon" href="/kanaryasokagi.ico" />
              <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
              <link
                rel="canonical"
                href={link}
              />
            </Head>
            <div className="px-0 mx-0 mt-10">
              <Grid>
                {h.slice(0, 1).map((oyuncu, index) => (
                  <Grid.Row key={index}>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <div className="text-center">
                        <Image
                          id="border-1"
                          circular
                          className="object-cover"
                          src={oyuncu.oyuncu.oyuncuProfil}
                          alt={oyuncu.oyuncu.oyuncuAdi}
                        />
                      </div>
                    </Grid.Column>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <Grid>
                        <Grid.Row centered className="mt-10">
                          <h1 className="text-blue ml-2 font-poppins font-thin text-4xl p-0 m-0">
                            {oyuncu.oyuncu.oyuncuAdi}{" "}
                            {oyuncu.oyuncu.oyuncuSoyAdi}
                          </h1>

                          <div className="bg-blue h-1.5 w-full m-0 p-0 absolute inset-x-0 bottom-0"></div>
                        </Grid.Row>
                        <Grid.Row className="text-blue">
                          <Grid.Column mobile={16} tablet={8} computer={8}>
                            <ul className="text-xl space-y-4 mt-4">
                              <li>
                                <span className="font-bold"> Uyruk:</span>
                                {" " + oyuncu.oyuncu.oyuncuUyruk}
                              </li>
                              <li>
                                <span className="font-bold"> Yaş:</span>
                                {" " + oyuncu.oyuncu.oyuncuYasi}
                              </li>
                              <li>
                                <span className="font-bold"> Boy:</span>
                                {" " + oyuncu.oyuncu.oyuncuBoy.toFixed(2)}
                              </li>
                            </ul>
                          </Grid.Column>
                          <Grid.Column mobile={16} tablet={8} computer={8}>
                            <ul className="text-xl space-y-4 mt-4">
                              <li>
                                <span className="font-bold">Mevki:</span>
                                {" " + oyuncu.oyuncu.oyuncuMevki}
                              </li>
                              <li>
                                <span className="font-bold">
                                  {" "}
                                  Forma Numarası:
                                </span>
                                {" " + oyuncu.oyuncu.oyuncuFormaNumarasi}
                              </li>
                            </ul>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Grid.Column>
                  </Grid.Row>
                ))}
              </Grid>
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
                <Grid.Column width={16}>
                <Table size="small" textAlign="center" celled selectable unstackable className=" w-full cursor-default font-poppins">
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell className=" xs:text-sm  xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          Maç
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center  xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          Skor
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xs:text-sm sm:text-tiny md:text-base lg:text-lg xl:text-xl xxs:text-xxs">
                          <Popup
                            content="Sayı"
                            trigger={
                              <Icon
                                name="basketball ball"
                                color="green"
                                size="small"
                              />
                            }
                          />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xs:text-sm sm:text-tiny md:text-base lg:text-lg xl:text-xl xxs:text-xxs">
                          <Popup
                            content="Asist"
                            trigger={
                              <Icon
                                color="olive"
                                name="basketball ball"
                                size="small"
                              />
                            }
                          />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup content="Ribaund" trigger={<span>R</span>} />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup content="Hücum Ribaund" trigger={<span>HR</span>} />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup content="Savunma Ribaund" trigger={<span>SR</span>} />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup content="Blok" trigger={<span>B</span>} />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup
                            content="Top Çalma"
                            trigger={<span>TÇ</span>}
                          />
                        </Table.HeaderCell>
                        <Table.HeaderCell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base tracking-tighter">
                          <Popup
                            content="Top Kaybı"
                            trigger={<span>TK</span>}
                          />
                        </Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body className="text-blue text-sm">
                      {h.map((oyuncuGelen, index) => (
                        <Table.Row className="bg-white" key={index}>
                          <Table.Cell className="flex justify-center items-center">
                            <div className="inline-block relative xxs:h-2 xxs:w-2 sm:h-4 sm:w-4 xl:h-6 xl:w-6">
                            <Image1
                              src={oyuncuGelen.mac.fiksturEvSahibiLogo}
                              alt={oyuncuGelen.mac.fiksturEvSahibi}
                              layout="fill"
                              className="object-cover"
                            />
                            </div>
                            <div className="inline-block xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter ml-2">
                              {oyuncuGelen.mac.fiksturEvSahibi}{"-"}</div>
                            <div className="inline-block xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter mr-2">
                              {oyuncuGelen.mac.fiksturDeplasman}
                            </div>
                            <div className="inline-block relative xxs:h-2 xxs:w-2 sm:h-4 sm:w-4 xl:h-6 xl:w-6">
                            <Image1
                              src={oyuncuGelen.mac.fiksturDeplasmanLogo}
                              alt={oyuncuGelen.mac.fiksturDeplasman}
                              layout="fill"
                              className="object-cover"
                            />
                            </div>
                          </Table.Cell>
                          <Table.Cell collapsing>
                          <Popup
                            content="Maç Sonucu"
                            trigger={
                              <div className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">                       
                              {oyuncuGelen.mac.fiksturEvSahibiSkor}
                              {"-"}
                              {oyuncuGelen.mac.fiksturDeplasmanSkor}
                            </div>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell collapsing className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base  font-thin tracking-tighter">
                            <Popup
                            content="Sayı"
                            trigger={
                              <span>{oyuncuGelen.macSayi}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell collapsing className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                            <Popup
                            content="Asist"
                            trigger={
                              <span>{oyuncuGelen.macAsist}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell collapsing className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                            <Popup
                            content="Ribaund"
                            trigger={
                              <span>{oyuncuGelen.macRibaund}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell collapsing className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                            <Popup
                            content="Hücum Ribaund"
                            trigger={
                              <span>{oyuncuGelen.macHucumRibaund}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell collapsing className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                            <Popup
                            content="Savunma Ribaund"
                            trigger={
                              <span>{oyuncuGelen.macSavunmaRibaund}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                          <Popup
                            content="Blok"
                            trigger={
                              <span>{oyuncuGelen.macBlok}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base  font-thin tracking-tighter">
                          <Popup
                            content="Top Çalma"
                            trigger={
                              <span>{oyuncuGelen.macTopCalma}</span>
                            }
                          />
                          </Table.Cell>
                          <Table.Cell className="text-center xxs:text-2xs xs:text-xxs sm:text-tiny md:text-base lg:text-lg xl:text-base font-thin tracking-tighter">
                          <Popup
                            content="Top Kaybı"
                            trigger={
                              <span>{oyuncuGelen.macTopKaybi}</span>
                            }
                          />
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </Grid.Column>
              </Grid>
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
              <Grid columns={3} centered>
                <Grid.Column
                  mobile={16}
                  tablet={5}
                  computer={5}
                  className="px-0"
                >
                  <div className="space-y-10">
                    {basketbolKategori.data.slice(0, 1).map((haber, index) => (
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
                      slot="8631800964"
                      style={{ display: "block" }}
                      responsive="true"
                      format="auto"
                      layoutKey="-gw-1+2a-9x+5c"
                    /></div>
                    {basketbolKategori.data.slice(1, 7).map((haber, index) => (
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
                <Grid.Column
                  mobile={16}
                  tablet={5}
                  computer={5}
                  className="px-0"
                >
                  <div className="space-y-10">
                    {basketbolKategori.data.slice(7, 9).map((haber,index) => (
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
                    {basketbolKategori.data.slice(9, 14).map((haber,index) => (
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
                <Grid.Column
                  mobile={16}
                  tablet={5}
                  computer={5}
                  className="px-0"
                >
                  <div className="space-y-10">
                    {basketbolKategori.data.slice(14, 17).map((haber,index) => (
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
                    {basketbolKategori.data.slice(17, 21).map((haber,index) => (
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
            </div>
          </Layout>
        ) : (
          <Layout>
            <Head>
              <title>
                {" "}
                {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                {" İstatistikleri Bulunamadı!"}
              </title>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                name="title"
                content="{oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi} İstatistikleri Bulunamadı!"
              />
              <meta
                name="description"
                content="Fenerbahçe son dakika {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi} bilgileri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler"
              />
              <meta
                name="keywords"
                content="kanaryasokağı, spor haberleri, fenerbahçe haberleri, fenerbahçe puan durumu, fenerbahçe fikstur, fenerbahçe erkek basketbol haberleri, fenerbahçe kadın basketbol haberleri, fenerbahçe erkek voleybol haberleri, fenerbahçe kadın voleybol haberleri, fenerbahçe beko, fenerbahçe opet, {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}"
              />
              <meta name="revisit-after" content="3 days" />
              <link rel="icon" href="/kanaryasokagi.ico" />
              <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
              <link
                rel="canonical"
                href="https://www.kanaryasokagi.com/oyuncular/basketbol/erkek/{oyuncu.oyuncuId}"
              />
            </Head>
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
            <div className="text-blue flex font-bold items-center justify-center font-poppins w-full h-screen text-2xl">
              OYUNCU İSTATİSTİĞİ BULUNAMADI!
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
          </Layout>
        )}
      </>
    );
  }
}
export async function getServerSideProps(context) {
const{req:req,query:query}=context,{origin:origin}=absoluteUrl(req),baseApiUrl="/api",{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  const [basketbolKategoriRes, hRes, oyuncuRes] = await Promise.all([
      fetch(
        "http://localhost:8080/api/haberler/getByHaberKategori?categoryId=1"
      ),
      fetch(
        "http://localhost:8080/api/oyuncu-maclari/erkek-basketbol--oyuncuya-gore-getir?oyuncuId=" +
          query.oyuncuId
      ),
      fetch(
        "http://localhost:8080/api/oyuncular/basketbol-erkek-getir-byId?oyuncuId=" +
          query.oyuncuId
      ),
    ]),
    [basketbolKategori, h, oyuncu] = await Promise.all([
      basketbolKategoriRes.json(),
      hRes.json(),
      oyuncuRes.json(),
    ]);
  return {
    props: {
      basketbolKategori: basketbolKategori,
      h: h.data,
      profile: profile,
      oyuncu: oyuncu.data,
    },
  };
}
