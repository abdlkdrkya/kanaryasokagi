import axios from "axios";

export default (req, res) => {
  return new Promise((resolve, reject) => {
    const { method } = req;
    console.log(method);
    try {
      switch (method) {
        case "GET":
          axios({
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            url: `http://localhost:8080/api/haberler/getByHaberKategori?categoryId=1`,
          })
            .then((results) => {
              return res.status(results.status).json(results.data);
            })
            .catch((error) => {
              return res.status(error.status).json(error.response.data);
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
