import axios from "axios";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { method } = req;
    try {
      switch (method) {
        case "POST":
          const {
            email,
            password,
            passwordRep,
            lastName,
            firstName,
            userName,
          } = req.body;
          const sonEmail = encodeURI(email),
            sonPassword = encodeURI(password),
            sonPasswordRep = encodeURI(passwordRep),
            sonLastName = encodeURI(lastName),
            sonFirstName = encodeURI(firstName),
            sonUserName = encodeURI(userName);
          return axios({
            method: "POST",
            headers: { "Content-Type": "application/json" },
            url: `http://localhost:8080/api/kullanicilar/kullaniciekle?email=${sonEmail}&firstName=${sonFirstName}&lastName=${sonLastName}&password=${sonPassword}&passwordRep=${sonPasswordRep}&userName=${sonUserName}`,
          })
            .then((results) => {
              console.log(results.data);
              if (results.data.success) {
                res.status(200).json(results.data);
              } else {
                res.status(200).json(results.data);
              }
            })
            .catch((error) => {
              console.log(error);
              res.status(500).json(error.response.data);
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
