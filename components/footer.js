import Link from"next/link";import{Grid,Icon}from"semantic-ui-react";
export default function Footer(props) {
  return (
    <footer className="space-y-4 bg-blue mt-4">
      <Grid  centered>
        <Grid.Row>
          <Grid.Column textAlign="center" width={16}>
            <Grid.Row>
              <span className="text-white font-poppins text-xl">
                Bizi Takip Edin!
              </span>
            </Grid.Row>
            <Grid.Row className="mt-2 space-x-4">
              <a href="https://instagram.com/kanarya.sokagi"><Icon name="instagram" size="big" className="text-white" /></a>
              <a href="https://twitter.com/kanaryasokagi"><Icon name="twitter square" size="big" className="text-white" /></a>
              <a href="https://facebook.com/kanaryasokagi"><Icon name="facebook" size="big" className="text-white" /></a>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <div className="p-2">
              <span className="text-2xl text-white font-bold font-poppins">
                Futbol
              </span>
              <ul className="text-white text-xs font-poppins space-y-2 mt-2">
                <Link href={{ pathname: `http://kanaryasokagi.com/futbol` }}>
                  <li className="cursor-pointer">Haberler</li>
                </Link>
                <Link
                  href={{
                    pathname: `http://kanaryasokagi.com/puan-durumu/futbol`,
                  }}
                >
                  <li className="cursor-pointer">Puan Durumu</li>
                </Link>
                <Link
                  href={{ pathname: `http://kanaryasokagi.com/fikstur/futbol` }}
                >
                  <li className="cursor-pointer">Fikstur</li>
                </Link>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <div className="p-2">
              <span className="text-2xl text-white font-bold font-poppins">
                Basketbol
              </span>
              <ul className="text-white text-xs font-poppins space-y-2 mt-2">
                <li>
                  <span className="underline text-lg">Erkek</span>
                  <ul className="space-y-1 mt-1">
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/basketbol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Haberler</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/puan-durumu/basketbol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Puan Durumu</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/fikstur/basketbol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Fikstur</li>
                    </Link>
                  </ul>
                </li>
                <li>
                  <span className="underline text-lg">Kadın</span>
                  <ul className="space-y-1 mt-1">
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/basketbol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Haberler</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/puan-durumu/basketbol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Puan Durumu</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/fikstur/basketbol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Fikstur</li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <div className="p-2">
              <span className="text-2xl text-white font-bold font-poppins">
                Voleybol
              </span>
              <ul className="text-white text-xs font-poppins space-y-2 mt-2">
                <li>
                  <span className="underline text-lg">Erkek</span>
                  <ul className="space-y-1 mt-1">
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/voleybol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Haberler</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/puan-durumu/voleybol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Puan Durumu</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/fikstur/voleybol/erkek`,
                      }}
                    >
                      <li className="cursor-pointer">Fikstur</li>
                    </Link>
                  </ul>
                </li>
                <li>
                  <span className="underline text-lg">Kadın</span>
                  <ul className="space-y-1 mt-1">
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/voleybol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Haberler</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/puan-durumu/voleybol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Puan Durumu</li>
                    </Link>
                    <Link
                      href={{
                        pathname: `http://kanaryasokagi.com/fikstur/voleybol/kadin`,
                      }}
                    >
                      <li className="cursor-pointer">Fikstur</li>
                    </Link>
                  </ul>
                </li>
              </ul>
            </div>
          </Grid.Column>
          <Grid.Column textAlign="center" computer={4} tablet={8} mobile={16}>
            <div className=" p-2">
              <ul className="text-xl text-white font-semibold space-y-4 font-poppins">
                <Link
                  href={{
                    pathname: `http://kanaryasokagi.com/profil`,
                  }}
                >
                  <li className="cursor-pointer">Profil</li>
                </Link>
                <Link
                  href={{
                    pathname: `http://kanaryasokagi.com/giris`,
                  }}
                >
                  <li className="cursor-pointer">Giriş</li>
                </Link>
                <Link
                  href={{
                    pathname: `http://kanaryasokagi.com/kayit`,
                  }}
                >
                  <li className="cursor-pointer">Kayıt</li>
                </Link>
              </ul>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center" width={16}>
            <Grid.Row>
              <span className="text-white font-poppins text-sm">
                <Icon name="copyright outline" /> Copyright 2021 kanaryasokağı
              </span>
              <div>
                <ul className="text-tiny text-white font-semibold space-y-4 font-poppins mt-2">
                <Link
                  href={{
                    pathname: `http://kanaryasokagi.com/gizlilik-politikasi`,
                  }}
                >
                  <li className="cursor-pointer">Gizlilik Politikası</li>
                </Link>
				<Link
                  href={{
                    pathname: `http://kanaryasokagi.com/iletisim`,
                  }}
                >
                  <li className="cursor-pointer">İletişim</li>
                </Link>
				<Link
                  href={{
                    pathname: `http://kanaryasokagi.com/hakkimizda`,
                  }}
                >
                  <li className="cursor-pointer">Hakkımızda</li>
                </Link>
                </ul>
              </div>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </footer>
  );
}
