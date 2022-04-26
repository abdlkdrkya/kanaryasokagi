import Layout from"../../../../components/layout";import Image1 from"next/image";import Head from"next/head";import AdSense from"react-adsense";import{Icon,Popup,Table}from"semantic-ui-react";import{Grid}from"semantic-ui-react";import{useEffect}from"react";import{absoluteUrl,getAppCookies,verifyToken}from"../../../../middleware/utils";import{useContext}from"react";import{AuthContext}from"../../../../contexts/AuthProvider";
export default function ErkekBasketbolPuanDurumu({ puanDurumu, profile }) {
  const{status:status,user:user}=useContext(AuthContext);useEffect(()=>{let leg;void 0!==profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile,isBanned:profile.isBanned}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);
  return (
    <Layout>
      <Head>
        <title>
          Fenerbahçe Erkek Basketbol Puan Durumu | Kanaryasokağı | Fenerbahçe
          haberlerinin tek adresi
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Fenerbahçe Erkek Basketbol Puan Durumu | Kanaryasokağı | Fenerbahçe haberlerinin tek adresi"
        />
        <meta
          name="description"
          content="Fenerbahçe Erkek Basketbol Takımı'nın En Güncel Puan Durumu. "
        />
        <meta
          name="keywords"
          content="kanaryasokağı, fenerbahçe Erkek Basketbol, fenerbahçe Basketbol Puan durumu, fenerbahçe, fenerbahçe 
	  Puan Durumu, fenerbahçe Basketbol Puan Durumu"
        />
        <meta name="revisit-after" content="3 days" />
        <link rel="icon" href="/kanaryasokagi.ico" />
        <link rel="apple-touch-icon" href="/kanaryasokagi.ico" />
        <link
          rel="canonical"
          href="https://kanaryasokagi.com/puan-durumu/basketbol/erkek"
        />
      </Head>
      <div className="px-0 mx-0">
        <Grid>
          <Grid.Row>
            <Grid.Column computer={16} tablet={16} mobile={16}>
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
              <Table celled unstackable selectable>
                <Table.Header className="xxs:text-2xs xs:text-xxs sm:text-xs md:text-sm lg:text-tiny xl:text-base 2xl:text-lg">
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">#</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      Takım
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">O</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">G</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">M</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      <Popup
                        content="Atılan Sayı"
                        trigger={<Icon name="basketball ball" color="green" />}
                      />
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      <Popup
                        content="Yenilen Sayı"
                        trigger={<Icon name="basketball ball" color="red" />}
                      />
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">AV</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">P</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body className="xxs:text-2xs xs:text-xxs sm:text-xs md:text-sm lg:text-tiny xl:text-base 2xl:text-lg">
                  {puanDurumu.data.map((takim, index) => (
                    <Table.Row className="font-poppins" key={index}>
                      <Table.Cell textAlign="center">
                        {index <= 7 && (
                          <>
                            <Icon name="square" color="green" size="tiny" />
                            <span className="sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-poppins tracking-tighter">
                              {index + 1}
                            </span>
                          </>
                        )}
                        {index > 7 && index < 14 && (
                          <>
                            <Icon
                              name="square"
                              className="text-white"
                              size="tiny"
                            />
                            <span className="sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-poppins tracking-tighter">
                              {index + 1}
                            </span>
                          </>
                        )}
                        {index > 13 && (
                          <>
                            <Icon name="square" color="red" size="tiny" />
                            <span className="sm:text-3xs md:text-2xs lg:text-xs xl:text-sm font-poppins tracking-tighter">
                              {index + 1}
                            </span>
                          </>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        <div className="relative inline-block xxs:h-4 xxs:w-4  2xl:h-6 2xl:w-6 float-left mr-4">
                          <Image1
                            layout="fill"
                            className="object-contain"
                            src={takim.logo}
                            alt={takim.takim}
                          />
                        </div>
                        <span>{takim.takim}</span>
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {takim.oynananMac}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {takim.galibiyet}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {takim.maglubiyet}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {takim.atilanSayi}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {takim.yenilenSayi}
                      </Table.Cell>
                      <Table.Cell textAlign="center">{takim.averaj}</Table.Cell>
                      <Table.Cell textAlign="center">{takim.puan}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
              <div className="text-center space-x-6 mx-1 font-poppins tracking-tighter">
                <div className="inline-block">
                  <Icon name="square" color="green" size="tiny" />
                  <span className="text-blue xxs:text-3xs xs:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-tiny">
                    Quarter-finals
                  </span>
                </div>
                <div className="inline-block">
                  <Icon name="square" color="red" size="tiny" />
                  <span className="text-blue xxs:text-3xs xs:text-2xs sm:text-xxs md:text-xs lg:text-sm xl:text-tiny">
                    Relegation
                  </span>
                </div>
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
        </Grid>
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
  const [puanDurumuRes] = await Promise.all([
      fetch(
        "http://localhost:8080/api/puandurumu/basketbol-erkek-puandurumu-getir"
      ),
    ]),
    [puanDurumu] = await Promise.all([puanDurumuRes.json()]);
  return {
    props: {
      puanDurumu: puanDurumu,
      profile: profile,
    },
  };
}
