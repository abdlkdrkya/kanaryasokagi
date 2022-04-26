import React, { useState, useEffect } from "react";
import { absoluteUrl, getAppCookies, verifyToken } from "../middleware/utils";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Label,
  Menu,
  Radio,
  Tab,
} from "semantic-ui-react";
import Layout from "../components/layout";
import Router from "next/router";
import router from "next/router";
export default function Giris({
  profile,
  futbolErkekFikstur,
  basketbolErkekFikstur,
  basketbolKadinFikstur,
  voleybolErkekFikstur,
  voleybolKadinFikstur,
  futbolErkekOyuncu,
  basketbolErkekOyuncu,
  basketbolKadinOyuncu,
  users,
  admins,
  erkekBasketbolPuanDurumu,
  kadinBasketbolPuanDurumu,
  erkekVoleybolPuanDurumu,
  kadinVoleybolPuanDurumu,
  futbolPuanDurumu,
}) {
  const { status: status, user: user } = useContext(AuthContext),
    [admin, setAdmin] = useState(!1),
    [stateActive, setStateActive] = useState("haberler"),
    [icerikImage, setIcerikImage] = useState(null),
    [kadro, setKadro] = useState({ futbol: !0, basketbol: !1, voleybol: !1 }),
    [kadroCinsiyet, setKadroCinsiyet] = useState({ erkek: !0, kadin: !1 }),
    [futbolPuanDurumuState, setFutbolPuanDurumuState] = useState({
      takimID: "",
      takimAtilanGol: "",
      takimYenilenGol: "",
      takimGalibiyet: "",
      takimBeraberlik: "",
      takimMaglubiyet: "",
    }),
    [basketbolPuanDurumuState, setBasketbolPuanDurumuState] = useState({
      basketbolTakimID: "",
      basketbolTakimAtilanSayi: "",
      basketbolTakimYenilenSayi: "",
      basketbolTakimGalibiyet: "",
      basketbolTakimMaglubiyet: "",
    }),
    [voleybolPuanDurumuState, setVoleybolPuanDurumuState] = useState({
      voleybolTakimID: "",
      voleybolTakimAldigiSet: "",
      voleybolTakimVerdigiSet: "",
      voleybolTakimAldigiSayi: "",
      voleybolTakimVerdigiSayi: "",
      voleybolTakimGalibiyet: "",
      voleybolTakimMaglubiyet: "",
      voleybolTakimPuan: "",
    }),
    [futbolOyuncuIstatistik, setFutbolOyuncuIstatistik] = useState({
      oyuncuID: "",
      macID: "",
      macIlk11: !1,
      macOynadigiDakika: "",
      macAttigiGol: "",
      macYaptigiAsist: "",
      macGorduguSariKart: "",
      macGorduguKirmiziKart: "",
    }),
    [basketbolOyuncuIstatistik, setBasketbolOyuncuIstatistik] = useState({
      basketbolOyuncuID: "",
      basketbolMacID: "",
      basketbolMacSayi: "",
      basketbolMacAsist: "",
      basketbolMacHucumRibaund: "",
      basketbolMacSavunmaRibaund: "",
      basketbolMacBlok: "",
      basketbolMacTopCalma: "",
      basketbolMacTopKaybi: "",
    }),
    [stateHaber, setStateHaber] = useState({
      haberBaslik: "",
      haberIcerik: "",
      haberKategoriId: "",
      haberCinsiyetId: "",
      haberKaynak: "",
      haberEtiket1: "",
      haberEtiket2: "",
      haberFoto: "",
    }),
    [stateHaberGuncelle, setStateHaberGuncelle] = useState({
      haberId: "",
      haberGuncelleBaslik: "",
      haberGuncelleIcerik: "",
      haberGuncelleKategoriId: "",
      haberGuncelleCinsiyetId: "",
      haberGuncelleKaynak: "",
      haberGuncelleEtiket1: "",
      haberGuncelleEtiket2: "",
      haberGuncelleFoto: "",
    }),
    [stateFiksturGuncelle, setStateFiksturGuncelle] = useState({
      guncellemeFiksturEvSahibiSkor: "",
      guncellemeFiksturEvSahibiIlkPeriyotSkor: "",
      guncellemeFiksturEvSahibiIkinciPeriyotSkor: "",
      guncellemeFiksturEvSahibiUcuncuPeriyotSkor: "",
      guncellemeFiksturEvSahibiDorduncuPeriyotSkor: "",
      guncellemeFiksturEvSahibiBesinciPeriyotSkor: "",
      guncellemeFiksturEvSahibiIlkYariSkor: "",
      guncellemeFiksturEvSahibiIlkCeyrekSkor: "",
      guncellemeFiksturEvSahibiIkinciCeyrekSkor: "",
      guncellemeFiksturEvSahibiUcuncuCeyrekSkor: "",
      guncellemeFiksturEvSahibiDorduncuCeyrekSkor: "",
      guncellemeFiksturDeplasmanSkor: "",
      guncellemeFiksturDeplasmanIlkPeriyotSkor: "",
      guncellemeFiksturDeplasmanIkinciPeriyotSkor: "",
      guncellemeFiksturDeplasmanUcuncuPeriyotSkor: "",
      guncellemeFiksturDeplasmanDorduncuPeriyotSkor: "",
      guncellemeFiksturDeplasmanBesinciPeriyotSkor: "",
      guncellemeFiksturDeplasmanIlkYariSkor: "",
      guncellemeFiksturDeplasmanIlkCeyrekSkor: "",
      guncellemeFiksturDeplasmanIkinciCeyrekSkor: "",
      guncellemeFiksturDeplasmanUcuncuCeyrekSkor: "",
      guncellemeFiksturDeplasmanDorduncuCeyrekSkor: "",
      guncellemeFiksturId: "",
      guncellemeFiksturTarih: "",
    }),
    [stateFikstur, setStateFikstur] = useState({
      fiksturEvSahibi: "",
      fiksturEvSahibiSkor: "",
      fiksturDeplasman: "",
      fiksturDeplasmanSkor: "",
      fiksturTarih: "",
      fiksturTurnuva: "",
      fiksturCinsiyetId: "",
      fiksturKategoriId: "",
    }),
    {
      haberBaslik: haberBaslik,
      haberIcerik: haberIcerik,
      haberKategoriId: haberKategoriId,
      haberCinsiyetId: haberCinsiyetId,
      haberKaynak: haberKaynak,
      haberEtiket1: haberEtiket1,
      haberEtiket2: haberEtiket2,
      haberFoto: haberFoto,
    } = stateHaber,
    {
      takimID: takimID,
      takimAtilanGol: takimAtilanGol,
      takimYenilenGol: takimYenilenGol,
      takimGalibiyet: takimGalibiyet,
      takimBeraberlik: takimBeraberlik,
      takimMaglubiyet: takimMaglubiyet,
    } = futbolPuanDurumuState,
    {
      basketbolTakimID: basketbolTakimID,
      basketbolTakimAtilanSayi: basketbolTakimAtilanSayi,
      basketbolTakimYenilenSayi: basketbolTakimYenilenSayi,
      basketbolTakimGalibiyet: basketbolTakimGalibiyet,
      basketbolTakimMaglubiyet: basketbolTakimMaglubiyet,
    } = basketbolPuanDurumuState,
    {
      voleybolTakimID: voleybolTakimID,
      voleybolTakimAldigiSet: voleybolTakimAldigiSet,
      voleybolTakimVerdigiSet: voleybolTakimVerdigiSet,
      voleybolTakimAldigiSayi: voleybolTakimAldigiSayi,
      voleybolTakimVerdigiSayi: voleybolTakimVerdigiSayi,
      voleybolTakimGalibiyet: voleybolTakimGalibiyet,
      voleybolTakimMaglubiyet: voleybolTakimMaglubiyet,
      voleybolTakimPuan: voleybolTakimPuan,
    } = voleybolPuanDurumuState,
    {
      haberId: haberId,
      haberGuncelleBaslik: haberGuncelleBaslik,
      haberGuncelleIcerik: haberGuncelleIcerik,
      haberGuncelleKategoriId: haberGuncelleKategoriId,
      haberGuncelleCinsiyetId: haberGuncelleCinsiyetId,
      haberGuncelleKaynak: haberGuncelleKaynak,
      haberGuncelleEtiket1: haberGuncelleEtiket1,
      haberGuncelleEtiket2: haberGuncelleEtiket2,
      haberGuncelleFoto: haberGuncelleFoto,
    } = stateHaberGuncelle,
    {
      fiksturEvSahibi: fiksturEvSahibi,
      fiksturEvSahibiSkor: fiksturEvSahibiSkor,
      fiksturDeplasman: fiksturDeplasman,
      fiksturDeplasmanSkor: fiksturDeplasmanSkor,
      fiksturTarih: fiksturTarih,
      fiksturTurnuva: fiksturTurnuva,
      fiksturCinsiyetId: fiksturCinsiyetId,
      fiksturKategoriId: fiksturKategoriId,
    } = stateFikstur,
    {
      oyuncuID: oyuncuID,
      macID: macID,
      macIlk11: macIlk11,
      macOynadigiDakika: macOynadigiDakika,
      macAttigiGol: macAttigiGol,
      macYaptigiAsist: macYaptigiAsist,
      macGorduguSariKart: macGorduguSariKart,
      macGorduguKirmiziKart: macGorduguKirmiziKart,
    } = futbolOyuncuIstatistik,
    {
      basketbolOyuncuID: basketbolOyuncuID,
      basketbolMacID: basketbolMacID,
      basketbolMacSayi: basketbolMacSayi,
      basketbolMacAsist: basketbolMacAsist,
      basketbolMacHucumRibaund: basketbolMacHucumRibaund,
      basketbolMacSavunmaRibaund: basketbolMacSavunmaRibaund,
      basketbolMacBlok: basketbolMacBlok,
      basketbolMacTopCalma: basketbolMacTopCalma,
      basketbolMacTopKaybi: basketbolMacTopKaybi,
    } = basketbolOyuncuIstatistik,
    {
      guncellemeFiksturEvSahibiSkor: guncellemeFiksturEvSahibiSkor,
      guncellemeFiksturEvSahibiIlkPeriyotSkor:
        guncellemeFiksturEvSahibiIlkPeriyotSkor,
      guncellemeFiksturEvSahibiIkinciPeriyotSkor:
        guncellemeFiksturEvSahibiIkinciPeriyotSkor,
      guncellemeFiksturEvSahibiUcuncuPeriyotSkor:
        guncellemeFiksturEvSahibiUcuncuPeriyotSkor,
      guncellemeFiksturEvSahibiDorduncuPeriyotSkor:
        guncellemeFiksturEvSahibiDorduncuPeriyotSkor,
      guncellemeFiksturEvSahibiBesinciPeriyotSkor:
        guncellemeFiksturEvSahibiBesinciPeriyotSkor,
      guncellemeFiksturEvSahibiIlkYariSkor:
        guncellemeFiksturEvSahibiIlkYariSkor,
      guncellemeFiksturEvSahibiIlkCeyrekSkor:
        guncellemeFiksturEvSahibiIlkCeyrekSkor,
      guncellemeFiksturEvSahibiIkinciCeyrekSkor:
        guncellemeFiksturEvSahibiIkinciCeyrekSkor,
      guncellemeFiksturEvSahibiUcuncuCeyrekSkor:
        guncellemeFiksturEvSahibiUcuncuCeyrekSkor,
      guncellemeFiksturEvSahibiDorduncuCeyrekSkor:
        guncellemeFiksturEvSahibiDorduncuCeyrekSkor,
      guncellemeFiksturDeplasmanSkor: guncellemeFiksturDeplasmanSkor,
      guncellemeFiksturDeplasmanIlkPeriyotSkor:
        guncellemeFiksturDeplasmanIlkPeriyotSkor,
      guncellemeFiksturDeplasmanIkinciPeriyotSkor:
        guncellemeFiksturDeplasmanIkinciPeriyotSkor,
      guncellemeFiksturDeplasmanUcuncuPeriyotSkor:
        guncellemeFiksturDeplasmanUcuncuPeriyotSkor,
      guncellemeFiksturDeplasmanDorduncuPeriyotSkor:
        guncellemeFiksturDeplasmanDorduncuPeriyotSkor,
      guncellemeFiksturDeplasmanBesinciPeriyotSkor:
        guncellemeFiksturDeplasmanBesinciPeriyotSkor,
      guncellemeFiksturDeplasmanIlkYariSkor:
        guncellemeFiksturDeplasmanIlkYariSkor,
      guncellemeFiksturDeplasmanIlkCeyrekSkor:
        guncellemeFiksturDeplasmanIlkCeyrekSkor,
      guncellemeFiksturDeplasmanIkinciCeyrekSkor:
        guncellemeFiksturDeplasmanIkinciCeyrekSkor,
      guncellemeFiksturDeplasmanUcuncuCeyrekSkor:
        guncellemeFiksturDeplasmanUcuncuCeyrekSkor,
      guncellemeFiksturDeplasmanDorduncuCeyrekSkor:
        guncellemeFiksturDeplasmanDorduncuCeyrekSkor,
      guncellemeFiksturId: guncellemeFiksturId,
      guncellemeFiksturTarih: guncellemeFiksturTarih,
    } = stateFiksturGuncelle,
    handleItemClick = (e, { name: name }) => setStateActive(name);
  useEffect(() => {
    const role = profile.roleId;
    1 === role ? setAdmin(!0) : (setAdmin(!1), Router.push("/")),
      profile.email
        ? (user.setUserDetails({
            id: profile.id,
            email: profile.email,
            username: profile.username,
            firstname: profile.firstname,
            lastname: profile.lastname,
            roleId: profile.roleId,
            profile: profile.profile,
          }),
          status.setLoggedIn(!0))
        : status.setLoggedIn(!1);
  }, []);
  const handleHaberChange = (e, { name: name, value: value }) => {
      setStateHaber({ ...stateHaber, [name]: value });
    },
    handleHaberGuncelleChange = (e, { name: name, value: value }) => {
      setStateHaberGuncelle({ ...stateHaberGuncelle, [name]: value });
    },
    handleFiksturChange = (e, { name: name, value: value }) => {
      setStateFikstur({ ...stateFikstur, [name]: value });
    },
    handleGuncellemeFiksturChange = (e, { name: name, value: value }) => {
      setStateFiksturGuncelle({ ...stateFiksturGuncelle, [name]: value });
    },
    handleFutbolOyuncuIstatistik = (e, { name: name, value: value }) => {
      setFutbolOyuncuIstatistik({ ...futbolOyuncuIstatistik, [name]: value });
    },
    handleFutbolPuanDurumu = (e, { name: name, value: value }) => {
      setFutbolPuanDurumuState({ ...futbolPuanDurumuState, [name]: value });
    },
    handleBasketbolPuanDurumu = (e, { name: name, value: value }) => {
      setBasketbolPuanDurumuState({
        ...basketbolPuanDurumuState,
        [name]: value,
      });
    },
    handleVoleybolPuanDurumu = (e, { name: name, value: value }) => {
      setVoleybolPuanDurumuState({ ...voleybolPuanDurumuState, [name]: value });
    },
    handleBasketbolOyuncuIstatistik = (e, { name: name, value: value }) => {
      setBasketbolOyuncuIstatistik({
        ...basketbolOyuncuIstatistik,
        [name]: value,
      });
    },
    handleHaberSubmit = async (e) => {
      e.preventDefault();
      let type = "postHaberData",
        data = { ...stateHaber, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setStateHaber({
            ...stateHaber,
            haberBaslik: "",
            haberCinsiyetId: "",
            haberEtiket1: "",
            haberEtiket2: "",
            haberIcerik: "",
            haberKategoriId: "",
            haberKaynak: "",
            haberFoto: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleHaberGuncelleSubmit = async (e) => {
      e.preventDefault();
      let type = "postHaberGuncelle",
        data = { ...stateHaberGuncelle, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setStateHaberGuncelle({
            ...stateHaberGuncelle,
            haberId: "",
            haberGuncelleBaslik: "",
            haberGuncelleCinsiyetId: "",
            haberGuncelleEtiket1: "",
            haberGuncelleEtiket2: "",
            haberGuncelleIcerik: "",
            haberGuncelleKategoriId: "",
            haberGuncelleKaynak: "",
            haberGuncelleFoto: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleFutbolPuanDurumuSubmit = async (e) => {
      e.preventDefault();
      let type = "postFutbolPuanDurumuData",
        data = { ...futbolPuanDurumuState, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setFutbolPuanDurumuState({
            takimID: "",
            takimAtilanGol: "",
            takimYenilenGol: "",
            takimGalibiyet: "",
            takimBeraberlik: "",
            takimMaglubiyet: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleErkekBasketbolPuanDurumuSubmit = async (e) => {
      e.preventDefault();
      let type = "postErkekBasketbolPuanDurumuData",
        data = { ...basketbolPuanDurumuState, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolPuanDurumuState({
            basketbolTakimID: "",
            basketbolTakimAtilanSayi: "",
            basketbolTakimYenilenSayi: "",
            basketbolTakimGalibiyet: "",
            basketbolTakimMaglubiyet: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleKadinBasketbolPuanDurumuSubmit = async (e) => {
      e.preventDefault();
      let type = "postKadinBasketbolPuanDurumuData",
        data = { ...basketbolPuanDurumuState, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolPuanDurumuState({
            basketbolTakimID: "",
            basketbolTakimAtilanSayi: "",
            basketbolTakimYenilenSayi: "",
            basketbolTakimGalibiyet: "",
            basketbolTakimMaglubiyet: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleErkekVoleybolPuanDurumuSubmit = async (e) => {
      e.preventDefault();
      let type = "postErkekVoleybolPuanDurumuData",
        data = { ...voleybolPuanDurumuState, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setVoleybolPuanDurumuState({
            voleybolTakimID: "",
            voleybolTakimAldigiSet: "",
            voleybolTakimVerdigiSet: "",
            voleybolTakimAldigiSayi: "",
            voleybolTakimVerdigiSayi: "",
            voleybolTakimGalibiyet: "",
            voleybolTakimMaglubiyet: "",
            voleybolTakimPuan: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleKadinVoleybolPuanDurumuSubmit = async (e) => {
      e.preventDefault();
      let type = "postKadinVoleybolPuanDurumuData",
        data = { ...voleybolPuanDurumuState, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setVoleybolPuanDurumuState({
            voleybolTakimID: "",
            voleybolTakimAldigiSet: "",
            voleybolTakimVerdigiSet: "",
            voleybolTakimAldigiSayi: "",
            voleybolTakimVerdigiSayi: "",
            voleybolTakimGalibiyet: "",
            voleybolTakimMaglubiyet: "",
            voleybolTakimPuan: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleFiksturSubmit = async (e) => {
      e.preventDefault();
      let type = "postFiksturData",
        data = { ...stateFikstur, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setStateFikstur({
            ...stateFikstur,
            fiksturEvSahibi: "",
            fiksturEvSahibiSkor: "",
            fiksturDeplasman: "",
            fiksturDeplasmanSkor: "",
            fiksturTarih: "",
            fiksturTurnuva: "",
            fiksturCinsiyetId: "",
            fiksturKategoriId: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleFiksturGuncellemeSubmit = async (e) => {
      e.preventDefault();
      let type = "postFiksturGuncellemeData",
        data = { ...stateFiksturGuncelle, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setStateFiksturGuncelle({
            ...stateFiksturGuncelle,
            guncellemeFiksturEvSahibiSkor: "",
            guncellemeFiksturEvSahibiIlkPeriyotSkor: "",
            guncellemeFiksturEvSahibiIkinciPeriyotSkor: "",
            guncellemeFiksturEvSahibiUcuncuPeriyotSkor: "",
            guncellemeFiksturEvSahibiDorduncuPeriyotSkor: "",
            guncellemeFiksturEvSahibiBesinciPeriyotSkor: "",
            guncellemeFiksturEvSahibiIlkYariSkor: "",
            guncellemeFiksturEvSahibiIlkCeyrekSkor: "",
            guncellemeFiksturEvSahibiIkinciCeyrekSkor: "",
            guncellemeFiksturEvSahibiUcuncuCeyrekSkor: "",
            guncellemeFiksturEvSahibiDorduncuCeyrekSkor: "",
            guncellemeFiksturDeplasmanSkor: "",
            guncellemeFiksturDeplasmanIlkPeriyotSkor: "",
            guncellemeFiksturDeplasmanIkinciPeriyotSkor: "",
            guncellemeFiksturDeplasmanUcuncuPeriyotSkor: "",
            guncellemeFiksturDeplasmanDorduncuPeriyotSkor: "",
            guncellemeFiksturDeplasmanBesinciPeriyotSkor: "",
            guncellemeFiksturDeplasmanIlkYariSkor: "",
            guncellemeFiksturDeplasmanIlkCeyrekSkor: "",
            guncellemeFiksturDeplasmanIkinciCeyrekSkor: "",
            guncellemeFiksturDeplasmanUcuncuCeyrekSkor: "",
            guncellemeFiksturDeplasmanDorduncuCeyrekSkor: "",
            guncellemeFiksturId: "",
            guncellemeFiksturTarih: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleFutbolOyuncuIstatistikSubmit = async (e) => {
      e.preventDefault();
      let type = "postFutbolOyuncuIstatistikData",
        data = { ...futbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setFutbolOyuncuIstatistik({
            ...futbolOyuncuIstatistik,
            macID: "",
            macIlk11: !1,
            macOynadigiDakika: "",
            macAttigiGol: "",
            macYaptigiAsist: "",
            macGorduguSariKart: "",
            macGorduguKirmiziKart: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleFutbolOyuncuIstatistikGuncelleSubmit = async (e) => {
      e.preventDefault();
      let type = "postFutbolOyuncuIstatistikGuncelleData",
        data = { ...futbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setFutbolOyuncuIstatistik({
            ...futbolOyuncuIstatistik,
            macID: "",
            macIlk11: !1,
            macOynadigiDakika: "",
            macAttigiGol: "",
            macYaptigiAsist: "",
            macGorduguSariKart: "",
            macGorduguKirmiziKart: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handlePostUserBanla = async (e) => {
      e.preventDefault();
      let type = "postUserBanle",
        data = { user: id };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setStateFotoHaber({
            ...stateFotoHaber,
            fotoHaberBaslik: "",
            fotoHaberKaynak: "",
            fotoHaberEtiket1: "",
            fotoHaberEtiket2: "",
            fotoHaberIcerikBaslik1: "",
            fotoHaberIcerikAciklama1: "",
            fotoHaberIcerikBaslik2: "",
            fotoHaberIcerikAciklama2: "",
            fotoHaberIcerikBaslik3: "",
            fotoHaberIcerikAciklama3: "",
            fotoHaberIcerikBaslik4: "",
            fotoHaberIcerikAciklama4: "",
            fotoHaberIcerikBaslik5: "",
            fotoHaberIcerikAciklama5: "",
            fotoHaberIcerikBaslik6: "",
            fotoHaberIcerikAciklama6: "",
            fotoHaberIcerik7: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleBasketbolErkekIstatistikSubmit = async (e) => {
      e.preventDefault();
      let type = "postBasketbolErkekOyuncuIstatistikData",
        data = { ...basketbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolOyuncuIstatistik({
            ...basketbolOyuncuIstatistik,
            basketbolMacID: "",
            basketbolMacSayi: "",
            basketbolMacAsist: "",
            basketbolMacHucumRibaund: "",
            basketbolMacSavunmaRibaund: "",
            basketbolMacBlok: "",
            basketbolMacTopCalma: "",
            basketbolMacTopKaybi: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleBasketbolErkekIstatistikGuncelleSubmit = async (e) => {
      e.preventDefault();
      let type = "postBasketbolErkekOyuncuIstatistikGuncelleData",
        data = { ...basketbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolOyuncuIstatistik({
            ...basketbolOyuncuIstatistik,
            basketbolMacID: "",
            basketbolMacSayi: "",
            basketbolMacAsist: "",
            basketbolMacHucumRibaund: "",
            basketbolMacSavunmaRibaund: "",
            basketbolMacBlok: "",
            basketbolMacTopCalma: "",
            basketbolMacTopKaybi: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleBasketbolKadinIstatistikSubmit = async (e) => {
      e.preventDefault();
      let type = "postBasketbolKadinOyuncuIstatistikData",
        data = { ...basketbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolOyuncuIstatistik({
            ...basketbolOyuncuIstatistik,
            basketbolMacID: "",
            basketbolMacSayi: "",
            basketbolMacAsist: "",
            basketbolMacHucumRibaund: "",
            basketbolMacSavunmaRibaund: "",
            basketbolMacBlok: "",
            basketbolMacTopCalma: "",
            basketbolMacTopKaybi: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleBasketbolKadinIstatistikGuncelleSubmit = async (e) => {
      e.preventDefault();
      let type = "postBasketbolKadinOyuncuIstatistikGuncelleData",
        data = { ...basketbolOyuncuIstatistik, type: type };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success &&
          (console.log(result),
          setBasketbolOyuncuIstatistik({
            ...basketbolOyuncuIstatistik,
            basketbolMacID: "",
            basketbolMacSayi: "",
            basketbolMacAsist: "",
            basketbolMacHucumRibaund: "",
            basketbolMacSavunmaRibaund: "",
            basketbolMacBlok: "",
            basketbolMacTopCalma: "",
            basketbolMacTopKaybi: "",
          }));
      } catch (err) {
        console.log(err);
      }
    },
    handleImageChange = (e) => {
      e.target.files[0] && setIcerikImage(e.target.files[0]);
    };
  const panesFiksturler = [
    {
      menuItem: "Fikstur Ekle",
      render: () => (
        <Tab.Pane>
          <Form onSubmit={handleFiksturSubmit} className="mt-10">
            <label className="font-poppins text-lg">Ev Sahibi: </label>
            <Form.Input
              placeholder="Ev Sahibi"
              name="fiksturEvSahibi"
              value={fiksturEvSahibi}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">Ev Sahibi Skor:</label>
            <Form.Input
              placeholder="Ev Sahibi Skor"
              name="fiksturEvSahibiSkor"
              type="number"
              value={fiksturEvSahibiSkor}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">Deplasman :</label>
            <Form.Input
              placeholder="Deplasman"
              name="fiksturDeplasman"
              value={fiksturDeplasman}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">Deplasman Skor :</label>
            <Form.Input
              placeholder="Deplasman Skor"
              name="fiksturDeplasmanSkor"
              type="number"
              value={fiksturDeplasmanSkor}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">Tarih :</label>
            <Form.Input
              type="date"
              placeholder="Fikstur Tarih"
              name="fiksturTarih"
              value={fiksturTarih}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">Turnuva :</label>
            <Form.Input
              placeholder="Turnuva"
              name="fiksturTurnuva"
              value={fiksturTurnuva}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">
              Kategori (1: Basketbol, 2: Futbol, 3: Voleybol ):
            </label>
            <Form.Input
              name="fiksturKategoriId"
              type="number"
              value={fiksturKategoriId}
              onChange={handleFiksturChange}
            />
            <label className="font-poppins text-lg">
              Cinsiyet (1: Erkek, 2: Kadın) :
            </label>
            <Form.Input
              type="number"
              name="fiksturCinsiyetId"
              value={fiksturCinsiyetId}
              onChange={handleFiksturChange}
            />
            <Form.Button
              color="blue"
              className="text-center"
              content="Submit"
            />
          </Form>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Fikstur Güncelle",
      render: () => (
        <Tab.Pane>
          <Button.Group fluid>
            <Button
              onClick={() => {
                setKadro({ basketbol: true, futbol: false, voleybol: false });
              }}
            >
              Basketbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: true, voleybol: false });
              }}
            >
              Futbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: false, voleybol: true });
              }}
            >
              Voleybol
            </Button>
          </Button.Group>
          <div className="mt-4" />
          {!kadro.futbol && (
            <Button.Group fluid>
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: true, kadin: false });
                }}
              >
                Erkek
              </Button>
              <Button.Or />
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: false, kadin: true });
                }}
              >
                Kadın
              </Button>
            </Button.Group>
          )}

          <div className="mt-4" />

          {kadroCinsiyet.erkek && (
            <div>
              {kadro.futbol && (
                <div>
                  <h1 className="text-center"> FUTBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {futbolErkekFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İlk Yarı Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkYariSkor"
                      value={guncellemeFiksturEvSahibiIlkYariSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İlk Yarı Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkYariSkor"
                      value={guncellemeFiksturDeplasmanIlkYariSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                    <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center"> ERKEK BASKETBOL </h1>
                  <Dropdown text="Maç" scrolling>
                    <Dropdown.Menu>
                      {basketbolErkekFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İlk Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkCeyrekSkor"
                      value={guncellemeFiksturEvSahibiIlkCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İkinci Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIkinciCeyrekSkor"
                      value={guncellemeFiksturEvSahibiIkinciCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Üçüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiUcuncuCeyrekSkor"
                      value={guncellemeFiksturEvSahibiUcuncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Dördüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiDorduncuCeyrekSkor"
                      value={guncellemeFiksturEvSahibiDorduncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İlk Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkCeyrekSkor"
                      value={guncellemeFiksturDeplasmanIlkCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İkinci Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIkinciCeyrekSkor"
                      value={guncellemeFiksturDeplasmanIkinciCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Üçüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanUcuncuCeyrekSkor"
                      value={guncellemeFiksturDeplasmanUcuncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Dördüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanDorduncuCeyrekSkor"
                      value={guncellemeFiksturDeplasmanDorduncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                     <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.voleybol && (
                <div>
                  <h1 className="text-center"> ERKEK VOLEYBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {voleybolErkekFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 1. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkPeriyotSkor"
                      value={guncellemeFiksturEvSahibiIlkPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 2. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIkinciPeriyotSkor"
                      value={guncellemeFiksturEvSahibiIkinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 3. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiUcuncuPeriyotSkor"
                      value={guncellemeFiksturEvSahibiUcuncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 4. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiDorduncuPeriyotSkor"
                      value={guncellemeFiksturEvSahibiDorduncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 5. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiBesinciPeriyotSkor"
                      value={guncellemeFiksturEvSahibiBesinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 1. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkPeriyotSkor"
                      value={guncellemeFiksturDeplasmanIlkPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 2. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIkinciPeriyotSkor"
                      value={guncellemeFiksturDeplasmanIkinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 3. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanUcuncuPeriyotSkor"
                      value={guncellemeFiksturDeplasmanUcuncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 4. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanDorduncuPeriyotSkor"
                      value={guncellemeFiksturDeplasmanDorduncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 5. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanBesinciPeriyotSkor"
                      value={guncellemeFiksturDeplasmanBesinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                     <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
          {kadroCinsiyet.kadin && (
            <div>
              {kadro.futbol && (
                <div>
                  <h1 className="text-center"> FUTBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {futbolErkekFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İlk Yarı Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkYariSkor"
                      value={guncellemeFiksturEvSahibiIlkYariSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İlk Yarı Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkYariSkor"
                      value={guncellemeFiksturDeplasmanIlkYariSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                    <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center"> KADIN BASKETBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {basketbolKadinFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İlk Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkCeyrekSkor"
                      value={guncellemeFiksturEvSahibiIlkCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi İkinci Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIkinciCeyrekSkor"
                      value={guncellemeFiksturEvSahibiIkinciCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Üçüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiUcuncuCeyrekSkor"
                      value={guncellemeFiksturEvSahibiUcuncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Dördüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiDorduncuCeyrekSkor"
                      value={guncellemeFiksturEvSahibiDorduncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İlk Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkCeyrekSkor"
                      value={guncellemeFiksturDeplasmanIlkCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman İkinci Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIkinciCeyrekSkor"
                      value={guncellemeFiksturDeplasmanIkinciCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Üçüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanUcuncuCeyrekSkor"
                      value={guncellemeFiksturDeplasmanUcuncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Dördüncü Çeyrek Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanDorduncuCeyrekSkor"
                      value={guncellemeFiksturDeplasmanDorduncuCeyrekSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                    <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.voleybol && (
                <div>
                  <h1 className="text-center"> KADIN VOLEYBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {voleybolKadinFikstur.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleGuncellemeFiksturChange}
                          value={takim.fiksturId}
                          name="guncellemeFiksturId"
                        >
                          {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                          TARİH: {takim.fiksturTarih}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFiksturGuncellemeSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturId"
                      value={guncellemeFiksturId}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 1. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIlkPeriyotSkor"
                      value={guncellemeFiksturEvSahibiIlkPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 2. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiIkinciPeriyotSkor"
                      value={guncellemeFiksturEvSahibiIkinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 3. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiUcuncuPeriyotSkor"
                      value={guncellemeFiksturEvSahibiUcuncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 4. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiDorduncuPeriyotSkor"
                      value={guncellemeFiksturEvSahibiDorduncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi 5. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiBesinciPeriyotSkor"
                      value={guncellemeFiksturEvSahibiBesinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Ev Sahibi Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturEvSahibiSkor"
                      value={guncellemeFiksturEvSahibiSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 1. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIlkPeriyotSkor"
                      value={guncellemeFiksturDeplasmanIlkPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 2. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanIkinciPeriyotSkor"
                      value={guncellemeFiksturDeplasmanIkinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 3. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanUcuncuPeriyotSkor"
                      value={guncellemeFiksturDeplasmanUcuncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 4. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanDorduncuPeriyotSkor"
                      value={guncellemeFiksturDeplasmanDorduncuPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman 5. Periyot Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanBesinciPeriyotSkor"
                      value={guncellemeFiksturDeplasmanBesinciPeriyotSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Deplasman Skor:
                    </label>
                    <Form.Input
                      type="number"
                      name="guncellemeFiksturDeplasmanSkor"
                      value={guncellemeFiksturDeplasmanSkor}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <label className="font-poppins text-lg">
                      Tarih:
                    </label>
                    <Form.Input
                      type="date"
                      placeholder="Fikstur Tarih"
                      name="guncellemeFiksturTarih"
                      value={guncellemeFiksturTarih}
                      onChange={handleGuncellemeFiksturChange}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
        </Tab.Pane>
      ),
    },
  ];
  const panesHaberler = [
    {
      menuItem: "Haber",
      render: () => (
        <Form onSubmit={handleHaberSubmit} className="mt-10">
          <label className="font-poppins text-lg">Haber Başlığı :</label>
          <Form.Input
            placeholder="Haber Başlık"
            name="haberBaslik"
            value={haberBaslik}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">Haber 1. İçerik :</label>
          <Form.TextArea
            placeholder="Haber İçerik"
            name="haberIcerik"
            value={haberIcerik}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">Haber Resmi :</label>
          <Form.Input
            placeholder="Haber İçerik"
            name="haberFoto"
            value={haberFoto}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">
            Kategori: (1: Basketbol, 2: Futbol, 3: Voleybol)
          </label>
          <Form.Input
            placeholder="Haber haberKategoriId"
            name="haberKategoriId"
            type="number"
            value={haberKategoriId}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">
            Cinsiyet: (0: Erkek, 1: Kadın)
          </label>
          <Form.Input
            placeholder="Haber haberCinsiyetId"
            name="haberCinsiyetId"
            type="number"
            value={haberCinsiyetId}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">Etiket 1:</label>
          <Form.Input
            placeholder="Haber haberEtiket1"
            name="haberEtiket1"
            value={haberEtiket1}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">Etiket 2:</label>
          <Form.Input
            placeholder="Haber haberEtiket2"
            name="haberEtiket2"
            value={haberEtiket2}
            onChange={handleHaberChange}
          />
          <label className="font-poppins text-lg">Haber Kaynağı:</label>
          <Form.Input
            placeholder="haberKaynak"
            name="haberKaynak"
            value={haberKaynak}
            onChange={handleHaberChange}
          />
          <Form.Button color="blue" className="text-center" content="Submit" />
        </Form>
      ),
    },
    {
      menuItem: "Haber Güncelle",
      render: () => (
        <Form onSubmit={handleHaberGuncelleSubmit} className="mt-10">
          <label className="font-poppins text-lg">Haber Id :</label>
          <Form.Input
            placeholder="Haber ID"
            name="haberId"
            type="number"
            value={haberId}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Haber Başlığı :</label>
          <Form.Input
            placeholder="Haber Başlık"
            name="haberGuncelleBaslik"
            value={haberGuncelleBaslik}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Haber 1. İçerik :</label>
          <Form.TextArea
            placeholder="Haber İçerik"
            name="haberGuncelleIcerik"
            value={haberGuncelleIcerik}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Haber Resmi :</label>
          <Form.Input
            placeholder="Haber İçerik"
            name="haberGuncelleFoto"
            value={haberGuncelleFoto}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">
            Kategori: (1: Basketbol, 2: Futbol, 3: Voleybol)
          </label>
          <Form.Input
            placeholder="Haber haberKategoriId"
            name="haberGuncelleKategoriId"
            type="number"
            value={haberGuncelleKategoriId}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">
            Cinsiyet: (0: Erkek, 1: Kadın)
          </label>
          <Form.Input
            placeholder="Haber haberCinsiyetId"
            name="haberGuncelleCinsiyetId"
            type="number"
            value={haberGuncelleCinsiyetId}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Etiket 1:</label>
          <Form.Input
            placeholder="Haber haberEtiket1"
            name="haberGuncelleEtiket1"
            value={haberGuncelleEtiket1}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Etiket 2:</label>
          <Form.Input
            placeholder="Haber haberEtiket2"
            name="haberGuncelleEtiket2"
            value={haberGuncelleEtiket2}
            onChange={handleHaberGuncelleChange}
          />
          <label className="font-poppins text-lg">Haber Kaynağı:</label>
          <Form.Input
            placeholder="haberKaynak"
            name="haberGuncelleKaynak"
            value={haberGuncelleKaynak}
            onChange={handleHaberGuncelleChange}
          />
          <Form.Button color="blue" className="text-center" content="Submit" />
        </Form>
      ),
    },
  ];
  const panesOyuncuIstatistikleri = [
    {
      menuItem: "İstatistik Ekle",
      render: () => (
        <Tab.Pane>
          <Button.Group fluid>
            <Button
              onClick={() => {
                setKadro({ basketbol: true, futbol: false, voleybol: false });
              }}
            >
              Basketbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: true, voleybol: false });
              }}
            >
              Futbol
            </Button>
          </Button.Group>
          <div className="mt-4" />
          {!kadro.futbol && (
            <Button.Group fluid>
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: true, kadin: false });
                }}
              >
                Erkek
              </Button>
              <Button.Or />
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: false, kadin: true });
                }}
              >
                Kadın
              </Button>
            </Button.Group>
          )}

          <div className="mt-4 p-4" />
          {kadro.futbol && (
            <div>
              <h1 className="text-center"> FUTBOL OYUNCU İSTATİSTİĞİ</h1>
              <div className="space-x-20">
                <Dropdown placeholder="Maç" scrolling>
                  <Dropdown.Menu>
                    {futbolErkekFikstur.data.map((takim, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={handleFutbolOyuncuIstatistik}
                        value={takim.fiksturId}
                        name="macID"
                      >
                        ID: {takim.fiksturId} TAKIMLAR:
                        {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                        TARİH: {takim.fiksturTarih}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text="Oyuncu" scrolling>
                  <Dropdown.Menu>
                    {futbolErkekOyuncu.data.map((oyuncu, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={handleFutbolOyuncuIstatistik}
                        value={oyuncu.oyuncuId}
                        name="oyuncuID"
                      >
                        ID: {oyuncu.oyuncuId} Oyuncu:
                        {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Form
                onSubmit={handleFutbolOyuncuIstatistikSubmit}
                className="mt-10"
              >
                <label className="font-poppins text-lg">Fikstur ID: </label>
                <Form.Input
                  type="number"
                  name="macID"
                  value={macID}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Oyuncu ID:</label>
                <Form.Input
                  type="number"
                  name="oyuncuID"
                  value={oyuncuID}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">İlk 11:</label>
                <div className="mt-4 mb-4 space-x-10">
                  <Radio
                    label="Oynadı"
                    name="macIlk11"
                    value={true}
                    checked={futbolOyuncuIstatistik.macIlk11 === true}
                    onChange={handleFutbolOyuncuIstatistik}
                  />
                  <Radio
                    label="Oynamadı"
                    name="macIlk11"
                    value={false}
                    checked={futbolOyuncuIstatistik.macIlk11 === false}
                    onChange={handleFutbolOyuncuIstatistik}
                  />
                </div>
                <label className="font-poppins text-lg">Oynadığı Dakika:</label>
                <Form.Input
                  type="number"
                  name="macOynadigiDakika"
                  value={macOynadigiDakika}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Attığı Gol: </label>
                <Form.Input
                  type="number"
                  name="macAttigiGol"
                  value={macAttigiGol}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Yaptığı Asist:</label>
                <Form.Input
                  type="number"
                  name="macYaptigiAsist"
                  value={macYaptigiAsist}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Sarı Kart: </label>
                <Form.Input
                  type="number"
                  name="macGorduguSariKart"
                  value={macGorduguSariKart}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Kırmızı Kart:</label>
                <Form.Input
                  type="number"
                  name="macGorduguKirmiziKart"
                  value={macGorduguKirmiziKart}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <Form.Button
                  color="blue"
                  className="text-center"
                  content="Submit"
                />
              </Form>
            </div>
          )}
          {kadroCinsiyet.erkek && (
            <div>
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center">
                    ERKEK BASKETBOL OYUNCU İSTATİSTİĞİ
                  </h1>
                  <div className="space-x-20">
                    <Dropdown placeholder="Maç" scrolling>
                      <Dropdown.Menu>
                        {basketbolErkekFikstur.data.map((takim, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={takim.fiksturId}
                            name="basketbolMacID"
                          >
                            ID: {takim.fiksturId} TAKIMLAR:
                            {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                            TARİH: {takim.fiksturTarih}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text="Oyuncu" scrolling>
                      <Dropdown.Menu>
                        {basketbolErkekOyuncu.data.map((oyuncu, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={oyuncu.oyuncuId}
                            name="basketbolOyuncuID"
                          >
                            ID: {oyuncu.oyuncuId} Oyuncu:
                            {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Form
                    onSubmit={handleBasketbolErkekIstatistikSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacID"
                      value={basketbolMacID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Oyuncu ID:</label>
                    <Form.Input
                      type="number"
                      name="basketbolOyuncuID"
                      value={basketbolOyuncuID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSayi"
                      value={basketbolMacSayi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Asist: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacAsist"
                      value={basketbolMacAsist}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Hücum Ribaund:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacHucumRibaund"
                      value={basketbolMacHucumRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Savunma Ribaund:{" "}
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSavunmaRibaund"
                      value={basketbolMacSavunmaRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Blok:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacBlok"
                      value={basketbolMacBlok}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Çalma:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopCalma"
                      value={basketbolMacTopCalma}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Kaybı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopKaybi"
                      value={basketbolMacTopKaybi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
          {kadroCinsiyet.kadin && (
            <div>
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center">
                    {" "}
                    KADIN BASKETBOL OYUNCU İSTATİSTİĞİ{" "}
                  </h1>
                  <div className="space-x-20">
                    <Dropdown placeholder="Maç" scrolling>
                      <Dropdown.Menu>
                        {basketbolKadinFikstur.data.map((takim, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={takim.fiksturId}
                            name="basketbolMacID"
                          >
                            ID: {takim.fiksturId} TAKIMLAR:
                            {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                            TARİH: {takim.fiksturTarih}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text="Oyuncu" scrolling>
                      <Dropdown.Menu>
                        {basketbolKadinOyuncu.data.map((oyuncu, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={oyuncu.oyuncuId}
                            name="basketbolOyuncuID"
                          >
                            ID: {oyuncu.oyuncuId} Oyuncu:
                            {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Form
                    onSubmit={handleBasketbolKadinIstatistikSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacID"
                      value={basketbolMacID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Oyuncu ID:</label>
                    <Form.Input
                      type="number"
                      name="basketbolOyuncuID"
                      value={basketbolOyuncuID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSayi"
                      value={basketbolMacSayi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Asist: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacAsist"
                      value={basketbolMacAsist}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Hücum Ribaund:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacHucumRibaund"
                      value={basketbolMacHucumRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Savunma Ribaund:{" "}
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSavunmaRibaund"
                      value={basketbolMacSavunmaRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Blok:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacBlok"
                      value={basketbolMacBlok}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Çalma:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopCalma"
                      value={basketbolMacTopCalma}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Kaybı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopKaybi"
                      value={basketbolMacTopKaybi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
        </Tab.Pane>
      ),
    },
    {
      menuItem: "İstatistik Güncelle",
      render: () => (
        <Tab.Pane>
          <Button.Group fluid>
            <Button
              onClick={() => {
                setKadro({ basketbol: true, futbol: false, voleybol: false });
              }}
            >
              Basketbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: true, voleybol: false });
              }}
            >
              Futbol
            </Button>
          </Button.Group>
          <div className="mt-4" />
          {!kadro.futbol && (
            <Button.Group fluid>
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: true, kadin: false });
                }}
              >
                Erkek
              </Button>
              <Button.Or />
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: false, kadin: true });
                }}
              >
                Kadın
              </Button>
            </Button.Group>
          )}

          <div className="mt-4 p-4" />
          {kadro.futbol && (
            <div>
              <h1 className="text-center"> FUTBOL OYUNCU İSTATİSTİĞİ</h1>
              <div className="space-x-20">
                <Dropdown placeholder="Maç" scrolling>
                  <Dropdown.Menu>
                    {futbolErkekFikstur.data.map((takim, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={handleFutbolOyuncuIstatistik}
                        value={takim.fiksturId}
                        name="macID"
                      >
                        ID: {takim.fiksturId} TAKIMLAR:
                        {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                        TARİH: {takim.fiksturTarih}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown text="Oyuncu" scrolling>
                  <Dropdown.Menu>
                    {futbolErkekOyuncu.data.map((oyuncu, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={handleFutbolOyuncuIstatistik}
                        value={oyuncu.oyuncuId}
                        name="oyuncuID"
                      >
                        ID: {oyuncu.oyuncuId} Oyuncu:
                        {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Form
                onSubmit={handleFutbolOyuncuIstatistikGuncelleSubmit}
                className="mt-10"
              >
                <label className="font-poppins text-lg">Fikstur ID: </label>
                <Form.Input
                  type="number"
                  name="macID"
                  value={macID}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Oyuncu ID:</label>
                <Form.Input
                  type="number"
                  name="oyuncuID"
                  value={oyuncuID}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">İlk 11:</label>
                <div className="mt-4 mb-4 space-x-10">
                  <Radio
                    label="Oynadı"
                    name="macIlk11"
                    value={true}
                    checked={futbolOyuncuIstatistik.macIlk11 === true}
                    onChange={handleFutbolOyuncuIstatistik}
                  />
                  <Radio
                    label="Oynamadı"
                    name="macIlk11"
                    value={false}
                    checked={futbolOyuncuIstatistik.macIlk11 === false}
                    onChange={handleFutbolOyuncuIstatistik}
                  />
                </div>
                <label className="font-poppins text-lg">Oynadığı Dakika:</label>
                <Form.Input
                  type="number"
                  name="macOynadigiDakika"
                  value={macOynadigiDakika}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Attığı Gol: </label>
                <Form.Input
                  type="number"
                  name="macAttigiGol"
                  value={macAttigiGol}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Yaptığı Asist:</label>
                <Form.Input
                  type="number"
                  name="macYaptigiAsist"
                  value={macYaptigiAsist}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Sarı Kart: </label>
                <Form.Input
                  type="number"
                  name="macGorduguSariKart"
                  value={macGorduguSariKart}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <label className="font-poppins text-lg">Kırmızı Kart:</label>
                <Form.Input
                  type="number"
                  name="macGorduguKirmiziKart"
                  value={macGorduguKirmiziKart}
                  onChange={handleFutbolOyuncuIstatistik}
                />
                <Form.Button
                  color="blue"
                  className="text-center"
                  content="Submit"
                />
              </Form>
            </div>
          )}
          {kadroCinsiyet.erkek && (
            <div>
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center">
                    ERKEK BASKETBOL OYUNCU İSTATİSTİĞİ
                  </h1>
                  <div className="space-x-20">
                    <Dropdown placeholder="Maç" scrolling>
                      <Dropdown.Menu>
                        {basketbolErkekFikstur.data.map((takim, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={takim.fiksturId}
                            name="basketbolMacID"
                          >
                            ID: {takim.fiksturId} TAKIMLAR:
                            {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                            TARİH: {takim.fiksturTarih}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text="Oyuncu" scrolling>
                      <Dropdown.Menu>
                        {basketbolErkekOyuncu.data.map((oyuncu, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={oyuncu.oyuncuId}
                            name="basketbolOyuncuID"
                          >
                            ID: {oyuncu.oyuncuId} Oyuncu:
                            {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Form
                    onSubmit={handleBasketbolErkekIstatistikGuncelleSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacID"
                      value={basketbolMacID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Oyuncu ID:</label>
                    <Form.Input
                      type="number"
                      name="basketbolOyuncuID"
                      value={basketbolOyuncuID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSayi"
                      value={basketbolMacSayi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Asist: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacAsist"
                      value={basketbolMacAsist}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Hücum Ribaund:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacHucumRibaund"
                      value={basketbolMacHucumRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Savunma Ribaund:{" "}
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSavunmaRibaund"
                      value={basketbolMacSavunmaRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Blok:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacBlok"
                      value={basketbolMacBlok}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Çalma:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopCalma"
                      value={basketbolMacTopCalma}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Kaybı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopKaybi"
                      value={basketbolMacTopKaybi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
          {kadroCinsiyet.kadin && (
            <div>
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center">
                    {" "}
                    KADIN BASKETBOL OYUNCU İSTATİSTİĞİ{" "}
                  </h1>
                  <div className="space-x-20">
                    <Dropdown placeholder="Maç" scrolling>
                      <Dropdown.Menu>
                        {basketbolKadinFikstur.data.map((takim, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={takim.fiksturId}
                            name="basketbolMacID"
                          >
                            ID: {takim.fiksturId} TAKIMLAR:
                            {takim.fiksturEvSahibi} - {takim.fiksturDeplasman} -
                            TARİH: {takim.fiksturTarih}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown text="Oyuncu" scrolling>
                      <Dropdown.Menu>
                        {basketbolKadinOyuncu.data.map((oyuncu, index) => (
                          <Dropdown.Item
                            key={index}
                            onClick={handleBasketbolOyuncuIstatistik}
                            value={oyuncu.oyuncuId}
                            name="basketbolOyuncuID"
                          >
                            ID: {oyuncu.oyuncuId} Oyuncu:
                            {oyuncu.oyuncuAdi} {oyuncu.oyuncuSoyAdi}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Form
                    onSubmit={handleBasketbolKadinIstatistikGuncelleSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Fikstur ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacID"
                      value={basketbolMacID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Oyuncu ID:</label>
                    <Form.Input
                      type="number"
                      name="basketbolOyuncuID"
                      value={basketbolOyuncuID}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSayi"
                      value={basketbolMacSayi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Asist: </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacAsist"
                      value={basketbolMacAsist}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Hücum Ribaund:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacHucumRibaund"
                      value={basketbolMacHucumRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">
                      Savunma Ribaund:{" "}
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolMacSavunmaRibaund"
                      value={basketbolMacSavunmaRibaund}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Blok:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacBlok"
                      value={basketbolMacBlok}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Çalma:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopCalma"
                      value={basketbolMacTopCalma}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <label className="font-poppins text-lg">Top Kaybı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolMacTopKaybi"
                      value={basketbolMacTopKaybi}
                      onChange={handleBasketbolOyuncuIstatistik}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
        </Tab.Pane>
      ),
    }
  ];

  const panesUsers = [
    {
      menuItem: "Kullanıcılar",
      render: () => (
        <div>
          <Card.Group className="p-4">
            {users.data.map((user, index) => (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>
                    {user.firstName} {user.lastName}
                  </Card.Header>
                  <Card.Meta>{user.userName}</Card.Meta>
                  <Card.Description>
                    <div>{user.email}</div>
                    <div>{user.userKayitTarihi}</div>
                    <div>
                      {!user.userBanned ? (
                        <Label attached="top right" color="green">
                          Aktif
                        </Label>
                      ) : (
                        <Label attached="top right" color="red">
                          Banlandı
                        </Label>
                      )}
                    </div>
                    <div className="mt-4 text-center">
                      <Button
                        negative
                        onClick={() => handleUserBan(user.userId)}
                      >
                        Banla
                      </Button>{" "}
                      <Button
                        positive
                        onClick={() => handleUserBanAc(user.userId)}
                      >
                        Ban Aç
                      </Button>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      ),
    },
    {
      menuItem: "Adminler",
      render: () => (
        <div>
          <Card.Group className="p-4">
            {admins.data.map((user, index) => (
              <Card key={index}>
                <Card.Content>
                  <Card.Header>
                    {user.firstName} {user.lastName}
                  </Card.Header>
                  <Card.Meta>{user.userName}</Card.Meta>
                  <Card.Description>
                    <div>{user.email}</div>
                    <div>{user.userKayitTarihi}</div>
                    <div>
                      {!user.userBanned ? (
                        <Label attached="top right" color="green">
                          Aktif
                        </Label>
                      ) : (
                        <Label attached="top right" color="red">
                          Banlandı
                        </Label>
                      )}
                    </div>
                    <div className="mt-4 text-center">
                      <Button
                        negative
                        onClick={() => handleUserBan(user.userId)}
                      >
                        Banla
                      </Button>{" "}
                      <Button
                        positive
                        onClick={() => handleUserBanAc(user.userId)}
                      >
                        Ban Aç
                      </Button>
                    </div>
                  </Card.Description>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </div>
      ),
    },
  ];
  const panesPuanDurumu = [
    {
      menuItem: "Puan Durumu Güncelle",
      render: () => (
        <Tab.Pane>
          <Button.Group fluid>
            <Button
              onClick={() => {
                setKadro({ basketbol: true, futbol: false, voleybol: false });
              }}
            >
              Basketbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: true, voleybol: false });
              }}
            >
              Futbol
            </Button>
            <Button.Or />
            <Button
              onClick={() => {
                setKadro({ basketbol: false, futbol: false, voleybol: true });
              }}
            >
              Voleybol
            </Button>
          </Button.Group>
          <div className="mt-4" />
          {!kadro.futbol && (
            <Button.Group fluid>
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: true, kadin: false });
                }}
              >
                Erkek
              </Button>
              <Button.Or />
              <Button
                onClick={() => {
                  setKadroCinsiyet({ erkek: false, kadin: true });
                }}
              >
                Kadın
              </Button>
            </Button.Group>
          )}

          <div className="mt-4" />

          {kadroCinsiyet.erkek && (
            <div>
              {kadro.futbol && (
                <div>
                  <h1 className="text-center"> FUTBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {futbolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleFutbolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="takimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFutbolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="takimID"
                      value={takimID}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="takimGalibiyet"
                      value={takimGalibiyet}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Beraberlik:</label>
                    <Form.Input
                      type="number"
                      name="takimBeraberlik"
                      value={takimBeraberlik}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="takimMaglubiyet"
                      value={takimMaglubiyet}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Atılan Gol:</label>
                    <Form.Input
                      type="number"
                      name="takimAtilanGol"
                      value={takimAtilanGol}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Yenilen Gol:</label>
                    <Form.Input
                      type="number"
                      name="takimYenilenGol"
                      value={takimYenilenGol}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center"> ERKEK BASKETBOL </h1>
                  <Dropdown text="Maç" scrolling>
                    <Dropdown.Menu>
                      {erkekBasketbolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleBasketbolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="basketbolTakimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleErkekBasketbolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimID"
                      value={basketbolTakimID}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimGalibiyet"
                      value={basketbolTakimGalibiyet}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimMaglubiyet"
                      value={basketbolTakimMaglubiyet}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Atılan Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimAtilanSayi"
                      value={basketbolTakimAtilanSayi}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">
                      Yenilen Sayı:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimYenilenSayi"
                      value={basketbolTakimYenilenSayi}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.voleybol && (
                <div>
                  <h1 className="text-center"> ERKEK VOLEYBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {erkekVoleybolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleVoleybolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="voleybolTakimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleErkekVoleybolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimID"
                      value={voleybolTakimID}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimGalibiyet"
                      value={voleybolTakimGalibiyet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimMaglubiyet"
                      value={voleybolTakimMaglubiyet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Attığı Sayı:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimAldigiSayi"
                      value={voleybolTakimAldigiSayi}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">
                      Verdiği Sayı:
                    </label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimVerdigiSayi"
                      value={voleybolTakimVerdigiSayi}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Aldığı Set:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimAldigiSet"
                      value={voleybolTakimAldigiSet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Verdiği Set:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimVerdigiSet"
                      value={voleybolTakimVerdigiSet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Puan:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimPuan"
                      value={voleybolTakimPuan}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
          {kadroCinsiyet.kadin && (
            <div>
              {kadro.futbol && (
                <div>
                  <h1 className="text-center"> FUTBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {futbolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleFutbolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="takimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleFutbolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="takimID"
                      value={takimID}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="takimGalibiyet"
                      value={takimGalibiyet}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Beraberlik:</label>
                    <Form.Input
                      type="number"
                      name="takimBeraberlik"
                      value={takimBeraberlik}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="takimMaglubiyet"
                      value={takimMaglubiyet}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Atılan Gol:</label>
                    <Form.Input
                      type="number"
                      name="takimAtilanGol"
                      value={takimAtilanGol}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Yenilen Gol:</label>
                    <Form.Input
                      type="number"
                      name="takimYenilenGol"
                      value={takimYenilenGol}
                      onChange={handleFutbolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.basketbol && (
                <div>
                  <h1 className="text-center"> KADIN BASKETBOL </h1>
                  <Dropdown text="Maç" scrolling>
                    <Dropdown.Menu>
                      {kadinBasketbolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleBasketbolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="basketbolTakimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleKadinBasketbolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimID"
                      value={basketbolTakimID}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimGalibiyet"
                      value={basketbolTakimGalibiyet}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimMaglubiyet"
                      value={basketbolTakimMaglubiyet}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Atılan Sayı:</label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimAtilanSayi"
                      value={basketbolTakimAtilanSayi}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">
                      Yenilen Sayı:
                    </label>
                    <Form.Input
                      type="number"
                      name="basketbolTakimYenilenSayi"
                      value={basketbolTakimYenilenSayi}
                      onChange={handleBasketbolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
              {kadro.voleybol && (
                <div>
                  <h1 className="text-center"> KADIN VOLEYBOL </h1>
                  <Dropdown text="Maç">
                    <Dropdown.Menu>
                      {kadinVoleybolPuanDurumu.data.map((takim, index) => (
                        <Dropdown.Item
                          key={index}
                          onClick={handleVoleybolPuanDurumu}
                          value={takim.puanDurumuId}
                          name="voleybolTakimID"
                        >
                          {takim.takim}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                  <Form
                    onSubmit={handleKadinVoleybolPuanDurumuSubmit}
                    className="mt-10"
                  >
                    <label className="font-poppins text-lg">Takım ID: </label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimID"
                      value={voleybolTakimID}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Galibiyet:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimGalibiyet"
                      value={voleybolTakimGalibiyet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Mağlubiyet:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimMaglubiyet"
                      value={voleybolTakimMaglubiyet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Attığı Sayı:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimAldigiSayi"
                      value={voleybolTakimAldigiSayi}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">
                      Verdiği Sayı:
                    </label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimVerdigiSayi"
                      value={voleybolTakimVerdigiSayi}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Aldığı Set:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimAldigiSet"
                      value={voleybolTakimAldigiSet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Verdiği Set:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimVerdigiSet"
                      value={voleybolTakimVerdigiSet}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <label className="font-poppins text-lg">Puan:</label>
                    <Form.Input
                      type="number"
                      name="voleybolTakimPuan"
                      value={voleybolTakimPuan}
                      onChange={handleVoleybolPuanDurumu}
                    />
                    <Form.Button
                      color="blue"
                      className="text-center"
                      content="Submit"
                    />
                  </Form>
                </div>
              )}
            </div>
          )}
        </Tab.Pane>
      ),
    },
  ];
  const handleUserBan = async (e) => {
      let type,
        data = { userId: e, type: "postUserBanla" };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success && (console.log(result), router.replace(router.asPath));
      } catch (err) {
        console.log(err);
      }
    },
    handleUserBanAc = async (e) => {
      let type,
        data = { userId: e, type: "postUserBanAc" };
      const postApi = await fetch("/api/api/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((error) => {
        console.log(error);
      });
      try {
        let result = await postApi.json();
        result.success && (console.log(result), router.replace(router.asPath));
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <Layout>
      <div>
        <main>
          {!admin ? (
            <div className="h-screen flex flex-wrap justify-center items-center">
              <div>
                <h2 className="text-center">BURAYA GİRME YETKİNİZ YOK !</h2>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-12">
              <div className="bg-blue col-span-2">
                <Menu vertical borderless fluid stackable>
                  <Menu.Item
                    name="haberler"
                    active={stateActive === "haberler"}
                    onClick={handleItemClick}
                  >
                    Haberler
                  </Menu.Item>

                  <Menu.Item
                    name="fiksturler"
                    active={stateActive === "fiksturler"}
                    onClick={handleItemClick}
                  >
                    Fiksturler
                  </Menu.Item>

                  <Menu.Item
                    name="oyuncuistatistikleri"
                    active={stateActive === "oyuncuistatistikleri"}
                    onClick={handleItemClick}
                  >
                    Oyuncu İstatistikleri
                  </Menu.Item>
                  <Menu.Item
                    name="üyeler"
                    active={stateActive === "üyeler"}
                    onClick={handleItemClick}
                  >
                    Üyeler
                  </Menu.Item>
                  <Menu.Item
                    name="puanDurumu"
                    active={stateActive === "puanDurumu"}
                    onClick={handleItemClick}
                  >
                    Puan Durumu
                  </Menu.Item>
                </Menu>
                )
              </div>
              <div className="col-span-10">
                {stateActive == "haberler" && (
                  <div className="p-4">
                    <Tab panes={panesHaberler} />
                  </div>
                )}
                {stateActive == "fiksturler" && (
                  <div className="p-4">
                    <Tab panes={panesFiksturler} />
                  </div>
                )}
                {stateActive == "oyuncuistatistikleri" && (
                  <div className="p-4">
                    <Tab panes={panesOyuncuIstatistikleri} />
                  </div>
                )}
                {stateActive == "üyeler" && (
                  <div className="p-4">
                    <Tab panes={panesUsers} />
                  </div>
                )}
                {stateActive == "puanDurumu" && (
                  <div className="p-4">
                    <Tab panes={panesPuanDurumu} />
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { req: req } = context,
    { origin: origin } = absoluteUrl(req),
    baseApiUrl = `/api`,
    { token: token } = getAppCookies(req),
    profile = token ? verifyToken(token.split(" ")[1]) : "";

  const [
      futbolErkekFiksturRes,
      basketbolErkekFiksturRes,
      basketbolKadinFiksturRes,
      voleybolErkekFiksturRes,
      voleybolKadinFiksturRes,
      futbolErkekOyuncuRes,
      basketbolErkekOyuncuRes,
      basketbolKadinOyuncuRes,
      usersRes,
      adminsRes,
      erkekBasketbolPuanDurumuRes,
      kadinBasketbolPuanDurumuRes,
      erkekVoleybolPuanDurumuRes,
      kadinVoleybolPuanDurumuRes,
      futbolPuanDurumuRes,
    ] = await Promise.all([
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=1&fiksturKategoriId=2"
      ),
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=1&fiksturKategoriId=1"
      ),
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=2&fiksturKategoriId=1"
      ),
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=1&fiksturKategoriId=3"
      ),
      fetch(
        "http://localhost:8080/api/fikstur/fikstur-tumunu-getir?fiksturCinsiyetId=2&fiksturKategoriId=3"
      ),
      fetch("http://localhost:8080/api/oyuncular/futbol-erkek-getir"),
      fetch("http://localhost:8080/api/oyuncular/basketbol-erkek-getir"),
      fetch("http://localhost:8080/api/oyuncular/basketbol-kadin-getir"),
      fetch("http://localhost:8080/api/kullanicilar/role-gore-getir?roleId=2"),
      fetch("http://localhost:8080/api/kullanicilar/role-gore-getir?roleId=1"),
      fetch(
        "http://localhost:8080/api/puandurumu/basketbol-erkek-puandurumu-getir"
      ),
      fetch(
        "http://localhost:8080/api/puandurumu/basketbol-kadin-puandurumu-getir"
      ),
      fetch(
        "http://localhost:8080/api/puandurumu/voleybol-erkek-puandurumu-getir"
      ),
      fetch(
        "http://localhost:8080/api/puandurumu/voleybol-kadin-puandurumu-getir"
      ),
      fetch("http://localhost:8080/api/puandurumu/puandurumugetir"),
    ]),
    [
      futbolErkekFikstur,
      basketbolErkekFikstur,
      basketbolKadinFikstur,
      voleybolErkekFikstur,
      voleybolKadinFikstur,
      futbolErkekOyuncu,
      basketbolErkekOyuncu,
      basketbolKadinOyuncu,
      users,
      admins,
      erkekBasketbolPuanDurumu,
      kadinBasketbolPuanDurumu,
      erkekVoleybolPuanDurumu,
      kadinVoleybolPuanDurumu,
      futbolPuanDurumu,
    ] = await Promise.all([
      futbolErkekFiksturRes.json(),
      basketbolErkekFiksturRes.json(),
      basketbolKadinFiksturRes.json(),
      voleybolErkekFiksturRes.json(),
      voleybolKadinFiksturRes.json(),
      futbolErkekOyuncuRes.json(),
      basketbolErkekOyuncuRes.json(),
      basketbolKadinOyuncuRes.json(),
      usersRes.json(),
      adminsRes.json(),
      erkekBasketbolPuanDurumuRes.json(),
      kadinBasketbolPuanDurumuRes.json(),
      erkekVoleybolPuanDurumuRes.json(),
      kadinVoleybolPuanDurumuRes.json(),
      futbolPuanDurumuRes.json(),
    ]);

  return {
    props: {
      profile: profile,
      futbolErkekFikstur: futbolErkekFikstur,
      basketbolErkekFikstur: basketbolErkekFikstur,
      basketbolKadinFikstur: basketbolKadinFikstur,
      voleybolErkekFikstur: voleybolErkekFikstur,
      voleybolKadinFikstur: voleybolKadinFikstur,
      futbolErkekOyuncu: futbolErkekOyuncu,
      basketbolErkekOyuncu: basketbolErkekOyuncu,
      basketbolKadinOyuncu: basketbolKadinOyuncu,
      users: users,
      admins: admins,
      erkekBasketbolPuanDurumu: erkekBasketbolPuanDurumu,
      kadinBasketbolPuanDurumu: kadinBasketbolPuanDurumu,
      erkekVoleybolPuanDurumu: erkekVoleybolPuanDurumu,
      kadinVoleybolPuanDurumu: kadinVoleybolPuanDurumu,
      futbolPuanDurumu: futbolPuanDurumu,
    },
  };
}
