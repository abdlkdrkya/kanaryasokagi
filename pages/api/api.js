import axios from "axios";
import { storage } from "../../firebase";
export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { method } = req;
    console.log("başlangıç");
    try {
      switch (method) {
        case "POST":
          const type = req.body;
          switch (req.body.type) {
            case "postHaberGuncelle": {
              const {
                haberId,
                haberGuncelleBaslik,
                haberGuncelleCinsiyetId,
                haberGuncelleEtiket1,
                haberGuncelleEtiket2,
                haberGuncelleIcerik,
                haberGuncelleFoto,
                haberGuncelleKategoriId,
                haberGuncelleKaynak,
              } = req.body;
              let sonHaberBaslik = encodeURI(haberGuncelleBaslik),
                sonHaberEtiket1 = encodeURI(haberGuncelleEtiket1),
                sonHaberEtiket2 = encodeURI(haberGuncelleEtiket2),
                sonHaberIcerik = encodeURI(haberGuncelleIcerik),
                sonHaberKaynak = encodeURI(haberGuncelleKaynak),
                sonHaberFoto = encodeURI(haberGuncelleFoto),
                sonHaberKategoriId = parseInt(haberGuncelleKategoriId),
                sonCinsiyetId = parseInt(haberGuncelleCinsiyetId),
                sonHaberGuncelleId = parseInt(haberId);
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url:
                  "http://localhost:8080/api/haberler/guncelle?haberAnasayfaResim=" +
                  sonHaberFoto +
                  "&haberBaslik=" +
                  sonHaberBaslik +
                  "&haberCinsiyetId=" +
                  sonCinsiyetId +
                  "&haberEtiket1=" +
                  sonHaberEtiket1 +
                  "&haberEtiket2=" +
                  sonHaberEtiket2 +
                  "&haberIcerik=" +
                  sonHaberIcerik +
                  "&haberId=" +
                  sonHaberGuncelleId +
                  "&haberKategoriId=" +
                  sonHaberKategoriId +
                  "&haberKaynak=" +
                  sonHaberKaynak,
              })
                .then((ress) => {
                  console.log(ress.status, ress.data);
                  return res.status(ress.status).json(ress.data);
                })
                .catch((error) => {
                  console.log(error);
                });
              break;
            }
            case "postFutbolPuanDurumuData": {
              const {
                takimID,
                takimAtilanGol,
                takimYenilenGol,
                takimGalibiyet,
                takimMaglubiyet,
                takimBeraberlik,
              } = req.body;
              let sonTakimID = parseInt(takimID),
                sonTakimAtilanGol = parseInt(takimAtilanGol),
                sonTakimYenilenGol = parseInt(takimYenilenGol),
                sonTakimGalibiyet = parseInt(takimGalibiyet),
                sonTakimMaglubiyet = parseInt(takimMaglubiyet),
                sonTakimBeraberlik = parseInt(takimBeraberlik);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/puandurumu/puandurumuguncelle?atilanGol=${sonTakimAtilanGol}&beraberlik=${sonTakimBeraberlik}&galibiyet=${sonTakimGalibiyet}&maglubiyet=${sonTakimMaglubiyet}&takimId=${sonTakimID}&yenilenGol=${sonTakimYenilenGol}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });

              break;
            }
            case "postErkekBasketbolPuanDurumuData": {
              const {
                basketbolTakimID,
                basketbolTakimAtilanSayi,
                basketbolTakimYenilenSayi,
                basketbolTakimGalibiyet,
                basketbolTakimMaglubiyet,
              } = req.body;
              console.log(req.body);
              let sonTakimIDBasket = parseInt(basketbolTakimID),
                sonTakimAtilanSayiBasket = parseInt(basketbolTakimAtilanSayi),
                sonTakimYenilenSayiBasket = parseInt(basketbolTakimYenilenSayi),
                sonTakimGalibiyetBasket = parseInt(basketbolTakimGalibiyet),
                sonTakimMaglubiyetBasket = parseInt(basketbolTakimMaglubiyet);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/puandurumu/basketbol-erkek-puandurumu-guncelle?atilanSayi=${sonTakimAtilanSayiBasket}&galibiyet=${sonTakimGalibiyetBasket}&maglubiyet=${sonTakimMaglubiyetBasket}&takimId=${sonTakimIDBasket}&yenilenSayi=${sonTakimYenilenSayiBasket}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postKadinBasketbolPuanDurumuData": {
              const {
                basketbolTakimID,
                basketbolTakimAtilanSayi,
                basketbolTakimYenilenSayi,
                basketbolTakimGalibiyet,
                basketbolTakimMaglubiyet,
              } = req.body;
              console.log(req.body);
              let sonTakimIDBasket = parseInt(basketbolTakimID),
                sonTakimAtilanSayiBasket = parseInt(basketbolTakimAtilanSayi),
                sonTakimYenilenSayiBasket = parseInt(basketbolTakimYenilenSayi),
                sonTakimGalibiyetBasket = parseInt(basketbolTakimGalibiyet),
                sonTakimMaglubiyetBasket = parseInt(basketbolTakimMaglubiyet);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/puandurumu/basketbol-kadin-puandurumu-guncelle?atilanSayi=${sonTakimAtilanSayiBasket}&galibiyet=${sonTakimGalibiyetBasket}&maglubiyet=${sonTakimMaglubiyetBasket}&takimId=${sonTakimIDBasket}&yenilenSayi=${sonTakimYenilenSayiBasket}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postErkekVoleybolPuanDurumuData": {
              const {
                voleybolTakimID,
                voleybolTakimAldigiSet,
                voleybolTakimVerdigiSet,
                voleybolTakimAldigiSayi,
                voleybolTakimVerdigiSayi,
                voleybolTakimGalibiyet,
                voleybolTakimMaglubiyet,
                voleybolTakimPuan,
              } = req.body;
              console.log(req.body);
              let sonVoleybolTakimID = parseInt(voleybolTakimID),
                sonVoleybolTakimAldigiSet = parseInt(voleybolTakimAldigiSet),
                sonVoleybolTakimVerdigiSet = parseInt(voleybolTakimVerdigiSet),
                sonVoleybolTakimAldigiSayi = parseInt(voleybolTakimAldigiSayi),
                sonVoleybolTakimVerdigiSayi = parseInt(
                  voleybolTakimVerdigiSayi
                ),
                sonVoleybolTakimGalibiyet = parseInt(voleybolTakimGalibiyet),
                sonVoleybolTakimMaglubiyet = parseInt(voleybolTakimMaglubiyet),
                sonVoleybolTakimPuan = parseInt(voleybolTakimPuan);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/puandurumu/voleybol-erkek-puandurumu-guncelle?aldigiSet=${sonVoleybolTakimAldigiSet}&atilanSayi=${sonVoleybolTakimAldigiSayi}&galibiyet=${sonVoleybolTakimGalibiyet}&maglubiyet=${sonVoleybolTakimMaglubiyet}&puan=${sonVoleybolTakimPuan}&takimId=${sonVoleybolTakimID}&verdigiSet=${sonVoleybolTakimVerdigiSet}&yenilenSayi=${sonVoleybolTakimVerdigiSayi}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postKadinVoleybolPuanDurumuData": {
              const {
                voleybolTakimID,
                voleybolTakimAldigiSet,
                voleybolTakimVerdigiSet,
                voleybolTakimAldigiSayi,
                voleybolTakimVerdigiSayi,
                voleybolTakimGalibiyet,
                voleybolTakimMaglubiyet,
                voleybolTakimPuan,
              } = req.body;
              console.log(req.body);
              let sonVoleybolTakimID = parseInt(voleybolTakimID),
                sonVoleybolTakimAldigiSet = parseInt(voleybolTakimAldigiSet),
                sonVoleybolTakimVerdigiSet = parseInt(voleybolTakimVerdigiSet),
                sonVoleybolTakimAldigiSayi = parseInt(voleybolTakimAldigiSayi),
                sonVoleybolTakimVerdigiSayi = parseInt(
                  voleybolTakimVerdigiSayi
                ),
                sonVoleybolTakimGalibiyet = parseInt(voleybolTakimGalibiyet),
                sonVoleybolTakimMaglubiyet = parseInt(voleybolTakimMaglubiyet),
                sonVoleybolTakimPuan = parseInt(voleybolTakimPuan);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/puandurumu/voleybol-kadin-puandurumu-guncelle?aldigiSet=${sonVoleybolTakimAldigiSet}&atilanSayi=${sonVoleybolTakimAldigiSayi}&galibiyet=${sonVoleybolTakimGalibiyet}&maglubiyet=${sonVoleybolTakimMaglubiyet}&puan=${sonVoleybolTakimPuan}&takimId=${sonVoleybolTakimID}&verdigiSet=${sonVoleybolTakimVerdigiSet}&yenilenSayi=${sonVoleybolTakimVerdigiSayi}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postProfilResmi": {
              const { e, userName } = req.body;
              console.log(req.body);
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/kullanicilar/resim-degistir?image=${e}&userName=${userName}`,
              }).then((ress) => {
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postFutbolOyuncuIstatistikData": {
              console.log("postFutbol");
              const {
                macYaptigiAsist,
                macOynadigiDakika,
                macAttigiGol,
                macID,
                macIlk11,
                macGorduguKirmiziKart,
                oyuncuID,
                macGorduguSariKart,
              } = req.body;
              return axios({
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                url: `http://localhost:8080/api/oyuncu-maclari/erkek-futbol-ekle?macAsist=${macYaptigiAsist}&macDakika=${macOynadigiDakika}&macGol=${macAttigiGol}&macId=${macID}&macIlk11=${macIlk11}&macKirmiziKart=${macGorduguKirmiziKart}&macOyuncuId=${oyuncuID}&macSariKart=${macGorduguSariKart}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postFutbolOyuncuIstatistikGuncelleData": {
              console.log("postFutbol");
              const {
                macYaptigiAsist,
                macOynadigiDakika,
                macAttigiGol,
                macID,
                macIlk11,
                macGorduguKirmiziKart,
                oyuncuID,
                macGorduguSariKart,
              } = req.body;
              return axios({
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                url: `http://localhost:8080/api/oyuncu-maclari/erkek-futbol-guncelle?macAsist=${macYaptigiAsist}&macDakika=${macOynadigiDakika}&macGol=${macAttigiGol}&macId=${macID}&macIlk11=${macIlk11}&macKirmiziKart=${macGorduguKirmiziKart}&macOyuncuId=${oyuncuID}&macSariKart=${macGorduguSariKart}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postBasketbolErkekOyuncuIstatistikData": {
              const {
                basketbolMacAsist,
                basketbolMacBlok,
                basketbolMacHucumRibaund,
                basketbolMacID,
                basketbolOyuncuID,
                basketbolMacSavunmaRibaund,
                basketbolMacSayi,
                basketbolMacTopCalma,
                basketbolMacTopKaybi,
              } = req.body;
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/oyuncu-maclari/erkek-basketbol-ekle?macAsist=${basketbolMacAsist}&macBlock=${basketbolMacBlok}&macHucumRibaund=${basketbolMacHucumRibaund}&macId=${basketbolMacID}&macOyuncuId=${basketbolOyuncuID}&macSavunmaRibaund=${basketbolMacSavunmaRibaund}&macSayi=${basketbolMacSayi}
        &macTopCalma=${basketbolMacTopCalma}&macTopKaybi=${basketbolMacTopKaybi}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postBasketbolErkekOyuncuIstatistikGuncelleData": {
              const {
                basketbolMacAsist,
                basketbolMacBlok,
                basketbolMacHucumRibaund,
                basketbolMacID,
                basketbolOyuncuID,
                basketbolMacSavunmaRibaund,
                basketbolMacSayi,
                basketbolMacTopCalma,
                basketbolMacTopKaybi,
              } = req.body;
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/oyuncu-maclari/erkek-basketbol-guncelle?macAsist=${basketbolMacAsist}&macBlock=${basketbolMacBlok}&macHucumRibaund=${basketbolMacHucumRibaund}&macId=${basketbolMacID}&macOyuncuId=${basketbolOyuncuID}&macSavunmaRibaund=${basketbolMacSavunmaRibaund}&macSayi=${basketbolMacSayi}&macTopCalma=${basketbolMacTopCalma}&macTopKaybi=${basketbolMacTopKaybi}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postBasketbolKadinOyuncuIstatistikData": {
              const {
                basketbolMacAsist,
                basketbolMacBlok,
                basketbolMacHucumRibaund,
                basketbolMacID,
                basketbolOyuncuID,
                basketbolMacSavunmaRibaund,
                basketbolMacSayi,
                basketbolMacTopCalma,
                basketbolMacTopKaybi,
              } = req.body;
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/oyuncu-maclari/kadin-basketbol-ekle?macAsist=${basketbolMacAsist}&macBlock=${basketbolMacBlok}&macHucumRibaund=${basketbolMacHucumRibaund}&macId=${basketbolMacID}&macOyuncuId=${basketbolOyuncuID}&macSavunmaRibaund=${basketbolMacSavunmaRibaund}&macSayi=${basketbolMacSayi}
          &macTopCalma=${basketbolMacTopCalma}&macTopKaybi=${basketbolMacTopKaybi}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postBasketbolKadinOyuncuIstatistikGuncelleData": {
              const {
                basketbolMacAsist,
                basketbolMacBlok,
                basketbolMacHucumRibaund,
                basketbolMacID,
                basketbolOyuncuID,
                basketbolMacSavunmaRibaund,
                basketbolMacSayi,
                basketbolMacTopCalma,
                basketbolMacTopKaybi,
              } = req.body;
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/oyuncu-maclari/kadin-basketbol-guncelle?macAsist=${basketbolMacAsist}&macBlock=${basketbolMacBlok}&macHucumRibaund=${basketbolMacHucumRibaund}&macId=${basketbolMacID}&macOyuncuId=${basketbolOyuncuID}&macSavunmaRibaund=${basketbolMacSavunmaRibaund}&macSayi=${basketbolMacSayi}
          &macTopCalma=${basketbolMacTopCalma}&macTopKaybi=${basketbolMacTopKaybi}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postFiksturGuncellemeData": {
              let tarih = req.body.guncellemeFiksturTarih.toString(),
              songuncellemeFiksturId = parseInt(req.body.guncellemeFiksturId),
              guncellemeFiksturEvSahibiSkor = req.body.guncellemeFiksturEvSahibiSkor.toString(),
                guncellemeFiksturEvSahibiIlkPeriyotSkor = req.body.guncellemeFiksturEvSahibiIlkPeriyotSkor.toString(),
                guncellemeFiksturEvSahibiIkinciPeriyotSkor = req.body.guncellemeFiksturEvSahibiIkinciPeriyotSkor.toString(),
                guncellemeFiksturEvSahibiUcuncuPeriyotSkor = req.body.guncellemeFiksturEvSahibiUcuncuPeriyotSkor.toString(),
                guncellemeFiksturEvSahibiDorduncuPeriyotSkor = req.body.guncellemeFiksturEvSahibiDorduncuPeriyotSkor.toString(),
                guncellemeFiksturEvSahibiBesinciPeriyotSkor = req.body.guncellemeFiksturEvSahibiBesinciPeriyotSkor.toString(),
                guncellemeFiksturEvSahibiIlkYariSkor = req.body.guncellemeFiksturEvSahibiIlkYariSkor.toString(),
                guncellemeFiksturEvSahibiIlkCeyrekSkor = req.body.guncellemeFiksturEvSahibiIlkCeyrekSkor.toString(),
                guncellemeFiksturEvSahibiIkinciCeyrekSkor = req.body.guncellemeFiksturEvSahibiIkinciCeyrekSkor.toString(),
                guncellemeFiksturEvSahibiUcuncuCeyrekSkor = req.body.guncellemeFiksturEvSahibiUcuncuCeyrekSkor.toString(),
                guncellemeFiksturEvSahibiDorduncuCeyrekSkor = req.body.guncellemeFiksturEvSahibiDorduncuCeyrekSkor.toString(),
                guncellemeFiksturDeplasmanSkor = req.body.guncellemeFiksturDeplasmanSkor.toString(),
                guncellemeFiksturDeplasmanIlkPeriyotSkor = req.body.guncellemeFiksturDeplasmanIlkPeriyotSkor.toString(),
                guncellemeFiksturDeplasmanIkinciPeriyotSkor = req.body.guncellemeFiksturDeplasmanIkinciPeriyotSkor.toString(),
                guncellemeFiksturDeplasmanUcuncuPeriyotSkor = req.body.guncellemeFiksturDeplasmanUcuncuPeriyotSkor.toString(),
                guncellemeFiksturDeplasmanDorduncuPeriyotSkor = req.body.guncellemeFiksturDeplasmanDorduncuPeriyotSkor.toString(),
                guncellemeFiksturDeplasmanBesinciPeriyotSkor = req.body.guncellemeFiksturDeplasmanBesinciPeriyotSkor.toString(),
                guncellemeFiksturDeplasmanIlkYariSkor = req.body.guncellemeFiksturDeplasmanIlkYariSkor.toString(),
                guncellemeFiksturDeplasmanIlkCeyrekSkor = req.body.guncellemeFiksturDeplasmanIlkCeyrekSkor.toString(),
                guncellemeFiksturDeplasmanIkinciCeyrekSkor = req.body.guncellemeFiksturDeplasmanIkinciCeyrekSkor.toString(),
                guncellemeFiksturDeplasmanUcuncuCeyrekSkor = req.body.guncellemeFiksturDeplasmanUcuncuCeyrekSkor.toString(),
                guncellemeFiksturDeplasmanDorduncuCeyrekSkor = req.body.guncellemeFiksturDeplasmanDorduncuCeyrekSkor.toString();
                console.log("postFiksturGuncelleeeee")
                console.log(req.body)
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/fikstur/guncelle?fiksturDeplasmanBesinciPeriyotSkor=${guncellemeFiksturDeplasmanBesinciPeriyotSkor}&fiksturDeplasmanDorduncuCeyrekSkor=${guncellemeFiksturDeplasmanDorduncuCeyrekSkor}&fiksturDeplasmanDorduncuPeriyotSkor=${guncellemeFiksturDeplasmanDorduncuPeriyotSkor}
                &fiksturDeplasmanIkinciCeyrekSkor=${guncellemeFiksturDeplasmanIkinciCeyrekSkor}&fiksturDeplasmanIkinciPeriyotSkor=${guncellemeFiksturDeplasmanIkinciPeriyotSkor}&fiksturDeplasmanIlkCeyrekSkor=${guncellemeFiksturDeplasmanIlkCeyrekSkor}
                &fiksturDeplasmanIlkPeriyotSkor=${guncellemeFiksturDeplasmanIlkPeriyotSkor}&fiksturDeplasmanIlkYariSkor=${guncellemeFiksturDeplasmanIlkYariSkor}&fiksturDeplasmanSkor=${guncellemeFiksturDeplasmanSkor}&fiksturDeplasmanUcuncuCeyrekSkor=${guncellemeFiksturDeplasmanUcuncuCeyrekSkor}
                &fiksturDeplasmanUcuncuPeriyotSkor=${guncellemeFiksturDeplasmanUcuncuPeriyotSkor}&fiksturEvSahibiBesinciPeriyotSkor=${guncellemeFiksturEvSahibiBesinciPeriyotSkor}&fiksturEvSahibiDorduncuCeyrekSkor=${guncellemeFiksturEvSahibiDorduncuCeyrekSkor}&fiksturEvSahibiDorduncuPeriyotSkor=${guncellemeFiksturEvSahibiDorduncuPeriyotSkor}
                &fiksturEvSahibiIkinciCeyrekSkor=${guncellemeFiksturEvSahibiIkinciCeyrekSkor}&fiksturEvSahibiIkinciPeriyotSkor=${guncellemeFiksturEvSahibiIkinciPeriyotSkor}&fiksturEvSahibiIlkCeyrekSkor=${guncellemeFiksturEvSahibiIlkCeyrekSkor}&fiksturEvSahibiIlkPeriyotSkor=${guncellemeFiksturEvSahibiIlkPeriyotSkor}
                &fiksturEvSahibiIlkYariSkor=${guncellemeFiksturEvSahibiIlkYariSkor}&fiksturEvSahibiSkor=${guncellemeFiksturEvSahibiSkor}&fiksturEvSahibiUcuncuCeyrekSkor=${guncellemeFiksturEvSahibiUcuncuCeyrekSkor}&fiksturEvSahibiUcuncuPeriyotSkor=${guncellemeFiksturEvSahibiUcuncuPeriyotSkor}
                &fiksturId=${songuncellemeFiksturId}&fiksturTarih=${tarih}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postFiksturData": {
              const {
                fiksturCinsiyetId,
                fiksturDeplasman,
                fiksturDeplasmanSkor,
                fiksturEvSahibi,
                fiksturEvSahibiSkor,
                fiksturKategoriId,
                fiksturTarih,
                fiksturTurnuva,
              } = req.body;
              let tarih = fiksturTarih.toString(),
                sonFiksturCinsiyetId = parseInt(fiksturCinsiyetId),
                sonFiksturKategoriId = parseInt(fiksturKategoriId),
                sonDeplasman = encodeURI(fiksturDeplasman),
                sonEv = encodeURI(fiksturEvSahibi),
                sonTurnuva = encodeURI(fiksturTurnuva);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/fikstur/fikstur-ekle?fiksturCinsiyetId=${sonFiksturCinsiyetId}&fiksturDeplasman=${sonDeplasman}&fiksturDeplasmanSkor=${fiksturDeplasmanSkor}&fiksturEvSahibi=${sonEv}&fiksturEvSahibiSkor=${fiksturEvSahibiSkor}&fiksturKategoriId=${sonFiksturKategoriId}&fiksturTarih=${tarih}&fiksturTurnuva=${sonTurnuva}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postHaberData": {
              const {
                haberBaslik,
                haberCinsiyetId,
                haberEtiket1,
                haberEtiket2,
                haberIcerik,
                haberFoto,
                haberKategoriId,
                haberKaynak,
              } = req.body;
              let sonHaberBaslik = encodeURI(haberBaslik),
                sonHaberEtiket1 = encodeURI(haberEtiket1),
                sonHaberEtiket2 = encodeURI(haberEtiket2),
                sonHaberIcerik = encodeURI(haberIcerik),
                sonHaberKaynak = encodeURI(haberKaynak),
                sonHaberFoto = encodeURI(haberFoto),
                sonHaberId = parseInt(haberKategoriId),
                sonCinsiyetId = parseInt(haberCinsiyetId);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url:
                  "http://localhost:8080/api/haberler/add?haberAnasayfaResim=" +
                  sonHaberFoto +
                  "&haberBaslik=" +
                  sonHaberBaslik +
                  "&haberCinsiyetId=" +
                  sonCinsiyetId +
                  "&haberEtiket1=" +
                  sonHaberEtiket1 +
                  "&haberEtiket2=" +
                  sonHaberEtiket2 +
                  "&haberIcerik=" +
                  sonHaberIcerik +
                  "&haberKategoriId=" +
                  sonHaberId +
                  "&haberKaynak=" +
                  sonHaberKaynak,
              })
                .then((ress) => {
                  console.log(ress.status, ress.data);
                  return res.status(ress.status).json(ress.data);
                })
                .catch((error) => {
                  console.log(error);
                });
              break;
            }
            case "postFotoHaberData": {
              const {
                fotoHaberBaslik,
                fotoHaberKaynak,
                fotoHaberEtiket1,
                fotoHaberEtiket2,
                fotoHaberIcerikBaslik1,
                fotoHaberIcerikAciklama1,
                fotoHaberIcerikBaslik2,
                fotoHaberIcerikAciklama2,
                fotoHaberIcerikBaslik3,
                fotoHaberIcerikAciklama3,
                fotoHaberIcerikBaslik4,
                fotoHaberIcerikAciklama4,
                fotoHaberIcerikBaslik5,
                fotoHaberIcerikAciklama5,
                fotoHaberIcerikBaslik6,
                fotoHaberIcerikAciklama6,
                fotoHaberIcerik7,
                stateFotoHaberAnaFoto,
                stateFotoHaberFoto1,
                stateFotoHaberFoto2,
                stateFotoHaberFoto3,
                stateFotoHaberFoto4,
                stateFotoHaberFoto5,
                stateFotoHaberFoto6,
              } = req.body;
              let urlAna = "",
                urlFoto1 = "",
                urlFoto2 = "",
                urlFoto3 = "",
                urlFoto4 = "",
                urlFoto5 = "",
                urlFoto6 = "";
              const uploadAnaFoto = storage
                .ref(`haberler/fotohaber/${fotoHaberBaslik}`)
                .put(stateFotoHaberAnaFoto);
              uploadAnaFoto
                .then((uploadTaskSnapshot) => {
                  return uploadTaskSnapshot.ref.getDownloadURL();
                })
                .then((urlAna) => {
                  urlAna = encodeURIComponent(urlAna);
                  console.log(urlAna);
                  const uploadFoto1 = storage
                    .ref(`haberler/fotohaber/${fotoHaberIcerikBaslik1}`)
                    .put(stateFotoHaberFoto1);
                  uploadFoto1
                    .then((uploadTaskSnapshot1) => {
                      return uploadTaskSnapshot1.ref.getDownloadURL();
                    })
                    .then((url1) => {
                      urlFoto1 = encodeURIComponent(url1);
                      console.log(urlFoto1);
                      const uploadFoto2 = storage
                        .ref(`haberler/fotohaber/${fotoHaberIcerikBaslik2}`)
                        .put(stateFotoHaberFoto2);
                      uploadFoto2
                        .then((uploadTaskSnapshot2) => {
                          return uploadTaskSnapshot2.ref.getDownloadURL();
                        })
                        .then((url2) => {
                          urlFoto2 = encodeURIComponent(url2);
                          console.log(urlFoto2);
                          const uploadFoto3 = storage
                            .ref(`haberler/fotohaber/${fotoHaberIcerikBaslik3}`)
                            .put(stateFotoHaberFoto3);
                          uploadFoto3
                            .then((uploadTaskSnapshot3) => {
                              return uploadTaskSnapshot3.ref.getDownloadURL();
                            })
                            .then((url3) => {
                              urlFoto3 = encodeURIComponent(url3);
                              console.log(urlFoto3);
                              if (stateFotoHaberFoto4 !== null) {
                                const uploadFoto4 = storage
                                  .ref(
                                    `haberler/fotohaber/${fotoHaberIcerikBaslik4}`
                                  )
                                  .put(stateFotoHaberFoto4);
                                uploadFoto4
                                  .then((uploadTaskSnapshot4) => {
                                    return uploadTaskSnapshot4.ref.getDownloadURL();
                                  })
                                  .then((url4) => {
                                    urlFoto4 = encodeURIComponent(url4);
                                    console.log(urlFoto4);
                                    if (stateFotoHaberFoto5 !== null) {
                                      const uploadFoto5 = storage
                                        .ref(
                                          `haberler/fotohaber/${fotoHaberIcerikBaslik5}`
                                        )
                                        .put(stateFotoHaberFoto4);
                                      uploadFoto5
                                        .then((uploadTaskSnapshot5) => {
                                          return uploadTaskSnapshot5.ref.getDownloadURL();
                                        })
                                        .then((url5) => {
                                          urlFoto5 = encodeURIComponent(url5);
                                          console.log(urlFoto5);
                                          if (stateFotoHaberFoto6 !== null) {
                                            const uploadFoto6 = storage
                                              .ref(
                                                `haberler/fotohaber/${fotoHaberIcerikBaslik6}`
                                              )
                                              .put(stateFotoHaberFoto6);
                                            uploadFoto6
                                              .then((uploadTaskSnapshot6) => {
                                                return uploadTaskSnapshot6.ref.getDownloadURL();
                                              })
                                              .then((url6) => {
                                                urlFoto6 =
                                                  encodeURIComponent(url6);
                                                console.log(urlFoto6);
                                                return axios({
                                                  method: "POST",
                                                  headers: {
                                                    "Content-Type":
                                                      "application/json",
                                                  },
                                                  url: `http://localhost:8080/api/haberler/add-foto-haber?fotoHaberIcerik1=${urlFoto1}&fotoHaberIcerik2=${urlFoto2}&fotoHaberIcerik3=${urlFoto3}&fotoHaberIcerik4=${urlFoto4}&fotoHaberIcerik5=${urlFoto5}&fotoHaberIcerik6=${urlFoto6}&fotoHaberIcerik7=${fotoHaberIcerik7}&fotoHaberIcerikAciklama1=${fotoHaberIcerikAciklama1}
                                  &fotoHaberIcerikAciklama2=${fotoHaberIcerikAciklama2}&fotoHaberIcerikAciklama3=${fotoHaberIcerikAciklama3}&fotoHaberIcerikAciklama4=${fotoHaberIcerikAciklama4}&fotoHaberIcerikAciklama5=${fotoHaberIcerikAciklama5}&fotoHaberIcerikAciklama6=${fotoHaberIcerikAciklama6}
                                  &fotoHaberIcerikBaslik1=${fotoHaberIcerikBaslik1}&fotoHaberIcerikBaslik2=${fotoHaberIcerikBaslik2}&fotoHaberIcerikBaslik3=${fotoHaberIcerikBaslik3}
                                  &fotoHaberIcerikBaslik4=${fotoHaberIcerikBaslik4}&fotoHaberIcerikBaslik5=${fotoHaberIcerikBaslik5}&fotoHaberIcerikBaslik6=${fotoHaberIcerikBaslik6}&haberAnasayfaResim=${urlAna}&haberBaslik=${fotoHaberBaslik}&haberEtiket1=${fotoHaberEtiket1}&haberEtiket2=${fotoHaberEtiket2}&haberKaynak=${fotoHaberKaynak}`,
                                                })
                                                  .then((ress) => {
                                                    return res
                                                      .status(ress.status)
                                                      .json(ress.data);
                                                  })
                                                  .catch((error) => {
                                                    console.log(error);
                                                  });
                                              });
                                          }
                                        });
                                    }
                                  });
                              }
                            });
                        });
                    });
                });
              break;
            }
            case "postUserBanla": {
              const { userId } = req.body;
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/kullanicilar/kullanici_banla?userId=${userId}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postUserBanAc": {
              const { userId } = req.body;
              return axios({
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/kullanicilar/kullanici_ban-ac?userId=${userId}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postYorumLike": {
              const { yorumId, userId } = req.body;
              let sonYorumId = parseInt(yorumId),
                sonUserId = parseInt(userId);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/user-comments/yorum-like?userId=${sonUserId}&yorumId=${sonYorumId}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postYorumDislike": {
              const { yorumId, userId } = req.body;
              let sonYorumId = parseInt(yorumId),
                sonUserId = parseInt(userId);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/user-comments/yorum-dislike?userId=${sonUserId}&yorumId=${sonYorumId}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postYorum": {
              const { haberId, userId, yorum } = req.body;
              let sonHaberId = parseInt(haberId),
                sonUserId = parseInt(userId),
                sonYorumIcerik = encodeURI(yorum);
              axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/user-comments/yorum-ekle?haberId=${sonHaberId}&userId=${sonUserId}&yorumIcerik=${sonYorumIcerik}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postYorumFotoHaber": {
              const { haberId, userId, yorumIcerik } = req.body;
              let sonHaberId = parseInt(haberId),
                sonUserId = parseInt(userId),
                sonYorumIcerik = encodeURI(yorumIcerik);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/user-comments/yorum-ekle-fotohaber?haberId=${sonHaberId}&userId=${sonUserId}&yorumIcerik=${sonYorumIcerik}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "postYorumSil": {
              const { yorumId } = req.body;
              let sonYorumId = parseInt(yorumId);
              return axios({
                method: "POST",
                headers: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/user-comments/yorum-sil?yorumId=${sonYorumId}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            case "patchSifreDegistir": {
              const {
                eskiSifre,
                eskiSifreRep,
                yeniSifre,
                yeniSifreRep,
                userName,
              } = req.body;
              return axios({
                method: "PATCH",
                header: { "Content-Type": "application/json" },
                url: `http://localhost:8080/api/kullanicilar/sifre-güncelleme?changedPassword=${yeniSifre}&changedPasswordRep=${yeniSifreRep}&password=${eskiSifre}&passwordRep=${eskiSifreRep}&userName=${userName}`,
              }).then((ress) => {
                console.log(ress.data);
                return res.status(ress.status).json(ress.data);
              });
              break;
            }
            default:
              break;
          }
          break;
        default:
          break;
      }
    } catch (error) {
      throw error;
    }
    return resolve();
  });
};
