import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { GetServerSideProps } from 'next'
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const { res } = ctx;
  const [erkekFutbolRes,kadinFutbolRes,erkekBasketbolRes,kadinBasketbolRes,erkekVoleybolRes,kadinVoleybolRes] = await Promise.all([
    await fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=2&cinsiyetId=0"),
      await fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=2&cinsiyetId=1"),
      await  fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=1&cinsiyetId=0") ,
     await fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=1&cinsiyetId=1"),
     await fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=3&cinsiyetId=0"),
     await fetch("http://localhost:8080/api/haberler/getByHaberKategoriAndCinsiyet?categoryId=3&cinsiyetId=1"),
  ])

  const [erkekFutbol,kadinFutbol,erkekBasketbol,kadinBasketbol,erkekVoleybol,kadinVoleybol] = await Promise.all([
    await erkekFutbolRes.json(),
      await kadinFutbolRes.json(),
      await  erkekBasketbolRes.json(),
     await  kadinBasketbolRes.json(),
     await erkekVoleybolRes.json(),
       await kadinVoleybolRes.json(),

  ]) 
  const [a,b,c,d,e] =
    [erkekFutbol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/futbol/erkek/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    })),
 erkekBasketbol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/basketbol/erkek/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    })),
     kadinFutbol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/basketbol/kadin/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    })),
   kadinBasketbol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/basketbol/kadin/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    })),
     erkekVoleybol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/voleybol/erkek/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    })),
      kadinVoleybol.data.map((haber)=>({
      loc: `https://kanaryasokagi.com/voleybol/kadin/${haber.haberId}`,
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 1.0,
    }))]
    const apo =  Object.assign([], a, b,c,d,e);

  const fields = apo
  return getServerSideSitemap(ctx, fields)

}

// Default export to prevent next.js errors
export default function Server () {}