import Link from"next/link";import{Card,Image}from"semantic-ui-react";
export default function HaberComp(props) {
  return (
    <div className="space-y-4">
      {props.data.slice(0, 10).map((haber, index) => (
        <div
          className="w-full shadow-xl cursor-pointer xxs:px-4 xs:px-4 sm:px-4 md:px-0 lg:px-0 xl:px-0 2xl:px-0"
          key={index}
        >
          <Link
            href={{
              pathname: `http://kanaryasokagi.com/${haber.haberKategori.kategoriAd}/${haber.haberCinsiyet.cinsiyetAdi}/${haber.haberId}`,
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
  );
}
