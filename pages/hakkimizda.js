import{Grid}from"semantic-ui-react";import Layout from"../components/layout";
export default function Hakkimizda() {
  return (
    <Layout>
      <Grid container className="space-y-10">
        <Grid.Row>
          <div className="p-4">
            <div>
              <h3 className="font-poppins">Hakkımızda</h3>
              <h4 className="font-poppins">Kanaryasokagi.com</h4>
              <p className="text-lg font-poppins">
                <strong>Adres :</strong> Aydoğmuş Mah. Akdeniz cad. No:18, Kepez
                / Antalya <br />
                <strong>Email :</strong> info@kanaryasokagi.com <br />
                <strong>Kanaryasokagi.com</strong>; Fenerbahçeye dair,
                <strong>erkek</strong> ve <strong>kadın futbol</strong>,{" "}
                <strong>basketbol</strong>, <strong>voleybol</strong> ve diğer
                tüm kategorilerde <strong>güncel</strong> haber sunmak ve
                internet kullanıcısının
                <strong> habere ulaşmasını kolaylaştırmak</strong> için
                oluşturulmuş geniş kapsamlı bir haber portalıdır.
              </p>
              <h4 className="font-poppins">Ne Yapıyoruz?</h4>
              <p className="text-lg font-poppins">
                Fenerbahçenin <strong>günlük</strong> haberleri,{" "}
                <strong>transfer</strong> haberleri, <strong>maç öncesi</strong>{" "}
                ve <strong>maç sonrası</strong> haberlerini{" "}
                <strong>kendi ekibimiz</strong>
                aracılığıyla takip ederek size sunuyoruz. Sitemizde, Fenerbahçe
                ile ilgili <strong>her haberi</strong> okuyabilirsiniz.
              </p>
            </div>
          </div>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column textAlign="center" width={16}>
            <h3 className="font-poppins">Ekibimiz</h3>
            <span className="font-poppins font-bold">
              Genel Yayın Yönetmeni / Editor in Chief
            </span>
            <ul className="font-poppins mt-4 mb-4 text-lg">
              <li>Abdulkadir Kaya</li>
            </ul>
            <span className="font-poppins font-bold">
              Haber Editörleri / News Editors
            </span>
            <ul className="font-poppins mt-4 mb-4 text-lg space-y-2">
              <li>Abdulkadir Kaya</li>
              <li>Emre Kulaksız</li>
            </ul>
            <span className="font-poppins font-bold">
              Sosyal Medya Uzmanları / Social Media Experts
            </span>
            <ul className="font-poppins mt-4 mb-4 text-lg space-y-2">
              <li>Yunus Kulaksız</li>
              <li>Emre Kulaksız</li>
            </ul>
            <span className="font-poppins font-bold">
              Haber Ajansı / News Agency
            </span>
            <p className="font-poppins mt-4 mb-4 text-lg space-y-2">
              kanaryasokagi.com, kendi haberlerini özgün olarak kendi editör
              kadrosu ile üretmektedir.
            </p>
            <span className="font-poppins font-bold">
              Kurucu Üyeler / Founder Members
            </span>
            <ul className="font-poppins mt-4 mb-4 text-lg space-y-2">
              <li>Abdulkadir Kaya</li>
              <li>Emre Kulaksız</li>
              <li>Yunus Kulaksız</li>
            </ul>
            <span className="font-poppins font-bold">Yazılım / Software</span>
            <p className="font-poppins mt-4 mb-4 text-lg space-y-2">
              kanaryasokagi.com, kendi özgün Back-End ve Front-End(NextJS -
              ReactJS) tasarımını kullanmaktadır.
            </p>
            <span className="font-poppins font-bold">İletişim / Contact</span>
            <ul className="font-poppins mt-4 mb-4 text-lg space-y-2">
              <li>kanaryasokagi.com</li>
              <li>
                <strong>Mail:</strong> info@kanaryasokagi.com
              </li>
            </ul>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}
