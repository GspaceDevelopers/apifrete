const express = require("express");
const bodyParser = require("body-parser");
import {
  calcularPrecoPrazo,
} from 'correios-brasil';
const app = express();
app.use(bodyParser.json());

app.post("/frete", (req, res) => {

  const { ceporigem, cepdestino } = req.body
  let args = {
    // Não se preocupe com a formatação dos valores de entrada do cep, qualquer uma será válida (ex: 21770-200, 21770 200, 21asa!770@###200 e etc),
    sCepOrigem: ceporigem,
    sCepDestino: cepdestino,
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '1',
    nVlAltura: '1',
    nVlLargura: '1',
    nCdServico: ['04014', '04510'], //Array com os códigos de serviço
    nVlDiametro: '0',
  };

  calcularPrecoPrazo(args).then(response => {
    console.log(response);

    return res.json(response)
  });

})
app.listen(3333 || process.env.PORT, () => {
  console.log("A API de consulta de preço de frete está rodando na porta 3333.");
});
