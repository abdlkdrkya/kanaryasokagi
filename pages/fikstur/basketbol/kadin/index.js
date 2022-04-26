import Layout from"../../../../components/layout";import Image1 from"next/image";import Head from"next/head";import{Table}from"semantic-ui-react";import AdSense from "react-adsense";import{Grid}from"semantic-ui-react";import{useEffect}from"react";import{absoluteUrl,getAppCookies,verifyToken}from"../../../../middleware/utils";import{useContext}from"react";import{AuthContext}from"../../../../contexts/AuthProvider";
export default function KadinBasketbolFikstur({ fikstur, profile }) {
 const{status:status,user:user}=useContext(AuthContext);useEffect(()=>{let leg;void 0!==profile.email?(user.setUserDetails({id:profile.id,email:profile.email,username:profile.username,firstname:profile.firstname,lastname:profile.lastname,roleId:profile.roleId,profile:profile.profile,isBanned:profile.isBanned}),status.setLoggedIn(!0)):status.setLoggedIn(!1)},[profile]);
  return (
    <Layout>
      <Head>
       <title>Fenerbahçe Kadın Basketbol Fikstur - Kanaryasokağı - Fenerbahçeye dair</title>
             <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
			  <meta name="title" content="Fenerbahçe Kadın Basketbol Fikstur - Kanaryasokağı - Fenerbahçeye dair"/>
			<meta name="description" content="Fenerbahçe Kadın Basketbol Takımı'nın En Güncel Fiksturü. "/>
			<meta name="keywords" content="kanaryasokağı, fenerbahçe Kadın Basketbol, fenerbahçe Basketbol, fenerbahçe safiport, fenerbahçe fikstürü, fenerbahçe Kadın Basketbol fikstürü, fenerbahçe Basketbol fikstürü"/>
			<meta name="revisit-after" content="3 days"/>
          <link rel="icon" href="/kanaryasokagi.ico" />
		  <link rel="apple-touch-icon" href="/kanaryasokagi.ico"/>
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
              <Table celled selectable>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">
                      Tarih
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Maç</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      1. Çeyrek
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      2. Çeyrek
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      3. Çeyrek
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      4. Çeyrek
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      İlk Yarı
                    </Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">
                      Maç Sonucu
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {fikstur.data.map((mac, index) => (
                    <Table.Row className="font-poppins" key={index}>
                      <Table.Cell textAlign="center">
                        {mac.fiksturTarih}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        <div className="relative inline-block h-6 w-6 float-left">
                          <Image1
                            layout="fill"
							alt={mac.fiksturEvSahibi}
                            className="object-contain"
                            src={mac.fiksturEvSahibiLogo}
                          />
                        </div>
                        <span>
                          {mac.fiksturEvSahibi}
                          {" - "}
                          {mac.fiksturDeplasman}
                        </span>
                        <div className=" relative inline-block h-6 w-6 float-right">
                          <Image1
                            layout="fill"
							alt={mac.fiksturDeplasman}
                            className="object-contain"
                            src={mac.fiksturDeplasmanLogo}
                          />
                        </div>
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiIlkCeyrekSkor}
                        {" - "}
                        {mac.fiksturDeplasmanIlkCeyrekSkor}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiIkinciCeyrekSkor}
                        {" - "}
                        {mac.fiksturDeplasmanIkinciCeyrekSkor}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiUcuncuCeyrekSkor}
                        {" - "}
                        {mac.fiksturDeplasmanUcuncuCeyrekSkor}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiDorduncuCeyrekSkor}
                        {" - "}
                        {mac.fiksturDeplasmanDorduncuCeyrekSkor}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiIlkYariSkor}
                        {" - "}
                        {mac.fiksturDeplasmanIlkYariSkor}
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        {mac.fiksturEvSahibiSkor}
                        {" - "}
                        {mac.fiksturDeplasmanSkor}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
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
 const{req:req}=context,{origin:origin}=absoluteUrl(req),baseApiUrl=`/api/about`,{token:token}=getAppCookies(req),profile=token?verifyToken(token.split(" ")[1]):"";
  const [fiksturRes] = await Promise.all([
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=2&fiksturKategoriId=1"
      ),
    ]),
    [fikstur] = await Promise.all([fiksturRes.json()]);
  return {
    props: {
      fikstur: fikstur,
      profile: profile,
    },
  };
}
