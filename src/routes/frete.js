const express = require("express");
const router = express.Router();
const ApiNodeCorreios = require("node-correios");
import cors from "cors";
const correios = new ApiNodeCorreios();

router.post("/frete", (request, response) => {
  const {
    nCdServico,
    sCepOrigem,
    sCepDestino,
    nVlPeso,
    nCdFormato,
    nVlComprimento,
    nVlAltura,
    nVlLargura,
    nVlDiametro,
  } = request.body;

  correios
    .calcPreco({
      nCdServico: "04510",
      sCepOrigem: "28660000",
      sCepDestino: 1,
      nVlPeso: 1,
      nCdFormato: 1,
      nVlComprimento: 1,
      nVlAltura: 1,
      nVlLargura: 1,
      nVlDiametro: 1,
    })
    .then((result) => {
      return response.json(result);
    })
    .catch((error) => {
      return response.json(error);
    });
});

module.exports = router;
