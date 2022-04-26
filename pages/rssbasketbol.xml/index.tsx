import { GetServerSideProps } from 'next';
import { Feed } from 'feed';
import moment from 'moment';
    
  const getAllArticles = async () => {
    const erkekFutbolRes = await fetch("http://localhost:8080/api/haberler/getByHaberKategori?categoryId=1");
    const erkekFutbol = await erkekFutbolRes.json();
    return erkekFutbol.data;
  };
  const hostUrl = 'https://kanaryasokagi.com';
  const buildFeed = (items) => {
    const feed = new Feed({
      id: hostUrl,
      link: hostUrl,
      title: 'Kanaryasokağı',
		language:"tr",
		generator: "kanaryasokağı",
      description: 'Fenerbahçe son dakika transfer haberleri, son dakika spor haberleri ve diğer branşlardan tüm güncel haberler',
      copyright: "Paylaşımı serbesttir.",
      favicon: "https://kanaryasokagi.com/kanaryasokagi.ico",
      updated: moment(items[0].date, 'YYYY-MM-DD').toDate()
    });
    items.map(item=>{
      const encoded = encodeURI(item.haberAnasayfaResim);
      feed.addItem({
        title: item.haberBaslik,
		  id: `${hostUrl}/${item.haberKategori.kategoriAd}/${item.haberCinsiyet.cinsiyetAdi}/${item.haberId}`,
        link: `${hostUrl}/${item.haberKategori.kategoriAd}/${item.haberCinsiyet.cinsiyetAdi}/${item.haberId}`,
        description: item.haberIcerik.slice(0,70),
        date: moment(item.haberTarih, 'YYYY-MM-DD').toDate(),
        image: `https://kanaryasokagi.com${encoded}`
      });
    })
	feed.addCategory("Basketbol");
    return feed;
  };

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  if (ctx && ctx.res) {
    const { res } = ctx;

    const articles = await getAllArticles();

    const feed = await buildFeed(articles);
    res.setHeader('content-type', 'text/xml');
    res.write(feed.rss2()); // NOTE: You can also use feed.atom1() or feed.json1() for other feed formats
    res.end();
  }

  return {
    props: {},
  };
};
export default function RssPage2() {}