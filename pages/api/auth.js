import jwt from "jsonwebtoken";
import axios from "axios";

const KEY = process.env.JWT_KEY;
/* Users collection sample */

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { method } = req;
	  console.log(method)
    try {
      switch (method) {
        case "POST":
          /* Get Post Data */
			   console.log(req.body)
          const { email, password } = req.body;
          const sonEmail = encodeURI(email),
          sonPassword = encodeURI(password);
			 
          /* Any how email or password is blank */
          if (!email || !password) {
            return res.status(400).json({
              success: false,
              message: "Kullanıcı adı veya şifre girilmeli!",
            });
          }

          axios({
            method: 'GET',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            url: `http://localhost:8080/api/kullanicilar/kullanici?userEmail=${sonEmail}`,
          })
            .then((results) => {
              if (results.data.success) {
                axios({
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                  url: `http://localhost:8080/api/kullanicilar/giris?email=${sonEmail}&password=${sonPassword}`,
                })
                  .then((sonuc) => {
                    if (sonuc.data.success) {
                      const payload = {
                        id: sonuc.data.data.userId,
                        email: sonuc.data.data.email,
                        username: sonuc.data.data.userName,
                        firstname: sonuc.data.data.firstName,
                        lastname: sonuc.data.data.lastName,
                        roleId: sonuc.data.data.role.roleId,
                        createdAt: sonuc.data.data.userKayitTarihi,
                        profile: sonuc.data.data.profile,
                        isBanned: sonuc.data.data.userBanned,
                      };
                      jwt.sign(
                        payload,
                        KEY,
                        {
                          expiresIn: 31556926, // 1 year in seconds
                        },
                        (err, token) => {
                          return res
                            .status(200)
                            .json({
                              success: true,
                              token: "Bearer " + token,
                            })
                            .end();
                        }
                      );
                    } else {
						
                     return res.status(sonuc.status).json(sonuc.data);
                    }
                  })
                  .catch((error) => {
                    res.status(error.status).json(error.response.data);
                  });
              } else {
                res.status(results.status).json(results.data);
              }
            })
            .catch((error) => {
              res.status(error.status).json(error.response.data);
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
