import axios from "axios";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { method } = req;
    try {
      switch (method) {
        case "POST":
          /* Get Post Data */
          const { eskiSifre, eskiSifreRep, yeniSifre, yeniSifreRep, userName } =
            req.body;
            const sonEskiSifre = encodeURI(eskiSifre),
            sonEskiSifreRep =  encodeURI(eskiSifreRep),
            sonYeniSifre =  encodeURI(yeniSifre),
            sonYeniSifreRep =  encodeURI(yeniSifreRep),
            sonUserName =  encodeURI(userName);
          return axios({
            method: "PATCH",
            headers: { "Content-Type": "application/json", Accept: 'application/json' },
            url: `http://localhost:8080/api/kullanicilar/sifre-guncelleme?changedPassword=${sonYeniSifre}&changedPasswordRep=${sonYeniSifreRep}&password=${sonEskiSifre}&passwordRep=${sonEskiSifreRep}&userName=${sonUserName}`,
          })
            .then((results) => {
              console.log(results.data);
              return res.status(results.status).json(results.data);
            })
            .catch((error) => {
              console.log(error);
              return res.status(500).json(error.response.data);
            });

          break;
        case "PUT":
          break;
        case "PATCH":
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
